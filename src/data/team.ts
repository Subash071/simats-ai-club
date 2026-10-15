export interface TeamMember {
  id: number;
  number: string;
  name: string;
  role: string;
  category: string;
  image: string;
  bio: string;
  focus: string[];
  projects: string[];
  quote: string;
  instagram: string;
  linkedin: string;
}

export const team: TeamMember[] = [
  {
    id: 1,
    number: "01",
    name: "Dr. Alan Turing",
    role: "Faculty Advisor",
    category: "FACULTY",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400&h=400",
    bio: "Guiding students toward practical AI learning, research, and innovation. Experienced in building computational models.",
    focus: ["Computational Theory", "Machine Learning", "Systems Architecture"],
    projects: ["AI Computing Cluster", "Ethics in AI Syllabus"],
    quote: "We can only see a short distance ahead, but we can see plenty there that needs to be done.",
    instagram: "#",
    linkedin: "#"
  },
  {
    id: 2,
    number: "01",
    name: "President",
    role: "President",
    category: "LEADERSHIP",
    image: "/team/president.jpg",
    bio: "Leading executive club vision, directing campus-wide AI initiatives, and fostering technology partnerships.",
    focus: ["AI Strategy", "Community Leadership", "Deep Learning"],
    projects: ["Campus AI Initiative", "Industry Connect Summit"],
    quote: "Empowering students to transform curiosity into real-world AI breakthroughs.",
    instagram: "#",
    linkedin: "#"
  },
  {
    id: 3,
    number: "02",
    name: "Vice President",
    role: "Vice President",
    category: "LEADERSHIP",
    image: "/team/vice-president.jpg",
    bio: "Spearheading hackathons, overseeing technical project incubation, and accelerating core club growth.",
    focus: ["Computer Vision", "Project Incubation", "Robotics"],
    projects: ["Annual Hackathon", "Research Incubation Cell"],
    quote: "Innovation happens when passionate minds collaborate without boundaries.",
    instagram: "#",
    linkedin: "#"
  },
  {
    id: 4,
    number: "03",
    name: "Secretary",
    role: "Secretary",
    category: "OPERATIONS",
    image: "/team/secretary.jpg",
    bio: "Managing institutional communications, workshop documentation, and inter-departmental operations.",
    focus: ["Operations", "Technical Writing", "Event Coordination"],
    projects: ["Club Annual Report", "Workshop Operations Pipeline"],
    quote: "Consistency, clarity, and dedication are the foundation of great execution.",
    instagram: "#",
    linkedin: "#"
  },
  {
    id: 5,
    number: "04",
    name: "Treasurer",
    role: "Treasurer",
    category: "FINANCE",
    image: "/team/treasurer.jpg",
    bio: "Managing budget allocations, resource planning, and sponsorship acquisitions for student projects.",
    focus: ["Financial Planning", "Resource Management", "Sponsorship"],
    projects: ["Project Grant Fund", "Corporate Sponsorship Drive"],
    quote: "Strategic resource allocation fuels sustainable innovation.",
    instagram: "#",
    linkedin: "#"
  }
];
