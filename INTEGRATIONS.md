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
| Website-call conversion | `AW-10941454860/CqIfCPzlgewcEIy0peEo` | Google forwarding-number configuration for the displayed phone number `(941) 229-2355` |

On September 1, 2026, the active SRQ Wash Google Ads account received two new primary website conversion actions: **Submit lead form** and **Call ((941) 229-2355)**. The lead conversion is intentionally triggered only after the server accepts a quote request, which prevents page views and failed submissions from being counted as leads. The phone configuration is intentionally a Google forwarding-number measurement, which captures completed Google Ads-attributed calls instead of merely counting phone-link taps.

Do not replace these settings with the removed **Click to call** action or with Google-hosted lead-form actions. Keep the three `gtag("config", ...)` calls in `client/index.html` together so the Google Ads, GA4, and forwarding-number configurations all load across every public route.

## Netlify compatibility requirements

The Netlify build depends on `client/public/_redirects` containing the SPA fallback rule:

```text
/*    /index.html   200
```

Keep that file in place so direct visits to service, area, neighborhood, and Google Ads landing-page URLs resolve to the React application rather than returning a 404. The `client/public/images/` directory is also intentionally preserved because the current Netlify deployment uses those paths for the multi-service Google Ads landing page.

## Safety rules

- Treat **GitHub `main`** as the source of truth for source control.
- Preserve the Manus `origin` remote for checkpoint synchronization; it is not a replacement for GitHub.
- If `main` has moved remotely, pull and reconcile before creating a release. If a merge conflict occurs, stop and review it before pushing.
- Never force-push to `main`.
- Never alter the existing Netlify project, domains, or DNS records without explicit approval.
