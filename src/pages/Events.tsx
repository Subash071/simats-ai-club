import React, { useState } from 'react';
import { SectionHeading } from '../components/ui/SectionHeading';
import { EventCard } from '../components/domain/EventCard';
import { events } from '../data/events';
import { Button } from '../components/ui/Button';
import { CalendarX2 } from 'lucide-react';

export function Events() {
  const [filter, setFilter] = useState<'All' | 'Upcoming' | 'Past'>('All');

  const filteredEvents = events.filter(e => {
    if (filter === 'Upcoming') return !e.past;
    if (filter === 'Past') return e.past;
    return true;
  });

  return (
    <div className="py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
          <SectionHeading 
            title="Events & Workshops" 
            subtitle="Join us for hands-on technical sessions, guest lectures, and hackathons."
            className="mb-0"
          />
          <div className="flex gap-2">
            <Button 
              variant={filter === 'All' ? 'primary' : 'outline'} 
              size="sm" 
              onClick={() => setFilter('All')}
            >
              All
            </Button>
            <Button 
              variant={filter === 'Upcoming' ? 'primary' : 'outline'} 
              size="sm" 
              onClick={() => setFilter('Upcoming')}
            >
              Upcoming
            </Button>
            <Button 
              variant={filter === 'Past' ? 'primary' : 'outline'} 
              size="sm" 
              onClick={() => setFilter('Past')}
            >
              Past
            </Button>
          </div>
        </div>

        {filteredEvents.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredEvents.map(event => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        ) : (
          <div className="text-center py-24 bg-card border border-border rounded-xl">
            <CalendarX2 className="w-12 h-12 text-muted mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">No events found</h3>
            <p className="text-muted">Check back later for new events.</p>
          </div>
        )}
      </div>
    </div>
  );
}
