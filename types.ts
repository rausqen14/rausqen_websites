
export type Project = {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  kaggleUrl: string;
  liveUrl?: string; // Optional project URL
  githubUrl?: string; // Optional GitHub URL
  tags: string[];
  images?: string[];
};

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
