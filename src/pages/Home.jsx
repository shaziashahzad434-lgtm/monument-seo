import { Link } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import useReveal from '../components/useReveal.js';
import SectionHeading from '../components/SectionHeading.jsx';
import { services } from '../data/services.js';
import { caseStudies } from '../data/caseStudies.js';

function Stat({ value, suffix, label }) {
  const ref = useRef(null);
  const [display, setDisplay] = useState('0' + suffix);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        const isDecimal = value % 1 !== 0;
        let cur = 0;
        const step = value / 40;
        const tick = () => {
          cur += step;
          if (cur >= value) {
            setDisplay((isDecimal ? value.toFixed(1) : Math.round(value)) + suffix);
            return;
          }
          setDisplay((isDecimal ? cur.toFixed(1) : Math.round(cur)) + suffix);
          requestAnimationFrame(tick);
        };
        tick();
        io.unobserve(el);
      },
      { threshold: 0.6 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [value, suffix]);

  return (
    <div ref={ref}>
      <div className="font-display font-semibold text-4xl md:text-5xl">{display}</div>
      <div className="text-muted text-sm mt-2 max-w-[20ch]">{label}</div>
    </div>
  );
}

function ServiceRow({ s }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      className="border-b border-gray-800 py-8 grid grid-cols-[48px_1fr_auto] items-center gap-6 transition-[padding] hover:pl-3 hover:bg-orange/5 cursor-pointer"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      onClick={() => setOpen((o) => !o)}
    >
      <div className={`font-display text-sm transition-colors ${open ? 'text-orange' : 'text-muted'}`}>
        {s.num}
      </div>
      <div>
        <div className="font-display font-medium text-xl md:text-2xl">{s.name}</div>
        <div
          className={`text-sm text-muted overflow-hidden transition-all duration-300 max-w-[52ch] ${
            open ? 'max-h-20 opacity-100 mt-2.5' : 'max-h-0 opacity-0'
          }`}
        >
          {s.desc}
        </div>
      </div>
      <div className={`text-xl transition-transform ${open ? 'translate-x-1.5 text-orange' : 'text-muted'}`}>
        ↗
      </div>
    </div>
  );
}

const processSteps = [
  { n: '01', t: 'Discover', d: "We learn the business, the market and who you're actually trying to reach before touching a single page." },
  { n: '02', t: 'Audit', d: "A full technical and content diagnostic — what's working, what's costing you, and why." },
  { n: '03', t: 'Strategize', d: 'A prioritised roadmap: which pages to fix, which to build, which keywords to target first.' },
  { n: '04', t: 'Execute', d: 'Technical fixes, content and outreach — shipped by us, or handed to your team as clear tickets.' },
  { n: '05', t: 'Optimize', d: 'We watch what actually moved rankings and traffic, and refine the plan around what’s working.' },
  { n: '06', t: 'Scale', d: 'Once a channel compounds, we expand it — more terms, more markets, more of what’s earning.' },
];

export default function Home() {
  const introRef = useReveal();
  const testimonialRef = useReveal();
  const ctaRef = useReveal();

  return (
    <>
      {/* Hero */}
      <section className="min-h-screen flex flex-col justify-center pt-32 relative overflow-hidden">
        <div className="max-w-wrap mx-auto px-6 md:px-10 w-full">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="text-sm text-muted flex items-center gap-2.5 mb-6"
          >
            <span className="w-6 h-px bg-orange inline-block" />
            GUEST POSTS / SEO / LINK BUILDING
          </motion.div>

          <h1 className="font-display font-semibold leading-[0.96] max-w-[16ch]" style={{ fontSize: 'clamp(2.6rem,7.5vw,6.4rem)' }}>
            {['WE BUILD', 'QUALITY LINKS', 'VISIBILITY.'].map((line, i) => (
              <span key={line} className="block overflow-hidden">
                <motion.span
                  className={`block ${i === 2 ? 'text-orange' : ''}`}
                  initial={{ y: '110%' }}
                  animate={{ y: 0 }}
                  transition={{ delay: 0.25 + i * 0.15, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                >
                  {line}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.75, duration: 0.6 }}
            className="mt-7 text-lg text-gray-300 max-w-[44ch]"
          >
            LinkNest helps brands find quality websites for guest posts, build relevant backlinks and grow their search visibility.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            className="mt-9 flex flex-wrap gap-4 items-center"
          >
            <Link
              to="/work"
              data-cursor="VIEW"
              className="bg-orange text-black font-semibold text-sm px-6 py-3.5 rounded-sm inline-flex items-center gap-2 hover:bg-[#E65200] transition-colors"
            >
              Explore Guest Post Sites →
            </Link>
            <Link
              to="/contact"
              className="border border-gray-700 text-sm px-5 py-3.5 rounded-sm hover:border-white hover:bg-white/5 transition-colors"
            >
              Find Guest Post Opportunities
            </Link>
          </motion.div>
        </div>

        <motion.svg
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.9 }}
          transition={{ delay: 1.1, duration: 0.8 }}
          className="hidden lg:block absolute right-[-4%] top-1/2 -translate-y-1/2 w-[46%] max-w-[560px]"
          viewBox="0 0 400 420"
          fill="none"
        >
          <line x1="0" y1="0" x2="400" y2="0" stroke="#2A2A2A" strokeDasharray="2 6" />
          <line x1="0" y1="140" x2="400" y2="140" stroke="#2A2A2A" strokeDasharray="2 6" />
          <line x1="0" y1="280" x2="400" y2="280" stroke="#2A2A2A" strokeDasharray="2 6" />
          <line x1="0" y1="420" x2="400" y2="420" stroke="#2A2A2A" strokeDasharray="2 6" />
          <polyline
            points="0,380 60,360 110,300 160,320 210,220 260,240 310,120 400,60"
            stroke="#2F7D6D"
            strokeWidth="2"
            fill="none"
          />
          <circle cx="400" cy="60" r="5" fill="#2F7D6D" />
          <text x="0" y="405" fill="#5A5A54" fontSize="11" fontFamily="Space Grotesk">Q1</text>
          <text x="370" y="405" fill="#5A5A54" fontSize="11" fontFamily="Space Grotesk">Q4</text>
        </motion.svg>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3, duration: 0.6 }}
          className="absolute bottom-10 left-6 md:left-10 flex items-center gap-2.5 text-xs text-muted"
        >
          <span>SCROLL</span>
          <div className="w-px h-9 bg-gray-800 relative overflow-hidden">
            <span className="absolute left-0 top-0 w-full h-[40%] bg-orange animate-[scrollmove_1.8s_ease-in-out_infinite]" />
          </div>
        </motion.div>
      </section>

      {/* Intro statement */}
      <section className="py-24 md:py-32">
        <div ref={introRef} className="reveal max-w-wrap mx-auto px-6 md:px-10 grid grid-cols-[1px_1fr] gap-8 md:gap-10">
          <div className="bg-orange w-px" />
          <div>
            <h2 className="font-display font-semibold leading-tight max-w-[14ch]" style={{ fontSize: 'clamp(1.9rem,4.2vw,3.2rem)' }}>
              QUALITY LINKS. REAL SEO VALUE.
            </h2>
            <p className="mt-9 max-w-[52ch] text-gray-300">
              We help brands find quality websites for guest posts, build relevant backlinks and grow their search visibility.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-gray-950 py-24">
        <div className="max-w-wrap mx-auto px-6 md:px-10 grid grid-cols-2 md:grid-cols-4 gap-9">
          <Stat value={312} suffix="%" label="Guest post opportunities available" />
          <Stat value={187} suffix="%" label="Relevant websites for guest posting" />
          <Stat value={4.8} suffix="X" label="SEO value from quality backlinks" />
          <Stat value={92} suffix="%" label="Quality sites for long-term SEO" />
        </div>
      </section>

      {/* Services preview */}
      <section className="py-24 md:py-32">
        <div className="max-w-wrap mx-auto px-6 md:px-10">
          <SectionHeading title="WHAT WE OFFER" subtitle="Eight disciplines, one team — coordinated instead of contracted out." />
          <div>
            {services.map((s) => (
              <ServiceRow key={s.num} s={s} />
            ))}
          </div>
          <div className="mt-8">
            <Link to="/services" className="text-sm border-b border-white pb-1 hover:border-orange hover:text-orange transition-colors">
              See every service in detail →
            </Link>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 md:py-32">
        <div className="max-w-wrap mx-auto px-6 md:px-10">
          <SectionHeading title="HOW LINKNEST WORKS" subtitle="A simple process for finding, evaluating and placing quality guest posts." />
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-px bg-gray-800" />
            {processSteps.map((step) => (
              <div key={step.n} className="grid grid-cols-[64px_1fr] gap-7 py-8">
                <div className="w-3.5 h-3.5 rounded-full border border-gray-800 bg-black relative z-10 flex items-center justify-center self-start mt-1.5 ml-[25px]" />
                <div>
                  <h3 className="font-display font-semibold text-2xl mb-2">{step.t}</h3>
                  <p className="text-muted max-w-[56ch]">{step.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case studies preview */}
      <section className="py-24 md:py-32">
        <div className="max-w-wrap mx-auto px-6 md:px-10">
          <SectionHeading title="QUALITY SITES, REAL OPPORTUNITIES." subtitle="Explore quality guest post sites and backlink opportunities for your SEO." />
          <div className="flex flex-col">
            {caseStudies.map((c, i) => (
              <div
                key={c.slug}
                className={`grid md:grid-cols-2 gap-10 md:gap-14 items-center py-14 border-t border-gray-800 ${
                  i === caseStudies.length - 1 ? 'border-b' : ''
                }`}
              >
                <div className={`aspect-[4/3] bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-sm relative overflow-hidden ${i % 2 === 1 ? 'md:order-2' : ''}`}>
                  <span className="absolute top-4.5 left-4.5 text-xs text-muted font-display">
                    {c.client} — {c.industry}
                  </span>
                </div>
                <div>
                  <div className="text-orange text-sm font-display mb-3.5">{c.client.toUpperCase()}</div>
                  <h3 className="font-display font-semibold max-w-[12ch]" style={{ fontSize: 'clamp(1.5rem,2.6vw,2.1rem)' }}>
                    {c.title}
                  </h3>
                  <p className="text-muted mt-4 max-w-[48ch] text-sm">{c.desc}</p>
                  <div className="flex gap-8 mt-6">
                    {c.metrics.slice(0, 2).map((m) => (
                      <div key={m.label}>
                        <div className="font-display text-2xl">{m.value}</div>
                        <div className="text-xs text-muted mt-0.5">{m.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8">
            <Link to="/work" data-cursor="VIEW" className="text-sm border-b border-white pb-1 hover:border-orange hover:text-orange transition-colors">
              Browse All Guest Post Sites →
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-24 md:py-32">
        <div ref={testimonialRef} className="reveal max-w-wrap mx-auto px-6 md:px-10">
          <p className="font-display font-medium leading-snug max-w-[26ch]" style={{ fontSize: 'clamp(1.5rem,3.4vw,2.3rem)' }}>
            "Within months, organic search became one of our strongest acquisition channels — and one we finally understood."
          </p>
          <p className="mt-7 text-sm text-muted">Head of VISIBILITY, Northstar Commerce</p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 md:py-32 relative overflow-hidden">
        <div
          className="absolute w-[520px] h-[520px] rounded-full pointer-events-none right-[-10%] top-[-20%]"
          style={{ background: 'radial-gradient(circle, rgba(255,90,0,0.16), transparent 70%)' }}
        />
        <div ref={ctaRef} className="reveal max-w-wrap mx-auto px-6 md:px-10 relative">
          <h2 className="font-display font-semibold leading-[0.98]" style={{ fontSize: 'clamp(2.4rem,7vw,5.2rem)' }}>
            READY TO BUILD<br />VISIBLE?
          </h2>
          <p className="mt-6 text-lg text-gray-300 max-w-[40ch]">
            Let's build an organic VISIBILITY engine that works while you sleep.
          </p>
          <Link
            to="/contact"
            data-cursor="OPEN"
            className="mt-9 inline-flex bg-orange text-black font-semibold text-sm px-6 py-3.5 rounded-sm hover:bg-[#E65200] transition-colors"
          >
            Explore LinkNest →
          </Link>
        </div>
      </section>
    </>
  );
}
