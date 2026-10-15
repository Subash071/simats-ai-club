import React from 'react';
import { Calendar, Clock, MapPin, ExternalLink } from 'lucide-react';
import { Button, cn } from '../ui/Button';
import type { Event } from '../../data/events';

interface EventCardProps {
  event: Event;
  className?: string;
}

export function EventCard({ event, className }: EventCardProps) {
  return (
    <div className={cn("flex flex-col bg-card rounded-xl border border-border overflow-hidden hover:border-accent/50 transition-all duration-300 hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:-translate-y-1 group", className)}>
      {/* Optional image could go here if present */}
      <div className="p-6 flex-1 flex flex-col">
        <div className="flex justify-between items-start mb-4">
          <span className="text-xs font-semibold uppercase tracking-wider text-accent bg-accent/10 px-3 py-1 rounded-full">
            {event.type}
          </span>
          {event.past ? (
            <span className="text-xs text-muted">Past Event</span>
          ) : (
            <span className="text-xs text-green-400 flex items-center gap-1">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              Upcoming
            </span>
          )}
        </div>
        
        <h3 className="text-xl font-display font-semibold text-foreground mb-3 group-hover:text-accent transition-colors">
          {event.title}
        </h3>
        
        <p className="text-muted text-sm mb-6 flex-1 text-balance">
          {event.description}
        </p>
        
        <div className="space-y-2 mb-6">
          <div className="flex items-center gap-2 text-sm text-gray-300">
            <Calendar className="w-4 h-4 text-muted" />
            <span>{event.date}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-300">
            <Clock className="w-4 h-4 text-muted" />
            <span>{event.time}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-300">
            <MapPin className="w-4 h-4 text-muted" />
            <span>{event.location}</span>
          </div>
        </div>

        {!event.past && event.registrationOpen && (
          <Button asChild className="w-full" variant="outline">
            <a href={event.registrationLink} target="_blank" rel="noopener noreferrer">
              Register Now <ExternalLink className="w-4 h-4 ml-2" />
            </a>
          </Button>
        )}
      </div>
    </div>
  );
}
