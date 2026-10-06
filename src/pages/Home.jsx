import Hero from '../components/Hero';
import ProductsCarousel from '../components/ProductsCarousel';
import ProductsSection from '../components/ProductsSection';
import FeaturedCollections from '../components/FeaturedCollections';
import PhilosophySection from '../components/PhilosophySection';

const Home = () => {
  return (
    <>
      <Hero />
      <ProductsCarousel />
      <ProductsSection />
      <FeaturedCollections />
      <PhilosophySection />
    </>
  );
};

export default Home;
