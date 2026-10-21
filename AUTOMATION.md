# Writing → profile refresh

The two repositories share a weekly cadence (Asia/Seoul):

| Time | Repository | Work |
| --- | --- | --- |
| Monday 09:17 | uiwwsw.github.io | Collect Velog list and article bodies; validate, commit and deploy only changed content. |
| Monday 09:47 | uiwwsw | Confirm the current week's source refresh succeeded, then read the published writing archive and refresh both profile languages, pins and released products. |

The profile checks the public workflow API before generating anything on scheduled runs. It waits up to 30 minutes for a missing/queued/running source refresh or temporary API failures. A failed/cancelled source run stops it immediately; old-week success never qualifies. No source success means the profile remains unchanged and the Actions run reports failure. GitHub schedules may be delayed or dropped, so these are target times rather than guaranteed publication times.

Weekly collection keeps normal freshness within roughly a week without repeatedly scraping every article or polling the site every six hours. Existing HTTP retries, conditional article requests and fail-before-overwrite safeguards remain in place. There are no new cross-repository secrets. The source workflow retains its `monthly-update.yml` filename for compatibility but is now named **Weekly Data Update**.

For an urgent article, run **Weekly Data Update** in `uiwwsw/uiwwsw.github.io`, wait for success including Pages deployment, then run **Update Profile Content** here. The profile's manual and code-push runs use the currently published archive without waiting for a weekly source refresh, so profile-only edits and pin updates remain available. Manual source runs do not automatically trigger the other repository. Content changes alone cause README commits; no-change runs do not create commits.

If the weekly refresh fails, rerun the source job after fixing it, then manually run the profile workflow. The source and profile workflows are serialized within their respective repositories to prevent overlapping writers. The profile's runtime fetch retries also cover temporary archive request failures after a successful source deployment.
