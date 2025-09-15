
export interface Project {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  kaggleUrl: string;
  tags: string[];
  images?: string[]; // Portfolio projeler için ek görseller
}

export interface TimelineEvent {
  id: number;
  year: string;
  title: string;
  description: string;
}

export interface BlogPost {
    id: number;
    title: string;
    excerpt: string;
    imageUrl: string;
    date: string;
}
