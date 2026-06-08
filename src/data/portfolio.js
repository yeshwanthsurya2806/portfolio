// Central data source for all portfolio information
export const portfolioData = {
  personal: {
    name: "Yeshwanth Surya",
    fullName: "Gandu Yeshwanth Surya",
    title: "Full Stack + AI Developer",
    college: "Vellore Institute of Technology (VIT), Vellore",
    location: "Vellore, Tamil Nadu, India",
    degree: "B.Tech CSE — Specialization in Internet of Things (IoT)",
    graduationYear: 2028,
    email: "yeshwanth.surya2806@gmail.com",
    github: "https://github.com/yeshwanthsurya2806",
    linkedin: "https://www.linkedin.com/in/yeshwanthsurya/",
    bio: "Hey! I'm Yeshwanth — a B.Tech CSE (IoT) student at VIT Vellore, graduating in 2028. I'm on a mission to become a Full Stack + AI developer, building things that are actually useful. When I'm not coding, I'm either chasing lush green landscapes on a road trip or talking about cars way too passionately. 🚗🌿",
  },

  hero: {
    mainText: "Yeshwanth Surya",
    tagline: "I build things that live on the internet — and sometimes talk to it too.",
    roles: [
      "Full Stack Developer",
      "AI Enthusiast",
      "VIT '28",
      "Open to Internships 🚀",
    ],
    cta: [
      { label: "View My Work", type: "primary", href: "#projects" },
      { label: "Let's Connect", type: "secondary", href: "#contact" },
    ],
  },

  about: {
    stats: [
      { label: "Live Projects", value: "1" },
      { label: "Languages Known", value: "6+" },
      { label: "Graduation Year", value: "2028" },
      { label: "Chai Consumed", value: "∞ ☕" },
    ],
    emojis: ["🚗", "🌿", "💻", "🤖"],
  },

  projects: [
    {
      id: 1,
      title: "LifeEase: Smart Life & Financial Management",
      description:
        "A web app to simplify daily life and track finances smartly. Built with vanilla HTML, CSS, and JavaScript.",
      tech: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/yeshwanthsurya2806",
      live: "https://yeshwanthsurya2806.github.io/LifeEase-Mastery/",
      featured: true,
      status: "live",
    },
    {
      id: 2,
      title: "🚧 Coming Soon — AI Project",
      description: "Building something intelligent and powerful. Stay tuned!",
      tech: [],
      status: "coming-soon",
    },
    {
      id: 3,
      title: "🚧 Coming Soon — Full Stack App",
      description: "A full-stack web application with backend and frontend magic.",
      tech: [],
      status: "coming-soon",
    },
  ],

  skills: [
    {
      category: "💻 Languages",
      icon: "Code",
      skills: ["C", "C++", "Java", "Python", "JavaScript"],
      gradient: "neon-purple",
    },
    {
      category: "🌐 Frontend",
      icon: "Globe",
      skills: ["HTML", "CSS", "React.js"],
      gradient: "neon-cyan",
    },
    {
      category: "🧠 CS Fundamentals",
      icon: "Brain",
      skills: ["DSA", "OOPs"],
      gradient: "neon-lime",
    },
    {
      category: "🔧 Currently Learning",
      icon: "Wrench",
      skills: ["Full Stack Development", "AI/ML"],
      gradient: "neon-purple",
    },
    {
      category: "🛠️ Tools",
      icon: "Hammer",
      skills: ["Git", "GitHub", "VS Code"],
      gradient: "neon-cyan",
    },
  ],

  experience: [
    {
      year: 2024,
      icon: "🎓",
      title: "Joined VIT Vellore",
      subtitle: "B.Tech CSE (IoT)",
      description: "Started the journey at one of India's top tech universities.",
    },
    {
      year: 2024,
      icon: "💡",
      title: "Built LifeEase",
      subtitle: "Personal Project",
      description:
        "Designed and developed a smart life & financial management web app solo.",
    },
    {
      year: 2025,
      icon: "📚",
      title: "Levelling Up",
      subtitle: "Full Stack + AI",
      description:
        "Diving deep into React, backend development, and AI integrations.",
    },
    {
      year: 2026,
      icon: "🚀",
      title: "Internship Ready",
      subtitle: "Open to Opportunities",
      description:
        "Ready to bring my skills to the table and learn from industry experts.",
    },
  ],

  contact: {
    heading: "Let's Build Something Amazing 🔥",
    subtext:
      "Whether it's an internship, a collab, or just a chat about cars — my inbox is always open.",
    links: [
      {
        icon: "Mail",
        label: "Email",
        value: "yeshwanth.surya2806@gmail.com",
        href: "mailto:yeshwanth.surya2806@gmail.com",
      },
      {
        icon: "Linkedin",
        label: "LinkedIn",
        value: "linkedin.com/in/yeshwanthsurya",
        href: "https://www.linkedin.com/in/yeshwanthsurya/",
      },
      {
        icon: "Github",
        label: "GitHub",
        value: "github.com/yeshwanthsurya2806",
        href: "https://github.com/yeshwanthsurya2806",
      },
    ],
  },
};
