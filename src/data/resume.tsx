import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Jiangan Chen",
  preferedName: "Philip Chen",
  initials: "JC",
  url: "https://philip-chen.com",
  location: "Gainesville, FL",
  locationLink: "https://www.google.com/maps/place/gainesville+fl",
  description:
    "Front-end Engineer based in Florida. I enjoy building web apps, contributing to open-source community, and learning new technologies!",
  summary:
    "As a recent Computer Science graduate student, I recently discovered my passion for front-end development and for contributing to the open-source community. In the past, I pursued a double degree in [computer science and economics](/#education), [interned at big tech companies in China](/#work). I'm always actively looking for new opportunities to work on exciting projects and collaborate with talented people.",
  avatarUrl: "/headshot-cropped.jpg",
  skills: [
    "React",
    "Next.js",
    "Typescript",
    "Node.js",
    "Java",
    "Python",
    "C++",
    "JavaScript",
    "Erlang",
    "Pascal",
    "HTML",
    "CSS",
    "Bootstrap",
    "TailwindCSS",
    "Shadcn",
    "Redux",
    "Express",
    "MongoDB",
    "MySQL",
    "SQLite",
    "Postgres",
    "RESTful APIs",
    "GraphQL",
    "Git",
    "Vercel",
    "Netlify",
    "Docker",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "mailto:jianganchen0209@gmail.com",
    tel: "+1 (352) 328 8199",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/Jianganchen",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/philip-chen-jiangan/",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/PhilipChen89668",
        icon: Icons.x,

        navbar: true,
      },
      BuyMeACoffee: {
        name: "Buy Me A Coffee",
        url: "https://buymeacoffee.com/jianganchen",
        icon: Icons.buyMeACoffee,

        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Elite Software",
      badges: [],
      href: "https://shopify.com",
      location: "Gainesville, FL",
      title: "Software Engineer",
      logoUrl: "/EliteSoftware.png",
      start: "Jun, 2022",
      end: "Sep 2023",
      description:
        "Developed RESTful APIs and backend components in Java to support NFC card data processing and user profile management, enhancing security and performance across microservices. Used React, Nextjs, TypeScript and Tailwind for front-end development. Optimized Java-based backend services for scalable social networking functionality, managing high user traffic and database transactions. Implemented new features and resolved bugs in Java-based backend services, ensuring optimal performance and user experience.",
    },
    {
      company: "Tencent",
      href: "https://atomic.finance",
      badges: [],
      location: "Chengdu, China",
      title: "Front-end Engineer Intern",
      logoUrl: "/Tencent.png",
      start: "Jul 2020",
      end: "Jul 2021",
      description:
        "Developed a web-based cloud photo album program using React, Redux, Javascript and Python. Implemented a custom Kubernetes controller to automate the deployment of MySQL and ProxySQL custom resources in order to enable 2,000+ internal developers to instantly deploy their app databases to production. Wrote several scripts to automate MySQL database failovers while maintaining master-slave replication topologies and keeping Zookeeper nodes consistent with changes.",
    },
  ],
  education: [
    {
      school: "University of Florida",
      href: "https://www.ufl.edu/",
      degree: "Master's Degree of Computer Science (MCS)",
      logoUrl: "/UF.png",
      start: "2022",
      end: "2024",
    },
    {
      school: "University of Electronic Science and Technology of China",
      href: "https://en.uestc.edu.cn/",
      degree:
        "Bachelor's Degree of Computer Science (BCS), Bachelor's Degree of Economics (BEcon)",
      logoUrl: "/UESTC.png",
      start: "2018",
      end: "2022",
    },
  ],
  projects: [
    {
      title: "PawFinder",
      href: "https://paw-finder-sigma.vercel.app/",
      dates: "Feb 2025 - Mar 2025",
      active: true,
      description:
        "This is a toy website to help a dog-lover search through a database of shelter dogs, with the hope of finding a lucky dog a new home!",
      technologies: [
        "React",
        "Next.js",
        "Typescript",
        "TailwindCSS",
        "Shadcn UI",
        "Vercel",
        "Git",
        "Figma",
      ],
      links: [
        {
          type: "Website",
          href: "https://paw-finder-sigma.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Jianganchen/PawFinder",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/pawfinder.jpg",
      video: "",
    },
    {
      title: "Tiptap Extension",
      href: "https://github.com/Jianganchen/tiptap-extension-mcq",
      dates: "Jan 2025 - Feb 2025",
      active: true,
      description:
        "This is another toy project that allows users to create multiple-choice questions in a rich text editor using Tiptap. It also bootsraps a basic AI model to summarize the content.",
      technologies: [
        "React",
        "Next.js",
        "Typescript",
        "TailwindCSS",
        "Shadcn UI",
        "Git",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/Jianganchen/tiptap-extension-mcq",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/tiptap.png",
      video: "",
    },
  ],
  hackathons: [],
  images: [
    {
      src: "/gallery/img1.jpg",
    },
    {
      src: "/gallery/img2.jpg",
    },
    {
      src: "/gallery/img4.jpg",
    },
    {
      src: "/gallery/img5.jpg",
    },
    {
      src: "/gallery/img6.jpg",
    },
    {
      src: "/gallery/img7.png",
    },
    {
      src: "/gallery/img11.png",
    },
  ],
} as const;
