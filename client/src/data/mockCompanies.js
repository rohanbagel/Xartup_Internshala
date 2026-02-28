const mockCompanies = [
  {
    id: "1",
    name: "NovaByte AI",
    slug: "novabyte-ai",
    description: "Enterprise AI platform automating document processing and data extraction for Fortune 500 companies using proprietary LLM architecture.",
    website: "https://novabyte.ai",
    logo: "NB",
    industry: "AI/ML",
    stage: "Series A",
    location: { city: "San Francisco", country: "USA" },
    foundedYear: 2022,
    employeeCount: 45,
    totalFunding: "$12M",
    lastRoundDate: "2025-09-15",
    tags: ["AI", "Enterprise", "NLP", "Document Processing"],
    founders: [
      { name: "Sarah Chen", role: "CEO", linkedin: "https://linkedin.com/in/sarachen" },
      { name: "Raj Patel", role: "CTO", linkedin: "https://linkedin.com/in/rajpatel" }
    ],
    signals: [
      { type: "funding", title: "Raised $12M Series A led by Sequoia", date: "2025-09-15", source: "TechCrunch" },
      { type: "hiring", title: "Posted 8 new engineering roles", date: "2025-11-02", source: "LinkedIn" },
      { type: "product", title: "Launched NovaByte Studio v2.0", date: "2025-12-01", source: "Product Hunt" }
    ]
  },
  {
    id: "2",
    name: "GreenLedger",
    slug: "greenledger",
    description: "Carbon accounting SaaS helping mid-market companies track, report, and reduce their carbon footprint with automated ESG compliance.",
    website: "https://greenledger.io",
    logo: "GL",
    industry: "Climate",
    stage: "Seed",
    location: { city: "London", country: "UK" },
    foundedYear: 2023,
    employeeCount: 18,
    totalFunding: "$3.5M",
    lastRoundDate: "2025-03-20",
    tags: ["Climate", "ESG", "SaaS", "Compliance"],
    founders: [
      { name: "Emma Williams", role: "CEO", linkedin: "https://linkedin.com/in/emmaw" },
      { name: "Tom Baker", role: "CTO", linkedin: "https://linkedin.com/in/tombaker" }
    ],
    signals: [
      { type: "funding", title: "Raised $3.5M Seed from Climate Capital", date: "2025-03-20", source: "Crunchbase" },
      { type: "partnership", title: "Partnership with Deloitte UK", date: "2025-07-10", source: "PR Newswire" }
    ]
  },
  {
    id: "3",
    name: "PayFlow",
    slug: "payflow",
    description: "Embedded payments infrastructure for B2B marketplaces, enabling instant settlements, split payments, and automated reconciliation.",
    website: "https://payflow.com",
    logo: "PF",
    industry: "Fintech",
    stage: "Series B",
    location: { city: "New York", country: "USA" },
    foundedYear: 2020,
    employeeCount: 120,
    totalFunding: "$45M",
    lastRoundDate: "2025-06-01",
    tags: ["Fintech", "Payments", "B2B", "Infrastructure"],
    founders: [
      { name: "Michael Torres", role: "CEO", linkedin: "https://linkedin.com/in/mtorres" },
      { name: "Aisha Johnson", role: "COO", linkedin: "https://linkedin.com/in/aishaj" }
    ],
    signals: [
      { type: "funding", title: "Raised $30M Series B from a16z", date: "2025-06-01", source: "Forbes" },
      { type: "product", title: "Launched instant settlement API", date: "2025-08-15", source: "Blog" },
      { type: "hiring", title: "Opened Berlin office, hiring 20+", date: "2025-10-01", source: "LinkedIn" }
    ]
  },
  {
    id: "4",
    name: "MediSync",
    slug: "medisync",
    description: "AI-powered clinical trial matching platform connecting patients with relevant trials and streamlining site recruitment workflows.",
    website: "https://medisync.health",
    logo: "MS",
    industry: "HealthTech",
    stage: "Series A",
    location: { city: "Boston", country: "USA" },
    foundedYear: 2021,
    employeeCount: 55,
    totalFunding: "$18M",
    lastRoundDate: "2025-05-12",
    tags: ["HealthTech", "AI", "Clinical Trials", "Healthcare"],
    founders: [
      { name: "Dr. Lisa Park", role: "CEO", linkedin: "https://linkedin.com/in/lisapark" },
      { name: "James Liu", role: "CTO", linkedin: "https://linkedin.com/in/jamesliu" }
    ],
    signals: [
      { type: "funding", title: "Raised $18M Series A from ARCH Venture", date: "2025-05-12", source: "BioPharma Dive" },
      { type: "product", title: "FDA clearance for TrialMatch AI", date: "2025-09-20", source: "Press Release" }
    ]
  },
  {
    id: "5",
    name: "CodePilot",
    slug: "codepilot",
    description: "Developer productivity platform with AI code review, automated testing suggestions, and intelligent CI/CD pipeline optimization.",
    website: "https://codepilot.dev",
    logo: "CP",
    industry: "DevTools",
    stage: "Seed",
    location: { city: "Austin", country: "USA" },
    foundedYear: 2023,
    employeeCount: 12,
    totalFunding: "$4M",
    lastRoundDate: "2025-01-10",
    tags: ["DevTools", "AI", "Developer Productivity", "CI/CD"],
    founders: [
      { name: "Alex Morgan", role: "CEO", linkedin: "https://linkedin.com/in/alexmorgan" },
      { name: "Priya Sharma", role: "CTO", linkedin: "https://linkedin.com/in/priyasharma" }
    ],
    signals: [
      { type: "funding", title: "Raised $4M Seed from Y Combinator", date: "2025-01-10", source: "YC Blog" },
      { type: "product", title: "Launched VS Code extension, 10K installs in week 1", date: "2025-04-15", source: "Product Hunt" }
    ]
  },
  {
    id: "6",
    name: "SupplyMind",
    slug: "supplymind",
    description: "AI-driven supply chain optimization platform using real-time data to predict disruptions, optimize inventory, and automate procurement.",
    website: "https://supplymind.co",
    logo: "SM",
    industry: "SaaS",
    stage: "Series A",
    location: { city: "Chicago", country: "USA" },
    foundedYear: 2021,
    employeeCount: 65,
    totalFunding: "$15M",
    lastRoundDate: "2025-04-08",
    tags: ["Supply Chain", "AI", "Enterprise", "Logistics"],
    founders: [
      { name: "David Kim", role: "CEO", linkedin: "https://linkedin.com/in/davidkim" },
      { name: "Maria Garcia", role: "CPO", linkedin: "https://linkedin.com/in/mariagarcia" }
    ],
    signals: [
      { type: "funding", title: "Raised $15M Series A from Lightspeed", date: "2025-04-08", source: "Crunchbase" },
      { type: "partnership", title: "Walmart pilot program announcement", date: "2025-08-22", source: "Reuters" },
      { type: "hiring", title: "VP Engineering hire from Amazon", date: "2025-10-15", source: "LinkedIn" }
    ]
  },
  {
    id: "7",
    name: "SecureLayer",
    slug: "securelayer",
    description: "Zero-trust security platform for cloud-native applications with runtime protection, automated threat detection, and compliance automation.",
    website: "https://securelayer.io",
    logo: "SL",
    industry: "Cybersecurity",
    stage: "Series B",
    location: { city: "Tel Aviv", country: "Israel" },
    foundedYear: 2020,
    employeeCount: 95,
    totalFunding: "$38M",
    lastRoundDate: "2025-07-20",
    tags: ["Cybersecurity", "Cloud", "Zero Trust", "Compliance"],
    founders: [
      { name: "Yael Cohen", role: "CEO", linkedin: "https://linkedin.com/in/yaelcohen" },
      { name: "Oren Levi", role: "CTO", linkedin: "https://linkedin.com/in/orenlevi" }
    ],
    signals: [
      { type: "funding", title: "Raised $25M Series B from CyberStarts", date: "2025-07-20", source: "TechCrunch" },
      { type: "product", title: "SOC2 automation module launched", date: "2025-11-01", source: "Blog" }
    ]
  },
  {
    id: "8",
    name: "EduVerse",
    slug: "eduverse",
    description: "Immersive learning platform combining VR/AR with adaptive AI tutoring for K-12 STEM education in schools and homeschool environments.",
    website: "https://eduverse.com",
    logo: "EV",
    industry: "EdTech",
    stage: "Seed",
    location: { city: "Seattle", country: "USA" },
    foundedYear: 2024,
    employeeCount: 8,
    totalFunding: "$2M",
    lastRoundDate: "2025-02-28",
    tags: ["EdTech", "VR/AR", "AI", "K-12"],
    founders: [
      { name: "Jordan Ellis", role: "CEO", linkedin: "https://linkedin.com/in/jordanellis" }
    ],
    signals: [
      { type: "funding", title: "Raised $2M pre-seed from EdTech Fund", date: "2025-02-28", source: "EdSurge" },
      { type: "product", title: "Beta launch with 50 schools", date: "2025-06-15", source: "Press Release" }
    ]
  },
  {
    id: "9",
    name: "FarmOS",
    slug: "farmos",
    description: "Precision agriculture platform using satellite imagery and IoT sensors for crop monitoring, yield prediction, and resource optimization.",
    website: "https://farmos.ag",
    logo: "FO",
    industry: "AgriTech",
    stage: "Series A",
    location: { city: "Des Moines", country: "USA" },
    foundedYear: 2021,
    employeeCount: 40,
    totalFunding: "$10M",
    lastRoundDate: "2025-05-30",
    tags: ["AgriTech", "IoT", "Satellite", "Precision Agriculture"],
    founders: [
      { name: "Robert Hayes", role: "CEO", linkedin: "https://linkedin.com/in/roberthayes" },
      { name: "Amanda Cruz", role: "CTO", linkedin: "https://linkedin.com/in/amandacruz" }
    ],
    signals: [
      { type: "funding", title: "Raised $10M Series A from AgFunder", date: "2025-05-30", source: "AgFunder News" },
      { type: "product", title: "Expanded to Brazil and India markets", date: "2025-09-10", source: "Blog" }
    ]
  },
  {
    id: "10",
    name: "LegalMind",
    slug: "legalmind",
    description: "AI contract analysis and management platform for law firms and legal departments, automating review, redlining, and compliance checks.",
    website: "https://legalmind.ai",
    logo: "LM",
    industry: "LegalTech",
    stage: "Seed",
    location: { city: "New York", country: "USA" },
    foundedYear: 2023,
    employeeCount: 15,
    totalFunding: "$5M",
    lastRoundDate: "2025-04-01",
    tags: ["LegalTech", "AI", "Contract Management", "Compliance"],
    founders: [
      { name: "Nicole Adams", role: "CEO", linkedin: "https://linkedin.com/in/nicoleadams" },
      { name: "Ben Schwartz", role: "CTO", linkedin: "https://linkedin.com/in/benschwartz" }
    ],
    signals: [
      { type: "funding", title: "Raised $5M Seed from Bessemer", date: "2025-04-01", source: "Crunchbase" },
      { type: "product", title: "Launched AI clause library with 10K templates", date: "2025-07-20", source: "Product Hunt" }
    ]
  },
  {
    id: "11",
    name: "CloudKitchen OS",
    slug: "cloudkitchen-os",
    description: "Operating system for ghost kitchens — menu optimization, multi-platform order aggregation, kitchen workflow management, and delivery logistics.",
    website: "https://cloudkitchenos.com",
    logo: "CK",
    industry: "FoodTech",
    stage: "Pre-Seed",
    location: { city: "Mumbai", country: "India" },
    foundedYear: 2024,
    employeeCount: 6,
    totalFunding: "$800K",
    lastRoundDate: "2025-01-15",
    tags: ["FoodTech", "Marketplace", "Operations", "Delivery"],
    founders: [
      { name: "Arjun Mehta", role: "CEO", linkedin: "https://linkedin.com/in/arjunmehta" },
      { name: "Sneha Reddy", role: "CTO", linkedin: "https://linkedin.com/in/snehareddy" }
    ],
    signals: [
      { type: "funding", title: "Raised $800K pre-seed from angel syndicate", date: "2025-01-15", source: "Inc42" },
      { type: "product", title: "Live in 25 kitchens across Mumbai", date: "2025-05-01", source: "YourStory" }
    ]
  },
  {
    id: "12",
    name: "VoiceAI Labs",
    slug: "voiceai-labs",
    description: "Conversational AI platform for customer service automation with human-like voice agents that handle complex support interactions.",
    website: "https://voiceailabs.com",
    logo: "VA",
    industry: "AI/ML",
    stage: "Series A",
    location: { city: "San Francisco", country: "USA" },
    foundedYear: 2022,
    employeeCount: 50,
    totalFunding: "$14M",
    lastRoundDate: "2025-08-05",
    tags: ["AI", "Voice", "Customer Service", "Automation"],
    founders: [
      { name: "Chris Wu", role: "CEO", linkedin: "https://linkedin.com/in/chriswu" },
      { name: "Diana Foster", role: "CTO", linkedin: "https://linkedin.com/in/dianafoster" }
    ],
    signals: [
      { type: "funding", title: "Raised $14M Series A from Greylock", date: "2025-08-05", source: "TechCrunch" },
      { type: "hiring", title: "Hiring 15 ML engineers", date: "2025-10-20", source: "LinkedIn" },
      { type: "product", title: "Launched multilingual support (12 languages)", date: "2025-12-01", source: "Blog" }
    ]
  },
  {
    id: "13",
    name: "PropelHR",
    slug: "propelhr",
    description: "All-in-one HR platform for SMBs in Southeast Asia — payroll, compliance, benefits, and employee engagement in a single dashboard.",
    website: "https://propelhr.com",
    logo: "PH",
    industry: "SaaS",
    stage: "Seed",
    location: { city: "Singapore", country: "Singapore" },
    foundedYear: 2023,
    employeeCount: 22,
    totalFunding: "$4.5M",
    lastRoundDate: "2025-06-10",
    tags: ["HR", "SaaS", "SMB", "Southeast Asia"],
    founders: [
      { name: "Wei Lin", role: "CEO", linkedin: "https://linkedin.com/in/weilin" },
      { name: "Kai Tan", role: "CTO", linkedin: "https://linkedin.com/in/kaitan" }
    ],
    signals: [
      { type: "funding", title: "Raised $4.5M Seed from East Ventures", date: "2025-06-10", source: "TechInAsia" },
      { type: "product", title: "Expanded to Philippines and Vietnam", date: "2025-09-15", source: "Blog" }
    ]
  },
  {
    id: "14",
    name: "ConstructAI",
    slug: "constructai",
    description: "AI-powered project management for construction companies — visual progress tracking, safety compliance, and budget forecasting using drone + sensor data.",
    website: "https://constructai.co",
    logo: "CA",
    industry: "Construction Tech",
    stage: "Series A",
    location: { city: "Denver", country: "USA" },
    foundedYear: 2021,
    employeeCount: 35,
    totalFunding: "$11M",
    lastRoundDate: "2025-03-15",
    tags: ["Construction", "AI", "Drones", "Project Management"],
    founders: [
      { name: "Mark Robinson", role: "CEO", linkedin: "https://linkedin.com/in/markrobinson" },
      { name: "Laura Chen", role: "CTO", linkedin: "https://linkedin.com/in/laurachen" }
    ],
    signals: [
      { type: "funding", title: "Raised $11M Series A from Brick & Mortar Ventures", date: "2025-03-15", source: "Crunchbase" },
      { type: "partnership", title: "Deployed at 3 major Turner Construction sites", date: "2025-07-01", source: "ENR" }
    ]
  },
  {
    id: "15",
    name: "NeuroPath",
    slug: "neuropath",
    description: "Digital therapeutics platform for neurological conditions, combining FDA-cleared cognitive exercises with personalized treatment plans.",
    website: "https://neuropath.health",
    logo: "NP",
    industry: "HealthTech",
    stage: "Seed",
    location: { city: "San Diego", country: "USA" },
    foundedYear: 2023,
    employeeCount: 14,
    totalFunding: "$6M",
    lastRoundDate: "2025-02-15",
    tags: ["HealthTech", "Digital Therapeutics", "Neurology", "FDA"],
    founders: [
      { name: "Dr. Rachel Green", role: "CEO", linkedin: "https://linkedin.com/in/rachelgreen" }
    ],
    signals: [
      { type: "funding", title: "Raised $6M Seed from Deerfield", date: "2025-02-15", source: "FierceBiotech" },
      { type: "product", title: "FDA Breakthrough Device designation", date: "2025-06-20", source: "Press Release" }
    ]
  },
  {
    id: "16",
    name: "DataMesh",
    slug: "datamesh",
    description: "Data governance and observability platform enabling enterprise teams to build reliable data pipelines with automated quality monitoring.",
    website: "https://datamesh.io",
    logo: "DM",
    industry: "DevTools",
    stage: "Series A",
    location: { city: "Berlin", country: "Germany" },
    foundedYear: 2022,
    employeeCount: 42,
    totalFunding: "$13M",
    lastRoundDate: "2025-07-01",
    tags: ["Data", "DevTools", "Observability", "Enterprise"],
    founders: [
      { name: "Felix Schmidt", role: "CEO", linkedin: "https://linkedin.com/in/felixschmidt" },
      { name: "Anna Mueller", role: "CTO", linkedin: "https://linkedin.com/in/annamueller" }
    ],
    signals: [
      { type: "funding", title: "Raised $13M Series A from Index Ventures", date: "2025-07-01", source: "EU-Startups" },
      { type: "product", title: "Open-sourced core monitoring engine", date: "2025-10-10", source: "GitHub" }
    ]
  },
  {
    id: "17",
    name: "RoboFleet",
    slug: "robofleet",
    description: "Autonomous delivery robot fleet management — last-mile delivery orchestration, fleet monitoring, and route optimization for retail and grocery.",
    website: "https://robofleet.ai",
    logo: "RF",
    industry: "Robotics",
    stage: "Series B",
    location: { city: "Pittsburgh", country: "USA" },
    foundedYear: 2019,
    employeeCount: 150,
    totalFunding: "$52M",
    lastRoundDate: "2025-09-01",
    tags: ["Robotics", "Autonomous", "Delivery", "Logistics"],
    founders: [
      { name: "Dr. Kevin Park", role: "CEO", linkedin: "https://linkedin.com/in/kevinpark" },
      { name: "Sarah Mitchell", role: "COO", linkedin: "https://linkedin.com/in/sarahmitchell" }
    ],
    signals: [
      { type: "funding", title: "Raised $35M Series B from Khosla Ventures", date: "2025-09-01", source: "TechCrunch" },
      { type: "product", title: "Fleet expanded to 500 robots across 12 cities", date: "2025-11-15", source: "Blog" },
      { type: "partnership", title: "Kroger partnership for grocery delivery", date: "2025-12-10", source: "Reuters" }
    ]
  },
  {
    id: "18",
    name: "FinanceGPT",
    slug: "financegpt",
    description: "AI financial analyst for SMBs — automated bookkeeping, cash flow forecasting, scenario planning, and board-ready financial reports.",
    website: "https://financegpt.com",
    logo: "FG",
    industry: "Fintech",
    stage: "Seed",
    location: { city: "Toronto", country: "Canada" },
    foundedYear: 2024,
    employeeCount: 10,
    totalFunding: "$3M",
    lastRoundDate: "2025-03-01",
    tags: ["Fintech", "AI", "Accounting", "SMB"],
    founders: [
      { name: "Emily Zhang", role: "CEO", linkedin: "https://linkedin.com/in/emilyzhang" },
      { name: "Ryan O'Brien", role: "CTO", linkedin: "https://linkedin.com/in/ryanobrien" }
    ],
    signals: [
      { type: "funding", title: "Raised $3M Seed from Golden Ventures", date: "2025-03-01", source: "BetaKit" },
      { type: "product", title: "QuickBooks + Xero integrations launched", date: "2025-06-01", source: "Product Hunt" }
    ]
  },
  {
    id: "19",
    name: "SolarGrid",
    slug: "solargrid",
    description: "B2B solar energy marketplace matching commercial buildings with solar installers, with AI-powered site assessment and financing tools.",
    website: "https://solargrid.energy",
    logo: "SG",
    industry: "Climate",
    stage: "Series A",
    location: { city: "Los Angeles", country: "USA" },
    foundedYear: 2021,
    employeeCount: 48,
    totalFunding: "$16M",
    lastRoundDate: "2025-08-10",
    tags: ["Climate", "Solar", "Marketplace", "Clean Energy"],
    founders: [
      { name: "Jake Peterson", role: "CEO", linkedin: "https://linkedin.com/in/jakepeterson" },
      { name: "Mia Hernandez", role: "COO", linkedin: "https://linkedin.com/in/miahernandez" }
    ],
    signals: [
      { type: "funding", title: "Raised $16M Series A from Breakthrough Energy", date: "2025-08-10", source: "Bloomberg" },
      { type: "product", title: "Launched in Texas, Florida, and Arizona", date: "2025-11-01", source: "Solar Power World" }
    ]
  },
  {
    id: "20",
    name: "TravelStack",
    slug: "travelstack",
    description: "API-first travel infrastructure platform — aggregates flights, hotels, and experiences into a unified booking engine for travel startups and agencies.",
    website: "https://travelstack.io",
    logo: "TS",
    industry: "Travel",
    stage: "Seed",
    location: { city: "Dubai", country: "UAE" },
    foundedYear: 2023,
    employeeCount: 20,
    totalFunding: "$4M",
    lastRoundDate: "2025-05-15",
    tags: ["Travel", "API", "Infrastructure", "B2B"],
    founders: [
      { name: "Omar Al-Hassan", role: "CEO", linkedin: "https://linkedin.com/in/omarh" },
      { name: "Fatima Nazari", role: "CTO", linkedin: "https://linkedin.com/in/fatimanazari" }
    ],
    signals: [
      { type: "funding", title: "Raised $4M Seed from Global Founders Capital", date: "2025-05-15", source: "Wamda" },
      { type: "product", title: "Processing 50K bookings/month", date: "2025-09-20", source: "Blog" }
    ]
  },
  {
    id: "21",
    name: "StyleAI",
    slug: "styleai",
    description: "Personalized fashion recommendation engine for e-commerce brands, using computer vision to analyze style preferences and body measurements.",
    website: "https://styleai.fashion",
    logo: "SA",
    industry: "AI/ML",
    stage: "Pre-Seed",
    location: { city: "Paris", country: "France" },
    foundedYear: 2024,
    employeeCount: 5,
    totalFunding: "$1.2M",
    lastRoundDate: "2025-01-20",
    tags: ["AI", "Fashion", "E-commerce", "Computer Vision"],
    founders: [
      { name: "Claire Dubois", role: "CEO", linkedin: "https://linkedin.com/in/clairedubois" }
    ],
    signals: [
      { type: "funding", title: "Raised $1.2M pre-seed from Kima Ventures", date: "2025-01-20", source: "EU-Startups" }
    ]
  },
  {
    id: "22",
    name: "ChainProof",
    slug: "chainproof",
    description: "Blockchain-based supply chain verification for luxury goods and pharmaceuticals — anti-counterfeiting with QR-based consumer verification.",
    website: "https://chainproof.io",
    logo: "CP",
    industry: "Web3",
    stage: "Seed",
    location: { city: "Zurich", country: "Switzerland" },
    foundedYear: 2022,
    employeeCount: 25,
    totalFunding: "$7M",
    lastRoundDate: "2025-04-20",
    tags: ["Blockchain", "Supply Chain", "Anti-Counterfeit", "Luxury"],
    founders: [
      { name: "Lucas Berger", role: "CEO", linkedin: "https://linkedin.com/in/lucasberger" },
      { name: "Sophie Keller", role: "CTO", linkedin: "https://linkedin.com/in/sophiekeller" }
    ],
    signals: [
      { type: "funding", title: "Raised $7M Seed from Polychain Capital", date: "2025-04-20", source: "CoinDesk" },
      { type: "partnership", title: "Pilot with LVMH for handbag authentication", date: "2025-08-01", source: "Vogue Business" }
    ]
  },
  {
    id: "23",
    name: "FleetPulse",
    slug: "fleetpulse",
    description: "Fleet electrification platform helping logistics companies transition to EVs with route optimization, charging scheduling, and TCO analysis.",
    website: "https://fleetpulse.com",
    logo: "FP",
    industry: "Climate",
    stage: "Series A",
    location: { city: "Amsterdam", country: "Netherlands" },
    foundedYear: 2022,
    employeeCount: 38,
    totalFunding: "$12M",
    lastRoundDate: "2025-06-25",
    tags: ["Climate", "EV", "Fleet Management", "Logistics"],
    founders: [
      { name: "Jan de Vries", role: "CEO", linkedin: "https://linkedin.com/in/jandevries" },
      { name: "Eva Bakker", role: "CTO", linkedin: "https://linkedin.com/in/evabakker" }
    ],
    signals: [
      { type: "funding", title: "Raised $12M Series A from SET Ventures", date: "2025-06-25", source: "TechEU" },
      { type: "product", title: "Managing 2,000+ EVs across Europe", date: "2025-10-01", source: "Blog" }
    ]
  },
  {
    id: "24",
    name: "QuizWiz",
    slug: "quizwiz",
    description: "Gamified assessment platform for corporate training — adaptive quizzes, leaderboards, skill gap analysis, and certification management.",
    website: "https://quizwiz.com",
    logo: "QW",
    industry: "EdTech",
    stage: "Pre-Seed",
    location: { city: "Bangalore", country: "India" },
    foundedYear: 2024,
    employeeCount: 7,
    totalFunding: "$500K",
    lastRoundDate: "2025-02-01",
    tags: ["EdTech", "Gamification", "Corporate Training", "SaaS"],
    founders: [
      { name: "Vikram Singh", role: "CEO", linkedin: "https://linkedin.com/in/vikramsingh" },
      { name: "Neha Gupta", role: "CTO", linkedin: "https://linkedin.com/in/nehagupta" }
    ],
    signals: [
      { type: "funding", title: "Raised $500K angel round", date: "2025-02-01", source: "Inc42" }
    ]
  },
  {
    id: "25",
    name: "LogiSense",
    slug: "logisense",
    description: "Warehouse automation SaaS — pick path optimization, inventory forecasting, and robotics integration for 3PL and fulfillment centers.",
    website: "https://logisense.io",
    logo: "LS",
    industry: "SaaS",
    stage: "Series A",
    location: { city: "Atlanta", country: "USA" },
    foundedYear: 2021,
    employeeCount: 55,
    totalFunding: "$14M",
    lastRoundDate: "2025-07-15",
    tags: ["Logistics", "SaaS", "Automation", "Warehousing"],
    founders: [
      { name: "Tyler Brooks", role: "CEO", linkedin: "https://linkedin.com/in/tylerbrooks" },
      { name: "Jessica Wong", role: "CTO", linkedin: "https://linkedin.com/in/jessicawong" }
    ],
    signals: [
      { type: "funding", title: "Raised $14M Series A from Craft Ventures", date: "2025-07-15", source: "TechCrunch" },
      { type: "product", title: "Integrated with 6 major WMS platforms", date: "2025-10-20", source: "Supply Chain Dive" }
    ]
  },
  {
    id: "26",
    name: "BiomeAI",
    slug: "biomeai",
    description: "Personalized nutrition platform analyzing gut microbiome data with AI to generate custom dietary plans and supplement recommendations.",
    website: "https://biomeai.com",
    logo: "BA",
    industry: "HealthTech",
    stage: "Seed",
    location: { city: "Stockholm", country: "Sweden" },
    foundedYear: 2023,
    employeeCount: 16,
    totalFunding: "$5.5M",
    lastRoundDate: "2025-05-01",
    tags: ["HealthTech", "AI", "Nutrition", "Microbiome"],
    founders: [
      { name: "Erik Lindgren", role: "CEO", linkedin: "https://linkedin.com/in/eriklindgren" },
      { name: "Astrid Johansson", role: "CSO", linkedin: "https://linkedin.com/in/astridj" }
    ],
    signals: [
      { type: "funding", title: "Raised $5.5M Seed from Northzone", date: "2025-05-01", source: "Sifted" },
      { type: "product", title: "100K microbiome samples analyzed", date: "2025-09-01", source: "Blog" }
    ]
  },
  {
    id: "27",
    name: "AdaptLearn",
    slug: "adaptlearn",
    description: "AI tutoring platform for higher education — real-time concept mapping, adaptive problem sets, and professor-facing analytics dashboard.",
    website: "https://adaptlearn.edu",
    logo: "AL",
    industry: "EdTech",
    stage: "Series A",
    location: { city: "Cambridge", country: "USA" },
    foundedYear: 2021,
    employeeCount: 45,
    totalFunding: "$11M",
    lastRoundDate: "2025-06-15",
    tags: ["EdTech", "AI", "Higher Education", "Analytics"],
    founders: [
      { name: "Dr. Maya Thompson", role: "CEO", linkedin: "https://linkedin.com/in/mayathompson" },
      { name: "Kevin Li", role: "CTO", linkedin: "https://linkedin.com/in/kevinli" }
    ],
    signals: [
      { type: "funding", title: "Raised $11M Series A from Owl Ventures", date: "2025-06-15", source: "EdSurge" },
      { type: "partnership", title: "Deployed at MIT, Stanford, and Georgia Tech", date: "2025-10-01", source: "Press Release" }
    ]
  },
  {
    id: "28",
    name: "CarbonTrace",
    slug: "carbontrace",
    description: "API-first carbon footprint calculator for e-commerce — calculates per-product emissions at checkout and powers carbon offset integrations.",
    website: "https://carbontrace.com",
    logo: "CT",
    industry: "Climate",
    stage: "Seed",
    location: { city: "Portland", country: "USA" },
    foundedYear: 2023,
    employeeCount: 11,
    totalFunding: "$3M",
    lastRoundDate: "2025-04-10",
    tags: ["Climate", "API", "E-commerce", "Carbon Offset"],
    founders: [
      { name: "Zoe Harper", role: "CEO", linkedin: "https://linkedin.com/in/zoeharper" }
    ],
    signals: [
      { type: "funding", title: "Raised $3M Seed from Congruent Ventures", date: "2025-04-10", source: "GreenBiz" },
      { type: "product", title: "Shopify app with 2K+ merchant installs", date: "2025-08-15", source: "Product Hunt" }
    ]
  },
  {
    id: "29",
    name: "CyberGuard",
    slug: "cyberguard",
    description: "Managed detection and response (MDR) for SMBs — 24/7 threat monitoring, incident response, and security compliance in a single subscription.",
    website: "https://cyberguard.io",
    logo: "CG",
    industry: "Cybersecurity",
    stage: "Series A",
    location: { city: "Washington DC", country: "USA" },
    foundedYear: 2021,
    employeeCount: 60,
    totalFunding: "$16M",
    lastRoundDate: "2025-08-20",
    tags: ["Cybersecurity", "MDR", "SMB", "Compliance"],
    founders: [
      { name: "Marcus Washington", role: "CEO", linkedin: "https://linkedin.com/in/marcusw" },
      { name: "Elena Petrov", role: "CTO", linkedin: "https://linkedin.com/in/elenap" }
    ],
    signals: [
      { type: "funding", title: "Raised $16M Series A from Rally Ventures", date: "2025-08-20", source: "Dark Reading" },
      { type: "product", title: "SOC-as-a-Service launched for 500+ SMBs", date: "2025-11-10", source: "Blog" }
    ]
  },
  {
    id: "30",
    name: "AgriDrone",
    slug: "agridrone",
    description: "Autonomous drone-as-a-service for crop spraying and field mapping in emerging markets, reducing pesticide usage by 60% through precision application.",
    website: "https://agridrone.tech",
    logo: "AD",
    industry: "AgriTech",
    stage: "Pre-Seed",
    location: { city: "Nairobi", country: "Kenya" },
    foundedYear: 2024,
    employeeCount: 9,
    totalFunding: "$1.5M",
    lastRoundDate: "2025-03-10",
    tags: ["AgriTech", "Drones", "Africa", "Sustainability"],
    founders: [
      { name: "Samuel Ochieng", role: "CEO", linkedin: "https://linkedin.com/in/samuelochieng" },
      { name: "Grace Wanjiku", role: "CTO", linkedin: "https://linkedin.com/in/gracewanjiku" }
    ],
    signals: [
      { type: "funding", title: "Raised $1.5M from Future Africa", date: "2025-03-10", source: "TechCabal" },
      { type: "product", title: "Serving 200+ farms across Kenya and Uganda", date: "2025-07-15", source: "Blog" }
    ]
  },
  {
    id: "31",
    name: "Synthesia Health",
    slug: "synthesia-health",
    description: "Synthetic data platform for healthcare AI — generates privacy-safe patient records, medical images, and clinical trial data for ML model training.",
    website: "https://synthesia.health",
    logo: "SH",
    industry: "HealthTech",
    stage: "Seed",
    location: { city: "Oxford", country: "UK" },
    foundedYear: 2023,
    employeeCount: 19,
    totalFunding: "$6.5M",
    lastRoundDate: "2025-05-20",
    tags: ["HealthTech", "AI", "Synthetic Data", "Privacy"],
    founders: [
      { name: "Dr. James Wright", role: "CEO", linkedin: "https://linkedin.com/in/jameswright" },
      { name: "Dr. Fiona Campbell", role: "CTO", linkedin: "https://linkedin.com/in/fionacampbell" }
    ],
    signals: [
      { type: "funding", title: "Raised $6.5M Seed from Hoxton Ventures", date: "2025-05-20", source: "Sifted" },
      { type: "partnership", title: "Research partnership with NHS Digital", date: "2025-09-10", source: "Press Release" }
    ]
  },
  {
    id: "32",
    name: "DesignOps",
    slug: "designops",
    description: "Design system management platform — version control for design tokens, automated Figma-to-code sync, and cross-team component governance.",
    website: "https://designops.dev",
    logo: "DO",
    industry: "DevTools",
    stage: "Seed",
    location: { city: "Copenhagen", country: "Denmark" },
    foundedYear: 2023,
    employeeCount: 13,
    totalFunding: "$4M",
    lastRoundDate: "2025-03-25",
    tags: ["DevTools", "Design Systems", "Developer Experience", "Collaboration"],
    founders: [
      { name: "Anders Nielsen", role: "CEO", linkedin: "https://linkedin.com/in/andersniel" },
      { name: "Lena Eriksson", role: "CTO", linkedin: "https://linkedin.com/in/lenaeriksson" }
    ],
    signals: [
      { type: "funding", title: "Raised $4M Seed from Moonfire Ventures", date: "2025-03-25", source: "TechEU" },
      { type: "product", title: "Figma plugin hit 5K weekly active users", date: "2025-07-10", source: "Product Hunt" }
    ]
  },
  {
    id: "33",
    name: "RetailIQ",
    slug: "retailiq",
    description: "Computer vision analytics for brick-and-mortar retail — foot traffic analysis, shelf monitoring, queue management, and conversion optimization.",
    website: "https://retailiq.ai",
    logo: "RQ",
    industry: "AI/ML",
    stage: "Series A",
    location: { city: "Toronto", country: "Canada" },
    foundedYear: 2022,
    employeeCount: 40,
    totalFunding: "$12M",
    lastRoundDate: "2025-06-30",
    tags: ["AI", "Retail", "Computer Vision", "Analytics"],
    founders: [
      { name: "Nathan Park", role: "CEO", linkedin: "https://linkedin.com/in/nathanpark" },
      { name: "Isabelle Roy", role: "CTO", linkedin: "https://linkedin.com/in/isabelleroy" }
    ],
    signals: [
      { type: "funding", title: "Raised $12M Series A from Radical Ventures", date: "2025-06-30", source: "BetaKit" },
      { type: "partnership", title: "Deployed across 150 Loblaws stores", date: "2025-10-15", source: "Retail Insider" }
    ]
  },
  {
    id: "34",
    name: "NomadPay",
    slug: "nomadpay",
    description: "Global payroll and compliance for remote-first companies — contractor payments, EOR services, and tax withholding across 80+ countries.",
    website: "https://nomadpay.com",
    logo: "NP",
    industry: "Fintech",
    stage: "Series A",
    location: { city: "Lisbon", country: "Portugal" },
    foundedYear: 2022,
    employeeCount: 55,
    totalFunding: "$15M",
    lastRoundDate: "2025-07-05",
    tags: ["Fintech", "Remote Work", "Payroll", "Global"],
    founders: [
      { name: "Carlos Mendes", role: "CEO", linkedin: "https://linkedin.com/in/carlosmendes" },
      { name: "Ana Silva", role: "CTO", linkedin: "https://linkedin.com/in/anasilva" }
    ],
    signals: [
      { type: "funding", title: "Raised $15M Series A from Balderton", date: "2025-07-05", source: "Sifted" },
      { type: "product", title: "Expanded to 80 countries, 3K+ contractors", date: "2025-11-01", source: "Blog" }
    ]
  },
  {
    id: "35",
    name: "QuantumLeap",
    slug: "quantumleap",
    description: "Quantum computing-as-a-service platform making quantum algorithms accessible to enterprises through a drag-and-drop workflow builder.",
    website: "https://quantumleap.dev",
    logo: "QL",
    industry: "Deep Tech",
    stage: "Seed",
    location: { city: "Melbourne", country: "Australia" },
    foundedYear: 2023,
    employeeCount: 11,
    totalFunding: "$5M",
    lastRoundDate: "2025-04-15",
    tags: ["Quantum Computing", "Deep Tech", "Cloud", "Enterprise"],
    founders: [
      { name: "Dr. Alice Nguyen", role: "CEO", linkedin: "https://linkedin.com/in/alicenguyen" },
      { name: "Dr. Tom Hardy", role: "CTO", linkedin: "https://linkedin.com/in/tomhardy" }
    ],
    signals: [
      { type: "funding", title: "Raised $5M Seed from Blackbird Ventures", date: "2025-04-15", source: "Startup Daily" },
      { type: "product", title: "20 enterprise pilot programs running", date: "2025-08-20", source: "Blog" }
    ]
  },
  {
    id: "36",
    name: "InsureFlow",
    slug: "insureflow",
    description: "Embedded insurance infrastructure — APIs for fintech and e-commerce platforms to offer contextual insurance products at point of sale.",
    website: "https://insureflow.com",
    logo: "IF",
    industry: "Fintech",
    stage: "Series A",
    location: { city: "London", country: "UK" },
    foundedYear: 2021,
    employeeCount: 50,
    totalFunding: "$18M",
    lastRoundDate: "2025-09-10",
    tags: ["Fintech", "Insurance", "API", "Embedded Finance"],
    founders: [
      { name: "Oliver Taylor", role: "CEO", linkedin: "https://linkedin.com/in/olivertaylor" },
      { name: "Priya Patel", role: "CTO", linkedin: "https://linkedin.com/in/priyapatel2" }
    ],
    signals: [
      { type: "funding", title: "Raised $18M Series A from Ribbit Capital", date: "2025-09-10", source: "TechCrunch" },
      { type: "product", title: "Powering insurance for 30+ fintech platforms", date: "2025-12-01", source: "Coverager" }
    ]
  },
  {
    id: "37",
    name: "MineralAI",
    slug: "mineralai",
    description: "AI-powered mineral exploration platform using geospatial data, satellite imagery, and ML to identify high-probability mining sites for critical minerals.",
    website: "https://mineralai.com",
    logo: "MA",
    industry: "Deep Tech",
    stage: "Seed",
    location: { city: "Vancouver", country: "Canada" },
    foundedYear: 2023,
    employeeCount: 14,
    totalFunding: "$6M",
    lastRoundDate: "2025-05-10",
    tags: ["Deep Tech", "Mining", "AI", "Geospatial"],
    founders: [
      { name: "Dr. Steve Rogers", role: "CEO", linkedin: "https://linkedin.com/in/steverogers" }
    ],
    signals: [
      { type: "funding", title: "Raised $6M Seed from DCVC", date: "2025-05-10", source: "Mining.com" }
    ]
  },
  {
    id: "38",
    name: "TeleMedic",
    slug: "telemedic",
    description: "Telemedicine platform for rural and underserved areas in Latin America — AI triage, video consultations, and pharmacy delivery integration.",
    website: "https://telemedic.lat",
    logo: "TM",
    industry: "HealthTech",
    stage: "Seed",
    location: { city: "Mexico City", country: "Mexico" },
    foundedYear: 2023,
    employeeCount: 30,
    totalFunding: "$5M",
    lastRoundDate: "2025-04-25",
    tags: ["HealthTech", "Telemedicine", "LATAM", "Rural Health"],
    founders: [
      { name: "Dr. Sofia Ramirez", role: "CEO", linkedin: "https://linkedin.com/in/sofiaramirez" },
      { name: "Diego Valenzuela", role: "CTO", linkedin: "https://linkedin.com/in/diegov" }
    ],
    signals: [
      { type: "funding", title: "Raised $5M Seed from ALLVP", date: "2025-04-25", source: "Contxto" },
      { type: "product", title: "100K consultations completed, 5 states", date: "2025-09-15", source: "Blog" }
    ]
  },
  {
    id: "39",
    name: "SpaceDock",
    slug: "spacedock",
    description: "On-orbit servicing platform — satellite life extension through refueling, repair, and debris removal using autonomous robotic systems.",
    website: "https://spacedock.space",
    logo: "SD",
    industry: "Space Tech",
    stage: "Series A",
    location: { city: "Houston", country: "USA" },
    foundedYear: 2020,
    employeeCount: 70,
    totalFunding: "$25M",
    lastRoundDate: "2025-08-01",
    tags: ["Space Tech", "Robotics", "Satellites", "Deep Tech"],
    founders: [
      { name: "Commander Ryan West", role: "CEO", linkedin: "https://linkedin.com/in/ryanwest" },
      { name: "Dr. Lin Zhao", role: "CTO", linkedin: "https://linkedin.com/in/linzhao" }
    ],
    signals: [
      { type: "funding", title: "Raised $25M Series A from Lux Capital", date: "2025-08-01", source: "SpaceNews" },
      { type: "partnership", title: "NASA SBIR Phase II contract awarded", date: "2025-11-20", source: "SpaceNews" }
    ]
  },
  {
    id: "40",
    name: "ShopFlow",
    slug: "shopflow",
    description: "AI-powered e-commerce personalization engine — dynamic pricing, product recommendations, and conversion optimization for D2C brands.",
    website: "https://shopflow.io",
    logo: "SF",
    industry: "SaaS",
    stage: "Seed",
    location: { city: "Austin", country: "USA" },
    foundedYear: 2023,
    employeeCount: 17,
    totalFunding: "$4M",
    lastRoundDate: "2025-03-05",
    tags: ["E-commerce", "AI", "D2C", "Personalization"],
    founders: [
      { name: "Rachel Kim", role: "CEO", linkedin: "https://linkedin.com/in/rachelkim" },
      { name: "Jake Miller", role: "CTO", linkedin: "https://linkedin.com/in/jakemiller" }
    ],
    signals: [
      { type: "funding", title: "Raised $4M Seed from Maveron", date: "2025-03-05", source: "Crunchbase" },
      { type: "product", title: "Driving $50M+ GMV for 200+ brands", date: "2025-08-01", source: "Blog" }
    ]
  },
  {
    id: "41",
    name: "BioForge",
    slug: "bioforge",
    description: "Synthetic biology platform for sustainable materials — engineered microorganisms producing bio-based alternatives to plastics and chemicals.",
    website: "https://bioforge.bio",
    logo: "BF",
    industry: "Climate",
    stage: "Series A",
    location: { city: "Boston", country: "USA" },
    foundedYear: 2021,
    employeeCount: 45,
    totalFunding: "$20M",
    lastRoundDate: "2025-07-25",
    tags: ["Climate", "Synthetic Biology", "Materials", "Deep Tech"],
    founders: [
      { name: "Dr. Kate Mitchell", role: "CEO", linkedin: "https://linkedin.com/in/katemitchell" },
      { name: "Dr. Paul Rivera", role: "CSO", linkedin: "https://linkedin.com/in/paulrivera" }
    ],
    signals: [
      { type: "funding", title: "Raised $20M Series A from Flagship Pioneering", date: "2025-07-25", source: "SynBioBeta" },
      { type: "product", title: "First pilot production run (10 tons)", date: "2025-11-01", source: "Press Release" }
    ]
  },
  {
    id: "42",
    name: "TranslatePro",
    slug: "translatepro",
    description: "Real-time translation platform for enterprise meetings — supports 40+ languages with domain-specific terminology for legal, medical, and finance.",
    website: "https://translatepro.ai",
    logo: "TP",
    industry: "AI/ML",
    stage: "Seed",
    location: { city: "Seoul", country: "South Korea" },
    foundedYear: 2023,
    employeeCount: 20,
    totalFunding: "$5M",
    lastRoundDate: "2025-04-30",
    tags: ["AI", "Translation", "Enterprise", "Communication"],
    founders: [
      { name: "Ji-Hoon Park", role: "CEO", linkedin: "https://linkedin.com/in/jihoonpark" },
      { name: "Min-Young Lee", role: "CTO", linkedin: "https://linkedin.com/in/minyounglee" }
    ],
    signals: [
      { type: "funding", title: "Raised $5M Seed from Strong Ventures", date: "2025-04-30", source: "KoreaTechDesk" },
      { type: "product", title: "Supporting 40 languages with 95% accuracy", date: "2025-09-01", source: "Blog" }
    ]
  },
  {
    id: "43",
    slug: "signseal",
    name: "SignSeal",
    description: "Open-source e-signature platform with blockchain notarization — GDPR-compliant, self-hosted option for European enterprises.",
    website: "https://signseal.eu",
    logo: "SS",
    industry: "SaaS",
    stage: "Pre-Seed",
    location: { city: "Tallinn", country: "Estonia" },
    foundedYear: 2024,
    employeeCount: 6,
    totalFunding: "$900K",
    lastRoundDate: "2025-02-10",
    tags: ["SaaS", "Open Source", "GDPR", "E-Signature"],
    founders: [
      { name: "Andrei Volkov", role: "CEO", linkedin: "https://linkedin.com/in/andreivolkov" }
    ],
    signals: [
      { type: "funding", title: "Raised $900K from Pipedrive founders", date: "2025-02-10", source: "Arctic Startup" }
    ]
  },
  {
    id: "44",
    name: "WasteNot",
    slug: "wastenot",
    description: "AI food waste reduction platform for restaurants and grocery chains — demand forecasting, dynamic markdown pricing, and surplus redistribution.",
    website: "https://wastenot.app",
    logo: "WN",
    industry: "Climate",
    stage: "Seed",
    location: { city: "Dublin", country: "Ireland" },
    foundedYear: 2023,
    employeeCount: 15,
    totalFunding: "$3.5M",
    lastRoundDate: "2025-05-05",
    tags: ["Climate", "Food Waste", "AI", "Sustainability"],
    founders: [
      { name: "Ciara O'Neill", role: "CEO", linkedin: "https://linkedin.com/in/ciaraoneill" },
      { name: "Sean Murphy", role: "CTO", linkedin: "https://linkedin.com/in/seanmurphy" }
    ],
    signals: [
      { type: "funding", title: "Raised $3.5M Seed from Sosv", date: "2025-05-05", source: "Silicon Republic" },
      { type: "product", title: "Reducing waste 40% across 300+ locations", date: "2025-09-20", source: "Blog" }
    ]
  },
  {
    id: "45",
    name: "GameForge",
    slug: "gameforge-ai",
    description: "AI game development platform — procedural content generation, NPC behavior authoring, and automated QA testing for indie game studios.",
    website: "https://gameforge.ai",
    logo: "GF",
    industry: "AI/ML",
    stage: "Seed",
    location: { city: "Helsinki", country: "Finland" },
    foundedYear: 2023,
    employeeCount: 12,
    totalFunding: "$3M",
    lastRoundDate: "2025-03-20",
    tags: ["AI", "Gaming", "Content Generation", "DevTools"],
    founders: [
      { name: "Mikko Virtanen", role: "CEO", linkedin: "https://linkedin.com/in/mikkov" },
      { name: "Sanna Korhonen", role: "CTO", linkedin: "https://linkedin.com/in/sannak" }
    ],
    signals: [
      { type: "funding", title: "Raised $3M Seed from Play Ventures", date: "2025-03-20", source: "PocketGamer" }
    ]
  },
  {
    id: "46",
    name: "OceanClean",
    slug: "oceanclean",
    description: "Autonomous ocean cleanup vessels using solar-powered drones to collect plastic waste, with AI-powered debris detection and routing.",
    website: "https://oceanclean.org",
    logo: "OC",
    industry: "Climate",
    stage: "Series A",
    location: { city: "Oslo", country: "Norway" },
    foundedYear: 2021,
    employeeCount: 35,
    totalFunding: "$14M",
    lastRoundDate: "2025-06-20",
    tags: ["Climate", "Ocean", "Robotics", "Impact"],
    founders: [
      { name: "Lars Eriksen", role: "CEO", linkedin: "https://linkedin.com/in/larseriksen" },
      { name: "Ingrid Solberg", role: "CTO", linkedin: "https://linkedin.com/in/ingridsolberg" }
    ],
    signals: [
      { type: "funding", title: "Raised $14M Series A from Planet First Partners", date: "2025-06-20", source: "TechEU" },
      { type: "product", title: "30 cleanup drones deployed across 5 oceans", date: "2025-10-15", source: "BBC News" }
    ]
  },
  {
    id: "47",
    name: "PetVet Connect",
    slug: "petvet-connect",
    description: "Virtual veterinary care platform — on-demand video consultations, prescription management, and pet health records for pet parents.",
    website: "https://petvetconnect.com",
    logo: "PV",
    industry: "HealthTech",
    stage: "Pre-Seed",
    location: { city: "Denver", country: "USA" },
    foundedYear: 2024,
    employeeCount: 8,
    totalFunding: "$1.5M",
    lastRoundDate: "2025-01-25",
    tags: ["HealthTech", "Pets", "Telemedicine", "Consumer"],
    founders: [
      { name: "Dr. Ashley Cole", role: "CEO", linkedin: "https://linkedin.com/in/ashleycole" }
    ],
    signals: [
      { type: "funding", title: "Raised $1.5M pre-seed", date: "2025-01-25", source: "Pet Business" }
    ]
  },
  {
    id: "48",
    name: "GridScale",
    slug: "gridscale",
    description: "Next-gen battery management system for grid-scale energy storage — AI-optimized charge/discharge cycles, predictive maintenance, and grid services.",
    website: "https://gridscale.energy",
    logo: "GS",
    industry: "Climate",
    stage: "Series A",
    location: { city: "Munich", country: "Germany" },
    foundedYear: 2022,
    employeeCount: 42,
    totalFunding: "$16M",
    lastRoundDate: "2025-08-15",
    tags: ["Climate", "Energy Storage", "Battery", "Grid"],
    founders: [
      { name: "Dr. Hans Weber", role: "CEO", linkedin: "https://linkedin.com/in/hansweber" },
      { name: "Dr. Lisa Braun", role: "CTO", linkedin: "https://linkedin.com/in/lisabraun" }
    ],
    signals: [
      { type: "funding", title: "Raised $16M Series A from World Fund", date: "2025-08-15", source: "EU-Startups" },
      { type: "partnership", title: "Managing 200MWh storage for E.ON", date: "2025-11-10", source: "Utility Dive" }
    ]
  },
  {
    id: "49",
    name: "MusixAI",
    slug: "musixai",
    description: "AI music production platform — generates stems, masters tracks, and provides real-time mixing suggestions for independent artists and producers.",
    website: "https://musixai.com",
    logo: "MX",
    industry: "AI/ML",
    stage: "Pre-Seed",
    location: { city: "Los Angeles", country: "USA" },
    foundedYear: 2024,
    employeeCount: 5,
    totalFunding: "$1M",
    lastRoundDate: "2025-02-20",
    tags: ["AI", "Music", "Creative Tools", "Audio"],
    founders: [
      { name: "Marcus Davis", role: "CEO", linkedin: "https://linkedin.com/in/marcusdavis" },
      { name: "Kim Nakamura", role: "CTO", linkedin: "https://linkedin.com/in/kimnakamura" }
    ],
    signals: [
      { type: "funding", title: "Raised $1M from Warner Music Group", date: "2025-02-20", source: "Music Business Worldwide" }
    ]
  },
  {
    id: "50",
    name: "DeliverEase",
    slug: "deliverease",
    description: "Last-mile delivery optimization platform for emerging markets — combining motorcycles, bikes, and pedestrian couriers with ML-based routing.",
    website: "https://deliverease.app",
    logo: "DE",
    industry: "SaaS",
    stage: "Seed",
    location: { city: "Lagos", country: "Nigeria" },
    foundedYear: 2023,
    employeeCount: 25,
    totalFunding: "$3M",
    lastRoundDate: "2025-04-05",
    tags: ["Logistics", "Last Mile", "Africa", "Marketplace"],
    founders: [
      { name: "Chidera Obi", role: "CEO", linkedin: "https://linkedin.com/in/chideraobi" },
      { name: "Funke Adebayo", role: "CTO", linkedin: "https://linkedin.com/in/funkeadebayo" }
    ],
    signals: [
      { type: "funding", title: "Raised $3M Seed from TLcom Capital", date: "2025-04-05", source: "TechCabal" },
      { type: "product", title: "100K deliveries/month in Lagos and Abuja", date: "2025-08-10", source: "Blog" }
    ]
  }
]

export default mockCompanies
