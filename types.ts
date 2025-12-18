export interface NavItem {
  label: string;
  href: string;
}

export interface Skill {
  name: string;
  icon: string; // Material symbol name
  colorClass: string;
}

export interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  repoUrl?: string; // Link to GitHub
  demoUrl?: string; // Link to live demo
}

export interface SocialLink {
  name: string;
  icon: string;
  href: string;
  colorClass: string;
}