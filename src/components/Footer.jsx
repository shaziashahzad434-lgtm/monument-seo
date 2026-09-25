import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="border-t border-gray-800 pt-20 pb-8">
      <div className="max-w-wrap mx-auto px-6 md:px-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 pb-14">
          <div className="col-span-2 md:col-span-1">
            <div className="font-display font-bold text-lg mb-4">LINKNEST</div>
            <p className="text-muted text-sm max-w-[32ch]">
              A technical SEO and organic growth studio, working with ambitious brands who want to be found.
            </p>
          </div>
          <div>
            <h4 className="text-xs text-muted mb-4 font-medium">NAVIGATE</h4>
            <Link to="/work" className="block text-sm text-gray-200 mb-2.5 hover:text-orange">Work</Link>
            <Link to="/services" className="block text-sm text-gray-200 mb-2.5 hover:text-orange">Services</Link>
            <Link to="/about" className="block text-sm text-gray-200 mb-2.5 hover:text-orange">About</Link>
            <Link to="/contact" className="block text-sm text-gray-200 mb-2.5 hover:text-orange">Contact</Link>
          </div>
          <div>
            <h4 className="text-xs text-muted mb-4 font-medium">SERVICES</h4>
            <Link to="/services" className="block text-sm text-gray-200 mb-2.5 hover:text-orange">Technical SEO</Link>
            <Link to="/services" className="block text-sm text-gray-200 mb-2.5 hover:text-orange">Content Strategy</Link>
            <Link to="/services" className="block text-sm text-gray-200 mb-2.5 hover:text-orange">Local SEO</Link>
            <Link to="/services" className="block text-sm text-gray-200 mb-2.5 hover:text-orange">E-commerce SEO</Link>
          </div>
          <div>
            <h4 className="text-xs text-muted mb-4 font-medium">CONNECT</h4>
            <a href="#" className="block text-sm text-gray-200 mb-2.5 hover:text-orange">LinkedIn</a>
            <a href="#" className="block text-sm text-gray-200 mb-2.5 hover:text-orange">Instagram</a>
            <a href="#" className="block text-sm text-gray-200 mb-2.5 hover:text-orange">X</a>
            <a href="mailto:hello@monument.example" className="block text-sm text-gray-200 mb-2.5 hover:text-orange">
              hello@monument.example
            </a>
          </div>
        </div>

        <div
          className="font-display font-bold leading-[0.85] border-t border-gray-800 pt-5"
          style={{
            fontSize: 'clamp(3rem, 14vw, 9rem)',
            color: '#151515',
            WebkitTextStroke: '1px #2A2A2A',
          }}
        >
          LINKNEST
        </div>

        <div className="flex flex-wrap justify-between gap-3 mt-5 text-xs text-muted">
          <span>© 2026 Monument SEO Studio</span>
          <span>Search / Strategy / Growth</span>
        </div>
      </div>
    </footer>
  );
}
