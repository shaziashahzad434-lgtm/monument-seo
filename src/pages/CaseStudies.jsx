import SectionHeading from '../components/SectionHeading.jsx';
import { caseStudies } from '../data/caseStudies.js';

export default function CaseStudies() {
  return (
    <div className="pt-36 pb-24">
      <div className="max-w-wrap mx-auto px-6 md:px-10">
        <SectionHeading title="PROOF, NOT PROMISES." subtitle="Full engagements, from challenge to result." />
        <div className="flex flex-col">
          {caseStudies.map((c, i) => (
            <div
              key={c.slug}
              className={`grid md:grid-cols-2 gap-10 md:gap-14 items-start py-16 border-t border-gray-800 ${
                i === caseStudies.length - 1 ? 'border-b' : ''
              }`}
            >
              <div className={`aspect-[4/3] bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-sm relative overflow-hidden ${i % 2 === 1 ? 'md:order-2' : ''}`}>
                <span className="absolute top-4.5 left-4.5 text-xs text-muted font-display">
                  {c.client} — {c.industry}
                </span>
                <svg viewBox="0 0 300 100" preserveAspectRatio="none" className="absolute bottom-0 left-0 w-full h-3/5">
                  <polyline points="0,90 60,78 120,55 180,60 240,25 300,8" fill="none" stroke="#FF5A00" strokeWidth="2" />
                </svg>
              </div>
              <div>
                <div className="text-orange text-sm font-display mb-3.5">{c.client.toUpperCase()} · {c.industry.toUpperCase()}</div>
                <h3 className="font-display font-semibold max-w-[16ch]" style={{ fontSize: 'clamp(1.5rem,2.6vw,2.1rem)' }}>
                  {c.title}
                </h3>

                <div className="mt-6 space-y-4 text-sm">
                  <div>
                    <div className="text-muted mb-1">Challenge</div>
                    <p className="text-gray-200 max-w-[52ch]">{c.challenge}</p>
                  </div>
                  <div>
                    <div className="text-muted mb-1">Strategy</div>
                    <p className="text-gray-200 max-w-[52ch]">{c.strategy}</p>
                  </div>
                </div>

                <div className="flex gap-8 mt-8 flex-wrap">
                  {c.metrics.map((m) => (
                    <div key={m.label}>
                      <div className="font-display text-2xl md:text-3xl">{m.value}</div>
                      <div className="text-xs text-muted mt-1 max-w-[14ch]">{m.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
