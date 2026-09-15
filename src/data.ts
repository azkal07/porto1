export const IMAGES = {
  hero: "https://images.pexels.com/photos/28293336/pexels-photo-28293336.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1400&w=1000",
  about:
    "https://images.pexels.com/photos/16029825/pexels-photo-16029825.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1100&w=850",
};

export type Category = "ALL" | "GRAPHIC" | "VIDEOS" | "WEBDESIGN" | "BRANDING";

export interface Work {
  id: number;
  title: string;
  category: Exclude<Category, "ALL">;
  year: string;
  src: string;
}

const px = (id: number, ext = "jpeg", w = 900, h = 900) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.${ext}?auto=compress&cs=tinysrgb&fit=crop&w=${w}&h=${h}`;

export const FILTERS: Category[] = ["ALL", "GRAPHIC", "VIDEOS", "WEBDESIGN", "BRANDING"];

export const WORKS: Work[] = [
  { id: 1, title: "Monolith Facade", category: "GRAPHIC", year: "2025", src: px(38320488) },
  { id: 2, title: "Grid System HQ", category: "WEBDESIGN", year: "2025", src: px(23470984) },
  { id: 3, title: "Night Signal", category: "BRANDING", year: "2024", src: px(3137084) },
  { id: 4, title: "Whiteout Peaks", category: "VIDEOS", year: "2025", src: px(16573043) },
  { id: 5, title: "Flight Path 07", category: "VIDEOS", year: "2024", src: px(17731107) },
  { id: 6, title: "Ferris Loop", category: "GRAPHIC", year: "2023", src: px(33691029) },
  { id: 7, title: "Still Horizon", category: "BRANDING", year: "2024", src: px(19544817) },
  { id: 8, title: "Vertical City", category: "WEBDESIGN", year: "2025", src: px(38240608) },
  { id: 9, title: "Clean Lines Co.", category: "BRANDING", year: "2023", src: px(5818753) },
  { id: 10, title: "Rise Tower UI", category: "WEBDESIGN", year: "2024", src: px(34137866, "png") },
  { id: 11, title: "Draft & Form", category: "GRAPHIC", year: "2023", src: px(12811745) },
  { id: 12, title: "Altitude Study", category: "VIDEOS", year: "2025", src: px(3684926) },
];

export const NAV_LINKS = [
  { label: "HOME", href: "#home" },
  { label: "ABOUT", href: "#about" },
  { label: "SKILLS", href: "#skills" },
  { label: "WORKS", href: "#works" },
  { label: "SERVICES", href: "#services" },
  { label: "CONTACT", href: "#contact" },
];

export interface Skill {
  name: string;
  level: number;
}

export interface SkillGroup {
  title: string;
  skills: Skill[];
}

export const SKILLS: SkillGroup[] = [
  {
    title: "DESIGN",
    skills: [
      { name: "UI / UX DESIGN", level: 92 },
      { name: "FIGMA", level: 90 },
      { name: "DESIGN SYSTEMS", level: 85 },
      { name: "PROTOTYPING", level: 88 },
    ],
  },
  {
    title: "DEVELOPMENT",
    skills: [
      { name: "REACT / TYPESCRIPT", level: 90 },
      { name: "TAILWIND CSS", level: 88 },
      { name: "FRAMER MOTION", level: 82 },
      { name: "GIT & TOOLING", level: 80 },
    ],
  },
];

export const MARQUEE_ITEMS = [
  "UI DEVELOPMENT",
  "BRAND IDENTITY",
  "WEB DESIGN",
  "MOTION GRAPHICS",
  "ART DIRECTION",
  "FRONT-END ENGINEERING",
];

export const SERVICES = [
  {
    n: "01",
    title: "UI / UX DESIGN",
    desc: "Interfaces engineered around behavior — wireframes to pixel-perfect design systems that convert.",
    tags: ["FIGMA", "DESIGN SYSTEMS", "PROTOTYPING"],
  },
  {
    n: "02",
    title: "FRONT-END DEVELOPMENT",
    desc: "Production-grade React builds. Smooth physics motion, obsessive performance budgets, clean code.",
    tags: ["REACT", "TYPESCRIPT", "GSAP"],
  },
  {
    n: "03",
    title: "BRAND IDENTITY",
    desc: "Logos, typography and visual languages that make products unmistakable at a glance.",
    tags: ["LOGO", "TYPOGRAPHY", "GUIDELINES"],
  },
  {
    n: "04",
    title: "MOTION & INTERACTION",
    desc: "Micro-interactions and cinematic page choreography that make interfaces feel alive.",
    tags: ["WEBGL", "SCROLL ANIMATION", "LOTTIE"],
  },
];
