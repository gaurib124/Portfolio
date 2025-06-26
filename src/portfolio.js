/* Change this file to get your personal Portfolio */

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation";

const splashScreen = {
  enabled: true,
  animation: splashAnimation,
  duration: 2000
};

const illustration = {
  animated: true
};

const greeting = {
  username: "Gauri D. Bhagyawant",
  title: "Hi all, I'm Gauri 👋",
  subTitle: emoji(
    "I'm a MERN Stack Developer 👩‍💻 currently pursuing B.Tech in Computer Science and Engineering (Nov 2022 - June 2026) with a CGPA of 8.06. I love building scalable web apps and solving real-world problems through code. Passionate about AI, full-stack development, and user experience."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1FIs5Egl-aEDV-qbnV8JZcTSw5t0hiHQ1/view?usp=sharing",
  displayGreeting: true
};

const socialMediaLinks = {
  github: "https://github.com/gaurib124",
  linkedin: "https://www.linkedin.com/in/gauri-bhagyawant-088410263/",
  gmail: "gauribhagyawant@gmail.com",
  display: true
};

const skillsSection = {
  title: "What I do",
  subTitle: "PASSIONATE MERN STACK DEVELOPER & TECH ENTHUSIAST",
  skills: [
    emoji("⚡ Building full-stack web apps with MongoDB, Express.js, React, and Node.js"),
    emoji("⚡ Leading projects and hackathons with AI integration"),
    emoji("⚡ Creating engaging UI/UX using Figma, Adobe XD, and Protopie"),
    emoji("⚡ Writing clean, scalable code and collaborating on GitHub")
  ],
  softwareSkills: [
    { skillName: "HTML5", fontAwesomeClassname: "fab fa-html5" },
    { skillName: "CSS3", fontAwesomeClassname: "fab fa-css3-alt" },
    { skillName: "JavaScript", fontAwesomeClassname: "fab fa-js" },
    { skillName: "ReactJS", fontAwesomeClassname: "fab fa-react" },
    { skillName: "Node.js", fontAwesomeClassname: "fab fa-node" },
    { skillName: "Java", fontAwesomeClassname: "fab fa-java" },
    { skillName: "PHP", fontAwesomeClassname: "fab fa-php" },
    { skillName: "C++", fontAwesomeClassname: "fas fa-code" },
    { skillName: "Firebase", fontAwesomeClassname: "fas fa-fire" },
    { skillName: "Flutter", fontAwesomeClassname: "fas fa-mobile-alt" },
    { skillName: "GitHub", fontAwesomeClassname: "fab fa-github" }
  ],
  display: true
};

const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "Deogiri College of Engineering and Management Studies",
      logo: require("./assets/images/deogiriLogo.png"),
      subHeader: "B.Tech in Computer Science and Engineering",
      duration: "Nov 2022 - June 2026",
      desc: "CGPA: 8.06",
      descBullets: [
        "Team Lead - TIFAN Hackathon (AI Developer)",
        "Project Lead - Heartbeat Monitoring System"
      ]
    },
    {
      schoolName: "HSC - Maharashtra State Board",
      logo: require("./assets/images/msbLogo.png"),
      subHeader: "Science",
      duration: "2020 - 2022",
      desc: "Scored 84.80%"
    },
    {
      schoolName: "SSC - Maharashtra State Board",
      logo: require("./assets/images/msbLogo.png"),
      subHeader: "Secondary Education",
      duration: "2019 - 2020",
      desc: "Scored 92.80%"
    }
  ]
};

const techStack = {
  viewSkillBars: true,
  experience: [
    { Stack: "Frontend/Design", progressPercentage: "85%" },
    { Stack: "Backend", progressPercentage: "75%" },
    { Stack: "Android & Flutter", progressPercentage: "70%" }
  ],
  displayCodersrank: false
};

const workExperiences = {
  display: true,
  experience: [
    {
      role: "AI Developer (Team Lead)",
      company: "TIFAN Hackathon 2025",
      companylogo: require("./assets/images/tifanLogo.png"),
      date: "Jan 2025 – Apr 2025",
      desc: "Led AI development for crop monitoring and prediction. Won Best Innovation Award among 160+ teams."
    },
    {
      role: "Full Stack Developer",
      company: "EduNet",
      companylogo: require("./assets/images/edunetLogo.png"),
      date: "Nov 2024 – Dec 2024",
      desc: "Built full-stack project using MERN stack integrating APIs."
    },
    {
      role: "Full Stack Developer",
      company: "Brainwave Matrix Solution",
      companylogo: require("./assets/images/brainwaveLogo.png"),
      date: "Jul 2023 – Aug 2024",
      desc: "Worked on multiple full-stack projects during internship."
    }
  ]
};

const openSource = {
  showGithubProfile: "true",
  display: true
};

const bigProjects = {
  title: "Projects",
  subtitle: "PROJECTS THAT REFLECT PASSION AND CREATIVITY",
  projects: [
    {
      image: require("./assets/images/foodDonation.png"),
      projectName: "Food Donation Website",
      projectDesc: "Connects food donors with NGOs. HTML, CSS, JS, PHP, MySQL.",
      footerLink: [{ name: "GitHub", url: "https://github.com/gaurib124/Food-Donation" }]
    },
    {
      image: require("./assets/images/expenseTracker.png"),
      projectName: "Expense Tracker",
      projectDesc: "MERN stack app for tracking personal finances.",
      footerLink: [{ name: "GitHub", url: "https://github.com/gaurib124/Expense-tracker" }]
    },
    {
      image: require("./assets/images/khetSeGhar.png"),
      projectName: "Khet Se Ghar",
      projectDesc: "Web platform for farmers to sell directly to consumers.",
      footerLink: [{ name: "GitHub", url: "https://github.com/gaurib124/Khet-Se-Ghar" }]
    },
    {
      image: require("./assets/images/visualBeat.png"),
      projectName: "Visual Beat Sort",
      projectDesc: "Bubble sort visualization with Canvas and Web Audio API.",
      footerLink: [{ name: "GitHub", url: "https://github.com/gaurib124/Visual-Beat-Sort" }]
    },
    {
      image: require("./assets/images/aiFitness.png"),
      projectName: "AI Fitness Tracker",
      projectDesc: "AI-based fitness tracking chatbot.",
      footerLink: [{ name: "GitHub", url: "https://github.com/gaurib124/AI-Fitness-Tracker" }]
    },
    {
      image: require("./assets/images/instagramPredictor.png"),
      projectName: "Instagram Like Predictor",
      projectDesc: "Predicts likes using ML techniques.",
      footerLink: [{ name: "GitHub", url: "https://github.com/gaurib124/Instagram-like-predictor" }]
    },
    {
      image: require("./assets/images/flipkartClone.png"),
      projectName: "Flipkart Clone",
      projectDesc: "Frontend clone using React.",
      footerLink: [{ name: "GitHub", url: "https://github.com/gaurib124/Flipkart-Clone" }]
    }
  ],
  display: true
};

const achievementSection = {
  title: emoji("Achievements & Certifications 🏆"),
  subtitle: "My accomplishments and recognitions so far.",
  achievementsCards: [
    {
      title: "NCAT AIR-51",
      subtitle: "Secured AIR-51 in the National Creative Aptitude Test.",
      image: require("./assets/images/ncatLogo.png"),
      imageAlt: "NCAT Logo",
      footerLink: []
    },
    {
      title: "Dipex Exhibition Finalist",
      subtitle: "Deployed a functional heartbeat monitoring system.",
      image: require("./assets/images/dipexLogo.png"),
      imageAlt: "DIPEX Logo",
      footerLink: []
    },
    {
      title: "Certified UX Designer",
      subtitle: "Google UX Design Professional Certificate.",
      image: require("./assets/images/googleUX.png"),
      imageAlt: "Google UX Logo",
      footerLink: [
        { name: "Certificate", url: "https://coursera.org/account/accomplishments/specialization/certificate/YOUR-CERTIFICATE-ID" }
      ]
    },
    {
      title: "Typing Certificate (40 WPM)",
      subtitle: "Government Certificate from Maharashtra State Council, Pune.",
      image: require("./assets/images/typing.png"),
      imageAlt: "Typing Logo",
      footerLink: []
    },
    {
      title: "Google Data Analytics",
      subtitle: "Google Data Analytics Professional Certificate - Coursera.",
      image: require("./assets/images/googleData.png"),
      imageAlt: "Data Analytics Logo",
      footerLink: []
    },
    {
      title: "Python Programming",
      subtitle: "Certified Python Developer.",
      image: require("./assets/images/pythonCert.png"),
      imageAlt: "Python Logo",
      footerLink: []
    }
  ],
  display: true
};

const resumeSection = {
  title: "Resume",
  subtitle: "Download my resume",
  display: true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "Open to freelance, internships, and collaborations.",
  number: "+91-9834207789",
  email_address: "gauribhagyawant@gmail.com"
};

const twitterDetails = {
  userName: "gauri_d",
  display: false
};

const isHireable = true;

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};