export interface Achievement {
  id: string;
  year: string;
  title: string;
  description: string;
  organization: string;
  image?: string;
}

export const achievements: Achievement[] = [
  {
    id: "ach-1",
    year: "2025",
    title: "1st Place - National AI Hackathon",
    description: "Won first prize for developing an accessible AI tool for visually impaired users.",
    organization: "Tech Innovators Network",
  },
  {
    id: "ach-2",
    year: "2025",
    title: "Published Research: Efficient Edge AI",
    description: "Core members published a paper on optimizing model weights for IoT devices.",
    organization: "International Conference on Machine Learning",
  },
  {
    id: "ach-3",
    year: "2024",
    title: "Best Student Organization",
    description: "Awarded by the university for conducting over 20 hands-on workshops in one academic year.",
    organization: "University Student Council",
  }
];
