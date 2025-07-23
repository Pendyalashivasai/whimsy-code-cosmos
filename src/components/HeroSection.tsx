import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown, Sparkles, Heart, Code } from 'lucide-react';
import avatarHero from '@/assets/avatar-hero.jpg';

export const HeroSection = () => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  
  const texts = [
    'Creative Designer',
    'App Developer', 
    'Digital Dreamer',
    'Code Artist'
  ];

  useEffect(() => {
    const timeout = setTimeout(() => {
      const current = texts[currentIndex];
      
      if (!isDeleting) {
        setCurrentText(current.substring(0, currentText.length + 1));
        
        if (currentText === current) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        setCurrentText(current.substring(0, currentText.length - 1));
        
        if (currentText === '') {
          setIsDeleting(false);
          setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [currentText, currentIndex, isDeleting, texts]);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="hero-gradient absolute inset-0 opacity-20"></div>
      
      <div className="container mx-auto px-4 py-20 relative z-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-magical font-bold leading-tight">
                <span className="block text-foreground">Hello, I'm</span>
                <span className="block magical-gradient bg-clip-text text-transparent">
                  Alex Chen
                </span>
              </h1>
              
              <div className="text-2xl lg:text-3xl font-medium text-muted-foreground">
                <span>A </span>
                <span className="text-primary font-magical border-r-2 border-primary animate-pulse">
                  {currentText}
                </span>
              </div>
            </div>

            <p className="text-lg text-muted-foreground max-w-2xl">
              I blend creativity with code to craft magical digital experiences. 
              From pixel-perfect designs to interactive apps, I bring ideas to life 
              with a touch of whimsy and a lot of passion.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                size="lg" 
                onClick={() => scrollToSection('design-zone')}
                className="design-gradient hover:scale-105 transition-transform group"
              >
                <Sparkles className="mr-2 group-hover:animate-sparkle" size={20} />
                Explore My Work
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                onClick={() => scrollToSection('contact')}
                className="hover-lift"
              >
                <Heart className="mr-2" size={20} />
                Let's Connect
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">50+</div>
                <div className="text-sm text-muted-foreground">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-design-primary">3+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-dev-primary">100%</div>
                <div className="text-sm text-muted-foreground">Passion</div>
              </div>
            </div>
          </div>

          {/* Avatar Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden magical-shadow animate-float">
                <img 
                  src={avatarHero} 
                  alt="Alex Chen - Designer & Developer"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Floating Icons */}
              <div className="absolute -top-4 -right-4 animate-bounce">
                <div className="w-16 h-16 rounded-full design-gradient flex items-center justify-center text-white">
                  <Sparkles size={24} />
                </div>
              </div>
              
              <div className="absolute -bottom-4 -left-4 animate-bounce" style={{ animationDelay: '0.5s' }}>
                <div className="w-16 h-16 rounded-full dev-gradient flex items-center justify-center text-white">
                  <Code size={24} />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button 
            onClick={() => scrollToSection('design-zone')}
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowDown size={32} />
          </button>
        </div>
      </div>
    </section>
  );
};