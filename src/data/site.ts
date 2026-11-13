// Single source of truth for site content. Edit here; pages read from it.

export const profile = {
  name: 'Kim Mawla',
  title: 'Head of Engineering · AI, SaaS & Cybersecurity',
  tagline:
    '20+ years leading elite enginering orgs, scaling mission critical platforms and shipping breakthrough products in security, AI, FinTech, and enterprise SaaS — from 0-to-1 build out to Fortune 100 scale; greenfield innovation to platformization.',
  location: 'San Jose, CA',
  email: 'kmawla@gmail.com', // swap for a public alias if you prefer
  links: {
    linkedin: 'https://www.linkedin.com/in/kim-mawla-098667',
    github: 'https://github.com/kimmawla',
    resume: '/KimMawla_Resume.pdf', // drop the PDF into /public
  },
};

export const impact = [
  {
    title: 'Unified AppSec Platform',
    body: 'Led global engineering for $500M+ Application Security portfolio - unified six products into Polaris SaaS ASPM platform, enabled developer security product pivot via organic expansion into cloud and AI security.',
  },
  {
    title: 'AI-native SDLC',
    body: 'Cut feature lead time 50% through an AI-native delivery tranformation, reaching DORA elite operating rigor in engineeing org distributed across US, Canada, UK, Finland, and India.',
  },
  {
    title: 'Agentic AI Augments',
    body: 'Built Signal AI — agentic AppSec product with multi-model inferencing, hybrid RAG, eval harness, and Context AI - a security knowledge graph running on petabyte data pipeline daily.',
  },
  {
    title: 'Rapid Growth',
    body: 'Sustained 25%+ YoY ARR growth at Black Duck; as CTO of Info Image, tripled ARR to ~$60M; 0-40 engineering hyper growth in 15 months at Citrix.',
  },
  {
    title: 'Engineering Transformation',
    body: ' From R&D siloes across US/EU/Asia to cross-functional autonomous pods owning multi deployments/day with <2% defect escape rate and 99.99% SLO.',
  },
  {
    title: 'Hyper Scale',
    body: ' Serving half of Fortune 100 and million-developer ecosystem with petabyte data pipelines and billions of events processed daily. .',
  },
];

export const experience = [
  { org: 'Black Duck Software (Synopsys spin-off)', role: 'Head of Engineering', years: '' },
  { org: 'Info Image', role: 'CTO', years: '' },
  { org: 'Citrix', role: 'Senior Director, Cloud Platforms', years: '' },
  { org: 'PNC Financial Services', role: 'VP, Software Engineering', years: '' },
];

export const projects = [
  {
    slug: 'mcp-server',
    name: 'vuln-triage-mcp',
    summary: 'An MCP server that tells your AI agent which vulnerabilities to fix first, combining OSV.dev, EPSS, and CISA KEV into one explainable priority score.',
    status: 'Published · v0.1.0',
    links: {
      repo: 'https://github.com/kimmawla/vuln-triage-mcp',
      registry: 'https://registry.modelcontextprotocol.io/v0/servers?search=io.github.kimmawla%2Fvuln-triage-mcp',
      pypi: 'https://pypi.org/project/vuln-triage-mcp/',
    },
  },
    {
    slug: 'mcp-supply-audit',
    name: 'mcp-supply-audit',
    summary: 'An MCP server that audits other MCP servers as software artifacts: registry listings, packages, configs, and tool definitions. Static checks only.',
    status: 'Published · v0.1.1',
    links: {
      repo: 'https://github.com/kimmawla/mcp-supply-audit',
      registry: 'https://registry.modelcontextprotocol.io/v0/servers?search=io.github.kimmawla%2Fmcp-supply-audit',
      pypi: 'https://pypi.org/project/mcp-supply-audit/',
    },
  },
];

export const writing: { title: string; url: string; venue: string }[] = [
  // { title: 'Lessons from building an AI-native SDLC', url: 'https://...', venue: 'Substack' },
];
