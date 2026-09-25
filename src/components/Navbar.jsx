import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'lucide-react';
import MobileMenu from './MobileMenu.jsx';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 border-b ${
          scrolled
            ? 'bg-white/95 backdrop-blur-md border-gray-800 py-4'
            : 'border-transparent py-6'
        }`}
      >
        <nav className="max-w-wrap mx-auto px-6 md:px-10 flex items-center justify-between">
          <Link to="/" className="font-display font-bold text-lg tracking-tight">
            LINKNEST
          </Link>

          <div className="hidden md:flex items-center gap-10 text-sm text-gray-900">
            <Link to="/Websites" className="transition-colors" data-cursor="VIEW">WEBSITE</Link>
            <Link to="/services" className="transition-colors">Services</Link>
            <Link to="/about" className="transition-colors">About</Link>
            <Link to="/insights" className="transition-colors">Insights</Link>
          </div>

          <Link
            to="/contact"
            data-cursor="OPEN"
            className="hidden md:inline-flex text-sm font-medium border border-white rounded-sm px-5 py-2.5 hover:bg-white hover:text-black transition-colors"
          >
            Let's Talk →
          </Link>

          <button
            className="md:hidden text-white"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={22} />
          </button>
        </nav>
      </header>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
