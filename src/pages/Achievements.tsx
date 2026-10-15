import React from "react";
import { SectionHeading } from "../components/ui/SectionHeading";
import { motion } from "framer-motion";
import { Trophy, FileText, Award, Code, Users, Star } from "lucide-react";

export function Achievements() {
  return (
    <div className="py-16 bg-background">
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        <SectionHeading 
          title="Our Achievements" 
          subtitle="Milestones, awards, and the impact our community has generated."
          centered
        />

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-[240px]">
          {/* Bento Item 1 - Large Feature (Hackathon) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-2 lg:col-span-2 row-span-2 rounded-3xl bg-primary border border-border overflow-hidden relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-primary to-primary z-0" />
            <div className="absolute top-0 right-0 p-8 opacity-20 group-hover:scale-110 group-hover:opacity-30 transition-all duration-700">
              <Trophy className="w-48 h-48 text-accent" />
            </div>
            <div className="relative z-10 h-full p-8 flex flex-col justify-end">
              <span className="inline-block px-3 py-1 bg-accent/20 text-accent text-xs font-bold tracking-widest rounded-full mb-4 w-fit border border-accent/30">2025</span>
              <h3 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-3 leading-tight">1st Place <br/>National AI Hackathon</h3>
              <p className="text-gray-400 max-w-sm leading-relaxed">Won first prize for developing an accessible AI tool for visually impaired users. Recognized by Tech Innovators Network.</p>
            </div>
          </motion.div>

          {/* Bento Item 2 - Metric */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="md:col-span-1 rounded-3xl bg-card border border-border p-8 flex flex-col justify-center items-center text-center relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity" />
            <h2 className="text-6xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-br from-foreground to-accent mb-2">50+</h2>
            <p className="text-sm font-semibold tracking-widest text-muted uppercase">Hackathon Wins</p>
          </motion.div>

          {/* Bento Item 3 - Metric */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="md:col-span-1 rounded-3xl bg-card border border-border p-8 flex flex-col justify-center items-center text-center relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity" />
            <h2 className="text-6xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-br from-foreground to-accent mb-2">10+</h2>
            <p className="text-sm font-semibold tracking-widest text-muted uppercase">Published Papers</p>
          </motion.div>

          {/* Bento Item 4 - Wide Item (Research) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="md:col-span-2 lg:col-span-2 rounded-3xl bg-primary border border-border p-8 flex flex-col justify-center relative overflow-hidden group"
          >
            <div className="absolute -right-8 -bottom-8 opacity-10 group-hover:rotate-12 transition-transform duration-700">
              <FileText className="w-40 h-40 text-white" />
            </div>
            <span className="inline-block px-3 py-1 bg-white/5 text-white/80 text-xs font-bold tracking-widest rounded-full mb-4 w-fit border border-white/10">RESEARCH</span>
            <h3 className="text-2xl font-display font-bold text-foreground mb-2">Efficient Edge AI Optimization</h3>
            <p className="text-muted max-w-md">Core members published a groundbreaking paper on optimizing model weights for IoT devices at the International Conference on Machine Learning.</p>
          </motion.div>

          {/* Bento Item 5 - Metric */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="md:col-span-1 rounded-3xl bg-accent border border-accent p-8 flex flex-col justify-center items-center text-center relative overflow-hidden group shadow-[0_0_40px_rgba(0,240,255,0.2)]"
          >
            <h2 className="text-5xl font-display font-bold text-primary mb-2">$25k</h2>
            <p className="text-xs font-bold tracking-widest text-primary/80 uppercase">Funding Secured</p>
          </motion.div>

          {/* Bento Item 6 - Recognition */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="md:col-span-2 lg:col-span-1 row-span-2 lg:row-span-1 rounded-3xl bg-card border border-border p-8 flex flex-col justify-between relative overflow-hidden group"
          >
            <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center mb-6">
              <Award className="w-6 h-6 text-accent" />
            </div>
            <div>
              <h3 className="text-xl font-display font-bold text-foreground mb-2">Best Student Organization</h3>
              <p className="text-sm text-muted">Awarded by the university for conducting over 20 hands-on workshops in one academic year.</p>
            </div>
          </motion.div>
          
          {/* Bento Item 7 - Members Metric */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="md:col-span-2 lg:col-span-2 rounded-3xl bg-card border border-border p-8 flex items-center justify-between relative overflow-hidden group"
          >
             <div className="absolute right-0 top-0 h-full w-1/2 bg-gradient-to-l from-accent/5 to-transparent pointer-events-none" />
             <div>
               <h2 className="text-5xl md:text-6xl font-display font-bold text-foreground mb-2">250+</h2>
               <p className="text-sm font-semibold tracking-widest text-muted uppercase">Active Members</p>
             </div>
             <div className="w-16 h-16 rounded-2xl bg-primary flex items-center justify-center border border-border/50 group-hover:border-accent transition-colors">
               <Users className="w-8 h-8 text-muted group-hover:text-accent transition-colors" />
             </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

