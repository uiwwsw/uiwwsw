const test = require('node:test');
const assert = require('node:assert/strict');
const { weeklyRefreshStart, refreshState, waitForWriting } = require('./wait-for-writing');
const monday = new Date('2026-10-26T00:17:00Z');
const run = { head_branch: 'main', event: 'schedule', created_at: monday.toISOString(), status: 'completed', conclusion: 'success', html_url: 'https://github.com/example/run' };

test('weekly boundary follows Monday 09:17 KST, including delayed and early runs', () => {
    assert.equal(weeklyRefreshStart(new Date('2026-10-26T00:47:00Z')).toISOString(), monday.toISOString());
    assert.equal(weeklyRefreshStart(new Date('2026-11-01T23:00:00Z')).toISOString(), monday.toISOString());
    assert.equal(weeklyRefreshStart(new Date('2026-10-26T00:16:00Z')).toISOString(), '2026-10-19T00:17:00.000Z');
});

test('only a current-week main refresh qualifies; latest failed or pending run blocks old success', () => {
    assert.equal(refreshState({ workflow_runs: [run] }, monday).ready, true);
    for (const override of [{ created_at: '2026-10-19T00:17:00Z' }, { head_branch: 'feature' }, { event: 'push' }, { status: 'in_progress' }]) {
        assert.equal(refreshState({ workflow_runs: [{ ...run, ...override }] }, monday).ready, false);
    }
    const newer = { ...run, created_at: '2026-10-26T00:20:00Z', conclusion: 'failure' };
    assert.throws(() => refreshState({ workflow_runs: [run, newer] }, monday), /failure/);
    assert.equal(refreshState({ workflow_runs: [run, { ...newer, status: 'queued' }] }, monday).ready, false);
    assert.throws(() => refreshState({}, monday), /Invalid/);
});

test('waits through transient API failure and queued deployment before success', async () => {
    let calls = 0;
    let time = monday.getTime() + 30 * 60000;
    await waitForWriting({
        now: () => new Date(time), sleep: async (ms) => { time += ms; },
        fetchImpl: async () => {
            calls++;
            if (calls === 1) throw new Error('network reset');
            return Response.json({ workflow_runs: [{ ...run, status: calls === 2 ? 'in_progress' : 'completed' }] });
        },
    });
    assert.equal(calls, 3);
});

test('missing or failed upstream never allows a profile write', async () => {
    let time = monday.getTime() + 30 * 60000;
    const options = { now: () => new Date(time), sleep: async (ms) => { time += ms; }, maxWaitMs: 60000 };
    await assert.rejects(waitForWriting({ ...options, fetchImpl: async () => Response.json({ workflow_runs: [] }) }), /unchanged/);
    await assert.rejects(waitForWriting({ ...options, fetchImpl: async () => Response.json({ workflow_runs: [{ ...run, conclusion: 'failure' }] }) }), /failure/);
});
