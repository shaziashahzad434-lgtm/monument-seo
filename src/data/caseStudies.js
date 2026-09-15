export const caseStudies = [
  {
    client: 'Northstar Commerce',
    slug: 'northstar-commerce',
    industry: 'Retail',
    title: 'Rebuilding category pages that Google could actually crawl',
    desc: 'A faceted navigation was hiding most of their catalog from search. We restructured it and rebuilt the internal linking around it.',
    challenge: 'Northstar had thousands of products, but a faceted filter system generated infinite URL variations that confused crawlers and diluted authority across near-duplicate pages.',
    strategy: 'We redesigned the URL structure, set canonical rules for filtered views, and rebuilt category pages as genuine landing pages with unique content.',
    metrics: [
      { label: 'Organic traffic', value: '+284%' },
      { label: 'Qualified leads', value: '+163%' },
      { label: 'Revenue from organic', value: '+218%' },
    ],
  },
  {
    client: 'Evo Financial',
    slug: 'evo-financial',
    industry: 'Fintech',
    title: 'Turning a compliance-heavy site into a content authority',
    desc: 'Strict regulatory review had stalled their content output. We built a workflow that kept legal happy and publishing weekly.',
    challenge: 'Every piece of content needed compliance sign-off, which had slowed publishing to almost nothing while competitors outpaced them in search.',
    strategy: 'We built a templated review pipeline and a pre-approved topic bank, cutting review time without cutting corners on accuracy.',
    metrics: [
      { label: 'Organic traffic', value: '+198%' },
      { label: 'Return on spend', value: '4.6X' },
      { label: 'Indexed pages', value: '+320%' },
    ],
  },
  {
    client: 'Forma Architecture',
    slug: 'forma-architecture',
    industry: 'Architecture & Design',
    title: 'Winning local search against nationally-ranked firms',
    desc: 'A portfolio site with almost no text. We built project pages and location content that finally gave Google something to rank.',
    challenge: 'Their site was almost entirely images with minimal text, giving search engines little to understand or rank.',
    strategy: 'We built out detailed project case pages and location-specific service pages, backed by a local citation cleanup.',
    metrics: [
      { label: 'Local visibility', value: '+221%' },
      { label: 'Inquiries', value: '+140%' },
      { label: 'Map pack rankings', value: 'Top 3' },
    ],
  },
];
