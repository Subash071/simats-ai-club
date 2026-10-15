export type ProjectCategory = 'Computer Vision' | 'NLP' | 'Generative AI' | 'Machine Learning' | 'Robotics' | 'Data Science' | 'Responsible AI' | 'AI + Healthcare' | 'AI + Environment' | 'AI + Education';

export interface Project {
  id: string;
  title: string;
  problem: string;
  solution: string;
  technologies: string[];
  team: string[];
  category: ProjectCategory;
  githubLink?: string;
  demoLink?: string;
  status: 'Completed' | 'In Progress';
  image: string;
}

export const projects: Project[] = [
  {
    id: "proj-1",
    title: "Campus Access Vision",
    problem: "Long queues at the campus library entrance during peak hours.",
    solution: "A computer vision system that securely authenticates students via face recognition, reducing entry time by 80%.",
    technologies: ["Python", "OpenCV", "PyTorch", "React"],
    team: ["Ada Lovelace", "John von Neumann"],
    category: "Computer Vision",
    githubLink: "https://github.com",
    status: "Completed",
    image: "",
  },
  {
    id: "proj-2",
    title: "EcoSort AI",
    problem: "Improper waste sorting on campus leading to reduced recycling efficiency.",
    solution: "A smart camera system for waste bins that identifies and categorizes trash to guide students in real-time.",
    technologies: ["TensorFlow", "Raspberry Pi", "IoT"],
    team: ["Grace Hopper"],
    category: "AI + Environment",
    demoLink: "https://demo.com",
    status: "In Progress",
    image: "",
  },
  {
    id: "proj-3",
    title: "Syllabus Chatbot",
    problem: "Students struggle to quickly find specific policies in lengthy course syllabi.",
    solution: "An NLP-powered chatbot that instantly answers questions based on uploaded course documents.",
    technologies: ["LangChain", "OpenAI API", "Next.js"],
    team: ["Margaret Hamilton", "Ada Lovelace"],
    category: "NLP",
    githubLink: "https://github.com",
    status: "Completed",
    image: "",
  }
];
