import { useState } from 'react';
import { Link } from 'react-router-dom';
import SectionHeading from '../components/SectionHeading.jsx';
import { services } from '../data/services.js';

export default function Services() {
  const [openIdx, setOpenIdx] = useState(null);

  return (
    <div className="pt-36 pb-24">
      <div className="max-w-wrap mx-auto px-6 md:px-10">
        <SectionHeading
          title="WHAT WE OFFER"

          subtitle="Eight disciplines, one team — coordinated instead of contracted out."
        />
        <div>
          {services.map((s, i) => {
            const open = openIdx === i;
            return (
              <div
                key={s.num}
                className="border-b border-gray-800 py-9 grid grid-cols-[48px_1fr_auto] items-start gap-6 cursor-pointer hover:pl-3 hover:bg-orange/5 transition-[padding]"
                onClick={() => setOpenIdx(open ? null : i)}
              >
                <div className={`font-display text-sm ${open ? 'text-orange' : 'text-muted'}`}>{s.num}</div>
                <div>
                  <div className="font-display font-medium text-2xl md:text-3xl">{s.name}</div>
                  <p
                    className={`text-muted text-sm max-w-[56ch] overflow-hidden transition-all duration-300 ${
                      open ? 'max-h-24 opacity-100 mt-3' : 'max-h-0 opacity-0'
                    }`}
                  >
                    {s.desc}
                  </p>
                  <Link
                    to="/contact"
                    onClick={(e) => e.stopPropagation()}
                    className={`inline-block text-sm border-b border-orange text-orange mt-4 transition-opacity ${
                      open ? 'opacity-100' : 'opacity-0 pointer-events-none'
                    }`}
                  >
                    Talk to us about this →
                  </Link>
                </div>
                <div className={`text-xl transition-transform ${open ? 'rotate-45 text-orange' : 'text-muted'}`}>+</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
