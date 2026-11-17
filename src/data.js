// ─────────────────────────────────────────────────────────────────────────────
//  YOUR PORTFOLIO CONTENT
//  Everything on the site is pulled from this one file. Edit freely — add or
//  remove items from the arrays and the page updates automatically.
//  (Pre-filled from your LinkedIn profile — tweak any wording you like.)
// ─────────────────────────────────────────────────────────────────────────────

export const profile = {
  name: "Kwan Hwa Tow",
  tagline:
    "Cybersecurity student at Nanyang Polytechnic — building full-stack systems and securing real-world infrastructure.",
  about:
    "I'm a second-year Information Technology student at Nanyang Polytechnic, specialising in cybersecurity. I like working on real systems: building full-stack platforms end to end, deploying servers and networks by hand, and making things more secure along the way. Most recently I co-built an operations-to-billing platform for an ambulance company, working directly with the client. I'm looking for a cybersecurity or IT internship where I can work on real systems and keep sharpening my security skills. Outside of tech, I compete in recurve archery, train Muay Thai, and play volleyball.",
  location: "Singapore",
  email: "kwanhwa87@gmail.com",
  socials: [
    { label: "LinkedIn", url: "https://www.linkedin.com/in/kwan-hwa-tow/" },
    { label: "GitHub", url: "https://github.com/Neutropils" },
    { label: "Email", url: "mailto:kwanhwa87@gmail.com" },
  ],
};

// Photos. Files live in /public/photos — swap them or add your own there.
export const photos = {
  // Full-width feature image shown right under the hero.
  feature: {
    src: "/photos/archery-action.jpg",
    caption: "POLITE 2026 — on the line at full draw.",
  },
  // Gallery of moments (shown in the Honors section).
  gallery: [
    {
      src: "/photos/gold-podium.jpg",
      caption: "Gold, 50m — top of the podium for Nanyang Polytechnic.",
    },
    {
      src: "/photos/team-celebrate.jpg",
      caption: "Celebrating the win with the NYP archery team.",
    },
  ],
};

// Three headline numbers for the hero.
export const stats = [
  { value: "3.9", label: "GPA, Y2S1" },
  { value: "3", label: "Projects built" },
  { value: "5", label: "Certifications" },
];

// Chronological record — work, education, and milestones. Newest first.
// kind: "work" | "education" | "milestone"
export const record = [
  {
    kind: "education",
    period: "2025 — 2027",
    title: "Diploma in Information Technology (Cybersecurity)",
    org: "Nanyang Polytechnic",
    detail:
      "Specialising in cybersecurity; Y2S1 GPA 3.9. Subcommittee member of the INFOSEC and SIT Clubs, and a competitive archer in the Archery CCA.",
  },
  {
    kind: "work",
    period: "Apr 2026 — Aug 2026",
    title: "All-Rounder Server",
    org: "Little Farms · Part-time",
    detail:
      "Served guests, took orders through the POS system, processed payments, and relayed dietary requests between guests and the kitchen.",
  },
  {
    kind: "work",
    period: "May 2024",
    title: "Sales Assistant",
    org: "PRISM · Freelance",
    detail:
      "Memorised a full product catalogue in a week for a tech event and earned a strong commission on the floor.",
  },
  {
    kind: "work",
    period: "Sep 2023 — Apr 2024",
    title: "IT Engineering Intern",
    org: "Min Yan",
    detail:
      "Supported engineers on a defence-infrastructure project: installed and configured IP cameras and servers, set up server APIs through Hirschmann industrial switches, and annotated image data to improve an object-detection system.",
  },
  {
    kind: "education",
    period: "2022 — 2024",
    title: "Higher Nitec, Cyber & Network Security",
    org: "Institute of Technical Education",
    detail:
      "Foundations in network security, vulnerability management, and hands-on security tooling.",
  },
  {
    kind: "work",
    period: "Nov 2021 — Dec 2021",
    title: "Banquet Server",
    org: "The Ritz-Carlton · Seasonal",
    detail: "Greeted and served guests and helped set up banquet events.",
  },
];

// Selected projects / work.
// A project can set `featured: true` for a highlighted treatment, an optional
// `meta` line, and an optional `image` (drop the file in /public/photos).
export const projects = [
  {
    title: "Kopi — Online Safety AI Buddy",
    year: "2025",
    featured: true,
    meta: "GovTech Digital4Good Hackathon · Team of 5",
    image: "", // e.g. "/photos/kopi-hackathon.jpg" once you add a photo
    blurb:
      "Built at GovTech Singapore's Digital4Good Online Safety Hackathon with a team of five — Felicia, Sean, Charlisa, Brina and me. Kopi is an AI-powered online buddy that scans conversations and analyses voice messages for threats like grooming, scams, and cyberbullying, flagging warning signs as they appear. Crucially, it runs on-device — personal conversations never leave the user's phone for an external AI server. The day also included a fireside chat with industry mentors, including Dr Shi Tao Zhao.",
    tags: ["AI", "On-device", "Privacy", "Hackathon"],
    url: "",
  },
  {
    title: "EFAR Operations-to-Billing Platform",
    year: "2025",
    blurb:
      "Full-stack platform digitising an ambulance company's operations-to-billing flow, built with a four-person team working directly with the client. I owned the billing side: a pricing engine matching field jobs to client contracts and generating invoices, OCR extraction of vendor invoices with Gemini, and a Xero OAuth 2.0 integration with AES-256-GCM encrypted token storage, verified against a live Xero organisation. Deployed on Vercel, Render and Supabase.",
    tags: ["React", "Node.js", "PostgreSQL", "Supabase", "Xero API", "OAuth 2.0"],
    url: "",
  },
  {
    title: "ResumeMatch",
    year: "2025",
    blurb:
      "A web application that streamlines recruitment by connecting job seekers with relevant opportunities through automated data collection. Built the core logic in Python/Flask with Jinja templating, a web scraper aggregating live job listings from platforms like Indeed, and a multi-role auth system (Job Seeker, Employer, Admin) with OTP email verification. Exploring AI-driven matching from résumé parsing next.",
    tags: ["Python", "Flask", "Web Scraping", "Authentication"],
    url: "",
  },
];

// Achievements, awards, certifications, recognitions.
export const achievements = [
  { year: "2026", text: "Gold — recurve archery, 50m at the POLITE competition." },
  { year: "2026", text: "Team bronze — recurve archery (30m), competing across NTU IAC, POLITE and TAA events." },
  { year: "2025", text: "Participated in GovTech Singapore's Digital4Good Online Safety Hackathon — built “Kopi”, an on-device AI safety buddy." },
  { year: "2025", text: "AI Fluency Framework & Foundations certificate — Anthropic." },
  { year: "2025", text: "Y2S1 GPA 3.9 — Diploma in Information Technology (Cybersecurity), Nanyang Polytechnic." },
  { year: "2023", text: "Fortinet NSE Level 1 & 2 — Network Security Certified Associate." },
  { year: "2022", text: "Cybersecurity Essentials certification — Cisco." },
];

// Skills grouped by category.
export const skills = [
  {
    group: "Security",
    items: [
      "Network Security",
      "Vulnerability Management",
      "Threat & Vulnerability Mgmt",
      "Malware Analysis",
      "Cybersecurity Tools",
      "Nmap",
      "Wireshark",
    ],
  },
  {
    group: "Development",
    items: [
      "React.js",
      "Node.js",
      "Python",
      "Flask",
      "JavaScript",
      "HTML / CSS",
      "REST APIs",
      "Full-Stack Dev",
    ],
  },
  {
    group: "Data & Infra",
    items: [
      "PostgreSQL",
      "Oracle Database",
      "OAuth 2.0",
      "Server Deployment",
      "RAID",
      "Supabase / Vercel / Render",
    ],
  },
  {
    group: "Beyond tech",
    items: ["Recurve Archery", "Muay Thai", "Volleyball"],
  },
];
