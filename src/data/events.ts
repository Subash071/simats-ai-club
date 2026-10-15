export type EventType = 'Workshop' | 'Hackathon' | 'Guest Lecture' | 'AI Challenge' | 'Project Expo' | 'Research Talk' | 'Coding Competition' | 'Industry Session';

export interface Event {
  id: string;
  title: string;
  type: EventType;
  date: string;
  time: string;
  location: string;
  description: string;
  registrationOpen: boolean;
  registrationLink?: string;
  image: string;
  past: boolean;
}

export const events: Event[] = [
  {
    id: "evt-1",
    title: "Intro to Neural Networks",
    type: "Workshop",
    date: "2026-10-15",
    time: "18:00 - 20:00",
    location: "Innovation Lab, Room 402",
    description: "A hands-on workshop building your first neural network from scratch using Python and NumPy.",
    registrationOpen: true,
    registrationLink: "https://forms.google.com",
    image: "",
    past: false,
  },
  {
    id: "evt-2",
    title: "Generative AI Hackathon",
    type: "Hackathon",
    date: "2026-11-01",
    time: "09:00 - 21:00 (Next Day)",
    location: "Main Auditorium",
    description: "48 hours to build an innovative application leveraging large language models.",
    registrationOpen: true,
    registrationLink: "https://forms.google.com",
    image: "",
    past: false,
  },
  {
    id: "evt-3",
    title: "Industry Session: AI in Healthcare",
    type: "Guest Lecture",
    date: "2026-09-20",
    time: "16:00 - 17:30",
    location: "Virtual (Zoom)",
    description: "Learn how machine learning is revolutionizing diagnostics and patient care from industry experts.",
    registrationOpen: false,
    image: "",
    past: true,
  }
];
