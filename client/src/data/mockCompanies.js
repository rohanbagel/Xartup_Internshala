const mockCompanies = [
  {
    id: "1",
    name: "Linear",
    slug: "linear",
    description: "The issue tracking tool you'll enjoy using. Linear helps streamlined software teams manage projects and track bugs.",
    website: "https://linear.app",
    logo: "LN",
    industry: "Developer Tools",
    stage: "Series B",
    location: { city: "San Francisco", country: "USA" },
    foundedYear: 2019,
    employeeCount: 85,
    totalFunding: "$52M",
    lastRoundDate: "2022-07",
    tags: ["project-management", "developer-tools", "saas", "productivity"],
    founders: [
      { name: "Tuomas Artman", role: "CTO" },
      { name: "Jori Lallo", role: "CEO" },
      { name: "Karri Saarinen", role: "CPO" }
    ],
    signals: [
      { type: "funding", text: "Series B funding round", date: "2022-07-26" },
      { type: "growth", text: "Surpassed 10,000 paying teams", date: "2023-03-01" },
      { type: "product", text: "Launched Linear Asks for support workflows", date: "2024-06-01" }
    ]
  },
  {
    id: "2",
    name: "Vercel",
    slug: "vercel",
    description: "Frontend cloud platform enabling developers to build and deploy web applications with zero configuration.",
    website: "https://vercel.com",
    logo: "VC",
    industry: "Developer Tools",
    stage: "Series E",
    location: { city: "San Francisco", country: "USA" },
    foundedYear: 2015,
    employeeCount: 650,
    totalFunding: "$313M",
    lastRoundDate: "2022-05",
    tags: ["frontend", "cloud", "developer-tools", "next.js", "deployment"],
    founders: [
      { name: "Guillermo Rauch", role: "CEO" }
    ],
    signals: [
      { type: "funding", text: "Series E at $2.5B valuation", date: "2022-05-23" },
      { type: "product", text: "Launched AI SDK for LLM integration", date: "2024-03-20" },
      { type: "growth", text: "Reached 1M developers on platform", date: "2023-11-01" }
    ]
  },
  {
    id: "3",
    name: "Supabase",
    slug: "supabase",
    description: "Open source Firebase alternative. Build in a weekend, scale to millions with Postgres, Auth, Storage and Edge Functions.",
    website: "https://supabase.com",
    logo: "SB",
    industry: "Developer Tools",
    stage: "Series C",
    location: { city: "San Francisco", country: "USA" },
    foundedYear: 2020,
    employeeCount: 120,
    totalFunding: "$116M",
    lastRoundDate: "2023-05",
    tags: ["backend", "postgres", "open-source", "developer-tools", "database"],
    founders: [
      { name: "Paul Copplestone", role: "CEO" },
      { name: "Ant Wilson", role: "CTO" }
    ],
    signals: [
      { type: "funding", text: "Series C at $1B+ valuation", date: "2023-05-02" },
      { type: "product", text: "Launched GA with branching for databases", date: "2024-04-15" },
      { type: "hiring", text: "Actively hiring across engineering", date: "2024-07-01" }
    ]
  },
  {
    id: "4",
    name: "ElevenLabs",
    slug: "elevenlabs",
    description: "AI voice technology research company building the most realistic, versatile and contextually-aware AI audio.",
    website: "https://elevenlabs.io",
    logo: "EL",
    industry: "AI / ML",
    stage: "Series C",
    location: { city: "New York", country: "USA" },
    foundedYear: 2022,
    employeeCount: 130,
    totalFunding: "$181M",
    lastRoundDate: "2024-01",
    tags: ["ai", "voice", "text-to-speech", "audio", "generative-ai"],
    founders: [
      { name: "Mati Staniszewski", role: "CEO" },
      { name: "Piotr Dabkowski", role: "CTO" }
    ],
    signals: [
      { type: "funding", text: "Series C led by a16z at $1.1B valuation", date: "2024-01-22" },
      { type: "product", text: "Launched Voice Cloning API v2", date: "2024-05-01" },
      { type: "growth", text: "1M+ active developers on platform", date: "2024-03-15" }
    ]
  },
  {
    id: "5",
    name: "Mistral AI",
    slug: "mistral-ai",
    description: "Frontier AI company building powerful open and closed LLMs with best-in-class performance-to-size ratios.",
    website: "https://mistral.ai",
    logo: "MI",
    industry: "AI / ML",
    stage: "Series B",
    location: { city: "Paris", country: "France" },
    foundedYear: 2023,
    employeeCount: 200,
    totalFunding: "$1.1B",
    lastRoundDate: "2024-06",
    tags: ["ai", "llm", "open-source", "foundation-models", "enterprise-ai"],
    founders: [
      { name: "Arthur Mensch", role: "CEO" },
      { name: "Guillaume Lample", role: "Chief Scientist" },
      { name: "Timothée Lacroix", role: "CTO" }
    ],
    signals: [
      { type: "funding", text: "Series B at $6B valuation", date: "2024-06-11" },
      { type: "product", text: "Released Mistral Large 2 model", date: "2024-07-24" },
      { type: "growth", text: "Partnership with Microsoft Azure", date: "2024-03-01" }
    ]
  },
  {
    id: "6",
    name: "Runway",
    slug: "runway",
    description: "Applied AI research company building the next generation of creative tools for video generation and editing.",
    website: "https://runwayml.com",
    logo: "RW",
    industry: "AI / ML",
    stage: "Series D",
    location: { city: "New York", country: "USA" },
    foundedYear: 2018,
    employeeCount: 170,
    totalFunding: "$237M",
    lastRoundDate: "2023-11",
    tags: ["ai", "video", "generative-ai", "creative-tools", "ml"],
    founders: [
      { name: "Cristóbal Valenzuela", role: "CEO" },
      { name: "Anastasis Germanidis", role: "CTO" }
    ],
    signals: [
      { type: "funding", text: "Series D at $1.5B valuation", date: "2023-11-27" },
      { type: "product", text: "Gen-3 Alpha video model launch", date: "2024-06-17" },
      { type: "hiring", text: "Growing research team in NYC", date: "2024-05-01" }
    ]
  },
  {
    id: "7",
    name: "Neon",
    slug: "neon",
    description: "Serverless Postgres with branching, autoscaling, and bottomless storage. The database that scales to zero.",
    website: "https://neon.tech",
    logo: "NE",
    industry: "Developer Tools",
    stage: "Series B",
    location: { city: "Remote", country: "USA" },
    foundedYear: 2021,
    employeeCount: 90,
    totalFunding: "$104M",
    lastRoundDate: "2023-08",
    tags: ["database", "postgres", "serverless", "developer-tools", "cloud"],
    founders: [
      { name: "Nikita Shamgunov", role: "CEO" },
      { name: "Heikki Linnakangas", role: "Co-founder" }
    ],
    signals: [
      { type: "funding", text: "Series B funding round", date: "2023-08-14" },
      { type: "product", text: "Launched database branching for CI/CD", date: "2024-02-01" },
      { type: "growth", text: "Backed as Vercel Postgres provider", date: "2023-06-01" }
    ]
  },
  {
    id: "8",
    name: "Resend",
    slug: "resend",
    description: "Email API for developers. Build, test, and send transactional emails at scale with React components.",
    website: "https://resend.com",
    logo: "RS",
    industry: "Developer Tools",
    stage: "Series A",
    location: { city: "San Francisco", country: "USA" },
    foundedYear: 2022,
    employeeCount: 30,
    totalFunding: "$15M",
    lastRoundDate: "2023-09",
    tags: ["email", "api", "developer-tools", "saas", "transactional"],
    founders: [
      { name: "Zeno Rocha", role: "CEO" }
    ],
    signals: [
      { type: "funding", text: "Series A led by SV Angel", date: "2023-09-12" },
      { type: "product", text: "Launched React Email component library", date: "2023-07-01" },
      { type: "hiring", text: "First major engineering hires", date: "2024-01-01" }
    ]
  },
  {
    id: "9",
    name: "Clerk",
    slug: "clerk",
    description: "The most comprehensive user management platform. Authentication, user management, organizations, and more.",
    website: "https://clerk.com",
    logo: "CL",
    industry: "Developer Tools",
    stage: "Series B",
    location: { city: "Remote", country: "USA" },
    foundedYear: 2020,
    employeeCount: 75,
    totalFunding: "$55M",
    lastRoundDate: "2023-05",
    tags: ["auth", "authentication", "developer-tools", "saas", "identity"],
    founders: [
      { name: "Colin Sidoti", role: "CEO" },
      { name: "Braden Sidoti", role: "CTO" }
    ],
    signals: [
      { type: "funding", text: "Series B funding round", date: "2023-05-18" },
      { type: "growth", text: "Processing 500M+ auth requests/month", date: "2024-04-01" },
      { type: "product", text: "Launched B2B SaaS multi-tenant support", date: "2023-11-01" }
    ]
  },
  {
    id: "10",
    name: "Retool",
    slug: "retool",
    description: "The fastest way to build internal tools. Connect to databases, APIs, and spreadsheets — then build UIs that work.",
    website: "https://retool.com",
    logo: "RT",
    industry: "Developer Tools",
    stage: "Series C",
    location: { city: "San Francisco", country: "USA" },
    foundedYear: 2017,
    employeeCount: 350,
    totalFunding: "$145M",
    lastRoundDate: "2022-01",
    tags: ["low-code", "internal-tools", "developer-tools", "saas", "database"],
    founders: [
      { name: "David Hsu", role: "CEO" }
    ],
    signals: [
      { type: "funding", text: "Series C at $3.2B valuation", date: "2022-01-24" },
      { type: "product", text: "Launched AI-native internal apps builder", date: "2024-05-01" },
      { type: "growth", text: "Used by over 7,000 companies", date: "2023-06-01" }
    ]
  },
  {
    id: "11",
    name: "PostHog",
    slug: "posthog",
    description: "Open-source product analytics, session recording, feature flags, and A/B testing platform developers love.",
    website: "https://posthog.com",
    logo: "PH",
    industry: "Analytics",
    stage: "Series B",
    location: { city: "Remote", country: "USA" },
    foundedYear: 2020,
    employeeCount: 100,
    totalFunding: "$27M",
    lastRoundDate: "2022-03",
    tags: ["analytics", "open-source", "product-analytics", "developer-tools", "data"],
    founders: [
      { name: "James Hawkins", role: "CEO" },
      { name: "Tim Glaser", role: "CTO" }
    ],
    signals: [
      { type: "funding", text: "Series B at $450M valuation", date: "2022-03-11" },
      { type: "product", text: "Launched data warehouse native analytics", date: "2024-04-01" },
      { type: "hiring", text: "Open roles across product and engineering", date: "2024-06-01" }
    ]
  },
  {
    id: "12",
    name: "Airbyte",
    slug: "airbyte",
    description: "Open-source data integration engine that syncs data from any source to any destination — the new ETL standard.",
    website: "https://airbyte.com",
    logo: "AB",
    industry: "Data & Analytics",
    stage: "Series B",
    location: { city: "San Francisco", country: "USA" },
    foundedYear: 2020,
    employeeCount: 200,
    totalFunding: "$181M",
    lastRoundDate: "2022-05",
    tags: ["data-integration", "etl", "open-source", "data-engineering", "saas"],
    founders: [
      { name: "Michel Tricot", role: "CEO" },
      { name: "John Lafleur", role: "COO" }
    ],
    signals: [
      { type: "funding", text: "Series B at $1.5B valuation", date: "2022-05-03" },
      { type: "product", text: "Launched AI-generated connectors", date: "2024-03-01" },
      { type: "growth", text: "40,000+ active deployments globally", date: "2024-01-01" }
    ]
  },
  {
    id: "13",
    name: "dbt Labs",
    slug: "dbt-labs",
    description: "The data transformation framework that enables analytics engineers to transform data using SQL-first development.",
    website: "https://getdbt.com",
    logo: "DL",
    industry: "Data & Analytics",
    stage: "Series D",
    location: { city: "Philadelphia", country: "USA" },
    foundedYear: 2016,
    employeeCount: 400,
    totalFunding: "$414M",
    lastRoundDate: "2022-02",
    tags: ["data-transformation", "analytics-engineering", "sql", "open-source", "data"],
    founders: [
      { name: "Tristan Handy", role: "CEO" },
      { name: "Drew Banin", role: "CPO" }
    ],
    signals: [
      { type: "funding", text: "Series D at $4.2B valuation", date: "2022-02-24" },
      { type: "product", text: "dbt Cloud launched MetricFlow GA", date: "2024-01-15" },
      { type: "growth", text: "30,000+ companies using dbt", date: "2023-09-01" }
    ]
  },
  {
    id: "14",
    name: "Ramp",
    slug: "ramp",
    description: "Finance automation platform helping businesses spend less. Corporate cards, expense management, and bill payments.",
    website: "https://ramp.com",
    logo: "RP",
    industry: "Fintech",
    stage: "Series D",
    location: { city: "New York", country: "USA" },
    foundedYear: 2019,
    employeeCount: 600,
    totalFunding: "$1.6B",
    lastRoundDate: "2023-08",
    tags: ["fintech", "spend-management", "corporate-cards", "expense-management", "b2b"],
    founders: [
      { name: "Eric Glyman", role: "CEO" },
      { name: "Karim Atiyeh", role: "CTO" }
    ],
    signals: [
      { type: "funding", text: "Series D at $5.8B valuation", date: "2023-08-24" },
      { type: "growth", text: "$5B+ in annualized savings for customers", date: "2024-02-01" },
      { type: "product", text: "Launched Ramp Intelligence AI suite", date: "2024-04-01" }
    ]
  },
  {
    id: "15",
    name: "Brex",
    slug: "brex",
    description: "AI-powered spend management platform with corporate cards, expense tracking, and travel for scaling companies.",
    website: "https://brex.com",
    logo: "BX",
    industry: "Fintech",
    stage: "Series D",
    location: { city: "San Francisco", country: "USA" },
    foundedYear: 2017,
    employeeCount: 1100,
    totalFunding: "$1.5B",
    lastRoundDate: "2022-01",
    tags: ["fintech", "corporate-cards", "spend-management", "saas", "b2b-finance"],
    founders: [
      { name: "Henrique Dubugras", role: "CEO" },
      { name: "Pedro Franceschi", role: "CTO" }
    ],
    signals: [
      { type: "funding", text: "Series D at $12.3B valuation", date: "2022-01-11" },
      { type: "product", text: "Launched Brex AI for expense automation", date: "2024-03-15" },
      { type: "growth", text: "Serving 30,000+ companies on platform", date: "2024-01-01" }
    ]
  },
  {
    id: "16",
    name: "Deel",
    slug: "deel",
    description: "All-in-one global HR platform for hiring, managing, and paying international employees and contractors.",
    website: "https://letsdeel.com",
    logo: "DE",
    industry: "HR Tech",
    stage: "Series D",
    location: { city: "San Francisco", country: "USA" },
    foundedYear: 2019,
    employeeCount: 2800,
    totalFunding: "$679M",
    lastRoundDate: "2022-05",
    tags: ["hr-tech", "global-payroll", "remote-work", "employer-of-record", "compliance"],
    founders: [
      { name: "Alex Bouaziz", role: "CEO" },
      { name: "Shuo Wang", role: "COO" }
    ],
    signals: [
      { type: "funding", text: "Series D at $12B valuation", date: "2022-05-27" },
      { type: "growth", text: "Processing payroll for 35,000+ companies", date: "2024-03-01" },
      { type: "product", text: "Launched Deel AI for HR workflows", date: "2024-02-01" }
    ]
  },
  {
    id: "17",
    name: "Rippling",
    slug: "rippling",
    description: "Workforce management platform unifying HR, IT, and Finance in a single system of record for global companies.",
    website: "https://rippling.com",
    logo: "RI",
    industry: "HR Tech",
    stage: "Series F",
    location: { city: "San Francisco", country: "USA" },
    foundedYear: 2016,
    employeeCount: 2500,
    totalFunding: "$1.2B",
    lastRoundDate: "2023-03",
    tags: ["hr-tech", "payroll", "it-management", "workforce-management", "enterprise"],
    founders: [
      { name: "Parker Conrad", role: "CEO" },
      { name: "Prasanna Sankar", role: "CTO" }
    ],
    signals: [
      { type: "funding", text: "Series F at $13.5B valuation", date: "2023-03-14" },
      { type: "product", text: "Launched global payroll infrastructure", date: "2024-01-01" },
      { type: "hiring", text: "Aggressively hiring in Europe", date: "2024-06-01" }
    ]
  },
  {
    id: "18",
    name: "Ashby",
    slug: "ashby",
    description: "Modern all-in-one recruiting platform combining ATS, CRM, analytics, and scheduling for high-growth teams.",
    website: "https://ashbyhq.com",
    logo: "AS",
    industry: "HR Tech",
    stage: "Series C",
    location: { city: "San Francisco", country: "USA" },
    foundedYear: 2018,
    employeeCount: 120,
    totalFunding: "$90M",
    lastRoundDate: "2023-10",
    tags: ["recruiting", "ats", "hr-tech", "saas", "talent-acquisition"],
    founders: [
      { name: "Benji Encz", role: "CEO" },
      { name: "Abhik Pramanik", role: "CTO" }
    ],
    signals: [
      { type: "funding", text: "Series C at $500M valuation", date: "2023-10-24" },
      { type: "product", text: "Launched AI interview intelligence tools", date: "2024-05-01" },
      { type: "growth", text: "Used by 500+ high-growth companies", date: "2024-02-01" }
    ]
  },
  {
    id: "19",
    name: "Lattice",
    slug: "lattice",
    description: "People management platform helping HR leaders build engaged, high-performing teams with performance reviews and goals.",
    website: "https://lattice.com",
    logo: "LA",
    industry: "HR Tech",
    stage: "Series F",
    location: { city: "San Francisco", country: "USA" },
    foundedYear: 2015,
    employeeCount: 550,
    totalFunding: "$329M",
    lastRoundDate: "2022-02",
    tags: ["hr-tech", "performance-management", "people-analytics", "saas", "employee-engagement"],
    founders: [
      { name: "Jack Altman", role: "CEO" },
      { name: "Eric Koslow", role: "CTO" }
    ],
    signals: [
      { type: "funding", text: "Series F at $3B valuation", date: "2022-02-02" },
      { type: "product", text: "Launched Lattice AI performance summaries", date: "2024-03-20" },
      { type: "growth", text: "5,000+ customers including Slack and Cruise", date: "2023-06-01" }
    ]
  },
  {
    id: "20",
    name: "Descript",
    slug: "descript",
    description: "All-in-one video and podcast editing platform where you edit media like a document. Built for creators and teams.",
    website: "https://descript.com",
    logo: "DC",
    industry: "Media Tech",
    stage: "Series C",
    location: { city: "San Francisco", country: "USA" },
    foundedYear: 2017,
    employeeCount: 170,
    totalFunding: "$100M",
    lastRoundDate: "2021-06",
    tags: ["video-editing", "podcasting", "ai", "media-tech", "content-creation"],
    founders: [
      { name: "Andrew Mason", role: "CEO" }
    ],
    signals: [
      { type: "funding", text: "Series C led by OpenAI", date: "2021-06-22" },
      { type: "product", text: "Launched Underlord AI for video editing", date: "2024-07-01" },
      { type: "growth", text: "Used by 50,000+ creators and teams", date: "2024-01-01" }
    ]
  },
  {
    id: "21",
    name: "Trigger.dev",
    slug: "trigger-dev",
    description: "Open-source background jobs and workflows for TypeScript developers. Run long tasks reliably with full observability.",
    website: "https://trigger.dev",
    logo: "TD",
    industry: "Developer Tools",
    stage: "Seed",
    location: { city: "Remote", country: "Ireland" },
    foundedYear: 2022,
    employeeCount: 18,
    totalFunding: "$4M",
    lastRoundDate: "2023-04",
    tags: ["background-jobs", "workflows", "typescript", "open-source", "developer-tools"],
    founders: [
      { name: "Matt Aitken", role: "CEO" },
      { name: "Eric Allam", role: "CTO" }
    ],
    signals: [
      { type: "funding", text: "Seed round closed", date: "2023-04-11" },
      { type: "product", text: "Launched v3 with Realtime SDK", date: "2024-06-01" },
      { type: "hiring", text: "First developer relations hire", date: "2024-03-01" }
    ]
  },
  {
    id: "22",
    name: "Cal.com",
    slug: "cal-com",
    description: "Open-source scheduling infrastructure. Calendly alternative for developers and enterprises with full customization.",
    website: "https://cal.com",
    logo: "CC",
    industry: "Productivity",
    stage: "Series A",
    location: { city: "Remote", country: "USA" },
    foundedYear: 2021,
    employeeCount: 60,
    totalFunding: "$32M",
    lastRoundDate: "2023-09",
    tags: ["scheduling", "open-source", "productivity", "calendar", "developer-tools"],
    founders: [
      { name: "Peer Richelsen", role: "CEO" },
      { name: "Bailey Pumfleet", role: "COO" }
    ],
    signals: [
      { type: "funding", text: "Series A led by Coatue", date: "2023-09-27" },
      { type: "product", text: "Launched Cal.ai smart scheduling assistant", date: "2024-04-01" },
      { type: "growth", text: "30,000+ GitHub stars, 10,000+ teams", date: "2024-07-01" }
    ]
  },
  {
    id: "23",
    name: "Upstash",
    slug: "upstash",
    description: "Serverless Redis and Kafka for developers. Per-request pricing with no idle costs. Built for the edge.",
    website: "https://upstash.com",
    logo: "UP",
    industry: "Developer Tools",
    stage: "Series A",
    location: { city: "Remote", country: "USA" },
    foundedYear: 2021,
    employeeCount: 40,
    totalFunding: "$12M",
    lastRoundDate: "2022-09",
    tags: ["redis", "serverless", "database", "developer-tools", "edge-computing"],
    founders: [
      { name: "Enes Akar", role: "CEO" }
    ],
    signals: [
      { type: "funding", text: "Series A funding closed", date: "2022-09-01" },
      { type: "product", text: "Launched Vector Database for AI workloads", date: "2024-02-01" },
      { type: "growth", text: "Processing 10B+ requests monthly", date: "2024-05-01" }
    ]
  },
  {
    id: "24",
    name: "Inngest",
    slug: "inngest",
    description: "Durable workflow engine for serverless and edge environments. Reliable background functions with zero infrastructure.",
    website: "https://inngest.com",
    logo: "IN",
    industry: "Developer Tools",
    stage: "Series A",
    location: { city: "Remote", country: "USA" },
    foundedYear: 2021,
    employeeCount: 30,
    totalFunding: "$10.5M",
    lastRoundDate: "2023-07",
    tags: ["serverless", "workflows", "background-jobs", "developer-tools", "event-driven"],
    founders: [
      { name: "Tony Holdstock-Brown", role: "CEO" },
      { name: "Dan Farrelly", role: "CTO" }
    ],
    signals: [
      { type: "funding", text: "Series A from a16z", date: "2023-07-11" },
      { type: "product", text: "Launched AI function orchestration support", date: "2024-04-15" },
      { type: "hiring", text: "Growing developer success team", date: "2024-06-01" }
    ]
  },
  {
    id: "25",
    name: "Render",
    slug: "render",
    description: "Unified cloud platform to build and run all your apps with free TLS certificates, global CDN, and auto deploys.",
    website: "https://render.com",
    logo: "RD",
    industry: "Developer Tools",
    stage: "Series B",
    location: { city: "San Francisco", country: "USA" },
    foundedYear: 2018,
    employeeCount: 100,
    totalFunding: "$56M",
    lastRoundDate: "2022-10",
    tags: ["cloud", "hosting", "developer-tools", "platform-as-a-service", "devops"],
    founders: [
      { name: "Anurag Goel", role: "CEO" }
    ],
    signals: [
      { type: "funding", text: "Series B funding closed", date: "2022-10-18" },
      { type: "product", text: "Launched Blueprints infrastructure-as-code", date: "2023-11-01" },
      { type: "growth", text: "Serving 500,000+ developers", date: "2024-03-01" }
    ]
  },
  {
    id: "26",
    name: "Fly.io",
    slug: "fly-io",
    description: "Platform to run full-stack apps and databases close to users globally. Deploy Docker containers anywhere in seconds.",
    website: "https://fly.io",
    logo: "FI",
    industry: "Developer Tools",
    stage: "Series B",
    location: { city: "Chicago", country: "USA" },
    foundedYear: 2017,
    employeeCount: 90,
    totalFunding: "$65M",
    lastRoundDate: "2023-03",
    tags: ["cloud", "docker", "edge-computing", "developer-tools", "platform"],
    founders: [
      { name: "Kurt Mackey", role: "CEO" },
      { name: "Jerome Gravel-Niquet", role: "CTO" }
    ],
    signals: [
      { type: "funding", text: "Series B at $300M valuation", date: "2023-03-06" },
      { type: "product", text: "Launched Fly Machines serverless containers", date: "2023-10-01" },
      { type: "growth", text: "Hosting 2M+ applications globally", date: "2024-04-01" }
    ]
  },
  {
    id: "27",
    name: "Modal",
    slug: "modal",
    description: "Cloud compute platform for AI teams. Run ML models, batch jobs, and APIs on GPUs with a Pythonic SDK.",
    website: "https://modal.com",
    logo: "ML",
    industry: "AI Infrastructure",
    stage: "Series A",
    location: { city: "New York", country: "USA" },
    foundedYear: 2021,
    employeeCount: 45,
    totalFunding: "$67M",
    lastRoundDate: "2024-07",
    tags: ["ml-infrastructure", "gpu-computing", "cloud", "ai", "python"],
    founders: [
      { name: "Erik Bernhardsson", role: "CEO" }
    ],
    signals: [
      { type: "funding", text: "Series A at $500M valuation", date: "2024-07-01" },
      { type: "product", text: "Launched serverless GPU inference endpoints", date: "2024-03-01" },
      { type: "hiring", text: "Strong engineering team growth", date: "2024-05-01" }
    ]
  },
  {
    id: "28",
    name: "Replicate",
    slug: "replicate",
    description: "Run AI models in the cloud with one line of code. Access thousands of open-source models or deploy your own.",
    website: "https://replicate.com",
    logo: "RE",
    industry: "AI Infrastructure",
    stage: "Series B",
    location: { city: "San Francisco", country: "USA" },
    foundedYear: 2019,
    employeeCount: 70,
    totalFunding: "$78M",
    lastRoundDate: "2023-12",
    tags: ["ai", "ml-models", "api", "developer-tools", "open-source"],
    founders: [
      { name: "Ben Firshman", role: "CEO" },
      { name: "Andreas Jansson", role: "CTO" }
    ],
    signals: [
      { type: "funding", text: "Series B led by a16z", date: "2023-12-12" },
      { type: "product", text: "Launched Deployments for production models", date: "2024-02-01" },
      { type: "growth", text: "30M+ model runs per month", date: "2024-06-01" }
    ]
  },
  {
    id: "29",
    name: "Together AI",
    slug: "together-ai",
    description: "AI acceleration cloud for training and running generative AI models. Faster inference than any major cloud provider.",
    website: "https://together.ai",
    logo: "TA",
    industry: "AI Infrastructure",
    stage: "Series A",
    location: { city: "San Francisco", country: "USA" },
    foundedYear: 2022,
    employeeCount: 80,
    totalFunding: "$229M",
    lastRoundDate: "2024-05",
    tags: ["ai-infrastructure", "llm", "inference", "training", "gpu-cloud"],
    founders: [
      { name: "Vipul Ved Prakash", role: "CEO" },
      { name: "Ce Zhang", role: "Chief Scientist" }
    ],
    signals: [
      { type: "funding", text: "Series A at $1.25B valuation", date: "2024-05-09" },
      { type: "product", text: "Launched Together Inference with 100+ models", date: "2024-03-01" },
      { type: "growth", text: "10x YoY revenue growth", date: "2024-01-01" }
    ]
  },
  {
    id: "30",
    name: "Perplexity AI",
    slug: "perplexity-ai",
    description: "AI-powered answer engine that provides accurate, trusted, and real-time answers to any question.",
    website: "https://perplexity.ai",
    logo: "PA",
    industry: "AI / ML",
    stage: "Series B",
    location: { city: "San Francisco", country: "USA" },
    foundedYear: 2022,
    employeeCount: 100,
    totalFunding: "$165M",
    lastRoundDate: "2024-04",
    tags: ["ai", "search", "llm", "answer-engine", "consumer-ai"],
    founders: [
      { name: "Aravind Srinivas", role: "CEO" },
      { name: "Denis Yarats", role: "CTO" }
    ],
    signals: [
      { type: "funding", text: "Series B at $1B valuation", date: "2024-04-23" },
      { type: "product", text: "Launched Pro Search and Spaces", date: "2024-06-01" },
      { type: "growth", text: "10M+ DAU, 500M+ monthly queries", date: "2024-07-01" }
    ]
  },
  {
    id: "31",
    name: "Lovable",
    slug: "lovable",
    description: "AI full-stack engineer that builds web apps from natural language prompts. Ship production apps in minutes.",
    website: "https://lovable.dev",
    logo: "LV",
    industry: "AI / ML",
    stage: "Series A",
    location: { city: "Stockholm", country: "Sweden" },
    foundedYear: 2023,
    employeeCount: 35,
    totalFunding: "$20M",
    lastRoundDate: "2024-03",
    tags: ["ai", "code-generation", "full-stack", "no-code", "developer-tools"],
    founders: [
      { name: "Anton Osika", role: "CEO" }
    ],
    signals: [
      { type: "funding", text: "Series A funding round", date: "2024-03-01" },
      { type: "product", text: "Launched GPT-based app builder v2", date: "2024-05-01" },
      { type: "growth", text: "Reached 500K registered users", date: "2024-06-01" }
    ]
  },
  {
    id: "32",
    name: "Cursor",
    slug: "cursor",
    description: "The AI-first code editor built on VS Code. Pair programming with an AI that knows your codebase.",
    website: "https://cursor.com",
    logo: "CU",
    industry: "Developer Tools",
    stage: "Series B",
    location: { city: "San Francisco", country: "USA" },
    foundedYear: 2022,
    employeeCount: 40,
    totalFunding: "$60M",
    lastRoundDate: "2024-08",
    tags: ["ai", "code-editor", "developer-tools", "llm", "productivity"],
    founders: [
      { name: "Michael Truell", role: "CEO" },
      { name: "Sualeh Asif", role: "CTO" }
    ],
    signals: [
      { type: "funding", text: "Series B at $2.5B valuation", date: "2024-08-22" },
      { type: "growth", text: "Used by 40,000+ paying developers", date: "2024-07-01" },
      { type: "product", text: "Launched Cursor Rules and deep codebase indexing", date: "2024-05-01" }
    ]
  },
  {
    id: "33",
    name: "Lago",
    slug: "lago",
    description: "Open-source metering and usage-based billing API for SaaS and usage-based businesses.",
    website: "https://getlago.com",
    logo: "LG",
    industry: "Fintech",
    stage: "Series A",
    location: { city: "Paris", country: "France" },
    foundedYear: 2021,
    employeeCount: 35,
    totalFunding: "$22M",
    lastRoundDate: "2023-06",
    tags: ["billing", "usage-based-pricing", "open-source", "fintech", "saas-infrastructure"],
    founders: [
      { name: "Raffi Sarkissian", role: "CEO" },
      { name: "Aurore Malherbes", role: "CTO" }
    ],
    signals: [
      { type: "funding", text: "Series A led by FirstMark", date: "2023-06-13" },
      { type: "product", text: "Launched real-time metering engine", date: "2024-01-01" },
      { type: "growth", text: "5,000+ GitHub stars, 150+ customers", date: "2024-04-01" }
    ]
  },
  {
    id: "34",
    name: "Metabase",
    slug: "metabase",
    description: "The simplest and fastest way to get business intelligence and analytics to everyone in your company.",
    website: "https://metabase.com",
    logo: "MB",
    industry: "Analytics",
    stage: "Series C",
    location: { city: "San Francisco", country: "USA" },
    foundedYear: 2014,
    employeeCount: 250,
    totalFunding: "$94M",
    lastRoundDate: "2022-01",
    tags: ["business-intelligence", "analytics", "open-source", "data-visualization", "saas"],
    founders: [
      { name: "Sameer Al-Sakran", role: "CEO" }
    ],
    signals: [
      { type: "funding", text: "Series C funding round", date: "2022-01-19" },
      { type: "product", text: "Launched Metabase AI for natural language queries", date: "2024-03-01" },
      { type: "growth", text: "50,000+ companies using Metabase", date: "2024-01-01" }
    ]
  },
  {
    id: "35",
    name: "Turso",
    slug: "turso",
    description: "SQLite-based database platform for edge and local workloads. Embedded databases with serverless branching.",
    website: "https://turso.tech",
    logo: "TU",
    industry: "Developer Tools",
    stage: "Seed",
    location: { city: "Remote", country: "Finland" },
    foundedYear: 2022,
    employeeCount: 20,
    totalFunding: "$3.4M",
    lastRoundDate: "2023-05",
    tags: ["database", "sqlite", "edge-computing", "developer-tools", "serverless"],
    founders: [
      { name: "Glauber Costa", role: "CEO" }
    ],
    signals: [
      { type: "funding", text: "Seed round closed", date: "2023-05-01" },
      { type: "product", text: "Launched multi-db support for SQLite", date: "2024-02-01" },
      { type: "growth", text: "Reached 100,000 databases on platform", date: "2024-07-01" }
    ]
  },
  {
    id: "36",
    name: "Stytch",
    slug: "stytch",
    description: "Passwordless authentication platform for developers. Magic links, biometrics, WebAuthn, and passkeys API.",
    website: "https://stytch.com",
    logo: "ST",
    industry: "Developer Tools",
    stage: "Series B",
    location: { city: "San Francisco", country: "USA" },
    foundedYear: 2020,
    employeeCount: 85,
    totalFunding: "$90M",
    lastRoundDate: "2022-03",
    tags: ["authentication", "passwordless", "identity", "developer-tools", "security"],
    founders: [
      { name: "Reed McGinley-Stempel", role: "CEO" },
      { name: "Julianna Lamb", role: "CTO" }
    ],
    signals: [
      { type: "funding", text: "Series B at $1B valuation", date: "2022-03-22" },
      { type: "product", text: "Launched B2B SaaS RBAC and SCIM", date: "2023-09-01" },
      { type: "growth", text: "Used by 1,500+ companies", date: "2024-02-01" }
    ]
  },
  {
    id: "37",
    name: "Liveblocks",
    slug: "liveblocks",
    description: "APIs and tools to build collaborative experiences like Google Docs or Figma into any product.",
    website: "https://liveblocks.io",
    logo: "LB",
    industry: "Developer Tools",
    stage: "Series A",
    location: { city: "Remote", country: "France" },
    foundedYear: 2021,
    employeeCount: 35,
    totalFunding: "$12M",
    lastRoundDate: "2022-09",
    tags: ["collaboration", "realtime", "developer-tools", "sdk", "multiplayer"],
    founders: [
      { name: "Steven Fabre", role: "CEO" },
      { name: "Olivier Foucherot", role: "CTO" }
    ],
    signals: [
      { type: "funding", text: "Series A funding round", date: "2022-09-07" },
      { type: "product", text: "Launched Comments and Notifications API", date: "2024-02-01" },
      { type: "growth", text: "Powering collaboration for 3,000+ apps", date: "2024-05-01" }
    ]
  },
  {
    id: "38",
    name: "Highlight.io",
    slug: "highlight-io",
    description: "Open-source full-stack monitoring platform — session replay, error tracking, and logging for modern apps.",
    website: "https://highlight.io",
    logo: "HI",
    industry: "Developer Tools",
    stage: "Series A",
    location: { city: "Remote", country: "USA" },
    foundedYear: 2020,
    employeeCount: 25,
    totalFunding: "$8M",
    lastRoundDate: "2022-11",
    tags: ["monitoring", "observability", "open-source", "session-replay", "developer-tools"],
    founders: [
      { name: "Jay Khatri", role: "CEO" }
    ],
    signals: [
      { type: "funding", text: "Series A from Y Combinator", date: "2022-11-01" },
      { type: "product", text: "Launched AI-powered error grouping", date: "2024-04-01" },
      { type: "growth", text: "7,000+ GitHub stars, 1,500+ active projects", date: "2024-07-01" }
    ]
  },
  {
    id: "39",
    name: "Plane",
    slug: "plane",
    description: "Open-source project management tool. Track issues, sprints, and roadmaps in one place. Jira alternative.",
    website: "https://plane.so",
    logo: "PL",
    industry: "Productivity",
    stage: "Series A",
    location: { city: "Remote", country: "India" },
    foundedYear: 2022,
    employeeCount: 50,
    totalFunding: "$8M",
    lastRoundDate: "2024-03",
    tags: ["project-management", "open-source", "saas", "productivity", "developer-tools"],
    founders: [
      { name: "Vihar Kurama", role: "CEO" }
    ],
    signals: [
      { type: "funding", text: "Series A from Accel India", date: "2024-03-01" },
      { type: "product", text: "Launched Plane Pages and Spreadsheet layout", date: "2024-06-01" },
      { type: "growth", text: "25,000+ GitHub stars, 5,000+ paying teams", date: "2024-07-01" }
    ]
  },
  {
    id: "40",
    name: "Documenso",
    slug: "documenso",
    description: "Open-source DocuSign alternative. Digital document signing infrastructure you can host yourself or use in the cloud.",
    website: "https://documenso.com",
    logo: "DO",
    industry: "SaaS",
    stage: "Seed",
    location: { city: "Remote", country: "Germany" },
    foundedYear: 2022,
    employeeCount: 15,
    totalFunding: "$6M",
    lastRoundDate: "2023-10",
    tags: ["e-signature", "open-source", "documents", "saas", "legal-tech"],
    founders: [
      { name: "Timur Ercan", role: "CEO" },
      { name: "Lucas Smith", role: "CTO" }
    ],
    signals: [
      { type: "funding", text: "Seed funding with $6M raised", date: "2023-10-01" },
      { type: "product", text: "Launched Teams and bulk send feature", date: "2024-05-01" },
      { type: "growth", text: "8,000+ GitHub stars, 1,000+ companies", date: "2024-07-01" }
    ]
  },
  {
    id: "41",
    name: "Formbricks",
    slug: "formbricks",
    description: "Open-source survey and experience management platform. Collect in-product feedback from any part of the funnel.",
    website: "https://formbricks.com",
    logo: "FB",
    industry: "Analytics",
    stage: "Seed",
    location: { city: "Remote", country: "Germany" },
    foundedYear: 2022,
    employeeCount: 16,
    totalFunding: "$2M",
    lastRoundDate: "2023-07",
    tags: ["surveys", "feedback", "open-source", "saas", "product-analytics"],
    founders: [
      { name: "Johannes Dancker", role: "CEO" }
    ],
    signals: [
      { type: "funding", text: "Pre-seed funding round", date: "2023-07-01" },
      { type: "product", text: "Launched segment-based targeting engine", date: "2024-03-01" },
      { type: "growth", text: "10,000+ GitHub stars, 500+ companies", date: "2024-06-01" }
    ]
  },
  {
    id: "42",
    name: "Activepieces",
    slug: "activepieces",
    description: "Open-source Zapier alternative with 100+ integrations. Build workflow automations with a visual editor or code.",
    website: "https://activepieces.com",
    logo: "AC",
    industry: "Automation",
    stage: "Seed",
    location: { city: "Remote", country: "Egypt" },
    foundedYear: 2022,
    employeeCount: 20,
    totalFunding: "$6.6M",
    lastRoundDate: "2023-12",
    tags: ["automation", "no-code", "open-source", "workflow", "integration"],
    founders: [
      { name: "Mohammad Abubrook", role: "CEO" }
    ],
    signals: [
      { type: "funding", text: "Seed round at $10M valuation", date: "2023-12-01" },
      { type: "product", text: "Launched AI Steps for LLM automation", date: "2024-04-01" },
      { type: "growth", text: "9,000+ GitHub stars, 4,000+ active users", date: "2024-07-01" }
    ]
  },
  {
    id: "43",
    name: "Windmill",
    slug: "windmill",
    description: "Open-source developer platform to build internal workflows, data pipelines and UIs from scripts in any language.",
    website: "https://windmill.dev",
    logo: "WM",
    industry: "Developer Tools",
    stage: "Seed",
    location: { city: "Remote", country: "France" },
    foundedYear: 2021,
    employeeCount: 12,
    totalFunding: "$3M",
    lastRoundDate: "2023-01",
    tags: ["developer-tools", "workflows", "open-source", "automation", "low-code"],
    founders: [
      { name: "Ruben Fiszel", role: "CEO" }
    ],
    signals: [
      { type: "funding", text: "Seed round closed", date: "2023-01-01" },
      { type: "product", text: "Launched AI-generated scripts from prompts", date: "2024-03-01" },
      { type: "growth", text: "10,000+ GitHub stars, SOC 2 certified", date: "2024-05-01" }
    ]
  },
  {
    id: "44",
    name: "Apify",
    slug: "apify",
    description: "Web scraping and automation platform. Extract data from any website with ready-made scrapers or build your own.",
    website: "https://apify.com",
    logo: "AP",
    industry: "Data & Analytics",
    stage: "Series A",
    location: { city: "Prague", country: "Czech Republic" },
    foundedYear: 2015,
    employeeCount: 130,
    totalFunding: "$15M",
    lastRoundDate: "2022-06",
    tags: ["web-scraping", "automation", "data-extraction", "api", "developer-tools"],
    founders: [
      { name: "Jan Curn", role: "CEO" },
      { name: "Jakub Drobnik", role: "CTO" }
    ],
    signals: [
      { type: "funding", text: "Series A led by Credo Ventures", date: "2022-06-01" },
      { type: "product", text: "Launched AI-powered web scraping agents", date: "2024-05-01" },
      { type: "growth", text: "50,000+ developers on marketplace", date: "2024-03-01" }
    ]
  },
  {
    id: "45",
    name: "Zed",
    slug: "zed",
    description: "High-performance, multiplayer code editor built in Rust. The fastest code editor with real-time collaboration built-in.",
    website: "https://zed.dev",
    logo: "ZD",
    industry: "Developer Tools",
    stage: "Series A",
    location: { city: "San Francisco", country: "USA" },
    foundedYear: 2021,
    employeeCount: 30,
    totalFunding: "$25M",
    lastRoundDate: "2023-10",
    tags: ["code-editor", "rust", "developer-tools", "open-source", "collaboration"],
    founders: [
      { name: "Nathan Sobo", role: "CEO" },
      { name: "Max Brunsfeld", role: "CTO" }
    ],
    signals: [
      { type: "funding", text: "Series A from a16z", date: "2023-10-16" },
      { type: "product", text: "Launched AI coding assistant with inline edits", date: "2024-05-01" },
      { type: "growth", text: "Open-sourced, 40,000+ GitHub stars", date: "2024-01-24" }
    ]
  },
  {
    id: "46",
    name: "Tinybird",
    slug: "tinybird",
    description: "Real-time data platform for developers. Build fast analytics APIs from any data source without managing infrastructure.",
    website: "https://tinybird.co",
    logo: "TB",
    industry: "Data & Analytics",
    stage: "Series A",
    location: { city: "Madrid", country: "Spain" },
    foundedYear: 2019,
    employeeCount: 80,
    totalFunding: "$31M",
    lastRoundDate: "2022-07",
    tags: ["real-time-analytics", "data-api", "clickhouse", "developer-tools", "data-engineering"],
    founders: [
      { name: "Jorge Sancha", role: "CEO" },
      { name: "Alberto Fernandez Capel", role: "CTO" }
    ],
    signals: [
      { type: "funding", text: "Series A led by Singular", date: "2022-07-12" },
      { type: "product", text: "Launched Tinybird Forward for streaming analytics", date: "2024-06-01" },
      { type: "growth", text: "Powering analytics for 3,000+ developers", date: "2024-03-01" }
    ]
  },
  {
    id: "47",
    name: "Chatwoot",
    slug: "chatwoot",
    description: "Open-source customer support platform. Manage customer conversations across email, social, and chat from one inbox.",
    website: "https://chatwoot.com",
    logo: "CW",
    industry: "CRM",
    stage: "Series A",
    location: { city: "Remote", country: "India" },
    foundedYear: 2017,
    employeeCount: 40,
    totalFunding: "$4M",
    lastRoundDate: "2022-04",
    tags: ["customer-support", "open-source", "live-chat", "saas", "crm"],
    founders: [
      { name: "Pranav Rajpurkar", role: "CEO" },
      { name: "Sojan Jose", role: "CTO" }
    ],
    signals: [
      { type: "funding", text: "Series A from Accel India", date: "2022-04-01" },
      { type: "product", text: "Launched AI-powered reply suggestions", date: "2024-04-01" },
      { type: "growth", text: "20,000+ GitHub stars, 10,000+ deployments", date: "2024-07-01" }
    ]
  },
  {
    id: "48",
    name: "Fireworks AI",
    slug: "fireworks-ai",
    description: "Fastest inference platform for open-source LLMs. Deploy and serve any model at production scale with low latency.",
    website: "https://fireworks.ai",
    logo: "FA",
    industry: "AI Infrastructure",
    stage: "Series A",
    location: { city: "Redwood City", country: "USA" },
    foundedYear: 2022,
    employeeCount: 60,
    totalFunding: "$52M",
    lastRoundDate: "2024-01",
    tags: ["ai-infrastructure", "llm", "inference", "gpu", "open-source"],
    founders: [
      { name: "Lin Qiao", role: "CEO" }
    ],
    signals: [
      { type: "funding", text: "Series A at $552M valuation", date: "2024-01-30" },
      { type: "product", text: "Launched function calling for open LLMs", date: "2024-03-01" },
      { type: "growth", text: "Serving 100B+ tokens monthly", date: "2024-06-01" }
    ]
  },
  {
    id: "49",
    name: "Browserbase",
    slug: "browserbase",
    description: "Headless browser infrastructure for AI agents. Reliable, scalable browser automation in the cloud.",
    website: "https://browserbase.com",
    logo: "BB",
    industry: "AI Infrastructure",
    stage: "Seed",
    location: { city: "San Francisco", country: "USA" },
    foundedYear: 2023,
    employeeCount: 15,
    totalFunding: "$6.1M",
    lastRoundDate: "2024-02",
    tags: ["browser-automation", "ai-agents", "developer-tools", "headless", "cloud"],
    founders: [
      { name: "Paul Klein", role: "CEO" }
    ],
    signals: [
      { type: "funding", text: "Seed round from a16z", date: "2024-02-01" },
      { type: "product", text: "Launched Stagehand AI browsing SDK", date: "2024-07-01" },
      { type: "growth", text: "1,000+ developers on waitlist", date: "2024-05-01" }
    ]
  },
  {
    id: "50",
    name: "Firecrawl",
    slug: "firecrawl",
    description: "Web scraping API for LLMs. Turn any website into clean markdown or structured data for AI applications.",
    website: "https://firecrawl.dev",
    logo: "FC",
    industry: "AI Infrastructure",
    stage: "Seed",
    location: { city: "San Francisco", country: "USA" },
    foundedYear: 2024,
    employeeCount: 10,
    totalFunding: "$2M",
    lastRoundDate: "2024-03",
    tags: ["web-scraping", "llm", "ai", "data-extraction", "developer-tools"],
    founders: [
      { name: "Nicolas Camara", role: "CEO" }
    ],
    signals: [
      { type: "funding", text: "Pre-seed from Y Combinator W24", date: "2024-03-01" },
      { type: "product", text: "Launched Extract structured data API", date: "2024-06-01" },
      { type: "growth", text: "10,000+ developers, 5,000+ GitHub stars", date: "2024-07-01" }
    ]
  }
]

export default mockCompanies
