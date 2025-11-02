export interface Testimonial {
  id: string;
  name: string;
  role: string;
  country: string;
  countryFlag: string;
  image: string;
  text: string;
  year: string;
  videoUrl?: string;
}

export interface Mentor {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
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
