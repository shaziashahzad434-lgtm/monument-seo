import useReveal from '../components/useReveal.js';
import SectionHeading from '../components/SectionHeading.jsx';

const principles = [
  { t: 'Quality Over Quantity', d: "We focus on relevant websites and guest post opportunities that match each client's niche and SEO goals." },
  { t: 'Clear Website Information', d: 'We aim to provide clear website details, pricing, niches, and publishing timelines so clients can make informed decisions.' },
  { t: 'Relevant Backlink Opportunities', d: 'We help clients explore guest post placements and backlink opportunities that fit their industry and target audience.' },
  { t: 'A Practical Approach', d: 'We help clients find practical guest posting options that suit their requirements and budget.' },
  { t: 'Long-Term SEO Growth', d: 'We believe sustainable SEO starts with relevant websites, thoughtful link building, and consistent effort.' },
];

const stack = [
  'Guest Post Opportunities', 'Publisher Information', 'Website Metrics', 'Niche Relevance', 'Publishing Timelines', 'Link Building Options',
];

export default function About() {
  const introRef = useReveal();
  const stackRef = useReveal();

  return (
    <div className="pt-36 pb-24">
      <div className="max-w-wrap mx-auto px-6 md:px-10">
        <div ref={introRef} className="reveal grid grid-cols-[1px_1fr] gap-8 md:gap-10 mb-28">
          <div className="bg-orange w-px" />
          <div>
            <h1 className="font-display font-semibold leading-tight max-w-[16ch]" style={{ fontSize: 'clamp(2rem,4.5vw,3.4rem)' }}>
              WHY BRANDS CHOOSE US.
            </h1>
            <p className="mt-8 max-w-[56ch] text-gray-300">
              LinkNest helps businesses, agencies, and SEO professionals discover quality websites for guest posting and relevant backlink opportunities. We focus on clear website information, publisher outreach, and helping clients find opportunities that align with their SEO goals.
            </p>
          </div>
        </div>

        <SectionHeading title="OUR PRINCIPLES" />
        <div className="grid md:grid-cols-2 gap-x-14 gap-y-12 mb-28">
          {principles.map((p) => (
            <div key={p.t} className="border-t border-gray-800 pt-6">
              <h3 className="font-display font-medium text-xl mb-3">{p.t}</h3>
              <p className="text-muted text-sm max-w-[48ch]">{p.d}</p>
            </div>
          ))}
        </div>

        <div ref={stackRef} className="reveal">
          <SectionHeading title="OUR APPROACH" subtitle="We bring guest post opportunities and publisher information together in one place, helping businesses and agencies explore relevant websites, review available details, and discuss potential placements." />
          <div className="flex flex-wrap gap-x-10 gap-y-5">
            {stack.map((s) => (
              <span key={s} className="font-display text-lg text-gray-300">{s}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
