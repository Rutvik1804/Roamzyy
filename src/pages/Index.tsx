import { useState } from 'react';
import Preloader from '@/components/Preloader';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import DestinationCategories from '@/components/DestinationCategories';
import ThemeTravel from '@/components/ThemeTravel';
import CTASection from '@/components/CTASection';
import WhyChooseUs from '@/components/WhyChooseUs';
import GallerySection from '@/components/GallerySection';
import VideoTestimonials from '@/components/VideoTestimonials';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';
import FloatingButtons from '@/components/FloatingButtons';

const Index = () => {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading && <Preloader onComplete={() => setLoading(false)} />}
      <div className={loading ? 'opacity-0' : 'opacity-100 transition-opacity duration-500'}>
        <Header />
        <main>
          <HeroSection />
          <DestinationCategories />
          <ThemeTravel />
          <CTASection />
          <WhyChooseUs />
          <GallerySection />
          <VideoTestimonials />
          <ContactForm />
        </main>
        <Footer />
        <FloatingButtons />
      </div>
    </>
  );
};

export default Index;
