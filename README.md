# Marketing Dashboard

A standalone Next.js app to view marketing channel performance (website traffic, social, email, search) for **multiple sites** in one place. Share one URL with your team and switch between brands via the dropdown.

## Sites included (configurable)

- **Hostopia** — your main brand
- **Other Brand** — rename and add data for your second brand in `lib/sites-data.ts`

## Run locally

```bash
cd marketing-dashboard
npm install
npm run dev
```

Open [http://localhost:3001](http://localhost:3001). The app runs on port 3001 so it doesn’t conflict with other apps on 3000.

## Set up as its own GitHub repo and Vercel project

### 1. Create a new GitHub repository

1. On GitHub: **Repositories → New** (or [github.com/new](https://github.com/new)).
2. Name it e.g. `marketing-dashboard`.
3. Do **not** initialize with a README (you already have one in the folder).
4. Create the repository.

### 2. Push the dashboard code to the new repo

**Option A — Fresh repo (recommended):** Copy the `marketing-dashboard` folder to a new directory, then init and push:

```bash
# From your machine (outside hostopia-website-2)
cp -r /path/to/hostopia-website-2/marketing-dashboard ~/marketing-dashboard
cd ~/marketing-dashboard
git init
git add .
git commit -m "Initial commit: marketing dashboard"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/marketing-dashboard.git
git push -u origin main
```

**Option B — From inside the existing repo** (subtree push; keeps only dashboard files as repo root):

```bash
cd /path/to/hostopia-website-2
git remote add dashboard https://github.com/YOUR_USERNAME/marketing-dashboard.git
git subtree push --prefix=marketing-dashboard dashboard main
```

Replace `YOUR_USERNAME` with your GitHub username (and repo name if you chose a different one).

### 3. Deploy on Vercel

1. Go to [vercel.com](https://vercel.com) and sign in.
2. **Add New… → Project** and **Import** the new GitHub repo (`marketing-dashboard`).
3. Leave **Root Directory** as `.` (the repo root is the dashboard app).
4. **Framework Preset**: Next.js (should be auto-detected).
5. Click **Deploy**.

Your dashboard will have its own URL, e.g. `https://marketing-dashboard-xxx.vercel.app`. Share that link; the `?site=hostopia` or `?site=other-brand` query param will keep the selected site when sharing.

## Customize the second brand

1. Open `lib/sites-data.ts`.
2. Find the `other-brand` entry in `SITES` and change:
   - `id` — used in the URL, e.g. `?site=my-brand`.
   - `name` — label in the site switcher.
   - `primaryColor` — hex color for the header and charts.
3. Replace the `otherBrandChannels` mock data with your second site’s metrics (or hook up APIs later).

## Connecting real data

The dashboard currently uses mock data in `lib/sites-data.ts`. To show live data:

- **Website traffic** — e.g. Google Analytics (GA4) API.
- **Social** — Meta Graph API, LinkedIn, X/Twitter APIs, etc.
- **Email** — Mailchimp, SendGrid, or your ESP’s API.
- **Search** — Google Search Console API, or paid search (Google Ads, etc.).

Add API routes (e.g. under `app/api/`) that fetch from these services and return data in the same shape as `ChannelSummary` / `MetricSummary` in `lib/sites-data.ts`, then call those routes from the app or use server components to pass data into the dashboard.

## Tech stack

- Next.js 14, React 18, TypeScript
- Tailwind CSS
- Recharts for bar charts
