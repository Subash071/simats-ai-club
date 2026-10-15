import React, { useState } from "react";
import { SectionHeading } from "../components/ui/SectionHeading";
import { team } from "../data/team";
import type { TeamMember } from "../data/team";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, X } from "lucide-react";

const springTransition = { duration: 0.8, ease: [0.22, 1, 0.36, 1] } as any;

function FrontCard({ member, isActive }: { member: TeamMember, isActive: boolean }) {
  const isRoleSame = member.name.toLowerCase() === member.role.toLowerCase();

  return (
    <div className="w-full h-[450px] rounded-2xl bg-card border border-border overflow-hidden flex flex-col group transition-all duration-500 hover:border-accent/60 hover:shadow-[0_20px_50px_-15px_rgba(0,240,255,0.18)] relative">
      {/* Top Image: Full-Bleed Portrait with Top Focus & Seamless Dark Fade */}
      <div className="flex-1 overflow-hidden relative bg-neutral-950">
        <img 
          src={member.image} 
          alt={member.name} 
          className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105" 
        />
        {/* Soft bottom vignette into card background */}
        <div className="absolute inset-0 bg-gradient-to-t from-card via-card/30 to-transparent pointer-events-none" />
        
        {/* Category Badge */}
        <div className="absolute top-4 left-4 bg-background/70 backdrop-blur-md px-3 py-1 rounded-full border border-white/10 shadow-sm">
          <span className="text-[10px] font-bold tracking-widest text-accent uppercase">{member.category}</span>
        </div>

        {/* Number Badge */}
        <div className="absolute top-4 right-4 bg-background/70 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/10 shadow-sm">
          <span className="font-mono text-xs font-semibold text-gray-300">#{member.number}</span>
        </div>
      </div>

      {/* Card Content Footer */}
      <div className="p-6 pt-2 relative z-10 bg-card">
        <div className="flex items-center justify-between mb-2">
          <span className="font-serif text-3xl font-bold text-accent/40 group-hover:text-accent transition-colors duration-300">
            {member.number}
          </span>
          <div className="flex items-center gap-1.5 text-xs font-semibold text-muted group-hover:text-accent transition-colors">
            VIEW PROFILE <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </div>
        </div>
        <h3 className="text-2xl font-display font-bold text-foreground mb-0.5 tracking-tight group-hover:text-accent transition-colors truncate">
          {member.name}
        </h3>
        <div className="flex items-center justify-between gap-2">
          <p className="text-muted font-medium text-sm">
            {isRoleSame ? member.category : member.role}
          </p>
          {member.badge && (
            <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-accent/15 text-accent border border-accent/30 tracking-tight shrink-0">
              {member.badge}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

function BackCard({ member, onClose }: { member: TeamMember, onClose: () => void }) {
  const isRoleSame = member.name.toLowerCase() === member.role.toLowerCase();

  return (
    <div className="w-full h-auto min-h-[500px] rounded-2xl bg-card border border-accent/40 overflow-hidden flex flex-col p-6 md:p-8 shadow-[0_25px_60px_-15px_rgba(0,240,255,0.22)] relative">
      <div className="flex items-start justify-between gap-4 mb-6 pb-6 border-b border-border">
        <div className="flex items-center gap-4">
          <div className="w-16 h-20 rounded-xl overflow-hidden border border-accent/40 shadow-md shrink-0 bg-neutral-950">
            <img 
              src={member.image} 
              alt={member.name} 
              className="w-full h-full object-cover object-top" 
            />
          </div>
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="font-mono text-xs font-bold px-2 py-0.5 rounded bg-accent/10 text-accent border border-accent/20">
                #{member.number}
              </span>
              <span className="text-[10px] font-bold tracking-wider px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-muted uppercase">
                {member.category}
              </span>
            </div>
            <h3 className="text-2xl font-display font-bold text-foreground">{member.name}</h3>
            <div className="flex items-center gap-2 mt-0.5">
              <p className="text-accent font-medium tracking-wide uppercase text-xs">
                {isRoleSame ? member.category : member.role}
              </p>
              {member.badge && (
                <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-accent/15 text-accent border border-accent/30 shrink-0">
                  {member.badge}
                </span>
              )}
            </div>
          </div>
        </div>
        <button 
          onClick={onClose} 
          className="shrink-0 w-9 h-9 rounded-full bg-primary flex items-center justify-center text-muted hover:text-white border border-border hover:border-accent transition-colors"
          aria-label="Close Profile"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
      
      <div className="space-y-5 flex-1">
        <div>
          <h4 className="text-xs font-bold tracking-widest text-muted uppercase mb-1.5">About</h4>
          <p className="text-gray-300 leading-relaxed text-sm">{member.bio}</p>
        </div>
        
        <div>
          <h4 className="text-xs font-bold tracking-widest text-muted uppercase mb-1.5">Focus</h4>
          <div className="flex flex-wrap gap-2">
            {member.focus.map((f, i) => (
              <span key={i} className="px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-medium border border-accent/20">
                {f}
              </span>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-xs font-bold tracking-widest text-muted uppercase mb-1.5">Key Contributions</h4>
          <ul className="space-y-1.5">
            {member.projects.map((p, i) => (
              <li key={i} className="text-sm text-gray-300 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" /> {p}
              </li>
            ))}
          </ul>
        </div>

        {member.quote && (
          <div className="pt-2">
            <p className="text-xs italic text-muted border-l-2 border-accent/40 pl-3 py-0.5">
              "{member.quote}"
            </p>
          </div>
        )}
      </div>
      
      <div className="mt-6 pt-5 border-t border-border flex items-center gap-4">
        <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-xs font-semibold text-muted hover:text-white transition-colors">
          <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
          LINKEDIN
        </a>
        <a href={member.instagram} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-xs font-semibold text-muted hover:text-white transition-colors">
          <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
          INSTAGRAM
        </a>
      </div>
    </div>
  );
}

export function Team() {
  const [activeId, setActiveId] = useState<number | null>(null);
  const activeMember = team.find(m => m.id === activeId);

  return (
    <div className="py-24 bg-background relative" style={{ perspective: "1000px" }}>
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading 
          title="Our Team" 
          subtitle="Meet the minds building the future."
          centered
        />

        <div className="mb-24">
          <div className="flex items-center gap-4 mb-8 justify-center">
            <h2 className="text-2xl font-display font-semibold text-center text-foreground">Faculty Advisor</h2>
          </div>
          <div className="flex justify-center">
            <div className="w-full max-w-sm">
              {team.filter(m => m.role.toLowerCase().includes("faculty")).map(member => (
                <motion.div
                  key={member.id}
                  layoutId={`card-${member.id}`}
                  onClick={() => setActiveId(member.id)}
                  className="cursor-pointer"
                  style={{ transformStyle: "preserve-3d" }}
                  animate={{ 
                    opacity: activeId && activeId !== member.id ? 0.4 : 1, 
                    scale: activeId && activeId !== member.id ? 0.95 : 1 
                  }}
                  transition={springTransition}
                  whileHover={!activeId ? { y: -8, scale: 1.02, rotateX: 2, rotateY: -2 } : {}}
                >
                  <div className="w-full h-full" style={{ backfaceVisibility: "hidden" }}>
                    <FrontCard member={member} isActive={activeId === member.id} />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <div>
          <div className="flex items-center gap-4 mb-8 justify-center">
            <div className="h-px bg-border flex-1 max-w-[100px]" />
            <h2 className="text-2xl font-display font-semibold text-center text-foreground">Student Leaders</h2>
            <div className="h-px bg-border flex-1 max-w-[100px]" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.filter(m => !m.role.toLowerCase().includes("faculty")).map(member => (
              <motion.div
                key={member.id}
                layoutId={`card-${member.id}`}
                onClick={() => setActiveId(member.id)}
                className="cursor-pointer"
                style={{ transformStyle: "preserve-3d" }}
                animate={{ 
                  opacity: activeId && activeId !== member.id ? 0.4 : 1, 
                  scale: activeId && activeId !== member.id ? 0.95 : 1 
                }}
                transition={springTransition}
                whileHover={!activeId ? { y: -8, scale: 1.02, rotateX: 2, rotateY: -2 } : {}}
              >
                <div className="w-full h-full" style={{ backfaceVisibility: "hidden" }}>
                  <FrontCard member={member} isActive={activeId === member.id} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <AnimatePresence>
        {activeId && activeMember && (
          <>
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="fixed inset-0 z-40 bg-background/80 backdrop-blur-md"
              onClick={() => setActiveId(null)}
            />
            <div className="fixed inset-0 z-50 flex items-center justify-center pointer-events-none px-4" style={{ perspective: "2000px" }}>
              <motion.div
                layoutId={`card-${activeId}`}
                className="w-full max-w-xl pointer-events-auto"
                style={{ transformStyle: "preserve-3d" }}
                initial={{ rotateY: 0 }}
                animate={{ rotateY: 180 }}
                exit={{ rotateY: 0, scale: 1 }}
                transition={springTransition}
              >
                {/* Front (Hidden when flipped 180) */}
                <div className="absolute inset-0 w-full h-full" style={{ backfaceVisibility: "hidden" }}>
                  <FrontCard member={activeMember} isActive={true} />
                </div>
                {/* Back (Visible when flipped 180) */}
                <div className="w-full h-full" style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}>
                  <BackCard member={activeMember} onClose={() => setActiveId(null)} />
                </div>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}

