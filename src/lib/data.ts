export type LinkItem = {
  label: string;
  href: string;
};

export type Project = {
  title: string;
  description: string;
  tech: string[];
  imageSrc: string;
  imageLabel: string;
  links?: LinkItem[];
};

export type ExperienceItem = {
  role: string;
  company: string;
  date: string;
  imageSrc: string;
  imageLabel: string;
  highlights: string[];
};

export type EducationItem = {
  school: string;
  degree: string;
  date: string;
  imageSrc: string;
  imageLabel: string;
  details: string[];
};

export type SkillGroup = {
  title: string;
  items: string[];
};

export const profile = {
  name: "Lance Daniel S. Guy",
  role: "Computer Science Student | Full-Stack Developer",
  location: "Cebu, Philippines",
  imageSrc: "/images/profile/profile-pic.png",
  email: "guylancedaniel@gmail.com",
  phone: "+63 928 366 3101",
  github: [
    {
      label: "github.com/LanceGuy",
      href: "https://github.com/LanceGuy",
    },
    {
      label: "github.com/habberjay",
      href: "https://github.com/habberjay",
    },
  ],
  bio:
    "Computer Science student at the University of the Philippines Cebu (expected July 2027). Full-stack developer intern experience building Next.js interfaces and PostgreSQL-backed features, with interests in product development, automation workflows, and data-driven tooling.",
  intro:
    "I design and build responsive web experiences, from polished UI components to reliable full-stack features.",
};

export const highlights = [
  {
    label: "Based in",
    value: "Cebu, Philippines",
  },
  {
    label: "Focus",
    value: "Full-stack product development",
  },
  {
    label: "Open to",
    value: "Internships and collaboration",
  },
];

export const projects: Project[] = [
  {
    title: "UP Cebu Dormitory Management System",
    description:
      "Full-stack dorm management platform for buildings, rooms, residents, and applicants with admin dashboards and end-to-end CRUD.",
    tech: [
      "Next.js",
      "React",
      "TypeScript",
      "Neon",
      "Radix UI",
      "Tailwind CSS",
      "Recharts",
    ],
    imageSrc: "/images/projects/upc-dms.png",
    imageLabel: "Dormitory platform dashboard",
    links: [
      {
        label: "GitHub",
        href: "https://github.com/leidc024/UPC-DMS",
      },
    ],
  },
  {
    title: "EVACSIM (UP Cebu Campus Evacuation Simulator)",
    description:
      "Agent-based evacuation simulator with hazard spread, congestion-aware routing, and analytics dashboards including heatmaps and risk scoring.",
    tech: [
      "Next.js",
      "React",
      "TypeScript",
      "Supabase",
      "Mapbox",
      "Tailwind CSS",
    ],
    imageSrc: "/images/projects/evacsim.png",
    imageLabel: "Evacuation simulation map",
    links: [
      {
        label: "Live site",
        href: "https://evacsim.vercel.app",
      },
    ],
  },
  {
    title: "FLiNG (Global Game Jam)",
    description:
      "Playable web game with click-and-drag launch mechanics, physics-driven gameplay, enemy AI, and full game flow.",
    tech: ["Godot"],
    imageSrc: "/images/projects/fling.png",
    imageLabel: "Physics-driven game scene",
    links: [
      {
        label: "Play on itch.io",
        href: "https://habberjay.itch.io/fling",
      },
    ],
  },
];

export const experience: ExperienceItem[] = [
  {
    role: "Full Stack Developer Intern",
    company: "Bayoa Analytics",
    date: "September 2024 - November 2024",
    imageSrc: "/images/exp and edu/bayoa.jpg",
    imageLabel: "Bayoa Analytics logo",
    highlights: [
      "Developed responsive Next.js components that improved UI usability and overall experience.",
      "Integrated frontend features with PostgreSQL-backed functionality for scalable data management.",
      "Collaborated on testing and debugging to ensure smooth full-stack workflows.",
    ],
  },
  {
    role: "FabLab Technician",
    company: "Fablab Eastern Visayas",
    date: "June 2022 - July 2022",
    imageSrc: "/images/exp and edu/fablab.png",
    imageLabel: "Fablab Eastern Visayas logo",
    highlights: [
      "Guided users operating 3D printers and laser cutters with a focus on safety and efficiency.",
      "Maintained and troubleshot equipment while supporting prototyping projects.",
    ],
  },
];

export const education: EducationItem[] = [
  {
    school: "University of the Philippines Cebu",
    degree: "Bachelor of Science in Computer Science",
    date: "Expected July 2027",
    imageSrc: "/images/exp and edu/up-cebu.jpg",
    imageLabel: "University of the Philippines Cebu seal",
    details: [
      "Relevant coursework: Data Structures and Algorithms, Web Development, Software Engineering, Systems Analysis and Design, AI, DBMS.",
    ],
  },
  {
    school: "Philippine Science High School - Eastern Visayas Campus",
    degree: "STEM Strand | GWA 1.4",
    date: "June 2023",
    imageSrc: "/images/exp and edu/pshs-evc.jpg",
    imageLabel: "Philippine Science High School Eastern Visayas Campus seal",
    details: ["Awards: With High Honors."],
  },
];

export const skills: SkillGroup[] = [
  {
    title: "Programming",
    items: [
      "JavaScript",
      "TypeScript",
      "Python",
      "C",
      "C++",
      "HTML",
      "CSS",
    ],
  },
  {
    title: "Frameworks and Tools",
    items: [
      "React",
      "Next.js",
      "Node.js",
      "Supabase",
      "PostgreSQL",
      "Prisma ORM",
      "REST APIs",
      "Authentication and Authorization",
      "Git/GitHub",
      "Docker (basic)",
      "Cloud Deployment (Vercel, Render)",
      "Mapbox",
    ],
  },
  {
    title: "Languages and Interests",
    items: [
      "English (Fluent)",
      "Filipino (Native)",
      "Automation workflows",
      "AI-driven tooling",
      "Data analytics",
      "Machine learning",
    ],
  },
];
