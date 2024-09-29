import { icon } from "@fortawesome/fontawesome-svg-core";
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
  title: "Sabrina Afrin Lira",
  description: [],
  image: profile.src,
  socialLinks: [
    { url: "https://sabrinalira.github.io/", icon: "github" },
    { url: "https://www.linkedin.com/in/sabrina-afrin-lira/", icon: "linkedin" },
    
    {
      url: "mailto:sabrinaaflira@gamil.com",
      icon: "email",
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
    "Md Rakibul Hasan, known as Ranak among peers, is a dedicated Software Engineer at Cefalo Bangladesh Ltd. He contributes to the development and enhancement of a large-scale SaaS platform for a Norwegian Media Company, focusing on subscription management, system reliability, and platform improvements to optimize user experience.",
    "Hasan holds a Bachelor's degree in Software Engineering from Shahjalal University of Science and Technology (SUST). A seasoned competitor in programming contests, he has participated in over 200 contests and solved more than 1200 problems. He has also published research in Computer Vision at the ICDAR conference, specifically on Bengali Document Layout Analysis.",
    "With experience mentoring junior engineers and expertise in software development, Hasan continues to excel in his role. When not coding, he enjoys watching movies, sports, and traveling.",
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
      link: "https://www.linkedin.com/in/rakibulranak",
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

export const interest = {
  title: "Interests",
  interests: [
    "Software Engineering",
    "Artificial Intelligence",
    "Machine Learning",
    "Natural Language and Processing",
    "Data Sciences and Analytics",
    "Human Computer Interaction",
  ],
};

export const education = {
  title: "Education",
  schools: [
    {
      degree: "BSc. in Software Engineering, 2022",
      institution: "Shahjalal University of Science and Technology, Sylhet",
      institutionUrl: "https://www.sust.edu/",
      gpa: "3.79/4.00 - [4th/50]",
      courses: [
        "Data Structure & Algorithms",
        "Object Oriented Programming",
        "Computer Networking",
        "Computer Architecture",
        "Operating Systems",
        "Computer & Network Security",
        "Database Management System",
        "Introduction to Software Engineering",
        "Software Requirement Engineering",
        "Software Architecture & Design Patterns",
        "Software Verification & Validation",
        "Software Usability & Metrics",
        "Software Project Management",
        "Introduction to Data Science",
        "Artificial Intelligence",
        "Machine Learning",
      ],
    },
    {
      degree: "Higher Secondary School Certificate, 2017",
      institution: "Notre Dame College, Dhaka",
      institutionUrl: "https://ndc.edu.bd/",
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
      companyUrl: "https://www.cefalo.com/",
      description: [
        "Contributed to the development of a large-scale multi-tenant SaaS platform, focusing on scalable subscription management systems and system reliability.",
        "Led the implementation of daily statistics tracking for recurring revenue, churn rates, and product usage, enabling data-driven strategies and actionable insights through user behavior analysis.",
        "Designed and deployed webhooks to improve third-party system integration, reducing manual interventions by 90% and streamlining cross-platform operations.",
        "Developed communication activity logging for users, enhancing auditability and reducing customer service inquiries",
      ],
      date: "July 2024 - Present",
      location: "Dhaka, Bangladesh",
    },
    {
      position: "Associate Software Engineer",
      company: "Cefalo Bangladesh Ltd",
      companyUrl: "https://www.cefalo.com/",
      description: [
        "Designed and implemented comprehensive APIs and conducted extensive unit testing, ensuring robustness and reliability of the application.",
        "Integrated payment gateways and implemented automated recurring billing, reducing customer churn by 30%.",
        "Conducted in-depth analysis of tenant data and reduced manual data migration workload by 90% through Bash scripts paired with SQL, facilitating efficient tenant data migration from legacy systems.",
        "Developed financial reporting modules using data streaming to optimize server resource usage.",
        "Integrated external newsletter services and automated invoice generation processes.",
        "Enhanced system usability through global search across entities, improving query performance.",
      ],
      date: "Feb 2023 - Jun 2024",
      location: "Dhaka, Bangladesh",
    },
    {
      position: "Software Engineer Intern",
      company: "Cefalo Bangladesh Ltd",
      companyUrl: "https://www.cefalo.com/",
      description: [
        "Developed a Slack bot application for real-time weather data retrieval and command execution.",
        "Automated media sharing and announcements between Slack and Facebook using Slack bot.",
        "Designed and deployed a blogging platform with unit testing and containerization.",
      ],
      date: "Sept 2021 - Mar 2022",
      location: "Dhaka, Bangladesh",
    },
  ],
};

export const researchExperience = {
  title: "Research Experience",
  companies: [
    {
      position: "Research Assistant",
      company: "Bengali.AI",
      companyUrl: "https://bengali.ai/",
      description: [
        "Led a team of 13 annotators to develop the largest multi-domain Bengali Document Layout Analysis Dataset (BaDLAD), consisting of 33.7K document images and 710K polygon annotations.",
        "Standardized exported annotation data, performed comprehensive data analysis and visualization, and processed content to ensure compatibility with machine learning models while supporting dataset validation.",
        "Published a dataset paper, leveraging BaDLAD for training deep learning models in Bengali document digitization and layout analysis.",
        "Implemented a Bengali lemmatizer and compiled the largest dataset of Bengali verb forms, categorized bygrammatical structure and tense.",
      ],
      date: "Oct 2021 - Jan 2023",
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
      title: "SlackBook",
      description:
        "A Slack bot application to automate media sharing and announcements between Slack and Facebook. It also provides real-time weather data retrieval and command execution.",
      github: "https://github.com/RakibulRanak/SlackBook",
      timePeriod: "Dec 2021 - Feb 2022",
    },
    {
      title: "FileHub",
      description:
        "A file-sharing application that allows users to transfer files over a TCP network. It supports multiple connections between clients and servers concurrently.",
      github: "https://github.com/RakibulRanak/FileHub",
      timePeriod: "May 2021 - June 2021",
    },
    {
      title: "SWE Society Portal",
      description:
        "A portal for the Software Engineering Society,SUST to manage events, profiles, and notices. It includes an admin panel for managing user roles and permissions.",
      github: "https://github.com/sust-swe/SWE-Society",
      timePeriod: "Jan 2021 - Feb 2021",
    },
    {
      title: "SWEOJ",
      description:
        "A basic online judge web application to arrange programming contests and practice problems. It has live standings, user submissions and a problem archive.",
      github: "https://github.com/RakibulRanak/SWE-OJ",
      timePeriod: "July 2019 - Jan 2020",
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
