import React from 'react';
import { ExternalLink, Users, Globe } from 'lucide-react';
import { cn } from '../ui/Button';
import type { Project } from '../../data/projects';

interface ProjectCardProps {
  project: Project;
  className?: string;
}

export function ProjectCard({ project, className }: ProjectCardProps) {
  return (
    <div className={cn("group flex flex-col bg-card rounded-xl border border-border overflow-hidden hover:border-accent/50 transition-all duration-300 hover:-translate-y-1 relative", className)}>
      <div className="p-6 flex flex-col flex-1 relative z-10">
        <div className="flex justify-between items-start mb-4">
          <span className="text-xs font-semibold text-muted tracking-wider uppercase border border-border px-2 py-1 rounded-md">
            {project.category}
          </span>
          <span className={cn(
            "text-xs font-medium px-2 py-1 rounded-md",
            project.status === 'Completed' ? "bg-green-500/10 text-green-400" : "bg-yellow-500/10 text-yellow-400"
          )}>
            {project.status}
          </span>
        </div>

        <h3 className="text-2xl font-display font-semibold text-foreground mb-3 group-hover:text-accent transition-colors">
          {project.title}
        </h3>

        <div className="space-y-4 mb-6 flex-1">
          <div>
            <h4 className="text-xs font-semibold text-muted uppercase tracking-wider mb-1">Problem</h4>
            <p className="text-sm text-gray-300 text-balance">{project.problem}</p>
          </div>
          <div>
            <h4 className="text-xs font-semibold text-muted uppercase tracking-wider mb-1">Solution</h4>
            <p className="text-sm text-gray-300 text-balance">{project.solution}</p>
          </div>
        </div>

        <div className="mb-6">
          <div className="flex flex-wrap gap-2">
            {project.technologies.map(tech => (
              <span key={tech} className="text-xs bg-primary text-gray-300 px-2 py-1 rounded-md border border-border">
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-between mt-auto pt-4 border-t border-border">
          <div className="flex items-center gap-2 text-sm text-muted">
            <Users className="w-4 h-4" />
            <span>{project.team.length} Member{project.team.length !== 1 ? 's' : ''}</span>
          </div>
          <div className="flex items-center gap-3">
            {project.githubLink && (
              <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="text-muted hover:text-accent transition-colors" aria-label="GitHub Repository">
                <Globe className="w-5 h-5" />
              </a>
            )}
            {project.demoLink && (
              <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="text-muted hover:text-accent transition-colors" aria-label="Live Demo">
                <ExternalLink className="w-5 h-5" />
              </a>
            )}
          </div>
        </div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </div>
  );
}
