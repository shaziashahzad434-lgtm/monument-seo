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
              <div
                className={`aspect-[4/3] bg-gray-950 border border-gray-800 rounded-sm relative overflow-hidden ${
                  i % 2 === 1 ? 'md:order-2' : ''
                }`}
              >
                {c.slug === 'techbullion' && (
                  <img
                    src="/techbullion.png"
                    alt={c.client}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                )}

                {c.slug === 'mobileappdaily' && (
                  <img
                    src="/mobileappdaily.png"
                    alt={c.client}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                )}

                {c.slug === 'buildd' && (
                  <img
                    src="/buildd.png"
                    alt={c.client}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                )}

                {c.slug === 'urbansplatter' && (
                  <img
                    src="/urbansplatter.png"
                    alt={c.client}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                )}

                {c.slug === 'teachmama' && (
                  <img
                    src="/teachmama.png"
                    alt={c.client}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                )}

                {c.slug === 'techimply' && (
                  <img
                    src="/techimply.png"
                    alt={c.client}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                )}

                <span className="absolute top-4.5 left-4.5 text-xs text-white font-display bg-black/60 px-2 py-1">
                  {c.client} — {c.industry}
                </span>
              </div>

              <div>
                <div className="text-orange text-sm font-display mb-3.5">
                  {c.client.toUpperCase()} · {c.industry.toUpperCase()}
                </div>

                <h3
                  className="font-display font-semibold max-w-[18ch]"
                  style={{ fontSize: 'clamp(1.5rem,2.6vw,2.1rem)' }}
                >
                  {c.title}
                </h3>

                <div className="mt-6 space-y-4 text-sm">
                  <div>
                    <div className="text-muted mb-1">Details</div>
                    <p className="text-gray-200 max-w-[52ch]">{c.desc}</p>
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