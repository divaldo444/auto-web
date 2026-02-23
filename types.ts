import { ReactNode } from 'react';

export interface NavItem {
  label: string;
  href: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: ReactNode;
  price?: string;
  features: string[];
}

export interface DetailedServiceItem {
  id: string;
  category: 'Maintenance' | 'Repairs' | 'Tires & Wheels';
  title: string;
  shortDescription: string;
  whyItMatters: string;
  icon: ReactNode;
  estimatedTime?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  rating: number;
  image?: string;
}

export interface Partner {
  id: string;
  name: string;
  logoUrl: string;
}