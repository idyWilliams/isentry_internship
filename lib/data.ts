import { Testimonial, Mentor, BlogPost, Metric, InternProject, Cohort, Partner, Resource } from './types';
import williams from "./../public/images/team/williams.webp";
import timi from "./../public/images/team/Photo - Timilehin Abegunde.png"
import akanimo from "./../public/images/team/Akanimo.webp"
import wangui from "./../public/images/team/Wangui.jpg"
import victor from "./../public/images/team/Victor-udo.jpeg"


export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Amina Okafor',
    role: 'Frontend Developer Intern',
    country: 'Nigeria',
    countryFlag: 'ng',
    image: 'https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&cs=tinysrgb&w=400',
    text: 'iSentry Internship transformed my career. I went from tutorial hell to building real products used by actual users. The mentorship was phenomenal.',
    year: '2024',
    cohort: '2024-Q1',
    isBestInCohort: true,
  },
  {
    id: '2',
    name: 'Kwame Mensah',
    role: 'Full Stack Developer Intern',
    country: 'Ghana',
    countryFlag: 'gh',
    image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400',
    text: 'Working on live projects taught me more in 3 months than years of solo learning. I now work as a junior developer at a tech startup.',
    year: '2024',
    cohort: '2024-Q1',
  },
  {
    id: '3',
    name: 'Aisha Kamara',
    role: 'UI/UX Developer Intern',
    country: 'Sierra Leone',
    countryFlag: 'sl',
    image: 'https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=400',
    text: 'The collaborative environment and real-world challenges pushed me beyond my comfort zone. I gained confidence and skills I never thought possible.',
    year: '2024',
    cohort: '2024-Q2',
  },
  {
    id: '4',
    name: 'David Omondi',
    role: 'Backend Developer Intern',
    country: 'Kenya',
    countryFlag: 'ke',
    image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400',
    text: 'iSentry gave me the opportunity to work with modern technologies and best practices. The experience was invaluable for my career growth.',
    year: '2024',
    cohort: '2024-Q2',
    isBestInCohort: true,
  },
  {
    id: '5',
    name: 'Zainab Hassan',
    role: 'Backend Developer Intern',
    country: 'Somalia',
    countryFlag: 'so',
    image: 'https://images.pexels.com/photos/3807517/pexels-photo-3807517.jpeg?auto=compress&cs=tinysrgb&w=400',
    text: 'The real-world experience here is unmatched. I learned more about system design and scalability than I ever could from online courses.',
    year: '2024',
    cohort: '2024-Q1',
  },
  {
    id: '6',
    name: 'Emeka Nwabueze',
    role: 'Frontend Developer Intern',
    country: 'Nigeria',
    countryFlag: 'ng',
    image: 'https://images.pexels.com/photos/2102415/pexels-photo-2102415.jpeg?auto=compress&cs=tinysrgb&w=400',
    text: 'iSentry gave me industry connections that helped me land my first job. The network of mentors and peers is invaluable.',
    year: '2024',
    cohort: '2024-Q2',
  },
];

export const mentors: Mentor[] = [
  {
    id: "1",
    name: "Idorenyin Williams",
    role: "Backend Mentor",
    bio: "Frontend engineering expert and visionary leader passionate about empowering African tech talent. With over 8 years of experience building scalable web applications, Idorenyin founded iSentry Internship to bridge the gap between learning and professional practice.",
    image: williams,
    linkedin: "https://linkedin.com/in/idorenyin-williams",
  },
  {
    id: "2",
    name: "Timilehin Abegunde",
    role: "Frontend Mentor",
    bio: "Experienced full-stack developer specializing in React, Node.js, and cloud architecture. Passionate about teaching and helping interns build production-ready applications.",
    image: timi,
    linkedin: "https://linkedin.com/in/chioma-adewale",
  },
  {
    id: "3",
    name: "Akanimo Ekong",
    role: "Socials and Graphics Design",
    bio: "Backend specialist with expertise in API design, database optimization, and cloud deployment. Dedicated to teaching best practices in software architecture.",
    image: akanimo,
    linkedin: "https://linkedin.com/in/emmanuel-nduka",
  },
  {
    id: "4",
    name: "Wangui Njoroge",
    role: "Product Design",
    bio: "Backend specialist with expertise in API design, database optimization, and cloud deployment. Dedicated to teaching best practices in software architecture.",
    image: wangui,
    linkedin: "https://ke.linkedin.com/in/wangui-njoroge-639378181",
  },
  {
    id: "5",
    name: "Steven Oluwaseyi",
    role: "QA Teasting",
    bio: "Backend specialist with expertise in API design, database optimization, and cloud deployment. Dedicated to teaching best practices in software architecture.",
    image:
      "https://images.pexels.com/photos/2102415/pexels-photo-2102415.jpeg?auto=compress&cs=tinysrgb&w=600",
    linkedin: "https://linkedin.com/in/emmanuel-nduka",
  },
  {
    id: "6",
    name: "Victor Udo",
    role: "QA Testing",
    bio: "Backend specialist with expertise in API design, database optimization, and cloud deployment. Dedicated to teaching best practices in software architecture.",
    image: victor,
    linkedin: "http://linkedin.com/in/victor-udo-55136b2b2",
  },
  {
    id: "7",
    name: "Ummi",
    role: "QA Teasting",
    bio: "Backend specialist with expertise in API design, database optimization, and cloud deployment. Dedicated to teaching best practices in software architecture.",
    image:
      "https://images.pexels.com/photos/2102415/pexels-photo-2102415.jpeg?auto=compress&cs=tinysrgb&w=600",
    linkedin: "https://linkedin.com/in/emmanuel-nduka",
  },
];

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Announcing Our 2025 Cohort: Applications Now Open',
    excerpt: 'We are thrilled to announce that applications for the 2025 iSentry Internship cohort are now open. Join Africa\'s most practical tech internship program.',
    thumbnail: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
    date: '2025-01-15',
    author: 'Idorenyin Williams',
    slug: 'announcing-2025-cohort',
    content: 'Full blog post content here...',
  },
  {
    id: '2',
    title: 'Success Stories: How Our Interns Landed Their Dream Jobs',
    excerpt: 'Hear from our alumni about how the iSentry Internship program helped them secure positions at leading tech companies across Africa.',
    thumbnail: 'https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg?auto=compress&cs=tinysrgb&w=800',
    date: '2024-12-20',
    author: 'Chioma Adewale',
    slug: 'success-stories-dream-jobs',
    content: 'Full blog post content here...',
  },
  {
    id: '3',
    title: 'Building Real Products: The iSentry Approach',
    excerpt: 'Learn about our unique methodology that puts interns on real projects from day one, fostering practical skills and professional growth.',
    thumbnail: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800',
    date: '2024-11-10',
    author: 'Emmanuel Nduka',
    slug: 'building-real-products',
    content: 'Full blog post content here...',
  },
];

export const metrics: Metric[] = [
  { id: '1', label: 'Interns Trained', value: 24, suffix: '+' },
  { id: '2', label: 'Countries Represented', value: 8, suffix: '' },
  { id: '3', label: 'Real-World Projects', value: 12, suffix: '+' },
  { id: '4', label: 'Placement Rate', value: 92, suffix: '%' },
];

export const cohorts: Cohort[] = [
  {
    id: '1',
    year: '2024',
    name: '2024 Q1 Cohort',
    description: 'Our inaugural cohort bringing together 12 talented developers from across Africa.',
    startDate: '2024-01-15',
    endDate: '2024-04-15',
    internCount: 12,
  },
  {
    id: '2',
    year: '2024',
    name: '2024 Q2 Cohort',
    description: 'Second cohort with 12 exceptional interns working on diverse projects.',
    startDate: '2024-04-20',
    endDate: '2024-07-20',
    internCount: 12,
  },
];

export const projects: InternProject[] = [
  {
    id: '1',
    title: 'Porker hut',
    description: 'A comprehensive job portal connecting African tech talent with opportunities across the continent.',
    image: 'https://images.pexels.com/photos/3945683/pexels-photo-3945683.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['React', 'Node.js', 'PostgreSQL', 'AWS'],
    cohort: '2024-Q1',
    internCount: 4,
    link: '#',
  },
  {
    id: '2',
    title: 'Goldies',
    description: 'Advanced analytics platform for tracking business metrics with real-time data visualization.',
    image: 'https://images.pexels.com/photos/3807517/pexels-photo-3807517.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['Next.js', 'TypeScript', 'Supabase', 'Chart.js'],
    cohort: '2024-Q1',
    internCount: 3,
    link: '#',
  },
  {
    id: '3',
    title: 'Mobile Learning Platform',
    description: 'An innovative platform making tech education accessible to students across Africa via mobile.',
    image: 'https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['React Native', 'Firebase', 'Node.js'],
    cohort: '2024-Q2',
    internCount: 3,
    link: '#',
  },
  {
    id: '4',
    title: 'Community Forum & Marketplace',
    description: 'Thriving digital community platform enabling tech professionals to connect and collaborate.',
    image: 'https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['Vue.js', 'Python', 'MongoDB', 'Redis'],
    cohort: '2024-Q2',
    internCount: 2,
    link: '#',
  },
];

export const partners: Partner[] = [
  {
    id: '1',
    name: 'iSentry Technologies',
    logo: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=200',
    category: 'sponsor',
    website: '#',
  },
  {
    id: '2',
    name: 'AWS',
    logo: 'https://images.pexels.com/photos/3945683/pexels-photo-3945683.jpeg?auto=compress&cs=tinysrgb&w=200',
    category: 'technology',
    website: '#',
  },
  {
    id: '3',
    name: 'GitHub',
    logo: 'https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=200',
    category: 'technology',
    website: '#',
  },
  {
    id: '4',
    name: 'Tech Startups Africa',
    logo: 'https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=200',
    category: 'hiring',
    website: '#',
  },
  {
    id: '5',
    name: 'BYS',
    logo: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=200',
    category: 'community',
    website: '#',
  },
];

export const resources: Resource[] = [
  {
    id: '1',
    title: 'React Documentation',
    description: 'Official React documentation and guides for building modern web applications.',
    category: 'documentation',
    link: 'https://react.dev',
  },
  {
    id: '2',
    title: 'Node.js Best Practices',
    description: 'Comprehensive guide to writing scalable backend applications with Node.js.',
    category: 'learning',
    link: '#',
  },
  {
    id: '3',
    title: 'System Design Fundamentals',
    description: 'Learn the principles of designing large-scale systems.',
    category: 'learning',
    link: '#',
  },
  {
    id: '4',
    title: 'Database Design Patterns',
    description: 'Essential patterns for designing efficient database schemas.',
    category: 'documentation',
    link: '#',
  },
  {
    id: '5',
    title: 'Git & Version Control',
    description: 'Master Git workflows and best practices for team collaboration.',
    category: 'tools',
    link: 'https://git-scm.com/doc',
  },
  {
    id: '6',
    title: 'Developer Community Discord',
    description: 'Join our thriving Discord community of African developers.',
    category: 'community',
    link: '#',
  },
];
