import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, MessageCircle, Send, Heart, Github, Twitter, Linkedin, Sparkles } from 'lucide-react';
import { toast } from 'sonner';

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast("Message sent! ✨ I'll get back to you soon!", {
      icon: "💌",
    });
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="hero-gradient absolute inset-0 opacity-10"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-secondary px-6 py-3 rounded-full mb-6">
            <Heart className="text-primary animate-pulse" size={24} />
            <span className="font-magical font-semibold text-primary">Let's Connect</span>
          </div>
          
          <h2 className="text-4xl lg:text-6xl font-magical font-bold mb-6">
            <span className="magical-gradient bg-clip-text text-transparent">
              Say Hello!
            </span>
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Have a magical project in mind? Want to collaborate? Or just want to chat about 
            design and code? I'd love to hear from you!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="soft-shadow border-0 hover-lift">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <MessageCircle className="text-primary" size={24} />
                <span className="font-magical">Send a Message</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Input
                    placeholder="Your magical name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="border-primary/20 focus:border-primary transition-colors"
                  />
                </div>
                
                <div>
                  <Input
                    type="email"
                    placeholder="your.email@example.com"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="border-primary/20 focus:border-primary transition-colors"
                  />
                </div>
                
                <div>
                  <Textarea
                    placeholder="Tell me about your magical project..."
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="border-primary/20 focus:border-primary transition-colors resize-none"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full magical-gradient hover:scale-105 transition-transform"
                >
                  <Send className="mr-2 animate-pulse" size={20} />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info & Social */}
          <div className="space-y-8">
            {/* Quick Contact */}
            <Card className="soft-shadow border-0 hover-lift">
              <CardContent className="p-6">
                <h3 className="font-magical font-semibold text-xl mb-6 flex items-center">
                  <Sparkles className="mr-2 text-primary" size={20} />
                  Quick Connect
                </h3>
                
                <div className="space-y-4">
                  <a 
                    href="mailto:hello@alexchen.dev"
                    className="flex items-center space-x-3 p-3 rounded-lg hover:bg-secondary transition-colors group"
                  >
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Mail className="text-primary" size={20} />
                    </div>
                    <div>
                      <p className="font-medium">Email Me</p>
                      <p className="text-sm text-muted-foreground">hello@alexchen.dev</p>
                    </div>
                  </a>
                  
                  <a 
                    href="https://calendly.com/alexchen"
                    className="flex items-center space-x-3 p-3 rounded-lg hover:bg-secondary transition-colors group"
                  >
                    <div className="w-10 h-10 rounded-full bg-design-primary/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <MessageCircle className="text-design-primary" size={20} />
                    </div>
                    <div>
                      <p className="font-medium">Schedule a Call</p>
                      <p className="text-sm text-muted-foreground">Let's chat over coffee!</p>
                    </div>
                  </a>
                </div>
              </CardContent>
            </Card>

            {/* Social Links */}
            <Card className="soft-shadow border-0 hover-lift">
              <CardContent className="p-6">
                <h3 className="font-magical font-semibold text-xl mb-6 flex items-center">
                  <Heart className="mr-2 text-primary" size={20} />
                  Find Me Online
                </h3>
                
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { icon: Github, label: 'GitHub', color: 'dev-primary', handle: '@alexchen' },
                    { icon: Twitter, label: 'Twitter', color: 'magic-blue', handle: '@alexdesigns' },
                    { icon: Linkedin, label: 'LinkedIn', color: 'primary', handle: '/in/alexchen' },
                    { icon: Mail, label: 'Dribbble', color: 'design-primary', handle: '@alexchen' }
                  ].map((social, index) => (
                    <a
                      key={social.label}
                      href="#"
                      className="flex flex-col items-center space-y-2 p-4 rounded-lg hover:bg-secondary transition-colors group"
                    >
                      <div className={`w-12 h-12 rounded-full bg-${social.color}/20 flex items-center justify-center group-hover:scale-110 transition-transform`}>
                        <social.icon className={`text-${social.color}`} size={24} />
                      </div>
                      <div className="text-center">
                        <p className="font-medium text-sm">{social.label}</p>
                        <p className="text-xs text-muted-foreground">{social.handle}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Fun CTA */}
            <div className="text-center p-6 bg-secondary/50 rounded-3xl soft-shadow">
              <h3 className="font-magical font-semibold text-lg mb-2">
                Ready to create something magical together?
              </h3>
              <p className="text-muted-foreground text-sm mb-4">
                Let's turn your ideas into beautiful digital experiences!
              </p>
              <Button className="magical-gradient hover:scale-105 transition-transform">
                <Sparkles className="mr-2 animate-sparkle" size={16} />
                Start a Project
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};