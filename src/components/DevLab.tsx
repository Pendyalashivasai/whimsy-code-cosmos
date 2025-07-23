import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Terminal, Code, Zap, Github, ExternalLink, Play } from 'lucide-react';
import devLabImage from '@/assets/dev-lab.jpg';

const codeSnippets = [
  {
    title: 'React Magic Hook',
    language: 'TypeScript',
    code: `const useMagic = () => {
  const [sparkles, setSparkles] = useState(0);
  
  useEffect(() => {
    const timer = setInterval(() => {
      setSparkles(prev => prev + 1);
    }, 100);
    
    return () => clearInterval(timer);
  }, []);
  
  return { sparkles, ✨: sparkles };
};`
  },
  {
    title: 'CSS Animation Spell',
    language: 'CSS',
    code: `@keyframes magical-float {
  0%, 100% { 
    transform: translateY(0px) rotate(0deg);
  }
  50% { 
    transform: translateY(-20px) rotate(5deg);
  }
}

.magical-element {
  animation: magical-float 3s ease-in-out infinite;
}`
  },
  {
    title: 'API Enchantment',
    language: 'JavaScript',
    code: `const fetchMagic = async () => {
  try {
    const response = await fetch('/api/magic');
    const data = await response.json();
    
    return data.map(item => ({
      ...item,
      sparkle: Math.random() > 0.5
    }));
  } catch (error) {
    console.log('Magic failed:', error);
  }
};`
  }
];

const projects = [
  {
    id: 1,
    title: 'Portfolio Website',
    description: 'This very website - built with React, TypeScript, and lots of magic!',
    tech: ['React', 'TypeScript', 'Tailwind', 'Vite'],
    status: 'Live',
    github: '#',
    demo: '#'
  },
  {
    id: 2,
    title: 'Task Management App',
    description: 'A beautiful and intuitive task manager with drag-and-drop functionality',
    tech: ['React', 'Node.js', 'MongoDB', 'Socket.io'],
    status: 'In Progress',
    github: '#',
    demo: '#'
  },
  {
    id: 3,
    title: 'Weather Wizard',
    description: 'Magical weather app with animated backgrounds and mood-based recommendations',
    tech: ['Vue.js', 'Weather API', 'Canvas', 'PWA'],
    status: 'Completed',
    github: '#',
    demo: '#'
  }
];

export const DevLab = () => {
  const [currentSnippet, setCurrentSnippet] = useState(0);
  const [typedCode, setTypedCode] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    if (!isTyping) return;

    const code = codeSnippets[currentSnippet].code;
    const timeout = setTimeout(() => {
      if (typedCode.length < code.length) {
        setTypedCode(code.substring(0, typedCode.length + 1));
      } else {
        setIsTyping(false);
        setTimeout(() => {
          setTypedCode('');
          setCurrentSnippet((prev) => (prev + 1) % codeSnippets.length);
          setIsTyping(true);
        }, 3000);
      }
    }, 50);

    return () => clearTimeout(timeout);
  }, [typedCode, currentSnippet, isTyping]);

  return (
    <section id="dev-lab" className="py-20 relative">
      <div className="dev-gradient absolute inset-0 opacity-10"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-dev-background px-6 py-3 rounded-full mb-6">
            <Terminal className="text-dev-primary animate-glow-pulse" size={24} />
            <span className="font-magical font-semibold text-dev-primary">Dev Lab</span>
          </div>
          
          <h2 className="text-4xl lg:text-6xl font-magical font-bold mb-6">
            <span className="dev-gradient bg-clip-text text-transparent">
              Code & Magic
            </span>
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Where logic meets creativity. I transform ideas into interactive experiences 
            using modern technologies and a passion for clean, efficient code.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Live Code Demo */}
          <div className="space-y-8">
            <Card className="code-block hover-lift">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Terminal className="text-dev-primary" size={20} />
                  <span>Live Code Demo</span>
                  <div className="flex space-x-1 ml-auto">
                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                    <div className="w-3 h-3 rounded-full bg-green-400"></div>
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-gray-900 rounded-lg p-4 text-green-400 font-mono text-sm overflow-x-auto">
                  <div className="text-gray-500 mb-2">
                    // {codeSnippets[currentSnippet].title} - {codeSnippets[currentSnippet].language}
                  </div>
                  <pre className="whitespace-pre-wrap">
                    {typedCode}
                    <span className="animate-pulse">|</span>
                  </pre>
                </div>
              </CardContent>
            </Card>

            {/* Tech Stack */}
            <Card className="code-block">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Zap className="text-dev-primary" size={20} />
                  <span>Tech Arsenal</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { name: 'React', level: 90, color: 'dev-primary' },
                    { name: 'TypeScript', level: 85, color: 'dev-secondary' },
                    { name: 'Node.js', level: 80, color: 'magic-blue' },
                    { name: 'Python', level: 75, color: 'design-primary' }
                  ].map((tech) => (
                    <div key={tech.name} className="space-y-2">
                      <div className="flex justify-between">
                        <span className="font-medium">{tech.name}</span>
                        <span className="text-sm text-muted-foreground">{tech.level}%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div 
                          className={`bg-${tech.color} h-2 rounded-full transition-all duration-1000 glow-shadow`}
                          style={{ width: `${tech.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Dev Environment Image */}
          <div className="flex items-center">
            <div className="relative w-full">
              <img 
                src={devLabImage} 
                alt="Development Environment"
                className="w-full rounded-3xl soft-shadow hover-lift"
              />
              <div className="absolute inset-0 bg-dev-primary/20 rounded-3xl flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                <Button size="lg" className="dev-gradient">
                  <Play className="mr-2" size={20} />
                  Watch Me Code
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Projects Showcase */}
        <div className="space-y-8">
          <h3 className="text-3xl font-magical font-bold text-center">Recent Projects</h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <Card 
                key={project.id} 
                className="code-block hover-lift group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <CardTitle className="text-lg">{project.title}</CardTitle>
                    <span className={`px-2 py-1 text-xs rounded-full ${
                      project.status === 'Live' ? 'bg-green-100 text-green-800' :
                      project.status === 'In Progress' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-blue-100 text-blue-800'
                    }`}>
                      {project.status}
                    </span>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground text-sm">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span 
                        key={tech}
                        className="px-2 py-1 bg-dev-background text-dev-primary text-xs rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex space-x-2 pt-2">
                    <Button size="sm" variant="outline" className="hover-lift">
                      <Github className="mr-1" size={14} />
                      Code
                    </Button>
                    <Button size="sm" className="dev-gradient">
                      <ExternalLink className="mr-1" size={14} />
                      Demo
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <Button 
            size="lg" 
            className="dev-gradient hover:scale-105 transition-transform"
          >
            <Code className="mr-2 animate-pulse" size={20} />
            View Full Codebase
          </Button>
        </div>
      </div>
    </section>
  );
};