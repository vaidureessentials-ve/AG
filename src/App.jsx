import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Products from './pages/Products';
import About from './pages/About';
import Contact from './pages/Contact';
import ComingSoon from './pages/ComingSoon';
import EcoMaterials from './pages/EcoMaterials';
import Packaging from './pages/Packaging';
import PrivateLabel from './pages/PrivateLabel';
import Fragrance from './pages/Fragrance';
import RefillProgram from './pages/RefillProgram';
import Certifications from './pages/Certifications';
import GiftSet from './pages/GiftSet';
import DryAmenity from './pages/DryAmenity';
import WetAmenity from './pages/WetAmenity';

function App() {
  return (
    <div className="flex flex-col min-h-screen font-sans text-primary bg-background selection:bg-blue-500 selection:text-white">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ComingSoon />} />
          <Route path="/about" element={<About />} />
          <Route path="/coming-soon" element={<ComingSoon />} />
          <Route path="/eco-materials" element={<EcoMaterials />} />
          <Route path="/packaging" element={<Packaging />} />
          <Route path="/private-label" element={<PrivateLabel />} />
          <Route path="/fragrance" element={<Fragrance />} />
          <Route path="/refill-program" element={<RefillProgram />} />
          <Route path="/gift-set" element={<GiftSet />} />
          <Route path="/dry-amenity" element={<DryAmenity />} />
          <Route path="/wet-amenity" element={<WetAmenity />} />



          <Route path="/sustainability" element={<ComingSoon />} />
          <Route path="/certifications" element={<Certifications />} />
          <Route path="/customization" element={<ComingSoon />} />
          <Route path="/b2bsolutions" element={<ComingSoon />} />
          <Route path="/aboutus" element={<ComingSoon />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
