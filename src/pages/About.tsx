import React, { useState, useEffect } from 'react';
import { SectionHeading } from '../components/ui/SectionHeading';
import { Target, Eye, Heart, Zap, Users, Shield, Cpu, Globe2, Code } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';
import { motion, AnimatePresence } from 'framer-motion';

function CycleFlow() {
  const transition = { duration: 12, repeat: Infinity, ease: "linear" as any };

  return (
    <div className="relative w-[340px] h-[340px] mx-auto flex items-center justify-center my-12 md:my-0">
      {/* Thin circular path */}
      <div className="absolute inset-16 rounded-full border border-accent/20" />
      
      {/* Traveling Data Particle */}
      <motion.div 
        animate={{ rotate: [0, 90, 180, 270, 360] }}
        transition={transition}
        className="absolute inset-16 z-0"
      >
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-accent shadow-[0_0_15px_4px_rgba(0,240,255,0.7)]" />
      </motion.div>

      {/* Words */}
      <motion.div 
        animate={{ scale: [1.1, 0.9, 0.9, 0.9, 1.1], opacity: [1, 0.4, 0.4, 0.4, 1], filter: ['drop-shadow(0 0 10px rgba(0,240,255,0.5))', 'drop-shadow(0 0 0px rgba(0,240,255,0))', 'drop-shadow(0 0 0px rgba(0,240,255,0))', 'drop-shadow(0 0 0px rgba(0,240,255,0))', 'drop-shadow(0 0 10px rgba(0,240,255,0.5))'] }}
        transition={transition}
        className="absolute top-2 left-1/2 -translate-x-1/2 font-display font-bold text-accent text-lg px-3 py-1 bg-card rounded-md border border-accent/20 z-10"
      >
        Learn
      </motion.div>

      <motion.div 
        animate={{ scale: [0.9, 1.1, 0.9, 0.9, 0.9], opacity: [0.4, 1, 0.4, 0.4, 0.4], filter: ['drop-shadow(0 0 0px rgba(0,240,255,0))', 'drop-shadow(0 0 10px rgba(0,240,255,0.5))', 'drop-shadow(0 0 0px rgba(0,240,255,0))', 'drop-shadow(0 0 0px rgba(0,240,255,0))', 'drop-shadow(0 0 0px rgba(0,240,255,0))'] }}
        transition={transition}
        className="absolute top-1/2 right-0 -translate-y-1/2 font-display font-bold text-accent text-lg px-3 py-1 bg-card rounded-md border border-accent/20 z-10"
      >
        Build
      </motion.div>

      <motion.div 
        animate={{ scale: [0.9, 0.9, 1.1, 0.9, 0.9], opacity: [0.4, 0.4, 1, 0.4, 0.4], filter: ['drop-shadow(0 0 0px rgba(0,240,255,0))', 'drop-shadow(0 0 0px rgba(0,240,255,0))', 'drop-shadow(0 0 10px rgba(0,240,255,0.5))', 'drop-shadow(0 0 0px rgba(0,240,255,0))', 'drop-shadow(0 0 0px rgba(0,240,255,0))'] }}
        transition={transition}
        className="absolute bottom-2 left-1/2 -translate-x-1/2 font-display font-bold text-accent text-lg px-3 py-1 bg-card rounded-md border border-accent/20 z-10"
      >
        Innovate
      </motion.div>

      <motion.div 
        animate={{ scale: [0.9, 0.9, 0.9, 1.1, 0.9], opacity: [0.4, 0.4, 0.4, 1, 0.4], filter: ['drop-shadow(0 0 0px rgba(0,240,255,0))', 'drop-shadow(0 0 0px rgba(0,240,255,0))', 'drop-shadow(0 0 0px rgba(0,240,255,0))', 'drop-shadow(0 0 10px rgba(0,240,255,0.5))', 'drop-shadow(0 0 0px rgba(0,240,255,0))'] }}
        transition={transition}
        className="absolute top-1/2 left-0 -translate-y-1/2 font-display font-bold text-accent text-lg px-3 py-1 bg-card rounded-md border border-accent/20 z-10"
      >
        Impact
      </motion.div>

      {/* Center Logo */}
      <div className="relative z-10 w-28 h-28 rounded-full border border-accent/30 p-2 bg-background flex items-center justify-center shadow-[0_0_30px_rgba(0,240,255,0.1)]">
        <img src={siteConfig.logo} alt="Club Logo" className="w-full h-full rounded-full object-cover" />
      </div>
    </div>
  );
}

const values = [
  { id: 1, title: "Curiosity", desc: "Never stop asking how things work under the hood.", icon: Zap },
  { id: 2, title: "Collaboration", desc: "AI is a team sport. We build better together.", icon: Users },
  { id: 3, title: "Responsible AI", desc: "Building systems that are ethical, fair, and safe.", icon: Shield },
  { id: 4, title: "Practicality", desc: "Focusing on applied engineering over pure theory.", icon: Cpu },
  { id: 5, title: "Inclusivity", desc: "Welcoming all majors, not just computer science.", icon: Globe2 },
  { id: 6, title: "Openness", desc: "Sharing knowledge and open-sourcing our work.", icon: Code }
];

function AnimatedCoreValues() {
  const [activeId, setActiveId] = useState(1);
  const activeValue = values.find(v => v.id === activeId)!;

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveId((current) => (current === values.length ? 1 : current + 1));
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative">
      <div className="flex items-center gap-4 mb-8">
        <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center shrink-0">
          <Heart className="w-8 h-8 text-accent" />
        </div>
        <h3 className="text-2xl font-display font-semibold">Core Values</h3>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-card border border-border p-8 rounded-3xl overflow-hidden relative">
        <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-transparent opacity-50" />
        
        <div className="lg:col-span-5 flex flex-col gap-2 relative z-10">
          {values.map((val) => (
            <button
              key={val.id}
              onClick={() => setActiveId(val.id)}
              className={`text-left px-6 py-4 rounded-xl transition-all duration-300 flex items-center gap-4 ${
                activeId === val.id 
                  ? 'bg-accent/10 border border-accent/30 text-white shadow-[0_0_15px_rgba(0,240,255,0.1)]' 
                  : 'hover:bg-primary text-muted hover:text-gray-300 border border-transparent'
              }`}
            >
              <val.icon className={`w-5 h-5 transition-colors ${activeId === val.id ? 'text-accent' : 'text-muted'}`} />
              <span className="font-semibold text-lg">{val.title}</span>
            </button>
          ))}
        </div>
        
        <div className="lg:col-span-7 relative z-10 flex items-center justify-center min-h-[300px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeId}
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="flex flex-col items-center text-center p-8"
            >
              <div className="w-24 h-24 rounded-3xl bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center mb-8 border border-accent/30 shadow-[0_0_30px_rgba(0,240,255,0.2)]">
                <activeValue.icon className="w-12 h-12 text-accent" />
              </div>
              <h4 className="text-3xl font-display font-bold text-foreground mb-4">{activeValue.title}</h4>
              <p className="text-xl text-muted leading-relaxed max-w-md">{activeValue.desc}</p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

export function About() {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        <SectionHeading title="About Us" />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
          <div className="text-lg md:text-xl text-muted text-balance leading-relaxed">
            <p className="mb-6">
              <strong className="text-foreground">SIMATS ENGINEERING AI CLUB</strong> at <strong className="text-foreground">Saveetha Institute of Medical and Technical Sciences (SIMATS)</strong> is a student-driven community passionate about Artificial Intelligence, innovation, and technology. We bring together curious minds to learn, build, experiment, and collaborate through projects, workshops, competitions, and real-world problem solving.
            </p>
          </div>
          
          <div>
            <CycleFlow />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="bg-card border border-border p-8 rounded-xl text-center">
            <div className="text-4xl font-display font-bold text-accent mb-2">50+</div>
            <div className="text-muted text-sm uppercase tracking-wider font-semibold">Active Members</div>
          </div>
          <div className="bg-card border border-border p-8 rounded-xl text-center">
            <div className="text-4xl font-display font-bold text-accent mb-2">15+</div>
            <div className="text-muted text-sm uppercase tracking-wider font-semibold">Projects Built</div>
          </div>
          <div className="bg-card border border-border p-8 rounded-xl text-center">
            <div className="text-4xl font-display font-bold text-accent mb-2">20+</div>
            <div className="text-muted text-sm uppercase tracking-wider font-semibold">Events Hosted</div>
          </div>
        </div>

        <div className="space-y-16">
          <section className="flex flex-col md:flex-row gap-8 items-start">
            <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center shrink-0">
              <Eye className="w-8 h-8 text-accent" />
            </div>
            <div>
              <h3 className="text-2xl font-display font-semibold mb-4">Our Vision</h3>
              <p className="text-muted leading-relaxed">
                To establish {siteConfig.universityName} as a hub for student-driven AI innovation, where anyone regardless of their background can learn, build, and deploy intelligent systems that make a positive impact on society.
              </p>
            </div>
          </section>

          <section className="flex flex-col md:flex-row gap-8 items-start">
            <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center shrink-0">
              <Target className="w-8 h-8 text-accent" />
            </div>
            <div>
              <h3 className="text-2xl font-display font-semibold mb-4">Our Mission</h3>
              <p className="text-muted leading-relaxed">
                We bridge the gap between academic theory and practical engineering. By providing resources, mentorship, and a collaborative environment, we empower students to transform abstract machine learning concepts into working software products.
              </p>
            </div>
          </section>

          <AnimatedCoreValues />
        </div>
      </div>
    </div>
  );
}
