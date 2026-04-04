/**
 * 데이터 타입 정의 파일
 * - data.ts 안에서 사용하는 객체 구조를 타입으로 고정합니다.
 * - 고객 데이터가 잘못된 형태로 들어오는 것을 줄이고, Cursor/IDE 자동완성을 돕습니다.
 * - 자동화 파이프라인에서 JSON → TS 변환 시에도 기준 스키마 역할을 합니다.
 */
import { LucideIcon } from 'lucide-react';

// ============================================================
// 공통 타입
// ============================================================

// 헤더/푸터처럼 단순 링크 배열에 사용하는 기본 네비게이션 타입
export interface NavItem {
  label: string;
  href: string;
}

// 버튼 문구, 이동 링크, 아이콘, 버튼 성격(primary/secondary)을 함께 관리하는 타입
export interface CTAButton {
  label: string;
  href: string;
  icon?: LucideIcon | null;
  variant?: 'primary' | 'secondary';
}

// 각 섹션 상단의 공통 제목 구조
// title, description, badge 조합을 통일해 반복 UI를 쉽게 구성합니다.
export interface SectionHeader {
  title: string;
  description: string;
  badge?: {
    icon: LucideIcon;
    text: string;
  };
}

// 아이콘과 함께 표시되는 짧은 정보 묶음 타입
// 신뢰 포인트, 통계, 장점 카드 등에 폭넓게 재사용됩니다.
export interface IconItem {
  icon: LucideIcon;
  text?: string;
  label?: string;
  value?: string;
}

// ============================================================
// Site 데이터
// ============================================================

// 사이트 공통 연락처 타입
// Header, Contact, Footer 등에서 반복 참조되는 핵심 구조입니다.
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

// 영업시간 한 줄 데이터 타입
// 단순 문자열이 아니라 day/label 확장 가능성을 고려해 객체로 설계했습니다.
export interface BusinessHour {
  day?: string;
  label?: string;
  hours: string;
}

// ============================================================
// Hero 섹션
// ============================================================

// 히어로 섹션 전용 데이터 타입
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

// 대표 서비스 카드 1개에 대한 타입
export interface ServiceItem {
  icon: LucideIcon;
  title: string;
  description: string;
  duration: string;
}

// 대표 서비스 섹션 전체 타입
export interface ServicesOverviewData {
  sectionHeader: SectionHeader;
  services: ServiceItem[];
  cta: {
    text: string;
    href: string;
  };
}

// 상세 서비스 카드 1개에 대한 타입
export interface ServiceDetailItem {
  name: string;
  benefit: string;
  target: string;
  duration: string;
  highlight?: string;
}

// 상세 서비스 내 카테고리 묶음 타입
export interface ServiceCategory {
  category: string;
  services: ServiceDetailItem[];
}

// 상세 서비스 섹션 전체 타입
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

// 갤러리 이미지 1개에 대한 타입
export interface GalleryImage {
  url: string;
  alt: string;
  category: string;
}

// 갤러리 섹션 전체 타입
export interface GalleryData {
  sectionHeader: SectionHeader;
  images: GalleryImage[];
}

// ============================================================
// About 섹션
// ============================================================

// 소개 섹션 전체 타입
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

// 후기 카드 1개에 대한 타입
export interface TestimonialItem {
  name: string;
  service: string;
  rating: number;
  comment: string;
  date: string;
}

// 후기 섹션 전체 타입
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

// FAQ 질문/답변 1개 타입
export interface FAQItem {
  question: string;
  answer: string;
}

// FAQ 섹션 전체 타입
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

// 문의 섹션 전체 타입
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

// 푸터 섹션 전체 타입
export interface FooterData {
  brand: {
    name: string;
    tagline: string;
  };
  socialLinks: SocialLink[];
  copyright: string;
}