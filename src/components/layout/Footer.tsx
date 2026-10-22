import React, { useState } from "react";
import { Link } from "react-router-dom";
import { siteConfig } from "../../data/siteConfig";
import { motion, AnimatePresence } from "framer-motion";
import { X, Play } from "lucide-react";
import { useAnthemModal } from "../../context/AnthemModalContext";

export function Footer() {
  const { openAnthem } = useAnthemModal();
  const currentYear = new Date().getFullYear();
  const [creatorModalOpen, setCreatorModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("profile");

  const renderCreatorContent = () => {
    switch (activeTab) {
      case "profile":
        return <p className="text-gray-300 text-sm leading-relaxed">Secretary & Creator of the official SIMATS Engineering AI Club website. Passionate about data analytics, Machine Learning architectures, and empowering student communities through technology.</p>;
      case "projects":
        return <ul className="text-gray-300 text-sm space-y-2 list-disc list-inside"><li>SIMATS AI Club Official Website</li><li>Data Analytics & ML Exploration Pipelines</li><li>Student Operations & Outreach Infrastructure</li></ul>;
      case "skills":
        return <div className="flex flex-wrap gap-2"><span className="px-2 py-1 bg-accent/10 text-accent rounded text-xs border border-accent/20">Machine Learning</span><span className="px-2 py-1 bg-accent/10 text-accent rounded text-xs border border-accent/20">Data Analysis</span><span className="px-2 py-1 bg-accent/10 text-accent rounded text-xs border border-accent/20">Python</span><span className="px-2 py-1 bg-accent/10 text-accent rounded text-xs border border-accent/20">React</span><span className="px-2 py-1 bg-accent/10 text-accent rounded text-xs border border-accent/20">TypeScript</span></div>;
      case "interests":
        return <p className="text-gray-300 text-sm leading-relaxed">I like working with data, data analysis, and Machine Learning much more than traditional software development. Passionate about uncovering patterns in data, training predictive models, and applied AI systems.</p>;
      default:
        return null;
    }
  };

  return (
    <>
      <footer className="bg-primary border-t border-border py-12 md:py-16">
        <div className="container mx-auto px-4 md:px-6 grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
          {/* Logo & About */}
          <div className="col-span-1 md:col-span-1">
            <div 
              onClick={openAnthem} 
              role="button"
              tabIndex={0}
              onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') openAnthem(); }}
              aria-label="SIMATS AI Club Logo"
              className="flex items-center gap-2 group mb-4 cursor-pointer select-none"
            >
              <img src={siteConfig.logo} alt="Club Logo" className="w-8 h-8 rounded-full border border-border group-hover:border-accent transition-colors object-cover" />
              <span className="font-display font-bold text-xl tracking-tight text-foreground group-hover:text-accent transition-colors">
                SIMATS ENGINEERING AI CLUB
              </span>
            </div>
            <p className="text-muted text-sm text-balance">
              {siteConfig.tagline}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4 text-foreground">Explore</h3>
            <ul className="space-y-2">
              <li><Link to="/#about" className="text-muted hover:text-foreground transition-colors text-sm">About Us</Link></li>
              <li><Link to="/#team" className="text-muted hover:text-foreground transition-colors text-sm">Team</Link></li>
              <li><Link to="/projects" className="text-muted hover:text-foreground transition-colors text-sm">Projects</Link></li>
              <li><Link to="/events" className="text-muted hover:text-foreground transition-colors text-sm">Events</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold mb-4 text-foreground">Resources</h3>
            <ul className="space-y-2">
              <li><Link to="/learning" className="text-muted hover:text-foreground transition-colors text-sm">Learning Hub</Link></li>
              <li><Link to="/idea-lab" className="text-muted hover:text-foreground transition-colors text-sm">Idea Lab</Link></li>
              <li><a href={siteConfig.forms.submitProject} target="_blank" rel="noopener noreferrer" className="text-muted hover:text-foreground transition-colors text-sm">Submit a Project</a></li>
              <li><Link to="/#join" className="text-muted hover:text-foreground transition-colors text-sm">Join the Club</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4 text-foreground">Contact</h3>
            <ul className="space-y-2 text-sm text-muted">
              <li>Saveetha University</li>
              <li>Department of Computer Science</li>
              <li>Simats Engineering</li>
              <li className="pt-2">
                <a href="mailto:simatsaiclub@gmail.com" className="text-accent hover:underline">
                  simatsaiclub@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="container mx-auto mt-12 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted">
          <p>&copy; {currentYear} SIMATS ENGINEERING AI CLUB. All rights reserved.</p>
          <p>Built by <button onClick={() => setCreatorModalOpen(true)} className="text-accent hover:underline font-medium focus:outline-none">Subash G</button>.</p>
        </div>
      </footer>

      {/* Creator Modal */}
      <AnimatePresence>
        {creatorModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              exit={{ opacity: 0 }}
              onClick={() => setCreatorModalOpen(false)}
              className="absolute inset-0 bg-background/80 backdrop-blur-sm"
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-md bg-card border border-border rounded-2xl shadow-2xl overflow-hidden flex flex-col"
            >
              <button onClick={() => setCreatorModalOpen(false)} className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-primary/50 flex items-center justify-center text-muted hover:text-white transition-colors">
                <X className="w-4 h-4" />
              </button>
              
              <div className="p-6 bg-primary/30 border-b border-border flex items-center gap-6">
                <img src="/team/secretary.jpg" alt="Subash G" className="w-20 h-24 rounded-xl object-cover object-top border-2 border-accent shadow-md" />
                <div>
                  <h2 className="text-2xl font-display font-bold text-foreground">Subash G</h2>
                  <p className="text-accent text-sm font-medium">Secretary & Website Creator</p>
                  <div className="flex gap-3 mt-3">
                    <a href="https://github.com/Subash071" target="_blank" rel="noopener noreferrer" className="text-muted hover:text-white transition-colors" title="GitHub"><svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg></a>
                    <a href="https://www.linkedin.com/in/subash-g-42271b37b" target="_blank" rel="noopener noreferrer" className="text-muted hover:text-white transition-colors" title="LinkedIn"><svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg></a>
                    <a href="https://www.instagram.com/subash_gx?xtok=MXBqZjlmNHE3M3RjNw==" target="_blank" rel="noopener noreferrer" className="text-muted hover:text-white transition-colors" title="Instagram"><svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg></a>
                  </div>
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col min-h-[220px]">
                <div className="flex gap-4 border-b border-border mb-4 overflow-x-auto no-scrollbar pb-2">
                  {["profile", "projects", "skills", "interests"].map((tab) => (
                    <button 
                      key={tab} 
                      onClick={() => setActiveTab(tab)}
                      className={`text-xs font-semibold uppercase tracking-wider whitespace-nowrap px-1 pb-1 border-b-2 transition-colors ${activeTab === tab ? "border-accent text-accent" : "border-transparent text-muted hover:text-gray-300"}`}
                    >
                      {tab}
                    </button>
                  ))}
                </div>
                
                <div className="flex-1">
                  {renderCreatorContent()}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
