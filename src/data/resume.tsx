import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Jiangan Chen",
  initials: "JC",
  url: "https://dillion.io",
  location: "Gainesville, FL",
  locationLink: "https://www.google.com/maps/place/sanfrancisco",
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
    email: "hello@example.com",
    tel: "+123456789",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://dub.sh/dillion-github",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://dub.sh/dillion-linkedin",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://dub.sh/dillion-twitter",
        icon: Icons.x,

        navbar: true,
      },
      Youtube: {
        name: "Youtube",
        url: "https://dub.sh/dillion-youtube",
        icon: Icons.youtube,
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
      title: "Chat Collect",
      href: "https://chatcollect.com",
      dates: "Jan 2024 - Feb 2024",
      active: true,
      description:
        "With the release of the [OpenAI GPT Store](https://openai.com/blog/introducing-the-gpt-store), I decided to build a SaaS which allows users to collect email addresses from their GPT users. This is a great way to build an audience and monetize your GPT API usage.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://chatcollect.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4",
    },
    {
      title: "Magic UI",
      href: "https://magicui.design",
      dates: "June 2023 - Present",
      active: true,
      description:
        "Designed, developed and sold animated UI components for developers.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://magicui.design",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/magicuidesign/magicui",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.magicui.design/bento-grid.mp4",
    },
    {
      title: "llm.report",
      href: "https://llm.report",
      dates: "April 2023 - September 2023",
      active: true,
      description:
        "Developed an open-source logging and analytics platform for OpenAI: Log your ChatGPT API requests, analyze costs, and improve your prompts.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Stripe",
        "Cloudflare Workers",
      ],
      links: [
        {
          type: "Website",
          href: "https://llm.report",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/dillionverma/llm.report",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.llm.report/openai-demo.mp4",
    },
    {
      title: "Automatic Chat",
      href: "https://automatic.chat",
      dates: "April 2023 - March 2024",
      active: true,
      description:
        "Developed an AI Customer Support Chatbot which automatically responds to customer support tickets using the latest GPT models.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Stripe",
        "Cloudflare Workers",
      ],
      links: [
        {
          type: "Website",
          href: "https://automatic.chat",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/automatic-chat.mp4",
    },
  ],
  hackathons: [],
} as const;
