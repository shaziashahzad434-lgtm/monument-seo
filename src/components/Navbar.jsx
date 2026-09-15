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
            ? 'bg-black/85 backdrop-blur-md border-gray-800 py-4'
            : 'border-transparent py-6'
        }`}
      >
        <nav className="max-w-wrap mx-auto px-6 md:px-10 flex items-center justify-between">
          <Link to="/" className="font-display font-bold text-lg tracking-tight">
            MONUMENT
          </Link>

          <div className="hidden md:flex items-center gap-10 text-sm text-gray-300">
            <Link to="/work" className="hover:text-white transition-colors" data-cursor="VIEW">Work</Link>
            <Link to="/services" className="hover:text-white transition-colors">Services</Link>
            <Link to="/about" className="hover:text-white transition-colors">About</Link>
            <Link to="/insights" className="hover:text-white transition-colors">Insights</Link>
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
