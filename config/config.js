import profile from "./profile-white.png";
import {} from "@fortawesome/free-solid-svg-icons";

export const navigation = {
  name: "MR Hasan",
  links: [
    {
      title: "Experiences",
      options: [
        {
          title: "Industry",
          link: "#industryExperience",
        },
        {
          title: "Research",
          link: "#researchExperience",
        },
        {
          title: "Teaching",
          link: "#teachingExperience",
        },
      ],
    },
    {
      title: "Educations",
      link: "#educations",
    },
    {
      title: "Publications",
      link: "#publications",
    },
    {
      title: "Skills",
      link: "#skills",
    },
    {
      title: "Projects",
      link: "#projects",
    },
    {
      title: "Contacts",
      link: "#contacts",
    },
  ],
};
export const intro = {
  title: "Md. Rakibul Hasan",
  // description: ["I am a passionate software engineer with a degree in Software Engineering from SUST (2022). During my university years, I solved over 1200 problems in 200+ programming contests and worked on game and web development projects.",
  //   "My experience includes academic research in Computer Vision and Pattern Recognition, with an accepted paper at ICDAR. I enjoy mentoring new developers and participating in tech communities.",
  //   "In my free time, I love watching movies, playing video games, and reading books."
  // ],
  description: [],
  image: profile.src,
  buttons: [
    {
      title: "Contact Me",
      link: "#contact",
      isPrimary: true,
    },
    {
      title: "Resume",
      link: "",
      isPrimary: false,
    },
  ],
  socialLinks: [
    { url: "https://github.com/rakibulranak", icon: "github" },
    { url: "https://linkedin.com/in/rakibulranak", icon: "linkedin" },
    {
      url: "https://scholar.google.com/citations?user=userid",
      icon: "googleScholar",
    },
  ],
};

export const about = {
  title: "About me",
  description: [
    "I am a Software Engineer with 2+ years of professional experience, focusing on building and optimizing software solutions. During my university years, I actively participated in both problem-solving and software development. My enthusiasm for programming led me to take part in over 200 programming contests, where I solved over 1200 problems",
    "I am passionate about research, particularly in AI and machine learning. My work in these areas includes research in Computer Vision and Pattern Recognition, which led to a paper accepted at ICDAR, the premier document analysis and recognition conference.",
    "I also love joining communities, helping and mentoring new developers. In my free time, I love watching movies, playing video games, and reading books",
  ],
};
export const biographyData = {
  title: "About Me",
  content: [
    "A brief intro about your career, education, or anything you'd like to highlight. A brief intro about your career, education, or anything you'd like to highlight. A brief intro about your career, education, or anything you'd like to highlight.A brief intro about your career, education, or anything you'd like to highlight.",
    "This could include your background, achievements, or career highlights. A brief intro about your career, education, or anything you'd like to highlight. A brief intro about your career, education, or anything you'd like to highlight.A brief intro about your career, education, or anything you'd like to highlight.",
    "This could include your background, achievements, or career highlights. A brief intro about your career, education, or anything you'd like to highlight. A brief intro about your career, education, or anything you'd like to highlight.A brief intro about your career, education, or anything you'd like to highlight.",
  ],
};

export const contact = {
  title: "Get in touch",
  description:
    "Let's Connect! Feel free to reach out directly via email at rakibulhasanranak1@gmail.com. I'm always happy to engage in meaningful conversations.",
  buttons: [
    {
      title: "Email Me",
      link: "mailto:rakibulhasanranak1@gmail.com",
      isPrimary: true,
    },
    {
      title: "DM Me",
      link: "https://linkedin.com/in/rakibulranak",
      isPrimary: false,
    },
  ],
};

// SEARCH ENGINE
export const SEO = {
  // 50 - 60 char
  title: "Md Rakibul Hasan | Software Engineer | SUST | CEFALO",
  description:
    "I am a software engineer with a degree in Software Engineering from SUST (2022). During my university years, I solved over 1200 problems in 200+ programming contests and worked on game and web development projects.",
  image: profile.src,
};

export const interest = [
  "Software Engineering",
  "Software tools and AI",
  "Artificial Intelligence",
  "Machine learning",
];

export const education = {
  title: "Education",
  schools: [
    {
      degree: "BSc. in Software Engineering, 2022",
      institution: "Shahjalal University of Science and Technology",
      gpa: "3.75/4.00",
      courses: [
        "Data Structures",
        "Algorithms",
        "Software Engineering",
        "Computer Networks",
        "Operating Systems",
        "Database Management Systems",
        "Computer Architecture",
        "Artificial Intelligence",
        "Machine Learning",
        "Computer Vision",
        "Pattern Recognition",
      ],
    },
    {
      degree: "Higher Secondary School Certificate, 2017",
      institution: "Notre Dame College",
      gpa: "5.00/5.00",
      courses: [],
    },
  ],
};

export const industryExperience = {
  title: "Industry Experience",
  companies: [
    {
      position: "Software Engineer",
      company: "Cefalo Bangladesh Ltd",
      description: [
        "Contributed to the development of a large-scale multi-tenant SaaS platform, focusing on scalable subscription management systems and system reliability.",
        "Led the implementation of daily statistics tracking for recurring revenue, churn rates, and product usage, enabling data-driven strategies and actionable insights through user behavior analysis.",
        "Designed and deployed webhooks to improve third-party system integration, reducing manual interventions by 90% and streamlining cross-platform operations.",
        "Developed communication activity logging for users, enhancing auditability and reducing customer service inquiries",
      ],
      date: "July 2024 - Present",
    },
    {
      position: "Associate Software Engineer",
      company: "Cefalo Bangladesh Ltd",
      description: [
        "Designed and implemented comprehensive APIs and conducted extensive unit testing, ensuring robustness and reliability of the application.",
        "Integrated payment gateways and implemented automated recurring billing, reducing customer churn by 30%.",
        "Conducted in-depth analysis of tenant data and reduced manual data migration workload by 90% through Bash scripts paired with SQL, facilitating efficient tenant data migration from legacy systems.",
        "Developed financial reporting modules using data streaming to optimize server resource usage.",
        "Integrated external newsletter services and automated invoice generation processes.",
        "Enhanced system usability through global search across entities, improving query performance.",
      ],
      date: "Feb 2023 - Jun 2024",
    },
    {
      position: "Software Engineer Intern",
      company: "Cefalo Bangladesh Ltd",
      description: [
        "Developed a Slack bot application for real-time weather data retrieval and command execution.",
        "Automated media sharing and announcements between Slack and Facebook using Slack bot.",
        "Designed and deployed a blogging platform with unit testing and containerization.",
      ],
      date: "Sept 2021 - Mar 2022",
    },
  ],
};

export const researchExperience = {
  title: "Research Experience",
  companies: [
    {
      position: "Research Assistant",
      company: "Bengali.AI",
      description: [
        "Led a team of 13 annotators to develop the largest multi-domain Bengali Document Layout Analysis Dataset (BaDLAD), consisting of 33.7K document images and 710K polygon annotations.",
        "Standardized exported annotation data, performed comprehensive data analysis and visualization, and processed content to ensure compatibility with machine learning models while supporting dataset validation.",
        "Published a dataset paper, leveraging BaDLAD for training deep learning models in Bengali document digitization and layout analysis.",
        "Implemented a Bengali lemmatizer and compiled the largest dataset of Bengali verb forms, categorized bygrammatical structure and tense.",
      ],
      date: "Mar 2022 - Jan 2023",
    },
  ],
};

export const teachingExperience = {
  title: "Teaching Experience",
  experiences: [
    {
      title: "Mentor for Junior Engineers",
      year: "2024",
      description:
        "Provided hands-on guidance to junior engineers at Cefalo Bangladesh Ltd. on HTTP/REST, web development fundamentals, and best practices, helping them build a strong foundation in software development processes.",
    },
    {
      title: "Private Programming Tutor",
      year: "2023",
      description:
        "Offered personalized tutoring through Upwork and other online platforms, teaching clients programming concepts, improving their problem-solving skills, and building confidence in software development.",
    },
    {
      title: "Workshop Instructor",
      year: "2022",
      description:
        "During my final year of study, led workshops and classes for first and second-year students in the Software Engineering Society, affiliated with the Software Engineering department, focusing on data structures, algorithms, and competitive programming.",
    },
  ],
};

export const publicationData = {
  title: "Publications",
  publications: [
    {
      authors:
        "Md. Istiak Hossain Shihab, Md. Rakibul Hasan, Mahfuzur Rahman Emon, Syed Mobassir Hossen, Md. Nazmuddoha Ansary, Intesur Ahmed, Fazle Rabbi Rakib, Shahriar Elahi Dhruvo, Souhardya Saha Dip, Akib Hasan Pavel, Marsia Haque Meghla, Md. Rezwanul Haque, Sayma Sultana Chowdhury, Farig Sadeque, Tahsin Reasat, Ahmed Imtiaz Humayun & Asif Sushmit",
      title:
        "BaDLAD: A Large Multi-Domain Bengali Document Layout Analysis Dataset",
      proceedings:
        "Proceedings of the International Conference on Document Analysis and Recognition (ICDAR) pages 326-341, August 2023.",
      doi: "https://doi.org/10.1007/978-3-031-41676-7_19",
      pdf: "https://arxiv.org/pdf/2303.05325",
      dataset: "https://www.kaggle.com/datasets/reasat/badlad-train",
      webpage: "https://bengaliai.github.io/badlad",
    },
  ],
};

export const projectData = {
  title: "Projects",
  cards: [
    {
      title: "FileHub",
      description:
        "A file-sharing application using Python and Tkinter that allows users to transfer files over a TCP network.",
      github: "https://github.com/username/filehub",
      timePeriod: "June 2020 - Present",
    },
    {
      title: "SWE Society Portal",
      description:
        "A portal for the Software Engineering Society, built with ExpressJs and ReactJs to manage events, profiles, and notices.",
      github: "https://github.com/username/swe-society-portal",
      timePeriod: "May 2018 - May 2020",
    },
    {
      title: "FileHub",
      description:
        "A file-sharing application using Python and Tkinter that allows users to transfer files over a TCP network.",
      github: "https://github.com/username/filehub",
      timePeriod: "June 2020 - Present",
    },
    {
      title: "SWE Society Portal",
      description:
        "A portal for the Software Engineering Society, built with ExpressJs and ReactJs to manage events, profiles, and notices.",
      github: "https://github.com/username/swe-society-portal",
      timePeriod: "May 2018 - May 2020",
    },
  ],
};

export const skillsData = {
  title: "Skills",
  skillsLevel1: [
    "Pandas",
    "NumPy",
    "Matplotlib",
    "Scikit-learn",
    "Jupyter Notebook",
  ],
  skillsLevel2: ["C++", "JavaScript", "Java", "Python", "Bash"],
  skillsLevel3: ["React", "Node.js", "Express", "Nest.js", "Next.js"],
  skillsLevel4: ["PostgreSQL", "Redis", "Docker", "Git", "Linux"],
};
