import { useState } from 'react';
import { Heart, Sparkles, Github, Twitter, Linkedin, Mail } from 'lucide-react';

export const Footer = () => {
  const [isWaving, setIsWaving] = useState(false);

  const handleWave = () => {
    setIsWaving(true);
    setTimeout(() => setIsWaving(false), 1000);
  };

  return (
    <footer className="relative overflow-hidden">
      <div className="magical-gradient absolute inset-0 opacity-20"></div>
      
      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="text-center space-y-8">
          {/* Goodbye Wave */}
          <div className="space-y-4">
            <div 
              className={`text-6xl cursor-pointer inline-block ${isWaving ? 'animate-wave' : ''}`}
              onClick={handleWave}
            >
              👋
            </div>
            <h3 className="text-2xl font-magical font-bold">
              Thanks for visiting my magical corner of the web!
            </h3>
            <p className="text-muted-foreground max-w-md mx-auto">
              Hope you enjoyed the journey through my design and development adventures.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6">
            {[
              { icon: Github, label: 'GitHub', href: '#' },
              { icon: Twitter, label: 'Twitter', href: '#' },
              { icon: Linkedin, label: 'LinkedIn', href: '#' },
              { icon: Mail, label: 'Email', href: 'mailto:hello@alexchen.dev' }
            ].map((social) => (
              <a
                key={social.label}
                href={social.href}
                className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center hover:scale-110 transition-transform group"
                aria-label={social.label}
              >
                <social.icon className="text-primary group-hover:animate-bounce" size={20} />
              </a>
            ))}
          </div>

          {/* Divider */}
          <div className="flex items-center justify-center space-x-4">
            <div className="h-px bg-border flex-1 max-w-20"></div>
            <Sparkles className="text-primary animate-sparkle" size={20} />
            <div className="h-px bg-border flex-1 max-w-20"></div>
          </div>

          {/* Copyright */}
          <div className="space-y-2">
            <p className="text-sm text-muted-foreground">
              © 2024 Alex Chen. Made with{' '}
              <Heart className="inline w-4 h-4 text-red-400 animate-pulse" />{' '}
              and lots of{' '}
              <Sparkles className="inline w-4 h-4 text-primary animate-sparkle" />
            </p>
            <p className="text-xs text-muted-foreground">
              Designed in Figma • Built with React & TypeScript • Powered by Magic ✨
            </p>
          </div>

          {/* Easter Egg */}
          <div className="text-xs text-muted-foreground/50">
            <button 
              onClick={() => {
                const stars = document.querySelectorAll('.animate-sparkle');
                stars.forEach(star => {
                  star.classList.add('animate-bounce');
                  setTimeout(() => star.classList.remove('animate-bounce'), 1000);
                });
              }}
              className="hover:text-primary transition-colors"
            >
              🪄 Click for extra magic
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};