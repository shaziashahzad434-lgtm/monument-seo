import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="border-t border-gray-800 pt-20 pb-8">
      <div className="max-w-wrap mx-auto px-6 md:px-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 pb-14">
          <div className="col-span-2 md:col-span-1">
            <div className="font-display font-bold text-lg mb-4">LINKNEST</div>
            <p className="text-muted text-sm max-w-[32ch]">
              LinkNest helps brands find quality websites for guest posts, build relevant backlinks and grow their search visibility.
            </p>
          </div>
          <div>
            <h4 className="text-xs text-muted mb-4 font-medium">NAVIGATE</h4>
            <Link to="/work" className="block text-sm text-gray-200 mb-2.5 hover:text-orange">Guest Post Sites</Link>
            <Link to="/services" className="block text-sm text-gray-200 mb-2.5 hover:text-orange">Services</Link>
            <Link to="/about" className="block text-sm text-gray-200 mb-2.5 hover:text-orange">About</Link>
            <Link to="/contact" className="block text-sm text-gray-200 mb-2.5 hover:text-orange">Contact</Link>
          </div>
          <div>
            <h4 className="text-xs text-muted mb-4 font-medium">SERVICES</h4>
            <Link to="/services" className="block text-sm text-gray-200 mb-2.5 hover:text-orange">Guest Post Placement</Link>
            <Link to="/services" className="block text-sm text-gray-200 mb-2.5 hover:text-orange">Guest Post Outreach</Link>
            <Link to="/services" className="block text-sm text-gray-200 mb-2.5 hover:text-orange">Link Insertion</Link>
            <Link to="/services" className="block text-sm text-gray-200 mb-2.5 hover:text-orange">Sponsored Posts</Link>
          </div>
          <div>
            <h4 className="text-xs text-muted mb-4 font-medium">CONNECT</h4>
            
            <a href="https://www.facebook.com/profile.php?id=61595347923024" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-gray-200 mb-2.5 hover:text-orange"><svg viewBox="0 0 24 24" width="18" height="18" fill="#1877F2" aria-hidden="true"><path d="M24 12a12 12 0 1 0-13.875 11.85v-8.38H7.078V12h3.047V9.356c0-3.007 1.792-4.668 4.533-4.668 1.312 0 2.686.234 2.686.234v2.953h-1.513c-1.49 0-1.956.925-1.956 1.874V12h3.328l-.532 3.47h-2.796v8.38A12.002 12.002 0 0 0 24 12z"/></svg><span>Facebook</span></a>
            <a href="#" className="block text-sm text-gray-200 mb-2.5 hover:text-orange">Instagram</a>
            <a href="#" className="block text-sm text-gray-200 mb-2.5 hover:text-orange">X</a>
            <a href="mailto:seolinknest@gmail.com" className="block text-sm text-gray-200 mb-2.5 hover:text-orange">
              seolinknest@gmail.com
            </a>
          </div>
        </div>

        <div
          className="font-display font-bold leading-[0.85] border-t border-gray-800 pt-5"
          style={{
            fontSize: 'clamp(3rem, 14vw, 9rem)',
            color: '#151515',
            WebkitTextStroke: '1px #2A2A2A'
          }}
        >
          LINKNEST
        </div>

        <div className="flex flex-wrap justify-between gap-3 mt-5 text-xs text-muted">
          <span>© 2026 LinkNest</span>
          <span>Guest Posts / Backlinks / SEO</span>
        </div>
      </div>
    </footer>
  );
}
