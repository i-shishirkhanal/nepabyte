export type Page = 'home' | 'services' | 'about' | 'work' | 'contact';

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface Project {
  id: string;
  title: string;
  category: string;
  technologies: string[];
  image: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
}
