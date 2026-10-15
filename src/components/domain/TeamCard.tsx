import React from 'react';
import { Mail, Globe } from 'lucide-react';

interface TeamCardProps {
  member: {
    name: string;
    role: string;
    department?: string;
    expertise?: string;
    bio?: string;
    skills?: string[];
    image: string;
    email?: string;
    linkedin?: string;
    github?: string;
  };
}

export function TeamCard({ member }: TeamCardProps) {
  return (
    <div className="bg-card border border-border rounded-xl p-6 text-center hover:border-accent/30 transition-colors group">
      <div className="w-24 h-24 mx-auto bg-primary rounded-full mb-4 flex items-center justify-center overflow-hidden border border-border">
        {member.image ? (
          <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
        ) : (
          <span className="text-2xl font-display font-bold text-muted">{member.name.charAt(0)}</span>
        )}
      </div>
      
      <h3 className="text-lg font-display font-semibold text-foreground group-hover:text-accent transition-colors">{member.name}</h3>
      <p className="text-accent text-sm font-medium mb-1">{member.role}</p>
      
      {(member.department || member.expertise) && (
        <div className="text-xs text-muted mb-3 space-y-1">
          {member.department && <p>{member.department}</p>}
          {member.expertise && <p>{member.expertise}</p>}
        </div>
      )}
      
      {member.bio && (
        <p className="text-sm text-gray-400 mb-4 text-balance">
          {member.bio}
        </p>
      )}

      {member.skills && (
        <div className="flex flex-wrap justify-center gap-1 mb-4">
          {member.skills.map(skill => (
            <span key={skill} className="text-[10px] uppercase tracking-wider bg-primary text-muted px-2 py-1 rounded">
              {skill}
            </span>
          ))}
        </div>
      )}
      
      <div className="flex items-center justify-center gap-3 mt-auto pt-2">
        {member.email && (
          <a href={`mailto:${member.email}`} className="text-muted hover:text-foreground transition-colors">
            <Mail className="w-4 h-4" />
          </a>
        )}
        {member.linkedin && (
          <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-muted hover:text-foreground transition-colors">
            <Globe className="w-4 h-4" />
          </a>
        )}
        {member.github && (
          <a href={member.github} target="_blank" rel="noopener noreferrer" className="text-muted hover:text-foreground transition-colors">
            <Globe className="w-4 h-4" />
          </a>
        )}
      </div>
    </div>
  );
}
