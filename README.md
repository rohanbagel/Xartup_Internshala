# VCScout — VC Discovery & Live Enrichment Platform

A Harmonic-style VC intelligence interface with live AI-powered company enrichment. Built as a full-stack JavaScript application using React, Express, Firecrawl, and Groq.

![Tech Stack](https://img.shields.io/badge/React-18-blue) ![Vite](https://img.shields.io/badge/Vite-6-purple) ![Express](https://img.shields.io/badge/Express-4-green) ![TailwindCSS](https://img.shields.io/badge/Tailwind-3-cyan) ![Groq](https://img.shields.io/badge/Groq-Llama3-orange) ![Firecrawl](https://img.shields.io/badge/Firecrawl-API-red)

---

## Features

### Part A — VC Discovery Interface
- **Company Database** — 50 realistic mock startups with rich metadata (industry, stage, funding, founders, signals)
- **Faceted Search & Filters** — Full-text search + multi-select filters for industry, stage, employee range
- **Sortable Data Table** — Click column headers to sort; pagination with configurable page size
- **Saved Searches** — Save any filter combination and re-run later with one click
- **Custom Lists** — Create lists, add/remove companies, bulk-select from table
- **Export** — Download filtered results or lists as CSV or JSON
- **Keyboard Shortcuts** — `Cmd/Ctrl+K` global search modal
- **Company Profiles** — Detailed view with Overview, Signals timeline, Notes, and Enrichment tabs

### Part B — Live Enrichment Pipeline
- **Firecrawl Scraping** — Scrapes homepage, /about, /careers, /blog of any company website
- **Groq LLM Extraction** — Uses Llama 3.1 70B to extract structured fields:
  - Company summary
  - What they do (bullet points)
  - Keywords/tags
  - Derived signals (hiring, growth, product launches)
- **Investment Thesis Scoring** — AI scores companies 0–100 against a VC thesis with explanation
- **Caching** — Supabase-backed cache (24h TTL) with in-memory fallback

---

## Architecture

```
┌─────────────────────────────────────────────────────┐
│                     Client (React + Vite)           │
│  ┌──────────┐ ┌──────────┐ ┌───────────────────┐   │
│  │ Companies│ │  Lists   │ │ Company Profile   │   │
│  │  Table   │ │  CRUD    │ │ + Enrich Button   │   │
│  └──────────┘ └──────────┘ └───────┬───────────┘   │
│                                     │ POST /api/enrich
└─────────────────────────────────────┼───────────────┘
                                      │
┌─────────────────────────────────────┼───────────────┐
│                  Server (Express)   │               │
│                                     ▼               │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐          │
│  │ Firecrawl│→ │  Groq    │→ │  Cache   │          │
│  │ Scraper  │  │ Extractor│  │ (Supa/Mem)│         │
│  └──────────┘  └──────────┘  └──────────┘          │
└─────────────────────────────────────────────────────┘
```

---

## Tech Stack

| Layer       | Technology                          |
|-------------|-------------------------------------|
| Frontend    | React 18, Vite 6, React Router 6   |
| Styling     | Tailwind CSS 3, Lucide React icons  |
| Backend     | Express 4, Node.js (ES Modules)     |
| AI Scraping | Firecrawl API                       |
| LLM         | Groq (Llama 3.1 70B Versatile)      |
| Cache       | Supabase (PostgreSQL) / In-memory   |
| State       | React Context + localStorage        |

---

## Getting Started

### Prerequisites
- **Node.js** 18+ 
- **Firecrawl API key** — [Get one free at firecrawl.dev](https://firecrawl.dev)
- **Groq API key** — [Get one free at console.groq.com](https://console.groq.com)
- *(Optional)* Supabase project for persistent cache

### 1. Clone & Install

```bash
git clone https://github.com/YOUR_USERNAME/vcscout.git
cd vcscout
npm run install:all
```

### 2. Configure Environment

Copy the example env file and add your API keys:

```bash
cp .env.example server/.env
```

Edit `server/.env`:
```env
PORT=3001
CLIENT_URL=http://localhost:5173

FIRECRAWL_API_KEY=fc-your-key-here
GROQ_API_KEY=gsk_your-key-here

# Optional — omit for in-memory cache
SUPABASE_URL=https://your-project.supabase.co
SUPABASE_SERVICE_KEY=eyJ...
```

### 3. (Optional) Create Supabase Cache Table

If using Supabase for persistent caching, run this SQL in the Supabase SQL editor:

```sql
CREATE TABLE enrichment_cache (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  company_domain TEXT UNIQUE NOT NULL,
  enrichment_data JSONB NOT NULL,
  scraped_urls TEXT[] DEFAULT '{}',
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

CREATE INDEX idx_cache_domain ON enrichment_cache(company_domain);
```

### 4. Run Development Servers

```bash
npm run dev
```

This starts both:
- **Client** → http://localhost:5173
- **Server** → http://localhost:3001

---

## Project Structure

```
├── client/                    # React frontend
│   ├── src/
│   │   ├── components/        # Reusable UI (Sidebar, Modal, Toast, etc.)
│   │   ├── pages/             # Route pages (Companies, CompanyProfile, Lists, SavedSearches)
│   │   ├── context/           # AppContext (lists, searches, notes, cache)
│   │   ├── data/              # Mock companies dataset (50 startups)
│   │   ├── hooks/             # useDebounce
│   │   ├── lib/               # API helpers, export utils, constants
│   │   ├── App.jsx            # Root layout + routing
│   │   └── main.jsx           # Entry point
│   ├── index.html
│   └── vite.config.js
│
├── server/                    # Express backend
│   ├── routes/
│   │   └── enrich.js          # POST /api/enrich endpoint
│   ├── services/
│   │   ├── firecrawl.js       # Website scraping (4 page types)
│   │   ├── groq.js            # LLM field extraction + thesis scoring
│   │   └── cache.js           # Supabase + in-memory cache (24h TTL)
│   └── index.js               # Express app entry
│
├── .env.example               # Environment variable template
└── package.json               # Root monorepo scripts
```

---

## How Enrichment Works

1. User clicks **"Enrich"** on a company profile
2. Frontend sends `POST /api/enrich` with the company's website URL
3. Server checks cache — returns immediately if fresh data exists (< 24h)
4. On cache miss:
   - **Firecrawl** scrapes up to 4 pages (homepage, /about, /careers, /blog)
   - **Groq** receives the scraped markdown and extracts structured fields using Llama 3.1 70B
   - **Groq** also scores the company against a default VC investment thesis (0–100)
5. Result is cached and returned to the frontend
6. Frontend displays: summary, key activities, keywords, derived signals, thesis score

---

## Key Design Decisions

- **Mock data over real DB for Part A** — 50 hand-crafted companies provide realistic demo data without requiring database setup. Lists, searches, and notes are persisted in localStorage.
- **Firecrawl over raw HTTP** — Firecrawl handles JavaScript rendering, anti-bot measures, and returns clean markdown — far more reliable than cheerio/puppeteer for modern websites.
- **Groq over OpenAI** — Groq's inference speed (500+ tokens/sec on Llama 3.1 70B) means enrichment feels near-instant. Free tier is generous.
- **In-memory cache fallback** — App works fully without Supabase configured; just add API keys and go.
- **No TypeScript** — Prioritized speed of development and readability.

---

## Scripts

| Command              | Description                              |
|----------------------|------------------------------------------|
| `npm run dev`        | Start client + server concurrently       |
| `npm run dev:client` | Start Vite dev server only               |
| `npm run dev:server` | Start Express server only                |
| `npm run build`      | Build client for production              |
| `npm run install:all`| Install deps for root, client, and server|

---

## License

MIT
