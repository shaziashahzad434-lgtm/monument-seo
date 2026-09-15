import { Link } from 'react-router-dom';
import { X } from 'lucide-react';

const links = [
  { to: '/work', label: 'Work' },
  { to: '/services', label: 'Services' },
  { to: '/about', label: 'About' },
  { to: '/insights', label: 'Insights' },
];

export default function MobileMenu({ open, onClose }) {
  return (
    <div
      className={`fixed inset-0 z-50 bg-black flex flex-col justify-center px-10 transition-transform duration-500 ease-out ${
        open ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <button
        className="absolute top-6 right-6 text-white"
        onClick={onClose}
        aria-label="Close menu"
      >
        <X size={26} />
      </button>

      {links.map((link, i) => (
        <Link
          key={link.to}
          to={link.to}
          onClick={onClose}
          className="font-display font-semibold text-4xl my-2 transition-all"
          style={{
            transitionDelay: open ? `${i * 80}ms` : '0ms',
            opacity: open ? 1 : 0,
            transform: open ? 'translateY(0)' : 'translateY(16px)',
          }}
        >
          {link.label}
        </Link>
      ))}

      <Link
        to="/contact"
        onClick={onClose}
        className="text-orange font-display font-semibold text-2xl mt-6"
      >
        Let's Talk →
      </Link>
    </div>
  );
}
