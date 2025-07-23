import { Navigation } from '@/components/Navigation';
import { HeroSection } from '@/components/HeroSection';
import { DesignZone } from '@/components/DesignZone';
import { DevLab } from '@/components/DevLab';
import { AboutSection } from '@/components/AboutSection';
import { ContactSection } from '@/components/ContactSection';
import { Footer } from '@/components/Footer';
import { FloatingStars } from '@/components/FloatingStars';
import { MagicalCursor } from '@/components/MagicalCursor';

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative">
      {/* Magical Elements */}
      <FloatingStars />
      <MagicalCursor />
      
      {/* Navigation */}
      <Navigation />
      
      {/* Main Content */}
      <main className="relative z-10">
        <HeroSection />
        <DesignZone />
        <DevLab />
        <AboutSection />
        <ContactSection />
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
