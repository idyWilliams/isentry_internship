import { StaticImageData } from "next/image";

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  country: string;
  countryFlag: string;
  image: string;
  text: string;
  year: string;
  cohort: string;
  videoUrl?: string;
  isBestInCohort?: boolean;
}

export interface Mentor {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: StaticImageData;
  linkedin?: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  thumbnail: string;
  date: string;
  author: string;
  content: string;
  slug: string;
}

export interface Metric {
  id: string;
  label: string;
  value: number;
  suffix?: string;
}

export interface InternProject {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  cohort: string;
  link?: string;
  internCount: number;
}

export interface Cohort {
  id: string;
  year: string;
  name: string;
  description: string;
  startDate: string;
  endDate: string;
  internCount: number;
}

export interface Partner {
  id: string;
  name: string;
  logo: StaticImageData;
  category: 'sponsor' | 'technology' | 'hiring' | 'community';
  website?: string;
}

export interface Resource {
  id: string;
  title: string;
  description: string;
  category: 'learning' | 'tools' | 'documentation' | 'community';
  link: string;
  icon?: string;
}
