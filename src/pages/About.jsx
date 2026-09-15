import useReveal from '../components/useReveal.js';
import SectionHeading from '../components/SectionHeading.jsx';

const principles = [
  { t: 'Strategy Before Tactics', d: "We don't start with a checklist. We start with your market, your margins, and what's actually worth ranking for." },
  { t: 'Data With Context', d: 'A number without context is noise. We explain what moved, why, and whether it matters to the business.' },
  { t: 'Technical Precision', d: 'Search engines reward sites that work. We fix the infrastructure most agencies skip past.' },
  { t: 'Content That Converts', d: 'Traffic is not the goal. We write for the person who is about to decide, not just the algorithm.' },
  { t: 'Growth That Compounds', d: 'We build systems that keep earning visibility after the engagement ends, not a rented spike.' },
];

const stack = [
  'Google Search Console', 'Google Analytics', 'Ahrefs', 'Semrush', 'Screaming Frog', 'PageSpeed Insights', 'Looker Studio',
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
              Monument is a small, senior team of SEO strategists, technical auditors and writers. We work with a limited number of clients at a time, because organic growth takes real attention, not a rotating account manager.
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
          <SectionHeading title="THE STACK BEHIND THE GROWTH" subtitle="The tools we work in daily — not a claim of partnership or certification." />
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
