import { Testimonial, Mentor, BlogPost, Metric } from './types';

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Amina Okafor',
    role: 'Frontend Developer Intern',
    country: 'Nigeria',
    countryFlag: '🇳🇬',
    image: 'https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&cs=tinysrgb&w=400',
    text: 'iSentry Internship transformed my career. I went from tutorial hell to building real products used by actual users. The mentorship was phenomenal.',
    year: '2024',
  },
  {
    id: '2',
    name: 'Kwame Mensah',
    role: 'Full Stack Developer Intern',
    country: 'Ghana',
    countryFlag: '🇬🇭',
    image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400',
    text: 'Working on live projects taught me more in 3 months than years of solo learning. I now work as a junior developer at a tech startup.',
    year: '2024',
  },
  {
    id: '3',
    name: 'Aisha Kamara',
    role: 'UI/UX Developer Intern',
    country: 'Sierra Leone',
    countryFlag: '🇸🇱',
    image: 'https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=400',
    text: 'The collaborative environment and real-world challenges pushed me beyond my comfort zone. I gained confidence and skills I never thought possible.',
    year: '2023',
  },
  {
    id: '4',
    name: 'David Omondi',
    role: 'Backend Developer Intern',
    country: 'Kenya',
    countryFlag: '🇰🇪',
    image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400',
    text: 'iSentry gave me the opportunity to work with modern technologies and best practices. The experience was invaluable for my career growth.',
    year: '2023',
  },
];

export const mentors: Mentor[] = [
  {
    id: '1',
    name: 'Idorenyin Williams',
    role: 'Founder & Lead Mentor',
    bio: 'Frontend engineering expert and visionary leader passionate about empowering African tech talent. With over 8 years of experience building scalable web applications, Idorenyin founded iSentry Internship to bridge the gap between learning and professional practice.',
    image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=600',
    linkedin: 'https://linkedin.com/in/idorenyin-williams',
  },
  {
    id: '2',
    name: 'Chioma Adewale',
    role: 'Senior Full Stack Mentor',
    bio: 'Experienced full-stack developer specializing in React, Node.js, and cloud architecture. Passionate about teaching and helping interns build production-ready applications.',
    image: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=600',
    linkedin: 'https://linkedin.com/in/chioma-adewale',
  },
  {
    id: '3',
    name: 'Emmanuel Nduka',
    role: 'Backend & DevOps Mentor',
    bio: 'Backend specialist with expertise in API design, database optimization, and cloud deployment. Dedicated to teaching best practices in software architecture.',
    image: 'https://images.pexels.com/photos/2102415/pexels-photo-2102415.jpeg?auto=compress&cs=tinysrgb&w=600',
    linkedin: 'https://linkedin.com/in/emmanuel-nduka',
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
  { id: '1', label: 'Interns Trained', value: 15, suffix: '+' },
  { id: '2', label: 'Countries Represented', value: 4, suffix: '' },
  { id: '3', label: 'Real-World Projects', value: 5, suffix: '+' },
  { id: '4', label: 'Placement Rate', value: 85, suffix: '%' },
];
