# Zenova website

Public website for the Zenova Android app: landing page, download link, help, and the legal pages the app and Google Play link to.

Built with Next.js (App Router), TypeScript and Tailwind CSS.

## Pages

| Path | Purpose |
| --- | --- |
| `/` | Landing page: features, security, Free vs Pro, FAQ |
| `/download` | Google Play link and setup steps |
| `/support` | Help topics and contact addresses |
| `/privacy` | Privacy Policy (linked from the app, `AppConfig.privacyUrl`) |
| `/terms` | Terms of Service (linked from the app, `AppConfig.termsUrl`) |
| `/delete-account` | Account deletion steps (Google Play data-deletion URL) |
| `/child-safety` | Child Safety Standards (Google Play CSAE requirement) |
| `/invite` | Target of the in-app "Invite friends" link |
| `/user/[uid]` | Fallback for profile QR links when the app is not installed |

## Before publishing

All shared facts live in `src/lib/site.ts`. Confirm every value marked `TODO` there:
company name, support/privacy/safety email addresses and governing-law country.
Have the legal pages reviewed before relying on them.

## Develop

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm start
```
