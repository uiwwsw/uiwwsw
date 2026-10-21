const { setTimeout: delay } = require('node:timers/promises');

const RUNS_URL = 'https://api.github.com/repos/uiwwsw/uiwwsw.github.io/actions/workflows/monthly-update.yml/runs?branch=main&per_page=20';

// Anchor to the source schedule, even if GitHub starts this job late.
function weeklyRefreshStart(now) {
    const date = new Date(now);
    date.setUTCHours(0, 17, 0, 0);
    date.setUTCDate(date.getUTCDate() - (date.getUTCDay() + 6) % 7);
    if (date > now) date.setUTCDate(date.getUTCDate() - 7);
    return date;
}

function refreshState(payload, since) {
    if (!Array.isArray(payload.workflow_runs)) throw new Error('Invalid writing workflow response');
    const run = payload.workflow_runs
        .filter((item) => item.head_branch === 'main'
            && ['schedule', 'workflow_dispatch'].includes(item.event)
            && Date.parse(item.created_at) >= since.getTime())
        .sort((a, b) => Date.parse(b.created_at) - Date.parse(a.created_at))[0];
    if (!run || run.status !== 'completed') return { ready: false };
    if (run.conclusion !== 'success') {
        throw new Error(`Writing refresh ${run.conclusion}: ${run.html_url}. Rerun it successfully before updating the profile.`);
    }
    return { ready: true, url: run.html_url };
}

async function waitForWriting({
    fetchImpl = fetch, sleep = delay, now = () => new Date(),
    maxWaitMs = 30 * 60 * 1000,
} = {}) {
    const started = now();
    const since = weeklyRefreshStart(started);
    const deadline = started.getTime() + maxWaitMs;
    while (true) {
        let payload;
        try {
            const response = await fetchImpl(RUNS_URL, {
                headers: { Accept: 'application/vnd.github+json', 'User-Agent': 'uiwwsw-profile-sync' },
                signal: AbortSignal.timeout(20000),
            });
            if (!response.ok) throw new Error(`GitHub workflow API returned ${response.status}`);
            payload = await response.json();
        } catch (error) {
            console.warn(`Cannot check writing refresh: ${error.message}`);
        }
        if (payload) {
            const state = refreshState(payload, since);
            if (state.ready) {
                console.log(`Writing refresh succeeded: ${state.url}`);
                return state;
            }
        }
        const remaining = deadline - now().getTime();
        if (remaining <= 0) throw new Error('No successful current-week writing refresh within 30 minutes. Profile left unchanged.');
        console.log('Waiting for the current-week writing refresh and deployment...');
        await sleep(Math.min(60000, remaining));
    }
}

if (require.main === module) {
    waitForWriting().catch((error) => { console.error(error.message); process.exitCode = 1; });
}
module.exports = { weeklyRefreshStart, refreshState, waitForWriting };
