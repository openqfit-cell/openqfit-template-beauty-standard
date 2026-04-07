// data.ts
import {
  Award,
  Calendar,
  Check,
  Clock,
  Eye,
  Facebook,
  Flower2,
  HandMetal,
  Heart,
  Instagram,
  MessageCircle,
  Phone,
  Scissors,
  Sparkle,
  Sparkles,
  Star,
  Youtube,
} from 'lucide-react';
import { imageData } from './images';
import {
  AboutData,
  ContactData,
  FAQData,
  FooterData,
  HeroData,
  ServicesOverviewData,
  ServiceDetailsData,
  GalleryData,
  TestimonialsData,
} from './types';

export const siteData = {
  brandName: '라움뷰티 스튜디오',
  contactInfo: {
    phone: {
      number: '02-0000-0000',
      display: '02-0000-0000',
      hours: '평일 10:00-20:00',
    },
    email: {
      address: 'hello@raumbeauty.co.kr',
      display: 'hello@raumbeauty.co.kr',
    },
    address: '서울특별시 강남구 테헤란로 000, 3층',
    locationDetail: '2호선 역삼역 도보 5분',
    kakaoTalk: {
      url: 'https://pf.kakao.com/_raumbeauty',
      id: '라움뷰티 스튜디오',
    },
  },
  businessHours: [
    { day: '평일', hours: '10:00 - 20:00' },
    { day: '토요일', hours: '10:00 - 18:00' },
    { day: '일요일', hours: '11:00 - 17:00' },
  ],
  closedDay: '공휴일은 예약 고객 우선 운영',
  map: {
    embedUrl: 'https://www.google.com/maps?q=%EC%97%AD%EC%82%BC%EC%97%AD&output=embed',
    googleMapsUrl: 'https://maps.google.com/?q=%EC%97%AD%EC%82%BC%EC%97%AD',
    naverMapsUrl: 'https://map.naver.com/p/search/%EC%97%AD%EC%82%BC%EC%97%AD',
  },
  socialLinks: {
    instagram: 'https://www.instagram.com/raumbeauty_studio',
    facebook: 'https://www.facebook.com/',
    youtube: 'https://www.youtube.com/',
  },
} as const;

export const headerData = {
  brandName: siteData.brandName,
  image: imageData.header.logo,
  phoneNumber: siteData.contactInfo.phone.number,
  navigation: [
    { label: '서비스', href: '#services' },
    { label: '갤러리', href: '#gallery' },
    { label: '가격', href: '#pricing' },
    { label: '소개', href: '#about' },
    { label: '후기', href: '#reviews' },
    { label: '예약/문의', href: '#contact' },
  ],
  ctaButtons: {
    phone: {
      label: '전화 상담',
      href: `tel:${siteData.contactInfo.phone.number}`,
      icon: Phone,
    },
    booking: {
      label: '예약 문의',
      href: '#contact',
      icon: Calendar,
    },
  },
} as const;

export const heroData: HeroData = {
  badge: {
    icon: Star,
    text: '맞춤 뷰티 케어',
  },
  heading: {
    line1: '오늘의 피부와 분위기에 맞춘',
    line2: '섬세한 뷰티 케어',
  },
  description:
    '라움뷰티 스튜디오는 피부 상태와 원하는 무드를 세심하게 살펴 맞춤형 뷰티 서비스를 제공합니다. 편안한 상담부터 마무리까지 안정감 있는 케어를 경험해보세요.',
  ctaButtons: [
    {
      label: '예약 문의',
      href: '#contact',
      icon: Calendar,
      variant: 'primary',
    },
    {
      label: '서비스 둘러보기',
      href: '#services',
      icon: null,
      variant: 'secondary',
    },
  ],
  trustHighlights: [
    { icon: Award, text: '1:1 맞춤 상담' },
    { icon: Heart, text: '편안한 케어 동선' },
    { icon: MessageCircle, text: '정기 케어 안내' },
  ],
  heroImage: imageData.hero.main,
};

export const servicesOverviewData: ServicesOverviewData = {
  sectionHeader: {
    badge: {
      icon: Sparkles,
      text: 'Beauty Care',
    },
    title: '대표 시술',
    description: '데일리 케어부터 중요한 날을 위한 집중 관리까지 목적에 맞춰 준비했습니다.',
  },
  services: [
    {
      icon: Flower2,
      title: '수분 진정 케어',
      description: '건조하고 예민해진 피부를 편안하게 정돈하는 기본 페이셜 프로그램',
      duration: '50-60분',
    },
    {
      icon: Sparkles,
      title: '브라이트닝 케어',
      description: '칙칙한 피부 톤과 거친 피부결을 맑고 깨끗한 인상으로 정리',
      duration: '60-70분',
    },
    {
      icon: Heart,
      title: '탄력 집중 관리',
      description: '피부 컨디션과 밸런스를 고려한 탄력 중심 프로그램',
      duration: '70-80분',
    },
    {
      icon: Eye,
      title: '행사 전 1회 케어',
      description: '촬영, 면접, 모임 전 피부 컨디션을 깔끔하게 정돈하는 관리',
      duration: '70-80분',
    },
    {
      icon: HandMetal,
      title: '문제성 피부 밸런스',
      description: '피지·각질·예민함을 함께 고려해 무리 없이 관리하는 프로그램',
      duration: '60분',
    },
    {
      icon: Sparkle,
      title: '정기 케어 상담',
      description: '생활 패턴과 피부 상태에 맞춘 지속 가능한 관리 루틴 제안',
      duration: '30-40분',
    },
  ],
  cta: {
    text: '시술 프로그램 안내 보기',
    href: '#service-details',
  },
};

export const serviceDetailsData: ServiceDetailsData = {
  sectionHeader: {
    title: '시술 프로그램 안내',
    description: '피부 상태와 관리 목적에 따라 무리 없이 선택할 수 있도록 구성했습니다.',
  },
  labels: {
    benefit: '효과',
    target: '추천',
    duration: '소요 시간',
  },
  categories: [
    {
      category: '베이직 페이셜',
      services: [
        {
          name: '수분 밸런스 케어',
          benefit: '건조함을 완화하고 촉촉한 피부결로 정돈',
          target: '속건조와 당김이 잦은 피부',
          duration: '60분',
          highlight: '첫 방문 추천',
        },
        {
          name: '진정 릴리프 케어',
          benefit: '예민해진 피부를 편안하게 진정',
          target: '붉은기와 열감이 자주 느껴지는 피부',
          duration: '50분',
        },
        {
          name: '클리어 밸런스 케어',
          benefit: '피지와 각질을 정돈해 깔끔한 인상 연출',
          target: '번들거림과 거친 피부결이 고민인 경우',
          duration: '60분',
        },
      ],
    },
    {
      category: '집중 프로그램',
      services: [
        {
          name: '브라이트닝 케어',
          benefit: '칙칙한 인상을 맑고 화사하게 정돈',
          target: '피부 톤이 고르지 않아 보이는 경우',
          duration: '70분',
          highlight: '인기',
        },
        {
          name: '탄력 리프레시 케어',
          benefit: '정돈되고 탄탄한 인상 연출',
          target: '탄력 저하가 고민인 경우',
          duration: '80분',
        },
        {
          name: '윤광 컨디셔닝 케어',
          benefit: '매끈하고 자연스러운 윤기 표현',
          target: '행사나 촬영 전 컨디션 관리가 필요한 경우',
          duration: '80분',
        },
      ],
    },
    {
      category: '스페셜 케어',
      services: [
        {
          name: '웨딩 전 피부 관리',
          benefit: '톤·결·진정을 균형 있게 케어',
          target: '예식 전 피부 컨디션을 정리하고 싶은 고객',
          duration: '90분',
          highlight: '예약 선호',
        },
        {
          name: '행사 전 1회 집중 관리',
          benefit: '짧은 시간 안에 피부 컨디션을 정돈',
          target: '면접, 촬영, 중요한 일정 전 관리가 필요한 경우',
          duration: '70분',
        },
        {
          name: '정기 케어 패키지 상담',
          benefit: '생활 패턴에 맞춘 관리 루틴 제안',
          target: '꾸준한 케어가 필요한 고객',
          duration: '40분',
        },
      ],
    },
  ],
  cta: {
    text: '예약 문의',
    href: '#contact',
  },
};

export const galleryData: GalleryData = {
  sectionHeader: {
    title: '갤러리',
    description: '공간의 분위기와 관리 무드를 미리 확인해보세요.',
  },
  images: [...imageData.gallery],
};

export const pricingData = {
  sectionHeader: {
    title: '대표 가격 안내',
    description:
      '자주 찾는 프로그램 기준의 대표 가격입니다. 정확한 비용은 피부 상태와 관리 방향에 따라 상담 후 안내드립니다.',
  },
  items: [
    {
      category: '베이직 케어',
      price: '79,000원',
      description: '수분·진정 중심의 기본 페이셜 프로그램',
      highlights: ['맞춤 상담 포함', '부담 없는 데일리 케어'],
    },
    {
      category: '집중 케어',
      price: '119,000원',
      description: '브라이트닝 또는 탄력 중심의 집중 관리',
      highlights: ['피부 상태별 프로그램 선택', '중요한 일정 전 추천'],
      featured: true,
    },
    {
      category: '스페셜 케어',
      price: '159,000원',
      description: '행사 전 컨디션 정리에 적합한 프리미엄 프로그램',
      highlights: ['충분한 관리 시간', '정돈된 피부결 연출'],
    },
  ],
  notice:
    '예약 시간과 현재 피부 상태에 따라 추천 프로그램과 금액이 달라질 수 있습니다. 첫 방문 고객은 상담 후 가장 적합한 케어로 안내해드립니다.',
  cta: {
    text: '가격 상담 문의',
    href: '#contact',
  },
} as const;

export const reservationGuideData = {
  sectionHeader: {
    title: '예약 안내',
    description: '처음 방문하시는 분도 편하게 예약하실 수 있도록 과정을 간단히 안내드립니다.',
  },
  steps: [
    {
      title: '문의 남기기',
      description: '전화 또는 카카오톡으로 원하는 날짜와 기본 고민을 남겨주세요.',
    },
    {
      title: '상담 및 프로그램 추천',
      description: '피부 상태와 일정에 맞춰 적합한 프로그램을 안내해드립니다.',
    },
    {
      title: '예약 확정',
      description: '시간 조율 후 예약 내용을 확인해드리며 방문 전 안내를 전달합니다.',
    },
    {
      title: '방문 및 케어',
      description: '당일 컨디션을 다시 확인한 뒤 편안하게 케어를 진행합니다.',
    },
  ],
  tips: [
    '첫 방문 시에는 예약 시간보다 5~10분 정도 여유 있게 도착해주시면 상담이 원활합니다.',
    '민감한 피부 상태이거나 최근 시술 이력이 있다면 사전에 알려주세요.',
    '일정 변경이 필요한 경우 다른 예약 고객을 위해 미리 연락 부탁드립니다.',
  ],
} as const;

export const aboutData: AboutData = {
  sectionHeader: {
    title: '스튜디오 소개',
    description: '편안한 분위기 속에서 필요한 케어를 정확하게 제안합니다.',
  },
  brandStory: {
    title: '라움뷰티 스튜디오 이야기',
    paragraphs: [
      '라움뷰티 스튜디오는 과한 권유보다 현재 피부 상태에 맞는 관리가 중요하다고 생각합니다. 처음 방문하는 고객도 부담 없이 상담받고 필요한 프로그램을 차분하게 선택할 수 있도록 안내합니다.',
      '공간의 편안함과 케어의 안정감을 함께 생각하며, 한 번의 관리보다 꾸준히 이어갈 수 있는 실용적인 뷰티 루틴을 제안합니다.',
    ],
    stats: [
      { icon: Award, value: '1:1', label: '맞춤 상담' },
      { icon: Heart, value: 'Care', label: '편안한 케어 경험' },
    ],
  },
  director: {
    name: '김라움',
    position: '대표 원장',
    image: imageData.about.director.url,
    bio: '고객의 피부 컨디션과 라이프스타일을 함께 고려해 무리 없는 관리 방향을 제안합니다. 편안한 상담과 섬세한 케어로 다시 찾고 싶은 경험을 만드는 것을 중요하게 생각합니다.',
    credentials: [
      '뷰티·스킨케어 실무 경력',
      '맞춤형 피부 상담 및 케어 운영',
      '정기 고객 관리 프로그램 기획',
    ],
  },
  values: [
    {
      icon: Heart,
      title: '신뢰 중심 상담',
      description: '현재 상태에 맞는 관리만 정직하게 제안합니다.',
    },
    {
      icon: Award,
      title: '섬세한 전문성',
      description: '작은 피부 변화까지 살피며 안정감 있게 케어합니다.',
    },
    {
      icon: Clock,
      title: '편안한 방문 경험',
      description: '부담 없는 분위기와 정돈된 동선으로 만족도를 높입니다.',
    },
  ],
};

export const testimonialsData: TestimonialsData = {
  sectionHeader: {
    title: '고객 후기',
    description: '실제 방문 고객들이 남겨주신 경험을 바탕으로 정리했습니다.',
  },
  testimonials: [
    {
      name: '박○○',
      service: '수분 밸런스 케어',
      rating: 5,
      comment: '상담이 꼼꼼해서 좋았고 관리 후 피부가 한결 편안하게 느껴졌어요.',
      date: '2026.02',
    },
    {
      name: '이○○',
      service: '브라이트닝 케어',
      rating: 5,
      comment: '중요한 일정 전에 방문했는데 피부결이 정돈된 느낌이라 만족했습니다.',
      date: '2026.01',
    },
    {
      name: '정○○',
      service: '진정 릴리프 케어',
      rating: 4,
      comment: '예민할 때 방문했는데 무리 없이 진행해주셔서 부담이 없었어요.',
      date: '2025.12',
    },
    {
      name: '최○○',
      service: '탄력 리프레시 케어',
      rating: 5,
      comment: '공간이 차분하고 설명이 세심해서 재방문하고 싶었습니다.',
      date: '2025.11',
    },
    {
      name: '한○○',
      service: '행사 전 1회 집중 관리',
      rating: 5,
      comment: '사진 촬영 전에 받았는데 피부 컨디션이 깔끔하게 정리된 느낌이었어요.',
      date: '2025.11',
    },
  ],
  cta: {
    message: '라움뷰티 스튜디오의 편안한 맞춤 케어를 직접 경험해보세요',
    buttonText: '예약 문의',
    buttonHref: '#contact',
  },
};

export const faqData: FAQData = {
  sectionHeader: {
    title: '자주 묻는 질문',
    description: '예약 전 많이 문의하시는 내용을 먼저 정리했습니다.',
  },
  faqs: [
    {
      question: '첫 방문인데 어떤 프로그램을 선택하면 좋을까요?',
      answer:
        '처음 방문하시는 경우에는 피부 상태를 먼저 확인한 뒤 수분·진정 중심의 기본 케어 또는 집중 케어를 추천드립니다.',
    },
    {
      question: '당일 예약도 가능한가요?',
      answer:
        '예약 상황에 따라 가능 여부가 달라질 수 있어 전화 또는 카카오톡으로 먼저 문의 부탁드립니다.',
    },
    {
      question: '메이크업을 하고 방문해도 되나요?',
      answer:
        '가벼운 메이크업 상태로 방문하셔도 되며, 케어 전 필요한 클렌징 과정을 안내해드립니다.',
    },
    {
      question: '중요한 일정 전에는 언제 받는 것이 좋나요?',
      answer:
        '행사 또는 촬영 일정이 있다면 보통 1~3일 전 방문을 권장드리며, 피부 상태에 따라 맞춤 안내가 가능합니다.',
    },
    {
      question: '민감한 피부도 관리받을 수 있나요?',
      answer:
        '가능합니다. 최근 시술 이력이나 예민한 반응이 있었다면 사전에 알려주시면 보다 안정적으로 상담해드립니다.',
    },
    {
      question: '주차가 가능한가요?',
      answer:
        '건물 인근 유료 주차장 이용이 가능하며, 방문 전 안내 메시지로 자세히 전달드립니다.',
    },
  ],
  cta: {
    message: '더 궁금하신 사항이 있으신가요?',
    linkText: '예약 문의',
    linkHref: '#contact',
  },
};

export const contactData: ContactData = {
  sectionHeader: {
    title: '예약 및 문의',
    description: '편하신 방법으로 문의주시면 친절하게 안내해드립니다',
  },
  labels: {
    location: '오시는 길',
    businessHours: '영업시간',
    contactMethods: '연락처',
    emailLabel: '이메일 문의',
    kakaoLabel: '카카오톡 상담',
    googleMaps: 'Google Maps',
    naverMaps: '네이버 지도',
    reservationNoticeLabel: '예약 안내:',
  },
  address: siteData.contactInfo.address,
  locationDetail: siteData.contactInfo.locationDetail || '',
  phone: {
    number: siteData.contactInfo.phone.number,
    display: siteData.contactInfo.phone.display,
    hours: siteData.contactInfo.phone.hours || '평일 10:00-20:00',
  },
  email: {
    address: siteData.contactInfo.email.address,
    display: siteData.contactInfo.email.display,
  },
  kakaoTalk: {
    url: siteData.contactInfo.kakaoTalk.url,
    id: siteData.contactInfo.kakaoTalk.id,
  },
  businessHours: [...siteData.businessHours],
  closedDay: siteData.closedDay,
  transportation: [
    { label: '지하철', info: '2호선 역삼역 도보 5분' },
    { label: '버스', info: '테헤란로 인근 버스 정류장 하차 후 도보 이동' },
    { label: '주차', info: '인근 유료 주차장 이용 가능' },
  ],
  mapEmbed: siteData.map.embedUrl,
  googleMapsUrl: siteData.map.googleMapsUrl,
  naverMapsUrl: siteData.map.naverMapsUrl,
  reservationNotice:
    '원활한 상담과 케어를 위해 사전 예약제로 운영하고 있습니다. 일정 변경이 필요한 경우 가능한 한 미리 연락 부탁드립니다.',
  cta: {
    title: '예약 문의',
    description: '편하신 시간에 맞춰 예약하세요.\n빠른 상담과 예약 안내를 도와드립니다.',
    phoneButtonLabel: '전화 예약',
    kakaoButtonLabel: '카카오톡 상담',
  },
};

export const footerData: FooterData = {
  brand: {
    name: siteData.brandName,
    tagline: '맞춤 케어로 완성하는 편안한 아름다움',
  },
  socialLinks: [
    {
      platform: 'Instagram',
      url: siteData.socialLinks.instagram,
      icon: Instagram,
    },
    {
      platform: 'Facebook',
      url: siteData.socialLinks.facebook,
      icon: Facebook,
    },
    {
      platform: 'Youtube',
      url: siteData.socialLinks.youtube,
      icon: Youtube,
    },
  ],
  copyright: '© 2026 라움뷰티 스튜디오. All rights reserved.',
};