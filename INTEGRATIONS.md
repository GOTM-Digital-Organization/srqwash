# SRQ Wash — GitHub & Netlify Integration Guide

## Authoritative resources

| Resource | Approved value | Purpose |
|---|---|---|
| Source repository | [GOTM-Digital-Organization/srqwash](https://github.com/GOTM-Digital-Organization/srqwash) | Durable source code repository |
| Source branch | `main` | Authoritative branch for production-ready code |
| Netlify project | [srqwash](https://app.netlify.com/projects/srqwash) | Existing production hosting project |
| Netlify site ID | `86ce2524-5d27-44c0-a418-4e5b545fe1a5` | Immutable identifier for the existing Netlify project |
| Production domain | [https://srqwash.com](https://srqwash.com) | Public website |
| Main branch preview | [https://main--srqwash.netlify.app](https://main--srqwash.netlify.app) | Netlify branch deployment URL |

## Confirmed integration state

On September 1, 2026, the Manus project was fast-forwarded from commit `1b94d25` to GitHub `main` commit `4cabfb8`. This was a non-destructive update: GitHub `main` contained the full existing Manus history plus three newer commits that added the Netlify SPA fallback, Netlify-hosted image assets, and the `/lakewood-ranch-pressure-washing-lp` Google Ads landing page.

The production domain serves that landing page, confirming the current GitHub `main` content is reaching the existing Netlify production site. Do not rename, replace, delete, or recreate the repository, Netlify project, `srqwash.com`, `www.srqwash.com`, or DNS records.

## Future release workflow

1. **Start from GitHub `main`.** Before any Manus code change, fetch the `github` remote and fast-forward local `main`. Do not begin work from a stale local branch.
2. **Make and test the change.** Preserve all existing service, area, neighborhood, redirect, sitemap, metadata, and structured-data routes. Run `pnpm test` and `pnpm build` before release.
3. **Save a Manus checkpoint.** The checkpoint provides a recoverable version of the Manus project.
4. **Review the final diff.** Confirm only intended files changed and that the `_redirects` SPA fallback remains present for Netlify deep links.
5. **Push only approved changes to GitHub `main`.** Use the configured `github` remote; do not replace the internal Manus `origin` remote.
6. **Let Netlify publish automatically.** The production path is GitHub `main` to the existing `srqwash` Netlify project. Do not manually deploy, recreate the site, alter domains, or change DNS as part of ordinary releases.
7. **Verify production.** After the deployment completes, check both the homepage and one affected deep link on `https://srqwash.com`.

## Google Ads and GA4 conversion tracking

| Item | Approved configuration | Implementation |
|---|---|---|
| Google Ads destination | `AW-10941454860` — active SRQ Wash account | Shared Google tag in `client/index.html` |
| Google Analytics destination | `G-G4RHGB5FV6` — SRQWash Website stream | Shared Google tag in `client/index.html` |
| Quote-form conversion | `AW-10941454860/dJqACPnlgewcEIy0peEo` | Fires only after `trpc.contact.submit` succeeds on the Contact, roof-cleaning, and multi-service landing-page forms |
| Website-call conversion | `AW-10941454860/CqIfCPzlgewcEIy0peEo` | Google forwarding-number configuration for the displayed phone number `(941) 400-4496` |

On September 1, 2026, the active SRQ Wash Google Ads account received two new primary website conversion actions: **Submit lead form** and **Call**. The lead conversion is intentionally triggered only after the server accepts a quote request, which prevents page views and failed submissions from being counted as leads. The phone configuration is intentionally a Google forwarding-number measurement, which captures completed Google Ads-attributed calls instead of merely counting phone-link taps. On September 29, the website source and the website-call configuration were changed to the new public number, `(941) 400-4496`; an independent post-save Google Ads readback is still a planned verification step.

Do not replace these settings with the removed **Click to call** action or with Google-hosted lead-form actions. Keep the three `gtag("config", ...)` calls in `client/index.html` together so the Google Ads, GA4, and forwarding-number configurations all load across every public route.

Google Tag Assistant independently verified the production `https://srqwash.com` homepage on September 1, 2026. It identified the **SRQWash Website** on-page Google tag, confirmed the `G-G4RHGB5FV6` GA4 destination and both Google Ads destinations, including `AW-10941454860`, and recorded page-view plus remarketing hits. Google Ads Diagnostics was not available in the connected browser because it reported an ad-blocker warning, but the independent production validation confirms the tag is loading and sending hits correctly.

## Google Ads campaign launch safeguard

| Item | Verified configuration |
|---|---|
| Campaign | **srqwash manus 1** (`24203417267`) |
| Status | **Enabled; Eligible (Limited)** with $0.00 recorded cost in the August 3–September 1, 2026 reporting view |
| Average daily budget | $51.01/day |
| Hours and service locations | Monday–Saturday, 7:00 AM–7:00 PM Eastern; Bradenton, Lakewood Ranch, Sarasota, and Venice; presence or interest targeting for seasonal homeowners (manually confirmed by Tom on September 2, 2026) |
| Campaign-specific bidding goals | Website source for Submit lead forms; Website and 30-second Calls from Ads sources for Phone call leads |
| Excluded campaign bidding source | Google-hosted lead form |
| Search safeguards | Four service-specific ad groups, 52 enabled exact/phrase keywords, 48 broad campaign-level negatives, Search Partners and Display off |
| Landing-page mapping | Roof group → `/sarasota-roof-cleaning-lp`; House Washing, Pool Cage & Lanai, and Driveway & Concrete → `/lakewood-ranch-pressure-washing-lp` |
| Direct-call asset | Historical campaign-level `(941) 229-2355` call asset linked to the 30-second `Calls from Smart Campaign Ads` action; pending/review state was last recorded before the phone migration. It is **not** verified to route to `(941) 400-4496`. |
| Ad status | Roof RSA was previously Average strength; monitor all ads and the new call asset for current review status while the campaign is live |

The campaign was changed from account-default conversion goals to **campaign-specific** goals. It uses Website form submissions, Website forwarding-number calls, and the existing Primary **Calls from Ads** conversion action with a 30-second minimum duration. A campaign-level call asset for `(941) 229-2355` was created and explicitly linked to that action on September 2, 2026. After the September 29 number migration, it must be replaced or disassociated before direct ad calls can be represented as routing to the new number. Account-wide Google Ads call reporting remains off, and enabling it plus creating the replacement campaign asset requires the user's separate explicit approval. The Google-hosted lead-form exclusion remains intact.

The completed replacement structure is Roof Cleaning, House Washing, Pool Cage & Lanai, and Driveway & Concrete. The latter three groups use the new all-services landing page, while roof keywords retain the roof-specific page for stronger query-to-page relevance. The campaign is enabled, while `Campaign 05/12/26` and `Leads-Performance Max-1` were verified paused in the account campaign table on September 2, 2026. Do not apply Google Ads recommendations for Display Expansion, Search Partners, or broad-match keywords without a separate review. Monitor current ad and call-asset review/policy status, search terms, and qualified-lead quality before material optimization changes. The current campaign record is in `GOOGLE_ADS_CAMPAIGN_PLAN.md`.

## Netlify compatibility requirements

Quote requests are submitted through the production `trpc.contact.submit` endpoint. The server requires the visitor's email address, sends the owner notification to `srqwash@gmail.com`, then sends the visitor an automatic confirmation. A quote form succeeds—and the Google Ads lead event can fire—only after Gmail accepts both messages. The sender uses server-only `GMAIL_USER` and `GMAIL_APP_PASSWORD` credentials; never add either value to a Vite variable, source file, or Git commit. Validate any credential change with `pnpm exec vitest run server/email.test.ts` before release.

The Netlify build depends on `client/public/_redirects` retaining the retired-offer 301 redirects followed by the SPA fallback rule:

```text
 /100-off-soft-wash-roof-cleaning    /roof-cleaning    301
 /100-off-soft-wash-roof-cleaning/   /roof-cleaning    301
/*    /index.html   200
```

Keep that file in place so former offer backlinks route permanently to roof cleaning and direct visits to service, area, neighborhood, and Google Ads landing-page URLs resolve to the React application rather than returning a 404. The `client/public/images/` directory is also intentionally preserved because the current Netlify deployment uses those paths for the multi-service Google Ads landing page.

## Safety rules

- Treat **GitHub `main`** as the source of truth for source control.
- Preserve the Manus `origin` remote for checkpoint synchronization; it is not a replacement for GitHub.
- If `main` has moved remotely, pull and reconcile before creating a release. If a merge conflict occurs, stop and review it before pushing.
- Never force-push to `main`.
- Never alter the existing Netlify project, domains, or DNS records without explicit approval.
