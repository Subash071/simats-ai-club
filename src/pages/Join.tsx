import React from 'react';
import { SectionHeading } from '../components/ui/SectionHeading';
import { siteConfig } from '../data/siteConfig';
import { Button } from '../components/ui/Button';
import { CheckCircle2, ArrowRight } from 'lucide-react';

export function Join() {
  const benefits = [
    "Hands-on learning pathways and workshops",
    "Collaborate on real-world AI projects",
    "Participate in hackathons and competitions",
    "Exposure to AI research and industry trends",
    "Connect with a community of ambitious peers",
    "Mentorship from senior students and faculty",
    "Build a strong portfolio for internships",
    "Access to club compute resources (when available)"
  ];

  return (
    <div className="py-16">
      <div className="container mx-auto px-4 md:px-6 max-w-5xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <div>
            <SectionHeading 
              title="Don't just learn AI. Build with us." 
              subtitle="Join a community of builders, researchers, and innovators shaping the future of technology."
              className="mb-8"
            />
            
            <div className="space-y-4 mb-8">
              {benefits.map((benefit, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <span className="text-gray-300">{benefit}</span>
                </div>
              ))}
            </div>
            
            <p className="text-muted text-sm mb-8">
              * Open to all {siteConfig.universityName} students regardless of major. No prior AI experience required for beginner tracks.
            </p>
          </div>
          
          <div className="bg-card border border-border rounded-2xl p-8 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent pointer-events-none" />
            <div className="relative z-10">
              <h3 className="text-2xl font-display font-semibold mb-2">Ready to join?</h3>
              <p className="text-muted mb-8">Complete the registration form to officially become a member of the {siteConfig.clubName}.</p>
              
              <Button asChild size="lg" className="w-full group mb-4">
                <a href={siteConfig.forms.joinClub} target="_blank" rel="noopener noreferrer">
                  Go to Registration Form
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              
              <p className="text-xs text-center text-gray-500">
                You will be redirected to an external form.
              </p>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}
