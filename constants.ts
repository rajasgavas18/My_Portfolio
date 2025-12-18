import { NavItem, Project, Skill, SocialLink } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export const SKILLS: Skill[] = [
  { name: "HTML5", icon: "html", colorClass: "text-orange-600" },
  { name: "CSS3", icon: "css", colorClass: "text-blue-600" },
  { name: "JavaScript", icon: "javascript", colorClass: "text-yellow-500" },
  { name: "React", icon: "code", colorClass: "text-cyan-500" },
  { name: "Node.js", icon: "terminal", colorClass: "text-green-600" },
  { name: "Python", icon: "data_object", colorClass: "text-blue-500" },
  { name: "C++", icon: "memory", colorClass: "text-indigo-600" },
  { name: "Git", icon: "commit", colorClass: "text-red-500" },
  { name: "Database", icon: "database", colorClass: "text-purple-500" },
  { name: "Cloud", icon: "cloud", colorClass: "text-sky-600" },
];

export const PROJECTS: Project[] = [
  {
    title: "MERN E-commerce",
    description: "Developed a MERN stack E-commerce website with user login & sign-up connected to a database. Implemented cart functionality, secure authentication, and an admin dashboard.",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=800",
    tags: ["React", "Node.js", "MongoDB"],
    repoUrl: "https://github.com/rajasgavas18/E-commerce",
    demoUrl: "https://e-commerce-frontend-nmq9.onrender.com/"
  },
  {
    title: "Music Player",
    description: "Harmonia is a sleek, interactive music player web app built using HTML, CSS, and JavaScript, featuring a central playback card with smooth controls, animated progress bars, and a visually engaging interface.",
    image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&q=80&w=800",
    tags: ["HTML", "CSS", "JavaScript"],
    repoUrl: "https://github.com/rajasgavas18/music_player",
    demoUrl: "https://rajasgavas18.github.io/music_player/"
  },
  {
    title: "JavaScript Calculator",
    description: "A JavaScript calculator built with HTML and CSS is a simple web-based tool that performs basic arithmetic operations with an interactive user interface.",
    image: "https://images.unsplash.com/photo-1587145820266-a5951ee6f620?auto=format&fit=crop&q=80&w=800",
    tags: ["HTML", "CSS", "JavaScript"],
    repoUrl: "https://github.com/rajasgavas18/JavaScript_Calculator",
    demoUrl: "https://rajasgavas18.github.io/JavaScript_Calculator/"
  },
  {
    title: "DGram Portal",
    description: "DGram is a digital Gram Panchayat platform that connects villagers and officials through transparent online services. It simplifies administration, complaints, and village information management. Built to support Digital India and smart rural governance.",
    image: "https://images.unsplash.com/photo-1542332213-31f87348057f?auto=format&fit=crop&q=80&w=1200",
    tags: ["React", "Bootstrap", "Firebase"],
    repoUrl: "https://github.com/rajasgavas18/DGram_Portal",
    demoUrl: "https://rajasgavas18.github.io/DGram_Portal/#/login"
  }
];

export const SOCIAL_LINKS: SocialLink[] = [
  { 
    name: "GitHub", 
    icon: "code", 
    href: "https://github.com/rajasgavas18",
    colorClass: "hover:text-gray-900 dark:hover:text-white"
  },
  { 
    name: "LinkedIn", 
    icon: "work", 
    href: "https://linkedin.com",
    colorClass: "hover:text-blue-600"
  },
  { 
    name: "Email", 
    icon: "mail", 
    href: "mailto:rajasgavas748@gmail.com",
    colorClass: "hover:text-primary"
  }
];