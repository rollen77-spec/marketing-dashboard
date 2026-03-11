# Connecting GA4 and Google Search Console to the Dashboard

This guide walks you through connecting **Google Analytics 4 (GA4)** and **Google Search Console (GSC)** so the dashboard can pull real data via APIs.

---

## Overview

- **GA4** and **GSC** are connected using a **Google Cloud project** and a **service account**.
- The dashboard runs **server-side** code (API routes) that call the GA4 Data API and Search Console API. Credentials never go to the browser.
- You will: create a project → enable APIs → create a service account → grant it access in GA4 and GSC → add env vars → (optionally) run the included integration code.

---

## Part 1: Google Cloud setup

### 1. Create a Google Cloud project

1. Go to [Google Cloud Console](https://console.cloud.google.com/).
2. Click the project dropdown → **New Project**.
3. Name it (e.g. `Marketing Dashboard`) → **Create**.

### 2. Enable the APIs

1. In the same project, go to **APIs & Services** → **Library**.
2. Search for **Google Analytics Data API** → open it → **Enable**.
3. Search for **Google Search Console API** → open it → **Enable**.

### 3. Create a service account

1. Go to **APIs & Services** → **Credentials**.
2. Click **Create Credentials** → **Service account**.
3. Name it (e.g. `dashboard-reader`) → **Create and Continue** → skip optional steps → **Done**.
4. Click the new service account → **Keys** tab → **Add Key** → **Create new key** → **JSON** → **Create**.  
   The JSON file downloads; keep it secure and **never commit it to git**.

### 4. Note the service account email

In **Credentials** → your service account, copy the **Email** (e.g. `dashboard-reader@your-project.iam.gserviceaccount.com`). You’ll add this user in GA4 and GSC next.

---

## Part 2: Grant access in GA4

1. Open [Google Analytics](https://analytics.google.com/) → select your **GA4 property**.
2. Go to **Admin** (gear) → **Property** column → **Property access management**.
3. Click **+** → **Add users**.
4. Paste the **service account email** from step 4 above.
5. Role: **Viewer** (read-only).
6. Save.

### Get your GA4 Property ID

- **Admin** → **Property** column → **Property settings**.
- Copy the **Property ID** (numeric, e.g. `123456789`). You’ll use it as `GA4_PROPERTY_ID` in env.

---

## Part 3: Grant access in Google Search Console

1. Open [Google Search Console](https://search.google.com/search-console).
2. Select the **property** (domain or URL prefix) you want to use.
3. Go to **Settings** (left) → **Users and permissions**.
4. Click **Add user**.
5. Paste the **service account email**.
6. Permission: **Full** (or **Restricted** if you prefer).
7. Save.

### Note your GSC site URL

- In Search Console, the **property URL** is your “site” (e.g. `https://www.example.com/` or `sc_domain:example.com` for domain properties). You’ll use it as `GSC_SITE_URL` in env.

---

## Part 4: Environment variables in the dashboard

In the **marketing-dashboard** folder, create a `.env.local` file (it’s gitignored). Add:

```bash
# Path to the service account JSON key file (from step 3 in Part 1)
GOOGLE_APPLICATION_CREDENTIALS=/absolute/path/to/your-service-account-key.json

# GA4: Property ID (Admin → Property settings)
GA4_PROPERTY_ID=123456789

# GSC: Exact property URL as shown in Search Console (e.g. https://www.example.com/ or sc_domain:example.com)
GSC_SITE_URL=https://www.yourdomain.com/
```

**Security:**

- Never commit `.env.local` or the JSON key file.
- For production (e.g. Vercel), add the same variables in the project’s **Environment Variables** and upload the key file or use **Secret Files** / another secure method.

---

## Part 5: Use the integration code (optional)

The repo includes server-side code that talks to GA4 and GSC. Dependencies are already in `package.json`.

| Item | Purpose |
|------|--------|
| `lib/ga4.ts` | Fetches GA4 metrics (sessions, users) using the GA4 Data API. |
| `lib/gsc.ts` | Fetches GSC data (top queries, top pages) using the Search Console API. |
| `app/api/ga4/route.ts` | Next.js API route: `GET /api/ga4?metric=sessions` or `?metric=sessionsByDate&days=7` returns GA4 data. |
| `app/api/gsc/route.ts` | Next.js API route: `GET /api/gsc?report=queries` or `?report=pages&limit=10&days=28` returns GSC data. |
| `.env.example` | Template for required env vars; copy to `.env.local` and fill in. |

**Install dependencies** (from `marketing-dashboard`; already added if you pulled the latest code):

```bash
npm install
```

**Run the app:**

```bash
npm run dev
```

- If `GOOGLE_APPLICATION_CREDENTIALS`, `GA4_PROPERTY_ID`, and (for GSC) `GSC_SITE_URL` are set, the API routes return **live data**.
- If not set, the routes can return **mock data** or a clear error so the dashboard still runs.

**Wire the dashboard to the APIs:**

- In your data layer (e.g. `lib/traffic-detail-data.ts`, `lib/search-detail-data.ts`), replace mock values with `fetch('/api/ga4?...')` or `fetch('/api/gsc?...')` from **server components** or **API routes** (never from client-side code that would expose secrets). You can keep mock data as fallback when the env vars are missing.

---

## Quick reference

| Step | What to do |
|------|------------|
| 1 | Create a Google Cloud project. |
| 2 | Enable **Google Analytics Data API** and **Google Search Console API**. |
| 3 | Create a service account and download its JSON key. |
| 4 | In GA4: add service account email as **Viewer**; copy **Property ID**. |
| 5 | In GSC: add service account email as **Full** (or Restricted) user; note **property URL**. |
| 6 | In dashboard: set `GOOGLE_APPLICATION_CREDENTIALS`, `GA4_PROPERTY_ID`, `GSC_SITE_URL` in `.env.local`. |
| 7 | Install deps, run the app, and (optionally) call `/api/ga4` and `/api/gsc` from your server-side data layer. |

For which KPIs map to which GA4/GSC fields, see **DATA-SOURCES.md**.
