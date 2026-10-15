import React, { useState } from 'react';
import { SectionHeading } from '../components/ui/SectionHeading';
import { ProjectCard } from '../components/domain/ProjectCard';
import { projects, type ProjectCategory } from '../data/projects';
import { siteConfig } from '../data/siteConfig';
import { Button } from '../components/ui/Button';
import { Plus } from 'lucide-react';

export function Projects() {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory | 'All'>('All');

  const categories = ['All', ...Array.from(new Set(projects.map(p => p.category)))];

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(p => p.category === selectedCategory);

  return (
    <div className="py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
          <SectionHeading 
            title="Projects Built by Our Community" 
            subtitle="Explore the open-source tools, models, and applications developed by our members."
            className="mb-0"
          />
          <Button asChild variant="outline" className="shrink-0">
            <a href={siteConfig.forms.submitProject} target="_blank" rel="noopener noreferrer">
              <Plus className="w-4 h-4 ml-2" />
              Submit Project
            </a>
          </Button>
        </div>

        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category as any)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors border ${
                selectedCategory === category 
                  ? 'bg-foreground text-background border-foreground' 
                  : 'bg-transparent text-muted border-border hover:border-muted'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredProjects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
}
