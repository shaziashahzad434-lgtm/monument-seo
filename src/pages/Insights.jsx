import SectionHeading from '../components/SectionHeading.jsx';

const articles = [
  {
    category: 'Technical SEO',
    title: 'Why crawl budget matters more than most sites think',
    excerpt: 'Large sites lose rankings not because of bad content, but because search engines never finish crawling them.',
    readTime: '6 min',
    date: 'Aug 2026',
  },
  {
    category: 'Content',
    title: 'Writing for the query, not the keyword',
    excerpt: 'Search intent has moved past exact-match phrases. Here is how we plan content around what people actually want.',
    readTime: '5 min',
    date: 'Jul 2026',
  },
  {
    category: 'Growth',
    title: 'The compounding case for organic search',
    excerpt: 'Paid channels stop the moment you stop paying. A look at why organic visibility behaves differently.',
    readTime: '7 min',
    date: 'Jul 2026',
  },
  {
    category: 'Analytics',
    title: 'The reporting metrics that actually predict revenue',
    excerpt: 'Traffic is a vanity metric on its own. What we track instead, and why it changes client conversations.',
    readTime: '4 min',
    date: 'Jun 2026',
  },
  {
    category: 'SEO',
    title: 'Local pack rankings, explained without the jargon',
    excerpt: 'What actually moves the map pack — and the handful of things that do not matter as much as forums claim.',
    readTime: '6 min',
    date: 'Jun 2026',
  },
];

export default function Insights() {
  return (
    <div className="pt-36 pb-24">
      <div className="max-w-wrap mx-auto px-6 md:px-10">
        <SectionHeading title="SEO INSIGHTS" subtitle="Notes on search, content and growth, from the team." />
        <div>
          {articles.map((a) => (
            <a
              key={a.title}
              href="#"
              data-cursor="READ"
              className="group grid md:grid-cols-[120px_1fr_auto] gap-4 md:gap-8 items-start border-b border-gray-800 py-9 hover:pl-3 hover:bg-orange/5 transition-[padding]"
            >
              <div className="text-xs text-orange font-display">{a.category.toUpperCase()}</div>
              <div>
                <h3 className="font-display font-medium text-xl md:text-2xl mb-2 group-hover:text-orange transition-colors">
                  {a.title}
                </h3>
                <p className="text-muted text-sm max-w-[56ch]">{a.excerpt}</p>
                <div className="text-xs text-muted mt-3">{a.date} · {a.readTime} read</div>
              </div>
              <div className="text-xl text-muted group-hover:translate-x-1.5 group-hover:text-orange transition-transform self-center">↗</div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
