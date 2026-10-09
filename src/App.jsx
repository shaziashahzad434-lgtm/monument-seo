import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import CustomCursor from './components/CustomCursor.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Services from './pages/Services.jsx';
import CaseStudies from './pages/CaseStudies.jsx';
import Insights from './pages/Insights.jsx';
import Contact from './pages/Contact.jsx';
import GuestPostingArticle from './pages/GuestPostingArticle.jsx';
import BestGuestPostSites from './pages/BestGuestPostSites.jsx';
import EvaluateGuestPostWebsite from "./pages/EvaluateGuestPostWebsite.jsx";
export default function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <CustomCursor />
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/work" element={<CaseStudies />} />
          <Route path="/insights" element={<Insights />} />
          <Route path="/guest-posting-article" element={<GuestPostingArticle />} />
          <Route path="/best-guest-post-sites" element={<BestGuestPostSites />} />
          <Route path="/evaluate-guest-post-website" element={<EvaluateGuestPostWebsite />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
