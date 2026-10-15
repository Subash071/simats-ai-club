import React from 'react';
import { SectionHeading } from '../components/ui/SectionHeading';
import { ideaLab, challengeBoard } from '../data/resources';
import { siteConfig } from '../data/siteConfig';
import { Button } from '../components/ui/Button';
import { Plus, Target } from 'lucide-react';

export function IdeaLab() {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4 md:px-6">
        
        <div className="mb-20">
          <SectionHeading 
            title="Challenge Board" 
            subtitle="Active problems looking for solutions. Grab a team and start building."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {challengeBoard.map(challenge => (
              <div key={challenge.id} className="relative overflow-hidden bg-primary border border-accent/20 p-6 rounded-xl">
                <div className="absolute top-0 right-0 p-4">
                  <span className="inline-flex items-center gap-1.5 py-1 px-3 rounded-full text-xs font-medium bg-accent/10 text-accent border border-accent/20">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
                    </span>
                    {challenge.status}
                  </span>
                </div>
                
                <h3 className="text-xl font-display font-semibold mb-2 w-3/4">{challenge.title}</h3>
                <p className="text-sm text-gray-400 mb-6">{challenge.description}</p>
                
                <div className="flex flex-wrap gap-4 text-sm text-muted">
                  <div className="flex items-center gap-1">
                    <Target className="w-4 h-4" />
                    {challenge.difficulty}
                  </div>
                  <div>Deadline: {challenge.deadline}</div>
                  <div>{challenge.participants} Participants</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 gap-4">
            <SectionHeading 
              title="Idea Lab" 
              subtitle="Project concepts waiting to be built. Have an idea? Submit it to the community."
              className="mb-0"
            />
            <Button asChild>
              <a href={siteConfig.forms.submitIdea} target="_blank" rel="noopener noreferrer">
                <Plus className="w-4 h-4 mr-2" />
                Submit an Idea
              </a>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {ideaLab.map(idea => (
              <div key={idea.id} className="bg-card border border-border p-6 rounded-xl hover:border-accent/30 transition-colors">
                <div className="flex justify-between items-start mb-4">
                  <span className="text-xs font-semibold text-muted uppercase tracking-wider">{idea.category}</span>
                  <span className="text-xs text-gray-400 px-2 py-1 bg-primary rounded border border-border">{idea.difficulty}</span>
                </div>
                
                <div className="mb-4">
                  <h4 className="text-sm text-muted font-medium mb-1">Problem</h4>
                  <p className="text-foreground">{idea.problem}</p>
                </div>
                
                <div className="mb-6">
                  <h4 className="text-sm text-muted font-medium mb-1">Suggested Approach</h4>
                  <p className="text-sm text-gray-400">{idea.approach}</p>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {idea.technologies.map(tech => (
                    <span key={tech} className="text-[10px] bg-primary text-gray-400 px-2 py-1 rounded border border-border uppercase tracking-wider">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
