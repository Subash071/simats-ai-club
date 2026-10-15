import React from 'react';
import { SectionHeading } from '../components/ui/SectionHeading';
import { resources } from '../data/resources';
import { ExternalLink, BookOpen, Brain, Cpu } from 'lucide-react';

export function LearningHub() {
  const beginners = resources.filter(r => r.level === 'Beginner');
  const intermediates = resources.filter(r => r.level === 'Intermediate');
  const advanced = resources.filter(r => r.level === 'Advanced');

  const ResourceSection = ({ title, items, icon: Icon }: { title: string, items: typeof resources, icon: any }) => (
    <div className="mb-16">
      <div className="flex items-center gap-3 mb-6 border-b border-border pb-4">
        <Icon className="w-6 h-6 text-accent" />
        <h3 className="text-2xl font-display font-semibold">{title}</h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {items.map(item => (
          <a 
            key={item.id} 
            href={item.link} 
            target="_blank" 
            rel="noopener noreferrer"
            className="group flex flex-col p-5 bg-card border border-border rounded-lg hover:border-accent/50 transition-colors"
          >
            <div className="flex justify-between items-start mb-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-muted">
                {item.category}
              </span>
              <ExternalLink className="w-4 h-4 text-muted group-hover:text-accent transition-colors" />
            </div>
            <h4 className="text-lg font-medium text-foreground mb-2 group-hover:text-accent transition-colors">{item.title}</h4>
            <p className="text-sm text-gray-400">{item.description}</p>
          </a>
        ))}
      </div>
    </div>
  );

  return (
    <div className="py-16">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        <SectionHeading 
          title="Learning Hub" 
          subtitle="Curated resources, tutorials, and papers to guide your AI journey from foundations to advanced research."
        />

        <ResourceSection title="Foundations (Beginner)" items={beginners} icon={BookOpen} />
        <ResourceSection title="Core ML & Systems (Intermediate)" items={intermediates} icon={Cpu} />
        <ResourceSection title="Deep Learning & Research (Advanced)" items={advanced} icon={Brain} />
      </div>
    </div>
  );
}
