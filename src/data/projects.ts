import { type ProjectCardProps } from "@/components/projects/project-card";
import { type ProjectShowcaseListItem } from "@/components/projects/project-showcase-list";

export const PROJECT_SHOWCASE: ProjectShowcaseListItem[] = [
  {
    index: 0,
    title: "NoteHub Auth",
    href: "/projects",
    tags: [
      "React",
      "Nextjs",
      "TypeScript",
      // "React-router-dom",
      "module CSS",
      "Zustand",
      "Vercel",
    ],
    image: {
      LIGHT: "/images/projects/notehub2.webp",
      DARK: "/images/projects/notehub4.webp",
    },
  },
  {
    index: 1,
    title: "Portfolio",
    href: "/projects",
    tags: ["JavaScript", "HTML", "CSS", "Vite", "Vercel"],
    image: {
      LIGHT: "/images/projects/portfolio1.webp",
      DARK: "/images/projects/portfolio2.webp",
    },
  },
  {
    index: 2,
    title: "Mythwalker",
    href: "/projects",
    tags: ["JavaScript", "HTML", "Vite", "Scss", "Vercel"],
    image: {
      LIGHT: "/images/projects/mythwalker1.webp",
      DARK: "/images/projects/mythwalker2.webp",
    },
  },
];

export const PROJECTS_CARD: ProjectCardProps[] = [
  {
    name: "Mythwalker",
    favicon: "/favicon.ico",
    imageUrl: [
      "/images/projects/mythwalker1.webp",
      "/images/projects/mythwalker2.webp",
      "/images/projects/mythwalker3.webp",
      "/images/projects/mythwalker4.webp",
    ],
    description:
      "Promotional landing page for the MythWalker geolocation RPG, built with HTML5, SCSS and vanilla JavaScript using BEM. Fully responsive multi-section layout (Characters, Reviews, How to Play, Gallery) with smooth navigation and interactive UI.",
    sourceCodeHref: "https://github.com/HannaAssaf/mythwalker-landing",
    liveWebsiteHref: "https://ulia012008.github.io/stp-8889-team/",
  },
  {
    name: "NoteHub Auth",
    favicon: "/favicon.ico",
    imageUrl: [
      "/images/projects/notehub2.webp",
      "/images/projects/notehub3.webp",
      "/images/projects/notehub4.webp",
      "/images/projects/notehub1.webp",
    ],
    description:
      "Notes app built with React and Next.js, styled with CSS Modules. Includes authentication, routing, and full note management—add, edit, search, and sort.",
    sourceCodeHref: "https://github.com/HannaAssaf/09-auth",
    liveWebsiteHref: "https://09-auth-ashy-three.vercel.app/",
  },
  {
    name: "Portfolio",
    favicon: "/favicon.ico",
    imageUrl: [
      "/images/projects/portfolio1.webp",
      "/images/projects/portfolio2.webp",
      "/images/projects/portfolio3.webp",
    ],
    description:
      "A responsive front-end site that brings a polished portfolio-style landing page to life using semantic HTML, modern CSS, and pure JavaScript. The project includes interactive navigation, product showcases, and forms, with live validation and feedback to enhance user experience.",
    sourceCodeHref: "https://github.com/HannaAssaf/Javascript-team-project",
    liveWebsiteHref: "https://hannaassaf.github.io/Javascript-team-project/",
  },
  {
    name: "MovieMatrix",
    favicon: "/favicon.ico",
    imageUrl: ["/images/projects/movie1.webp", "/images/projects/movie2.webp"],
    description:
      "React + TypeScript throughout: mastered core hooks, data fetching with React Query, and form handling with Formik.",
    sourceCodeHref: "https://github.com/HannaAssaf/04-react-query",
    liveWebsiteHref: "https://04-react-query-vert-one.vercel.app/",
  },
  {
    name: "Vyshyvanka",
    favicon: "/favicon.ico",
    imageUrl: [
      "/images/projects/vyshyvanka1.webp",
      "/images/projects/vyshyvanka2.webp",
      "/images/projects/vyshyvanka3.webp",
    ],
    description:
      "Sleek, responsive e-commerce template for Ukrainian vyshyvanka, translated pixel-perfect from Figma using semantic HTML, modern CSS and vanilla JavaScript. I served as Scrum Master and built the Order section with accessible validation, inline errors and success messaging.",
    sourceCodeHref: "https://github.com/HannaAssaf/HTML-CSS-team-project",
    liveWebsiteHref: "https://hannaassaf.github.io/HTML-CSS-team-project/",
  },
  {
    name: "Simply Chocolate",
    favicon: "/favicon.ico",
    imageUrl: [
      "/images/projects/simply-chocolate1.webp",
      "/images/projects/simply-chocolate2.webp",
      "/images/projects/simply-chocolate3.webp",
      "/images/projects/simply-chocolate4.webp",
      "/images/projects/simply-chocolate5.webp",
    ],
    description:
      "Responsive landing page for a fictitious chocolate brand with semantic, mobile-first layout, smooth navigation, product sections, testimonials, and a validated feedback form.",
    sourceCodeHref: "https://github.com/HannaAssaf/Simply-Chocolate-site",
    liveWebsiteHref: "https://hannaassaf.github.io/Simply-Chocolate-site/",
  },
];
