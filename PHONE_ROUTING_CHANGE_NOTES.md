# SRQ Wash Phone Routing Migration Notes

**Updated:** September 29, 2026  
**Approved public number:** `(941) 400-4496`  
**Dial format:** `9414004496` / `+19414004496`

## Completed website changes

The approved website source migration is complete. The new number is used in:

- Shared site data and all reusable display/call controls
- `tel:` routes on shared pages and both Google Ads landing pages
- LocalBusiness JSON-LD and the site-wide Google forwarding-number tag configuration
- The Thank You page and the server email auto-reply CTA
- All active website quote forms and customer email confirmations

A source audit found no remaining former-number reference in `client/` or `server/`.

## Google Ads state

| Path | Current documented state |
|---|---|
| Website forwarding-number conversion | The conversion action `AW-10941454860/CqIfCPzlgewcEIy0peEo` was changed in Google Ads to destination/display `(941) 400-4496`. A read-only post-save confirmation remains pending. |
| Direct Search-ad call asset | A historical campaign-level `(941) 229-2355` asset was created before the phone migration. It is not verified to update automatically and must not be represented as routing to the new number. |
| Call reporting | Account-wide Google Ads call reporting is currently off. |
| Replacement action | Enabling account-wide call reporting, creating a campaign-only `(941) 400-4496` asset linked to the existing 30-second direct-call action, and removing/disassociating the former-number asset require the user's separate explicit approval. |

## Safety rule

Do **not** state that direct calls from Search ads route to `(941) 400-4496` until the replacement asset is created, associated only with campaign `24203417267`, and explicitly verified. This migration did not alter budget, campaign schedule, city targeting, Search Partners, or DNS/Netlify settings.

## Current execution boundary

On September 29, 2026, Tom instructed that this offer is for the Google Business Profile and that no further Google Ads actions should be taken. No account-wide call-reporting setting, call asset, campaign, conversion, budget, targeting, or other Google Ads setting will be changed unless Tom explicitly requests it in a later task.
