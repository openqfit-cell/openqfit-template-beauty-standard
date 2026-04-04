import { LucideIcon } from 'lucide-react';

// ============================================================
// 공통 타입
// ============================================================

export interface NavItem {
  label: string;
  href: string;
}

export interface CTAButton {
  label: string;
  href: string;
  icon?: LucideIcon | null;
  variant?: 'primary' | 'secondary';
}

export interface SectionHeader {
  title: string;
  description: string;
  badge?: {
    icon: LucideIcon;
    text: string;
  };
}

export interface IconItem {
  icon: LucideIcon;
  text?: string;
  label?: string;
  value?: string;
}

// ============================================================
// Site 데이터
// ============================================================

export interface ContactInfo {
  phone: {
    number: string;
    display: string;
    hours?: string;
  };
  email: {
    address: string;
    display: string;
  };
  address: string;
  locationDetail?: string;
  kakaoTalk: {
    url: string;
    id: string;
  };
}

export interface BusinessHour {
  day?: string;
  label?: string;
  hours: string;
}

// ============================================================
// Hero 섹션
// ============================================================

export interface HeroData {
  badge: {
    icon: LucideIcon;
    text: string;
  };
  heading: {
    line1: string;
    line2: string;
  };
  description: string;
  ctaButtons: CTAButton[];
  trustHighlights: IconItem[];
  heroImage: {
    url: string;
    alt: string;
  };
}

// ============================================================
// Services 섹션
// ============================================================

export interface ServiceItem {
  icon: LucideIcon;
  title: string;
  description: string;
  duration: string;
}

export interface ServicesOverviewData {
  sectionHeader: SectionHeader;
  services: ServiceItem[];
  cta: {
    text: string;
    href: string;
  };
}

export interface ServiceDetailItem {
  name: string;
  benefit: string;
  target: string;
  duration: string;
  highlight?: string;
}

export interface ServiceCategory {
  category: string;
  services: ServiceDetailItem[];
}

export interface ServiceDetailsData {
  sectionHeader: SectionHeader;
  labels: {
    benefit: string;
    target: string;
    duration: string;
  };
  categories: ServiceCategory[];
  cta: {
    text: string;
    href: string;
  };
}

// ============================================================
// Gallery 섹션
// ============================================================

export interface GalleryImage {
  url: string;
  alt: string;
  category: string;
}

export interface GalleryData {
  sectionHeader: SectionHeader;
  images: GalleryImage[];
}

// ============================================================
// About 섹션
// ============================================================

export interface AboutData {
  sectionHeader: SectionHeader;
  brandStory: {
    title: string;
    paragraphs: string[];
    stats: IconItem[];
  };
  director: {
    name: string;
    position: string;
    image: string;
    bio: string;
    credentials: string[];
  };
  values: {
    icon: LucideIcon;
    title: string;
    description: string;
  }[];
}

// ============================================================
// Testimonials 섹션
// ============================================================

export interface TestimonialItem {
  name: string;
  service: string;
  rating: number;
  comment: string;
  date: string;
}

export interface TestimonialsData {
  sectionHeader: SectionHeader;
  testimonials: TestimonialItem[];
  cta: {
    message: string;
    buttonText: string;
    buttonHref: string;
  };
}

// ============================================================
// FAQ 섹션
// ============================================================

export interface FAQItem {
  question: string;
  answer: string;
}

export interface FAQData {
  sectionHeader: SectionHeader;
  faqs: FAQItem[];
  cta: {
    message: string;
    linkText: string;
    linkHref: string;
  };
}

// ============================================================
// Contact 섹션
// ============================================================

export interface TransportationItem {
  label: string;
  info: string;
}

export interface ContactData {
  sectionHeader: SectionHeader;
  labels: {
    location: string;
    businessHours: string;
    contactMethods: string;
    emailLabel: string;
    kakaoLabel: string;
    googleMaps: string;
    naverMaps: string;
    reservationNoticeLabel: string;
  };
  address: string;
  locationDetail: string;
  phone: {
    number: string;
    display: string;
    hours: string;
  };
  email: {
    address: string;
    display: string;
  };
  kakaoTalk: {
    url: string;
    id: string;
  };
  businessHours: BusinessHour[];
  closedDay: string;
  transportation: TransportationItem[];
  mapEmbed: string;
  googleMapsUrl: string;
  naverMapsUrl: string;
  reservationNotice: string;
  cta: {
    title: string;
    description: string;
    phoneButtonLabel: string;
    kakaoButtonLabel: string;
  };
}

// ============================================================
// Footer 섹션
// ============================================================

export interface SocialLink {
  platform: string;
  url: string;
  icon: LucideIcon;
}

export interface FooterData {
  brand: {
    name: string;
    tagline: string;
  };
  socialLinks: SocialLink[];
  copyright: string;
}