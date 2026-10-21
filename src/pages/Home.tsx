import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, Code2, Lightbulb, Rocket } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { SectionHeading } from '../components/ui/SectionHeading';
import { HeroNetwork } from '../components/visuals/HeroNetwork';
import { siteConfig } from '../data/siteConfig';
import { About } from './About';
import { Team } from './Team';
import { Join } from './Join';
import { Contact } from './Contact';

export function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
        <HeroNetwork />
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center flex flex-col items-center">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative mb-10 group cursor-default"
          >
            <div className="absolute inset-0 bg-accent/20 blur-xl rounded-full opacity-50 group-hover:opacity-100 transition-opacity duration-700" />
            <div className="relative inline-flex items-center gap-3 px-8 py-3 rounded-full bg-background/80 border border-accent/40 backdrop-blur-xl shadow-[0_0_25px_rgba(0,240,255,0.2)] overflow-hidden">
              <motion.div 
                animate={{ x: ["-100%", "200%"] }}
                transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
                className="absolute inset-0 w-1/2 bg-gradient-to-r from-transparent via-accent/30 to-transparent skew-x-12"
              />
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-accent"></span>
              </span>
              <span className="font-display tracking-widest uppercase text-sm md:text-base font-bold text-transparent bg-clip-text bg-gradient-to-r from-accent to-white drop-shadow-[0_0_10px_rgba(0,240,255,0.3)]">
                AI CLUB | SIMATS &bull; Saveetha University
              </span>
            </div>
          </motion.div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold tracking-tight text-balance mb-6">
            <span className="sr-only">AI CLUB | SIMATS - </span>Where Students <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-foreground to-accent">Build the Future</span> <br className="hidden md:block" />
            with AI.
          </h1>
          
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-muted text-balance mb-10">
            {siteConfig.description}
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="w-full sm:w-auto group">
              <Link to="/projects">
                Explore Our Work
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="w-full sm:w-auto">
              <Link to="/#join" onClick={(e) => {
                if (window.location.pathname === '/') {
                  e.preventDefault();
                  document.getElementById('join')?.scrollIntoView({ behavior: 'smooth' });
                  window.history.pushState(null, '', '/#join');
                }
              }}>Join the Community</Link>
            </Button>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-muted hidden md:block">
          <div className="w-1 h-8 rounded-full bg-gradient-to-b from-accent to-transparent opacity-50" />
        </div>
      </section>

      {/* Identity / What We Do Section */}
      <section className="py-24 bg-primary border-y border-border relative">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { icon: BookOpen, title: "Learn", desc: "Master AI fundamentals through structured pathways and peer-led workshops." },
              { icon: Code2, title: "Build", desc: "Apply knowledge to build real-world projects and open-source contributions." },
              { icon: Lightbulb, title: "Innovate", desc: "Research new architectures and experiment with emerging AI technologies." },
              { icon: Rocket, title: "Impact", desc: "Deploy solutions that solve actual problems on campus and beyond." }
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-start p-6 bg-card rounded-xl border border-border hover:border-accent/30 transition-colors">
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center text-accent mb-4">
                  <item.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-display font-semibold mb-2">{item.title}</h3>
                <p className="text-muted text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div id="about"><About /></div>
      <div id="team"><Team /></div>
      <div id="join"><Join /></div>
      <div id="contact"><Contact /></div>
    </div>
  );
}
