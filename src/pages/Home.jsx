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
      <div className="font-display font-semibold text-4xl md:text-5xl text-white">{display}</div>
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
      <section className="min-h-screen flex flex-col justify-center pt-32 relative overflow-visible">
        <div className="max-w-wrap mx-auto px-6 md:px-10 w-full lg:pr-[42%]">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="text-sm text-muted flex items-center gap-2.5 mb-6"
          >
            <span className="w-6 h-px bg-orange inline-block" />
            GUEST POSTS / SEO / LINK BUILDING
          </motion.div>

          <h1 className="font-display font-semibold leading-[0.96] max-w-[16ch]" style={{ fontSize: 'clamp(2.3rem,6.5vw,5.5rem)' }}>
            {['FIND QUALITY', 'GUEST POST', 'OPPORTUNITIES.'].map((line, i) => (
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

          
        </div>

        

     
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.3, duration: 0.6 }}
          className="block relative w-full mt-10 lg:absolute lg:right-6 lg:right-10 lg:right-16 lg:top-[24%] lg:w-[38%] max-w-[560px]"
        >
          <img src="/hero-guest-post.jpg.jpg" alt="Guest post and SEO workspace" className="w-full aspect-[4/3] object-cover rounded-sm border border-gray-800" />
<motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            className="mt-9 flex flex-wrap gap-4 items-center"
          >
            <Link
              to="/work"
              data-cursor="VIEW"
              className="bg-orange text-black font-semibold text-sm leading-none px-6 py-3 rounded-sm border-2 border-orange inline-flex items-center justify-center gap-2 hover:bg-[#E65200] transition-colors"
            >
              Explore Guest Post Sites →
            </Link>
            <Link
              to="/contact"
              className="border-2 border-gray-700 text-sm px-5 py-3 rounded-sm border-b border-b-gray-700 inline-flex items-center justify-center leading-none hover:border-white hover:bg-white/5 transition-colors"
            >
              Find Guest Post Opportunities
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.3, duration: 0.6 }}
          className="absolute bottom-10 left-6 md:left-10 flex items-center gap-2.5 text-xs text-muted"
        >
        </motion.div>
      </section>

      {/* Intro statement */}
      <section className="py-8 md:py-12">
        <div ref={introRef} className="reveal max-w-wrap mx-auto px-6 md:px-10 grid grid-cols-[1px_1fr] gap-8 md:gap-10">
          <div className="bg-orange w-px" />
          <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-start">
            <div>
              <h2 className="font-display font-semibold leading-tight max-w-[14ch]" style={{ fontSize: 'clamp(1.9rem,4.2vw,3.2rem)' }}>
                QUALITY LINKS. REAL SEO VALUE.
              </h2>
              <img src="/seo.jpg" alt="SEO" className="w-full aspect-[4/3] object-cover rounded-sm border border-gray-200 mt-8 mb-10" />
            </div>
            <div className="text-gray-700 leading-8 pt-12">
              <p>Guest posting is a simple way for businesses to publish useful content on relevant websites. It can help brands reach new audiences, build relevant backlinks, and improve their online visibility.</p>
              <p className="mt-5">The most important thing is quality. A useful article published on a trustworthy and relevant website can provide real value for both readers and search engines.</p>
              <p className="mt-5">Guest posts can also help businesses introduce their brand to new audiences. When content is published on a website that is relevant to your industry, readers can discover your business in a natural and useful way.</p>
              <p className="mt-5">A strong guest posting strategy focuses on relevant websites, helpful content, and links that make sense for the reader. This approach is more valuable than simply collecting a large number of backlinks.</p>
              <p className="mt-5">That is why we focus on finding quality opportunities that can support long-term SEO growth and help businesses build a stronger online presence.</p>
            </div>
          </div>
        </div>
      </section>
{/* Guest Posting Article */}
<section className="py-8 md:py-12">
  <div className="max-w-wrap mx-auto px-6 md:px-10">
    <div className="grid lg:grid-cols-[minmax(0,1fr)_320px] gap-12 items-start">
      <div className="max-w-4xl">
      <p className="text-sm text-orange font-medium mb-4">
        GUEST POSTING & SEO
      </p>

      <h2 className="font-display font-semibold leading-tight mb-10" style={{ fontSize: 'clamp(2rem,4vw,3.5rem)' }}>
        What Is Guest Posting and How Does It Help SEO?
      </h2>

      <div className="space-y-8 text-gray-700 leading-8">

        <div>
          <h3 className="text-2xl font-semibold text-gray-900 mb-3">
            What Is Guest Posting?
          </h3>
          <p>
            Guest posting simply means writing and publishing a useful article on another website.
            For example, if you have a business website and write a helpful article for another
            relevant website, that article is called a guest post.
          </p>
          <p className="mt-4">
            In many cases, a guest post can include a relevant link to your own website.
            This gives readers an opportunity to discover your business while helping you build
            a stronger online presence.
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-semibold text-gray-900 mb-3">
            Why Do Quality Links Matter?
          </h3>
          <p>
            Not all backlinks are equal. A link from a relevant, trustworthy website can provide
            much more value than a link from a low-quality or unrelated website.
          </p>
          <p className="mt-4">
            Quality links can help search engines understand the relevance and authority of a website.
            They can also bring real visitors who are interested in the products, services, or
            information you provide.
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-semibold text-gray-900 mb-3">
            How Guest Posting Supports SEO
          </h3>
          <p>
            Guest posting can be an effective part of an SEO and link-building strategy when it
            focuses on useful content and relevant websites.
          </p>
          <p className="mt-4">
            A good guest post should be written for people first, not just for search engines.
            The content should answer questions, provide useful information, and naturally include
            relevant links where they make sense.
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-semibold text-gray-900 mb-3">
            Quality Over Quantity
          </h3>
          <p>
            Building backlinks is not simply about getting as many links as possible. The quality
            and relevance of the websites are important.
          </p>
          <p className="mt-4">
            Publishing useful content on relevant websites can help brands build credibility,
            reach new audiences, and create long-term SEO value.
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-semibold text-gray-900 mb-3">
            Find Quality Opportunities with LinkNest
          </h3>
          <p>
            At LinkNest, we help brands find quality websites for guest posts and link-building
            opportunities. Our goal is to connect businesses with relevant websites where they
            can publish useful content and build meaningful online visibility.
          </p>
          <p className="mt-4 font-medium text-gray-900">
            Quality links are not just about numbers. They are about relevance, trust, and real SEO value.
          </p>
        </div>

      </div>
    </div>

    <div className="block pt-2 space-y-10">
        <a href="/guest-posting-article" className="block group cursor-pointer">
          <img src="/guest-posting-card-2.png" alt="Guest Posting and SEO" className="w-full aspect-[16/9] object-cover rounded-sm border border-gray-200" />
          <p className="text-xs text-orange font-medium mt-3">GUEST POSTING & SEO</p>
          <h3 className="text-lg font-semibold text-gray-900 mt-1 group-hover:underline">What Is Guest Posting and How Does It Help SEO?</h3>
        </a>
        <a href="/best-guest-post-sites" className="block group cursor-pointer">
          <img src="/best-guest-post-sites.png" alt="Best Guest Post Sites for SEO and Link Building" className="w-full aspect-[16/9] object-cover rounded-sm border border-gray-200" />
          <p className="text-xs text-orange font-medium mt-3">GUEST POST SITES & LINK BUILDING</p>
          <h3 className="text-lg font-semibold text-gray-900 mt-1 group-hover:underline">How to Choose the Best Guest Post Sites for SEO and Link Building</h3>
        </a>
        <a href="/evaluate-guest-post-website" className="block group cursor-pointer">
          <img src="/guest-post-website-analysis.jpg" alt="How to Evaluate a Guest Post Website" className="w-full aspect-[16/9] object-cover rounded-sm border border-gray-200" />
          <p className="text-xs text-orange font-medium mt-3">GUEST POST WEBSITE EVALUATION</p>
          <h3 className="text-lg font-semibold text-gray-900 mt-1 group-hover:underline">How to Evaluate a Guest Post Website Before Buying a Placement</h3>
        </a>
      </div>
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
      <section className="py-8 md:py-12">
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
      <section className="py-8 md:py-12">
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

       {/* Guest Post Opportunities */}
      <section className="py-8 md:py-12">
        <div className="max-w-wrap mx-auto px-6 md:px-10">
          <SectionHeading title="QUALITY SITES, REAL OPPORTUNITIES." subtitle="Explore guest post websites and backlink opportunities acrs for your SEO." />
          <div className="flex flex-col">
            {caseStudies.map((c, i) => (
              <div
                key={c.slug}
                className={`grid md:grid-cols-2 gap-10 md:gap-14 items-center py-14 border-t border-gray-800 ${
                  i === caseStudies.length - 1 ? 'border-b' : ''
                }`}
              >
                <div className={`aspect-[4/3] bg-gray-950 border border-gray-800 rounded-sm relative overflow-hidden flex flex-col justify-between ${i % 2 === 1 ? 'md:order-2' : ''}`}>
                  {c.slug === "techbullion" && (<img src="/techbullion.png" alt={c.client} className="absolute inset-0 w-full h-full object-cover" />)}
                  {c.slug === "mobileappdaily" && (<img src="/mobileappdaily.png" alt={c.client} className="absolute inset-0 w-full h-full object-cover" />)}
                  {c.slug === "buildd" && (<img src="/buildd.png" alt={c.client} className="absolute inset-0 w-full h-full object-cover" />)}
                  {c.slug === "urbansplatter" && (<img src="/urbansplatter.png" alt={c.client} className="absolute inset-0 w-full h-full object-cover" />)}
                  {c.slug === "teachmama" && (<img src="/teachmama.png" alt={c.client} className="absolute inset-0 w-full h-full object-cover" />)}
                  {c.slug === "techimply" && (<img src="/techimply.png" alt={c.client} className="absolute inset-0 w-full h-full object-cover" />)}
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
      <section className="py-8 md:py-12">
        <div ref={testimonialRef} className="reveal max-w-wrap mx-auto px-6 md:px-10">
          <p className="font-display font-medium leading-snug max-w-[26ch]" style={{ fontSize: 'clamp(1.5rem,3.4vw,2.3rem)' }}>
            "Within months, organic search became one of our strongest acquisition channels — and one we finally understood."
          </p>
          <p className="mt-7 text-sm text-muted">Head of VISIBILITY, Guest Post Marketplace</p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-8 md:py-12 relative overflow-hidden">
        <div
          className="absolute w-[520px] h-[520px] rounded-full pointer-events-none right-[-10%] top-[-20%]"
          style={{ background: 'radial-gradient(circle, rgba(255,90,0,0.16), transparent 70%)' }}
        />
        <div ref={ctaRef} className="reveal max-w-wrap mx-auto px-6 md:px-10 relative">
          <h2 className="font-display font-semibold leading-[0.98]" style={{ fontSize: 'clamp(2.4rem,7vw,5.2rem)' }}>
            READY TO BUILD<br />QUALITY LINKS?
          </h2>
          <p className="mt-6 text-lg text-white max-w-[40ch]">
            Find quality guest post opportunities and build backlinks that support your SEO growth.
          </p>
          <Link
            to="/contact"
            data-cursor="OPEN"
            className="mt-9 inline-flex bg-orange text-black font-semibold text-sm px-6 py-3.5 rounded-sm hover:bg-[#E65200] transition-colors"
          >
            Explore Guest Post Sites →
          </Link>
        </div>
      </section>
    </>
  );
}
