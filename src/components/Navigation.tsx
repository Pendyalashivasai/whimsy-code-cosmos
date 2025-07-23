import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Sparkles, Palette, Code, User, Heart } from 'lucide-react';

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <nav className={`fixed top-0 w-full z-40 transition-all duration-300 ${
      scrolled ? 'bg-background/90 backdrop-blur-md soft-shadow' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2 font-magical font-bold text-xl">
            <Sparkles className="text-primary animate-sparkle" size={24} />
            <span className="magical-gradient bg-clip-text text-transparent">
              MagicalDev
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('home')}
              className="flex items-center space-x-2 text-foreground/80 hover:text-primary transition-colors"
            >
              <Sparkles size={16} />
              <span>Home</span>
            </button>
            <button 
              onClick={() => scrollToSection('design-zone')}
              className="flex items-center space-x-2 text-foreground/80 hover:text-design-primary transition-colors"
            >
              <Palette size={16} />
              <span>Design Zone</span>
            </button>
            <button 
              onClick={() => scrollToSection('dev-lab')}
              className="flex items-center space-x-2 text-foreground/80 hover:text-dev-primary transition-colors"
            >
              <Code size={16} />
              <span>Dev Lab</span>
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="flex items-center space-x-2 text-foreground/80 hover:text-primary transition-colors"
            >
              <User size={16} />
              <span>About Me</span>
            </button>
            <Button 
              onClick={() => scrollToSection('contact')}
              className="magical-gradient hover:scale-105 transition-transform"
            >
              <Heart size={16} className="mr-2" />
              Say Hello
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4 animate-fade-in">
            <button 
              onClick={() => scrollToSection('home')}
              className="flex items-center space-x-2 w-full text-left py-2 text-foreground/80 hover:text-primary"
            >
              <Sparkles size={16} />
              <span>Home</span>
            </button>
            <button 
              onClick={() => scrollToSection('design-zone')}
              className="flex items-center space-x-2 w-full text-left py-2 text-foreground/80 hover:text-design-primary"
            >
              <Palette size={16} />
              <span>Design Zone</span>
            </button>
            <button 
              onClick={() => scrollToSection('dev-lab')}
              className="flex items-center space-x-2 w-full text-left py-2 text-foreground/80 hover:text-dev-primary"
            >
              <Code size={16} />
              <span>Dev Lab</span>
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="flex items-center space-x-2 w-full text-left py-2 text-foreground/80 hover:text-primary"
            >
              <User size={16} />
              <span>About Me</span>
            </button>
            <Button 
              onClick={() => scrollToSection('contact')}
              className="w-full magical-gradient"
            >
              <Heart size={16} className="mr-2" />
              Say Hello
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};