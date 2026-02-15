export interface Certificate {
  name: string;
  nameKey?: string;
  url: string;
  issuer?: string;
  date?: string;
  image?: string;
}

export interface Project {
  id: number;
  title: string;
  titleKey?: string;
  description: string;
  descriptionKey?: string;
  technologies: string[];
  category: 'Agentic AI & LLMs' | 'Computer Vision' | 'End-to-End ML/DL';
  imageUrl: string;
  images?: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
  certificates?: Certificate[];
}


export interface NavItem {
  label: string;
  path: string;
}