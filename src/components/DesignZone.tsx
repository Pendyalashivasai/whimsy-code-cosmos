import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Heart, Palette, Smartphone, Monitor } from 'lucide-react';
import designShowcase from '@/assets/design-showcase.jpg';

const projects = [
  {
    id: 1,
    title: 'Moonlight Music App',
    category: 'Mobile App UI',
    description: 'A dreamy music streaming app with soft gradients and floating elements',
    image: designShowcase,
    icon: Smartphone,
    color: 'design-primary',
    tags: ['UI/UX', 'Mobile', 'Music']
  },
  {
    id: 2,
    title: 'Cosmic Coffee Brand',
    category: 'Brand Identity',
    description: 'Complete branding for a space-themed coffee shop with magical vibes',
    image: designShowcase,
    icon: Palette,
    color: 'magic-pink',
    tags: ['Branding', 'Logo', 'Print']
  },
  {
    id: 3,
    title: 'Enchanted E-commerce',
    category: 'Web Design',
    description: 'Whimsical online store design with magical interactions and animations',
    image: designShowcase,
    icon: Monitor,
    color: 'accent',
    tags: ['Web Design', 'E-commerce', 'Animation']
  }
];

export const DesignZone = () => {
  return (
    <section id="design-zone" className="py-20 relative">
      <div className="design-gradient absolute inset-0 opacity-10"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-design-background px-6 py-3 rounded-full mb-6">
            <Palette className="text-design-primary animate-sparkle" size={24} />
            <span className="font-magical font-semibold text-design-primary">Design Zone</span>
          </div>
          
          <h2 className="text-4xl lg:text-6xl font-magical font-bold mb-6">
            <span className="design-gradient bg-clip-text text-transparent">
              Creative Playground
            </span>
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Where imagination meets pixels. Each project is crafted with love, 
            attention to detail, and a sprinkle of magic to create memorable experiences.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {projects.map((project, index) => (
            <Card 
              key={project.id} 
              className="project-card group border-0 soft-shadow hover:glow-shadow"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardContent className="p-0">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="project-overlay absolute inset-0 flex items-center justify-center">
                    <Button 
                      size="lg" 
                      className="magical-gradient opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300"
                    >
                      <ExternalLink className="mr-2" size={20} />
                      View Project
                    </Button>
                  </div>
                </div>
                
                <div className="p-6 space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className={`w-10 h-10 rounded-full bg-${project.color}/20 flex items-center justify-center`}>
                      <project.icon className={`text-${project.color}`} size={20} />
                    </div>
                    <div>
                      <h3 className="font-magical font-semibold text-lg">{project.title}</h3>
                      <p className="text-sm text-muted-foreground">{project.category}</p>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span 
                        key={tag}
                        className="px-3 py-1 bg-secondary text-secondary-foreground text-xs rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Skills Section */}
        <div className="bg-design-background/50 rounded-3xl p-8 soft-shadow">
          <h3 className="text-2xl font-magical font-bold text-center mb-8">
            Design Skills & Tools
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: 'Figma', level: 95 },
              { name: 'Adobe CC', level: 90 },
              { name: 'Sketch', level: 85 },
              { name: 'Procreate', level: 80 }
            ].map((skill) => (
              <div key={skill.name} className="text-center">
                <div className="w-16 h-16 mx-auto mb-3 rounded-full design-gradient flex items-center justify-center text-white font-bold text-lg">
                  {skill.level}%
                </div>
                <p className="font-medium">{skill.name}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <Button 
            size="lg" 
            className="design-gradient hover:scale-105 transition-transform"
          >
            <Heart className="mr-2 animate-pulse" size={20} />
            See Full Portfolio
          </Button>
        </div>
      </div>
    </section>
  );
};