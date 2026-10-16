import { useEffect, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home';
import Products from './pages/Products';
import Sustainability from './pages/Sustainability';
import Customization from './pages/Customization';
import B2B from './pages/B2B';
import About from './pages/About';
import Contact from './pages/Contact';
import GiftSet from './pages/GiftSet';
import DryAmenity from './pages/DryAmenity';
import WetAmenity from './pages/WetAmenity';
import EcoMaterials from './pages/EcoMaterials';
import RefillProgram from './pages/RefillProgram';
import PrivateLabel from './pages/PrivateLabel';
import PackagingCustomization from './pages/PackagingCustomization';
import HotelResortB2B from './pages/HotelResortB2B';
import HospitalAmenitiesB2B from './pages/HospitalAmenitiesB2B';
import Invoice from './pages/Invoice';

function MainApp() {
  const glowRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    // Cursor glow effect
    const handleMouseMove = (e) => {
      if (glowRef.current) {
        glowRef.current.style.left = `${e.clientX}px`;
        glowRef.current.style.top = `${e.clientY}px`;
      }
    };
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    // Global scroll reveal
    const els = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale');
    const observer = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
    
    els.forEach(el => observer.observe(el));

    // Scroll to top on route change
    window.scrollTo(0, 0);

    return () => observer.disconnect();
  }, [location.pathname]);

  const isInvoicePage = location.pathname === '/invoice';

  return (
    <>
      {/* Cursor glow */}
      <div ref={glowRef} className="cursor-glow" aria-hidden="true" />
      <div
        className="app-main-layout"
        style={{
          fontFamily: 'var(--font-sans)',
          color: 'var(--primary)',
          background: isInvoicePage ? '#ffffff' : 'var(--cream)',
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column'
        }}
      >
        {!isInvoicePage && <Navbar />}
        <main style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/gift-set" element={<GiftSet />} />
            <Route path="/products/dry-amenity" element={<DryAmenity />} />
            <Route path="/products/wet-amenity" element={<WetAmenity />} />
            <Route path="/sustainability" element={<Sustainability />} />
            <Route path="/sustainability/eco-materials" element={<EcoMaterials />} />
            <Route path="/sustainability/refill-program" element={<RefillProgram />} />
            <Route path="/customization" element={<Customization />} />
            <Route path="/customization/private-label" element={<PrivateLabel />} />
            <Route path="/customization/packaging" element={<PackagingCustomization />} />
            <Route path="/b2b" element={<B2B />} />
            <Route path="/b2b/hotel-resort" element={<HotelResortB2B />} />
            <Route path="/b2b/hospital-amenities" element={<HospitalAmenitiesB2B />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/invoice" element={<Invoice />} />
          </Routes>
        </main>
        {!isInvoicePage && <Footer />}
      </div>
    </>
  );
}

function App() {
  return (
    <Router>
      <MainApp />
    </Router>
  );
}

export default App;
