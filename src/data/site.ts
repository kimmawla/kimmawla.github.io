// Single source of truth for site content. Edit here; pages read from it.

export const profile = {
  name: 'Kim Mawla',
  title: 'Head of Engineering · AI, SaaS & Cybersecurity',
  tagline:
    '20+ years leading elite enginering orgs, scaling mission critical platforms and shipping breakthrough products in security, AI, and FinTech — from Fortune 100 scale to 0-to-1 build out.',
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
    title: 'Unified AppSec platform',
    body: 'Led global engineering for a $500M+ AppSec portfolio (Coverity SAST, Black Duck SCA, Polaris ASPM) and unified four products into the Polaris SaaS platform.',
  },
  {
    title: 'AI-native SDLC',
    body: 'Cut feature lead time 50% through an AI-native software delivery lifecycle, reaching DORA elite delivery across 200+ engineers across US, Canada, UK, Finland, and India.',
  },
  {
    title: 'Agentic AI platform',
    body: 'Built Signal AI — agentic AppSec with multi-model inferencing, hybrid RAG, evaluation harness, and a security knowledge graph running on petabyte data pipeline daily  — alongside 0-to-1 expansion in supply chain, container, IaC, secrets and AI security.',
  },
  {
    title: 'Growth',
    body: 'Sustained 25%+ YoY ARR growth at Black Duck; as CTO of Info Image, tripled ARR to ~$60M.',
  },
];

export const experience = [
  { org: 'Black Duck Software (Synopsys spin-off)', role: 'Head of Engineering', years: '2020–2025' },
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
];

export const writing: { title: string; url: string; venue: string }[] = [
  // { title: 'Lessons from building an AI-native SDLC', url: 'https://...', venue: 'Substack' },
];
