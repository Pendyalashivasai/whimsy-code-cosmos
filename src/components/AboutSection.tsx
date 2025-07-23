import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Heart, Coffee, Music, Cat, Download, MapPin, Calendar } from 'lucide-react';
import avatarHero from '@/assets/avatar-hero.jpg';

const comicPanels = [
  {
    title: "Chapter 1: The Beginning",
    content: "Started as a curious kid who loved drawing and wondered how websites worked",
    icon: Heart,
    color: "design-primary"
  },
  {
    title: "Chapter 2: Discovery",
    content: "Discovered design tools and fell in love with creating beautiful interfaces",
    icon: Coffee,
    color: "magic-pink"
  },
  {
    title: "Chapter 3: Evolution", 
    content: "Learned to code and realized I could bring my designs to life",
    icon: Music,
    color: "dev-primary"
  },
  {
    title: "Chapter 4: Present Day",
    content: "Now crafting digital experiences that blend beauty with functionality",
    icon: Cat,
    color: "primary"
  }
];

const funFacts = [
  { icon: Coffee, text: "Powered by ☕ and ✨", color: "design-primary" },
  { icon: Music, text: "Codes to Lo-fi beats", color: "dev-primary" },
  { icon: Cat, text: "Has 2 coding cats", color: "magic-pink" },
  { icon: Heart, text: "Loves pixel perfect designs", color: "primary" }
];

export const AboutSection = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="magical-gradient absolute inset-0 opacity-5"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-secondary px-6 py-3 rounded-full mb-6">
            <Heart className="text-primary animate-pulse" size={24} />
            <span className="font-magical font-semibold text-primary">About Me</span>
          </div>
          
          <h2 className="text-4xl lg:text-6xl font-magical font-bold mb-6">
            <span className="magical-gradient bg-clip-text text-transparent">
              My Story
            </span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-12 mb-16">
          {/* Character Card */}
          <div className="lg:col-span-1">
            <Card className="soft-shadow hover-lift border-0 magical-gradient p-1">
              <div className="bg-background rounded-lg p-6">
                <div className="text-center space-y-6">
                  <div className="relative inline-block">
                    <img 
                      src={avatarHero} 
                      alt="Alex Chen"
                      className="w-32 h-32 rounded-full object-cover mx-auto magical-shadow"
                    />
                    <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-400 rounded-full border-4 border-background animate-pulse"></div>
                  </div>
                  
                  <div>
                    <h3 className="text-2xl font-magical font-bold">Alex Chen</h3>
                    <p className="text-muted-foreground">Designer • Developer • Dreamer</p>
                  </div>

                  <div className="space-y-3 text-sm">
                    <div className="flex items-center justify-center space-x-2">
                      <MapPin size={16} className="text-primary" />
                      <span>San Francisco, CA</span>
                    </div>
                    <div className="flex items-center justify-center space-x-2">
                      <Calendar size={16} className="text-primary" />
                      <span>3+ years experience</span>
                    </div>
                  </div>

                  <Button className="w-full magical-gradient">
                    <Download className="mr-2" size={16} />
                    Download Resume
                  </Button>
                </div>
              </div>
            </Card>
          </div>

          {/* Comic Strip */}
          <div className="lg:col-span-2">
            <div className="grid md:grid-cols-2 gap-6">
              {comicPanels.map((panel, index) => (
                <Card 
                  key={index} 
                  className="soft-shadow hover-lift border-0 group"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3">
                        <div className={`w-12 h-12 rounded-full bg-${panel.color}/20 flex items-center justify-center group-hover:scale-110 transition-transform`}>
                          <panel.icon className={`text-${panel.color}`} size={24} />
                        </div>
                        <h4 className="font-magical font-semibold text-lg">{panel.title}</h4>
                      </div>
                      <p className="text-muted-foreground leading-relaxed">{panel.content}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Fun Facts */}
        <Card className="bg-secondary/50 border-0 soft-shadow">
          <CardContent className="p-8">
            <h3 className="text-2xl font-magical font-bold text-center mb-8">
              Fun Facts About Me
            </h3>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {funFacts.map((fact, index) => (
                <div 
                  key={index} 
                  className="text-center group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className={`w-16 h-16 mx-auto mb-3 rounded-full bg-${fact.color}/20 flex items-center justify-center group-hover:scale-110 transition-transform`}>
                    <fact.icon className={`text-${fact.color} group-hover:animate-bounce`} size={24} />
                  </div>
                  <p className="font-medium">{fact.text}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Philosophy */}
        <div className="text-center mt-16 max-w-3xl mx-auto">
          <h3 className="text-2xl font-magical font-bold mb-6">My Design Philosophy</h3>
          <p className="text-lg text-muted-foreground leading-relaxed">
            I believe that great design should feel like magic - effortless, delightful, and meaningful. 
            Every pixel serves a purpose, every interaction tells a story, and every project is an opportunity 
            to create something that makes people smile. When design meets development, that's where the real magic happens.
          </p>
        </div>
      </div>
    </section>
  );
};