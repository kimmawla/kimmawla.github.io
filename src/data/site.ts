// Single source of truth for site content. Edit here; pages read from it.

export const profile = {
  name: 'Kim Mawla',
  title: 'Head of Engineering · AI, SaaS & Cybersecurity',
  tagline:
    'Builder-leader with 25+ years scaling security, AI, and FinTech platforms — from Fortune 100 scale to 0-to-1 products.',
  location: 'San Jose, CA',
  email: 'kmawla@gmail.com', // swap for a public alias if you prefer
  links: {
    linkedin: 'https://www.linkedin.com/in/REPLACE_ME',
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
    body: 'Cut feature lead time 50% through an AI-native software delivery lifecycle, reaching DORA elite delivery across 150+ engineers in the US, India, and Germany.',
  },
  {
    title: 'Agentic AI platform',
    body: 'Built Signal AI — agentic AppSec with multi-model inferencing, RAG, and an evaluation harness — alongside 0-to-1 products in supply chain, container, and AI security.',
  },
  {
    title: 'Growth',
    body: 'Sustained 25%+ YoY ARR growth at Black Duck; as CTO of Info Image, tripled ARR to ~$35M.',
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
    name: 'MY-MCP-SERVER', // rename once published
    summary: 'An MCP server built with FastMCP and Claude Code. Being published to the official MCP Registry.',
    status: 'In progress',
    links: {
      repo: 'https://github.com/kimmawla/REPLACE_ME',
      registry: 'https://registry.modelcontextprotocol.io/',
      pypi: 'https://pypi.org/project/REPLACE_ME/',
    },
  },
];

export const writing: { title: string; url: string; venue: string }[] = [
  // { title: 'Lessons from building an AI-native SDLC', url: 'https://...', venue: 'Substack' },
];
