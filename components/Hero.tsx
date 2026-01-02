import React from 'react';
import { SOCIAL_LINKS } from '../constants';
import { Github, Linkedin, Twitter, Mail, ArrowDown, Phone } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Hero: React.FC = () => {
  const { content } = useLanguage();
  
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'github': return <Github className="w-6 h-6" />;
      case 'linkedin': return <Linkedin className="w-6 h-6" />;
      case 'twitter': return <Twitter className="w-6 h-6" />;
      case 'mail': return <Mail className="w-6 h-6" />;
      case 'whatsapp': return <Phone className="w-6 h-6" />;
      default: return null;
    }
  };

  return (
    <div id="home" className="min-h-screen flex items-center justify-center relative bg-gradient-to-b from-darker to-dark pt-16">
      <div className="text-center px-6 max-w-4xl mx-auto z-10">
        <div className="mb-8 relative inline-block">
            <div className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-primary shadow-lg shadow-primary/20 mx-auto">
                <img 
                    src="/profile.jpg" 
                    alt={content.hero.name}
                    className="w-full h-full object-cover"
                />
            </div>
            <div className="absolute bottom-1 sm:bottom-2 end-1 sm:end-2 w-4 h-4 sm:w-6 sm:h-6 bg-green-500 rounded-full border-2 sm:border-4 border-darker" title={content.hero.availability}></div>
        </div>
        
        <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
          {content.hero.name}
        </h1>
        
        <h2 className="text-xl sm:text-2xl md:text-3xl text-slate-300 mb-6 font-light">
          {content.hero.title}
        </h2>
        
        <p className="text-base sm:text-lg text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed px-4 sm:px-0">
          {content.hero.tagline}
        </p>
        
        <div className="flex justify-center gap-4 sm:gap-6 mb-12">
          {SOCIAL_LINKS.map((link) => (
            <a
              key={link.platform}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-white hover:scale-110 transition-all duration-300 p-2 bg-slate-800/50 rounded-lg hover:bg-primary/20"
              aria-label={link.platform}
            >
              {getIcon(link.icon)}
            </a>
          ))}
        </div>

        <a 
          href="#about"
          className="inline-flex items-center gap-2 px-8 py-3 bg-primary hover:bg-blue-600 text-white rounded-full font-medium transition-colors shadow-lg shadow-blue-500/25"
        >
          {content.hero.action}
          <ArrowDown className="w-4 h-4" />
        </a>
      </div>

      {/* Decorative background elements */}
      <div className="absolute top-1/4 start-1/4 w-48 h-48 sm:w-64 sm:h-64 md:w-96 md:h-96 bg-blue-500/10 rounded-full blur-3xl -z-0 pointer-events-none"></div>
      <div className="absolute bottom-1/4 end-1/4 w-48 h-48 sm:w-64 sm:h-64 md:w-96 md:h-96 bg-purple-500/10 rounded-full blur-3xl -z-0 pointer-events-none"></div>
    </div>
  );
};

export default Hero;