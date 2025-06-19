export type NavItem = {
  title: string;
  href: string;
};

export type Plan = {
  name: string;
  patrimony: number;
  monthlyReturn: number;
  monthlyInvestment: number;
};

export type Testimonial = {
  quote: string;
  author: string;
  location: string;
  role: string;
};

export type Solution = {
  title: string;
  description: string;
};

export type SiteConfig = {
  name: string;
  description: string;
  url: string;
  ogImage: string;
  links: {
    instagram: string;
    linkedin: string;
    whatsapp: string;
  };
  contact: {
    email: string;
    phone: string;
    address: string;
  };
  mainNav: NavItem[];
  plans: Plan[];
  testimonials: Testimonial[];
  solutions: Solution[];
}; 