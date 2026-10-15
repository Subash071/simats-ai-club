export type DifficultyLevel = 'Beginner' | 'Intermediate' | 'Advanced';

export interface Resource {
  id: string;
  title: string;
  category: string;
  level: DifficultyLevel;
  link: string;
  description: string;
}

export const resources: Resource[] = [
  {
    id: "res-1",
    title: "Python for Data Science",
    category: "Programming Fundamentals",
    level: "Beginner",
    link: "https://example.com",
    description: "A comprehensive guide to NumPy, Pandas, and Matplotlib."
  },
  {
    id: "res-2",
    title: "Introduction to Statistical Learning",
    category: "Mathematics",
    level: "Beginner",
    link: "https://example.com",
    description: "The foundational math and concepts behind machine learning models."
  },
  {
    id: "res-3",
    title: "Building Vision Models with PyTorch",
    category: "Computer Vision",
    level: "Intermediate",
    link: "https://example.com",
    description: "Hands-on tutorial for image classification and object detection."
  },
  {
    id: "res-4",
    title: "Attention Is All You Need",
    category: "Generative AI",
    level: "Advanced",
    link: "https://example.com",
    description: "The original paper introducing the Transformer architecture."
  }
];

export const challengeBoard = [
  {
    id: "chal-1",
    title: "Optimize the Campus Bus Route",
    difficulty: "Intermediate",
    deadline: "End of Month",
    participants: 12,
    status: "Active",
    description: "Use historical GPS data to predict and optimize campus bus arrival times."
  }
];

export const ideaLab = [
  {
    id: "idea-1",
    problem: "Note-taking during lectures is distracting.",
    approach: "Audio-to-text pipeline summarizing key lecture points.",
    difficulty: "Beginner",
    category: "AI + Education",
    technologies: ["Whisper API", "Python"]
  }
];
