# KPI → Data source mapping for Marketing Dashboard

Use this as a checklist to connect real data. Each section lists the **KPIs/metrics** in the app and the **recommended source** to plug in for automatic updates.

---

## 1. Website Traffic (`/channels/website`)

| KPI / Metric | Recommended data source | Notes |
|--------------|-------------------------|--------|
| Unique visitors | **Google Analytics 4 (GA4)** | `activeUsers` or `totalUsers` (by date range). |
| Sessions | **GA4** | `sessions`. |
| Bounce rate | **GA4** | `bounceRate` or derived from `engagementRate`. |
| Avg. session duration | **GA4** | `averageSessionDuration` or `userEngagementDuration` / sessions. |
| Pageviews | **GA4** | `screenPageViews` (web) or `eventCount` for `page_view`. |
| Pages per session | **GA4** | `screenPageViewsPerSession` or derived. |
| New vs returning | **GA4** | Segment by `newUsers` vs returning; use `userType` or first session date. |
| Conversion rate | **GA4** | Configure conversion events in GA4; use `conversions` / `sessions`. |
| Traffic by device (Desktop, Mobile, Tablet) | **GA4** | Dimensions: `deviceCategory` (or `deviceCategory` + `operatingSystem`). |
| Traffic by country | **GA4** | Dimension: `country`. Metrics: sessions, users, bounce rate. |
| Top pages by traffic | **GA4** | Dimension: `pagePath` or `pageTitle` + `pagePath`. Metrics: sessions, screenPageViews, engagement. |
| Traffic sources (Organic, Paid, Direct, Referral, Social, LLM, etc.) | **GA4** | Dimension: `sessionDefaultChannelGroup` or `firstUserDefaultChannelGroup`; use `sessionSource`/`sessionMedium` for custom grouping (e.g. LLM referrers). |
| Traffic sources over time | **GA4** | Same dimensions + `date`. |
| Actions per visit (downloads, external links, podcast, video, blog read, form) | **GA4** | Use **custom events** and/or **enhanced measurement**: e.g. `file_download`, `outbound_click`, `video_start`/`video_complete`, scroll depth or custom “blog read” event, form_start/form_submit. |

**Summary:** **Google Analytics 4 (GA4)** is the single recommended source for all Website Traffic KPIs. Connect via **GA4 Data API** or **GA4 Reporting API** (OAuth + property ID).

---

## 2. Video (`/channels/video`)

| KPI / Metric | Recommended data source | Notes |
|--------------|-------------------------|--------|
| Video play rate (% sessions with video play) | **GA4** | Custom definition: count sessions with `video_start` (or equivalent) / total sessions. |
| Total video plays | **GA4** or **YouTube Analytics** / **Vimeo** / **Wistia** | GA4: count `video_start` (or similar) events. For hosted video: use platform APIs. |
| Avg. watch time | **GA4** or **video platform** | GA4: use `video_current_time` / engagement events; or platform: average view duration. |
| Completion rate | **GA4** or **video platform** | GA4: `video_complete` (or 90% progress) / `video_start`. Platform: “average view duration” vs “length”. |
| Top videos (plays, avg watch time, completion, play rate) | **GA4** or **video platform** | GA4: dimension = video title or URL (custom parameter on `video_start`). Platform: YouTube Analytics API, Vimeo API, Wistia API. |

**Summary:**  
- **Site-embedded video (no single platform):** **Google Analytics 4** with `video_start` / `video_progress` / `video_complete` (and custom parameters for title/URL).  
- **YouTube:** **YouTube Analytics API** (or GA4 YouTube integration).  
- **Vimeo / Wistia / etc.:** Use that platform’s **Analytics or Data API** for plays, watch time, and completion.

---

## 3. Search — SEO & PPC (`/channels/search`)

### 3a. SEO section

| KPI / Metric | Recommended data source | Notes |
|--------------|-------------------------|--------|
| Sessions from organic | **GA4** | Filter by `sessionDefaultChannelGroup = Organic Search` (or `firstUserMedium = organic`). |
| Engaged sessions (organic) | **GA4** | Same organic filter; metric `engagedSessions`. |
| Conversion from organic | **GA4** | Same organic filter; metric `conversions` (or your conversion events). |
| Revenue from organic | **GA4** | Same organic filter; eCommerce or value from conversion events. |
| Organic sessions & engaged over time | **GA4** | Same dimensions + `date`. |
| Conversions from organic over time | **GA4** | Organic segment + `conversions` by date. |
| Top queries by clicks | **Google Search Console (GSC)** | GSC **Search Analytics API**: dimensions `query`, metrics `clicks`, `impressions`, `ctr`, `position`. |
| Top landing pages (organic) — impressions, clicks, avg position | **GSC** | GSC API: dimension `page`; same metrics. Use **GA4** for “sessions” per page if you want sessions by landing page. |

**Summary (SEO):**  
- **Traffic & conversions:** **Google Analytics 4** (organic segment).  
- **Queries, impressions, clicks, position:** **Google Search Console** (Search Analytics API). Optionally join GSC `page` with GA4 `pagePath` for sessions per landing page.

### 3b. PPC section

| KPI / Metric | Recommended data source | Notes |
|--------------|-------------------------|--------|
| Advertiser ads cost | **Google Ads API** | Report: campaign/campaign stats; fields: `cost_micros` (convert to currency). |
| Conversions from paid | **GA4** or **Google Ads** | GA4: paid segment + `conversions`. Or Google Ads: `conversions` (import from GA4 or use Ads conversion tracking). |
| Conversion rate (paid) | **GA4** or **Google Ads** | Conversions / clicks (Ads) or conversions / sessions (GA4 paid). |
| Revenue from paid | **GA4** or **Google Ads** | GA4: paid traffic + conversion value; or Google Ads value. |
| Conversions from paid over time | **GA4** or **Google Ads API** | By date. |
| Top campaigns (ad cost, clicks, cost per conversion) | **Google Ads API** | Campaign performance report: `campaign.name`, `metrics.cost_micros`, `metrics.clicks`, and derived cost per conversion. |

**Summary (PPC):**  
- **Spend, clicks, campaign table:** **Google Ads API**.  
- **Conversions and revenue (if tracked in GA4):** **GA4** with paid channel filter, or **Google Ads** if you use Ads conversion tracking.

### 3c. Traffic & Referrals section

| KPI / Metric | Recommended data source | Notes |
|--------------|-------------------------|--------|
| Total sessions, Bounce rate, Conversions, Session conversion rate | **GA4** | Standard GA4 metrics. |
| Top channels over time (organic, paid, direct, referral, etc.) | **GA4** | Dimension: `sessionDefaultChannelGroup` (or session source/medium) + `date`. |
| New users (over time) | **GA4** | `newUsers` by date. |
| Engaged sessions by country | **GA4** | Dimension: `country`; metric: `engagedSessions` (or similar). |
| Top referral sources (sessions, conversions, session conversion rate) | **GA4** | Dimension: `sessionSource` (and optionally `sessionMedium`) where channel = Referral; join with conversions. |

**Summary:** **Google Analytics 4** for all Traffic & Referrals KPIs in this section.

---

## 4. Email (`/channels/email`)

| KPI / Metric | Recommended data source | Notes |
|--------------|-------------------------|--------|
| Emails sent | **Mailchimp API** / **SendGrid** / **Klaviyo** / **Customer.io** | Campaign or automation stats: total sent. |
| Open rate | Same | Opens / delivered (or sent). |
| Click rate | Same | Clicks / delivered (or sent). |
| Bounces | Same | Bounced count. |
| Unsubscribes | Same | Unsubscribe count. |
| Per-campaign metrics (sent, opened, bounced, unsubscribes, clicks, open rate, click rate) | Same | Campaign-level reporting from the ESP’s API. |
| Trend over time (sent, opened, clicks, open rate, click rate) | Same | Time-series from campaigns or aggregate by week/month. |

**Summary:**  
- **Mailchimp:** **Mailchimp Marketing API** (campaigns, reports).  
- **SendGrid:** **SendGrid Stats API** or **Email Activity**.  
- **Klaviyo:** **Klaviyo API** (metrics and campaigns).  
- **Other ESPs:** Use that provider’s **Reporting / Analytics API** and map to the same KPIs.

---

## 5. Social (`/channels/social`)

### 5a. X (Twitter)

| KPI / Metric | Recommended data source | Notes |
|--------------|-------------------------|--------|
| Followers, Impressions, Engagements, Engagement rate | **X (Twitter) API** (e.g. **API v2** with Analytics) | Use **Tweet metrics** and **User metrics**; “impressions” and “engagements” from tweet/account analytics. |
| Mentions | **X API** or **social listening tool** | Search/stream for @mentions. |
| Total posts | **X API** | Count of tweets in period. |
| Video views, Avg watch time, Likes, Shares, Comments, CTR | **X API** (media/metrics) | Video metrics in tweet or account analytics where available. |

**Summary:** **X Developer API** (v2) with **Analytics** access for account and tweet metrics.

### 5b. Facebook & Instagram

| KPI / Metric | Recommended data source | Notes |
|--------------|-------------------------|--------|
| Followers, Impressions, Engagements, Engagement rate | **Meta Marketing API** (Facebook Graph API) | **Page insights** (FB) and **Instagram Business Account insights** (IG). |
| Video views, Avg watch time | **Meta Marketing API** | Video insights (e.g. `video_views`, `video_avg_time_watched`). |
| Likes, Shares, Comments, CTR | **Meta Marketing API** | Post/insights: `post_engaged_users`, reactions, comments, clicks; ad-level for CTR. |
| Top videos (views, watch time, likes, shares, comments, CTR) | **Meta Marketing API** | Media insights per video post/reel. |

**Summary:** **Meta Marketing API** (Facebook Graph API) — **Page Insights** and **Instagram Insights** (and **Content Publishing API** for posts/media).

### 5c. LinkedIn

| KPI / Metric | Recommended data source | Notes |
|--------------|-------------------------|--------|
| Followers, Impressions, Engagements, Engagement rate | **LinkedIn Marketing API** (e.g. **Organization and UGC APIs**) | **Organization** or **Page** analytics; **Share** and **Video** stats. |
| Video views, Avg watch time, Likes, Shares, Comments, CTR | **LinkedIn Marketing API** | Video and post-level metrics where exposed. |

**Summary:** **LinkedIn Marketing API** (organization/page and content analytics).

---

## Quick reference: one source per channel

| Dashboard / Channel | Primary data source(s) |
|--------------------|------------------------|
| **Website Traffic** | Google Analytics 4 (GA4) |
| **Video** | GA4 (video events) and/or YouTube / Vimeo / Wistia API |
| **Search — SEO** | GA4 (traffic/conversions) + Google Search Console (queries, impressions, position) |
| **Search — PPC** | Google Ads API (+ GA4 for conversions if used) |
| **Search — Traffic & Referrals** | GA4 |
| **Email** | Mailchimp / SendGrid / Klaviyo (or your ESP) API |
| **Social — X** | X (Twitter) API v2 + Analytics |
| **Social — Facebook & Instagram** | Meta Marketing API (Graph API) |
| **Social — LinkedIn** | LinkedIn Marketing API |

---

## Implementation notes

1. **Authentication:** Use OAuth2 for Google (GA4, GSC, Google Ads), and provider-specific OAuth or API keys for Meta, X, LinkedIn, and ESPs.  
2. **Multi-site:** Pass `siteId` (or property/app ID) into your API layer and map each dashboard view to the correct GA4 property, GSC site, Ads account, or social/email account.  
3. **Caching:** Sync data on a schedule (e.g. nightly or hourly) and store in your DB or cache; avoid calling external APIs on every page load.  
4. **GA4:** One GA4 property per “site” is the usual setup; use the **GA4 Data API** or **Reporting API** for all GA4-backed KPIs above.
