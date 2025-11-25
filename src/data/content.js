import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { LuMail, LuPhone } from 'react-icons/lu';
import { SiGeeksforgeeks, SiLeetcode } from 'react-icons/si';

export const hero = {
  name: 'Sumit Tiwari',
  title: 'Full Stack Developer',
  subtitle: 'Ex Intern @ Ethnus',
  description:
    'Building resilient, user-focused products across the MERN stack while blending data-driven insights from machine learning and clean API design.',
  location: 'India',
  availability: 'Open to internships & Jobs',
  highlights: [
    'Built a payment management system across React, Node.js, Express, and MongoDB',
    'Containerized and deployed services with Docker + Kubernetes and CI/CD on GitHub Actions',
    'Applied ML with FastAPI services and Gemini embeddings for 92% accurate predictions',
    '300+ LeetCode and 150+ GFG problems solved to stay sharp',
  ],
  stats: [
    {
      label: 'Internship',
      value: 'Aug 2024 - Aug 2025',
      detail: 'Ethnus | Payment & user activity dashboards',
    },
    {
      label: 'Stack',
      value: 'MERN | FastAPI | AWS',
      detail: 'Docker | Kubernetes | CI/CD | Monitoring',
    },
    {
      label: 'Impact',
      value: '92%+ accuracy',
      detail: 'Fake news detection & analytics pipelines',
    },
  ],
  contact: [
    {
      label: 'sumitkumartiwari627@gmail.com',
      href: 'mailto:sumitkumartiwari627@gmail.com',
      icon: LuMail,
    },
    {
      label: '+91 7459036709',
      href: 'tel:+917459036709',
      icon: LuPhone,
    },
  ],
  socials: [
    {
      label: 'GitHub',
      href: 'https://github.com/sumitkumart',
      icon: FaGithub,
    },
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/sumit-tiwari745903/',
      icon: FaLinkedin,
    },
    {
      label: 'GeeksforGeeks',
      href: 'https://www.geeksforgeeks.org/user/sumitkumar251q//',
      icon: SiGeeksforgeeks,
    },
    {
      label: 'LeetCode',
      href: 'https://leetcode.com/u/sumitkumartiwari/',
      icon: SiLeetcode,
    },
  ],
};

export const skills = [
  {
    category: 'Programming Languages',
    items: ['Java', 'JavaScript', 'TypeScript (Basic)', 'SQL', 'Python', 'Go (Golang)', 'HTML', 'CSS', 'Node.js'],
  },
  {
    category: 'Technical Skills',
    items: [
      'Full Stack Development (MERN) & REST APIs',
      'Machine Learning (ML) & NLP',
      'DBMS & Data Modeling',
      'Object-Oriented Programming',
      'Cloud Computing (AWS)',
      'DevOps (CI/CD, Automation, Monitoring)',
      'High Availability & Backup strategies',
      'Data Visualization (Tableau, Power BI, ETL)',
    ],
  },
  {
    category: 'Frameworks & Tools',
    items: [
      'Spring Boot',
      'Next.js',
      'React.js',
      'Tailwind CSS',
      'Git & GitHub',
      'MongoDB Projects',
      'Express.js',
      'TensorFlow',
      'MATLAB',
      'Terraform',
      'Ansible',
      'Linux & Shell scripting',
      'Prometheus',
      'Grafana',
      'ELK/Kibana',
      'Tableau',
      'Power BI',
    ],
  },
];

export const workExperience = [
  {
    company: 'Ethnus',
    role: 'Full Stack Developer Intern',
    period: 'Aug 2024 - Aug 2025',
    location: 'Bangalore, India',
    highlights: [
      'Built a full-stack Payment Management System with React.js, Node.js, Express.js, and MongoDB for seamless handling of transactions and data.',
      'Containerized backend services with Docker and deployed via Kubernetes to guarantee smooth scaling and reliability.',
      'Implemented GitHub Actions CI/CD pipelines to automate testing, builds, and deployments with real-time dashboards for payments and user activity.',
    ],
  },
];

export const projects = [
  {
    title: 'Rate Local Shop',
    description:
      'Full-stack feedback platform enabling communities to share store reviews, automate rating collection, and give shop owners secure dashboards.',
    tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JWT'],
    outcomes: [
      'Solved 85-90% of the manual rating pain points through automation, curated displays, and secure feedback loops.',
      'Identified 10-15% improvement scope using analytics and mobile optimization, achieving 90%+ problem-solving effectiveness.',
    ],
    repo: 'https://github.com/sumitkumartiwari/rate-local-shop',
  },
  {
    title: 'Fake News Detection System',
    description:
      'AI-driven news classifier powered by NLP + ML models (Logistic Regression, Random Forest) with Gemini embeddings for accurate detection.',
    tech: ['Python', 'FastAPI', 'Gemini Embeddings', 'Docker', 'MongoDB'],
    outcomes: [
      'Achieved 88-92% classification accuracy via a FastAPI backend, Dockerized deployment, and real-time verification pipeline.',
      'Addressed misinformation challenges with 90% overall problem-solving effectiveness and a clear path to deep learning expansion.',
    ],
    repo: 'https://github.com/sumitkumartiwari/fake-news-detection-system',
  },
];

export const education = [
  {
    school: 'Vellore Institute of Technology, Bhopal',
    program: 'B.Tech in Computer Science and Engineering',
    period: 'Nov 2022 - Oct 2026',
    location: 'Bhopal, Madhya Pradesh',
  },
  {
    school: 'Khedu Intermediate College',
    program: 'Class XII',
    period: 'Apr 2021 - Jul 2022',
    location: 'Uttar Pradesh, Lucknow',
  },
  {
    school: 'R.D.I.C. Gangapatti',
    program: 'Class X',
    period: 'Apr 2019 - Jul 2020',
    location: 'Uttar Pradesh, Lucknow',
  },
];

export const certifications = [
  { title: 'AWS Practitioner', issuer: 'Amazon Web Services', year: 'Feb - Apr 2025', image: 'aws-fixed.jpg' },
  { title: 'Full-Stack Developer - ETHNUS Intern', issuer: 'ETHNUS', year: 'Aug 2024 - Aug 2025', image: 'mern-fixed.jpg' },
  { title: 'Machine Learning with Python', issuer: 'IBM Skills Network', year: 'Jan - Jul 2024', image: 'ml-fixed.jpg' },
  { title: 'Blockchain Fundamentals', issuer: 'Coursera', year: '2025', image: 'blockchain-fixed.jpg' },
];

export const achievements = [
  'Solved 300+ LeetCode problems',
  'Solved 150+ GeeksforGeeks problems',
  'Core Member, Software Development Club',
  'NSS Club Volunteer',
];

export const languages = [
  { name: 'Hindi', level: 'Native' },
  { name: 'English', level: 'Proficient' },
];

export const hobbies = ['Badminton', 'Listening to Music'];

