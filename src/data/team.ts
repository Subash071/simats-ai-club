export interface TeamMember {
  id: number;
  number: string;
  name: string;
  role: string;
  category: string;
  department?: string;
  badge?: string;
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
    name: "Dr. S. Joshua Kumaresan",
    role: "Faculty Advisor",
    category: "FACULTY",
    department: "Dept of CSE",
    image: "/team/faculty.jpg",
    bio: "Guiding students toward practical AI learning, research, and innovation. Mentoring the community in academic and technical excellence.",
    focus: ["Machine Learning", "Academic Research", "Systems Engineering"],
    projects: ["AI Research Group", "Curriculum Mentorship"],
    quote: "Empowering young engineering minds to push the boundaries of Artificial Intelligence.",
    instagram: "#",
    linkedin: "#"
  },
  {
    id: 2,
    number: "01",
    name: "President",
    role: "President",
    category: "LEADERSHIP",
    department: "Dept of CSE",
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
    department: "Dept of CSE",
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
    name: "Subash G",
    role: "Secretary",
    category: "OPERATIONS",
    department: "Dept of CSE - AI",
    badge: "Created this website",
    image: "/team/secretary.jpg",
    bio: "Created and engineered the official SIMATS Engineering AI Club website. Managing institutional communications, digital infrastructure, and core club operations.",
    focus: ["Data Science", "Machine Learning", "Operations", "Web Engineering"],
    projects: ["SIMATS AI Club Official Website", "Operations & Outreach Pipeline"],
    quote: "Consistency, clarity, and dedication are the foundation of great execution.",
    instagram: "https://www.instagram.com/subash_gx?xtok=MXBqZjlmNHE3M3RjNw==",
    linkedin: "https://www.linkedin.com/in/subash-g-42271b37b"
  },
  {
    id: 5,
    number: "04",
    name: "Treasurer",
    role: "Treasurer",
    category: "FINANCE",
    department: "Dept of CSE",
    image: "/team/treasurer.jpg",
    bio: "Managing budget allocations, resource planning, and sponsorship acquisitions for student projects.",
    focus: ["Financial Planning", "Resource Management", "Sponsorship"],
    projects: ["Project Grant Fund", "Corporate Sponsorship Drive"],
    quote: "Strategic resource allocation fuels sustainable innovation.",
    instagram: "#",
    linkedin: "#"
  }
];
