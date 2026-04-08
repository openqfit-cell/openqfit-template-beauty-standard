/**
 * data.ts
 * --------------------------------------------------
 * 뷰티형 표준형 템플릿의 모든 텍스트 / 링크 / 구조 데이터를 통합 관리하는 파일입니다.
 * 
 * 이 파일을 통합형으로 관리하는 이유
 * - 데이터 파일이 여러 개로 흩어져 있을 때보다 유지보수가 훨씬 단순합니다.
 * - 고객별 복제 프로젝트를 만들 때 data.ts만 교체하면 대부분의 내용 수정이 끝납니다.
 * - 이미지 경로는 images.ts에서 별도 관리하여, 사진만 교체할 때 작업 범위를 분리합니다.
 */
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
// data.ts에서 사용하는 각 섹션별 타입을 불러옵니다.
// 이 타입 덕분에 고객 데이터가 누락되거나 형식이 어긋났을 때 바로 확인할 수 있습니다.
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

// 사이트 전체에서 공통으로 재사용되는 기본 정보입니다.
// 연락처, 주소, 지도, SNS처럼 여러 섹션이 함께 참조하는 값은 여기서 먼저 관리합니다.
export const siteData = {
  brandName: 'La Belle',
  // 연락처 원본 데이터
  // Header, Contact, Footer 등 여러 영역에서 함께 사용됩니다.
  contactInfo: {
    phone: {
      number: '02-1234-5678',
      display: '02-1234-5678',
      hours: '평일 10:00-20:00',
    },
    email: {
      address: 'contact@labelle.com',
      display: 'contact@labelle.com',
    },
    address: '서울시 강남구 테헤란로 123',
    locationDetail: '강남역 2번 출구에서 도보 5분',
    kakaoTalk: {
      url: 'https://pf.kakao.com/_example',
      id: 'labelle',
    },
  },
  // 영업시간 표기 데이터
  // 표 형태, 리스트 형태 어디서든 재사용할 수 있도록 배열로 관리합니다.
  businessHours: [
    { day: '평일', hours: '10:00 - 20:00' },
    { day: '토요일', hours: '10:00 - 19:00' },
    { day: '일요일/공휴일', hours: '예약제 운영' },
  ],
  closedDay: '매주 월요일 정기 휴무',
  // 지도 관련 링크
  // embedUrl은 페이지 내 iframe용, 외부 지도 링크는 앱/새 창 이동용입니다.
  map: {
    embedUrl:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6326.049689756841!2d126.96242809295654!3d37.55447843162196!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x356f88df6578da5d%3A0xece1c30550be71c!2z66Gv642w7JWE7Jq466CbIOyEnOyauOyXreygkA!5e0!3m2!1sko!2skr!4v1774830247191!5m2!1sko!2skr',
    googleMapsUrl: 'https://maps.app.goo.gl/wTFqeWQSzAmECxY78',
    naverMapsUrl: 'https://naver.me/FfeOlQjt',
  },
  // SNS 링크 모음
  // 실제 운영 채널 URL로 교체해서 사용합니다.
  socialLinks: {
    instagram: 'https://instagram.com/',
    facebook: 'https://facebook.com/',
    youtube: 'https://youtube.com/',
  },
} as const;

// 헤더 전용 데이터
// 공통 siteData를 참조해 중복 입력을 줄이고, 헤더에서만 필요한 표시값을 별도로 정리합니다.
export const headerData = {
  brandName: siteData.brandName,
  image: imageData.header.logo,
  phoneNumber: siteData.contactInfo.phone.number,
  // 원페이지 앵커 메뉴
  // 각 href는 실제 섹션 id와 반드시 일치해야 합니다.
  navigation: [
    { label: '서비스', href: '#services' },
    { label: '갤러리', href: '#gallery' },
    { label: '가격', href: '#pricing' },
    { label: '소개', href: '#about' },
    { label: '후기', href: '#reviews' },
    { label: '예약/문의', href: '#contact' },
  ],
  // 헤더 우측 CTA 버튼
  // 전화 연결과 예약 이동처럼 전환율에 직접 연결되는 액션입니다.
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

// 히어로 섹션 데이터
// 첫 화면에서 브랜드 인상, 핵심 메시지, 대표 행동 버튼을 담당합니다.
export const heroData: HeroData = {
  badge: {
    icon: Star,
    text: '프리미엄 뷰티 케어',
  },
  heading: {
    line1: '당신만의 아름다움을',
    line2: '완성합니다',
  },
  description:
    '피부, 헤어, 네일, 속눈썹까지 한 곳에서 만나는 맞춤형 토탈 뷰티 케어. 편안하고 깨끗한 공간에서 당신만의 아름다움을 완성해드립니다.',
  // 히어로 행동 버튼
  // primary는 가장 우선순위가 높은 행동, secondary는 보조 탐색용입니다.
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
  // 신뢰 포인트
  // 경력, 맞춤 케어, 당일 예약 등 빠르게 신뢰를 주는 핵심 문구만 배치합니다.
  trustHighlights: [
    { icon: Award, text: '10년 경력 전문가' },
    { icon: Heart, text: '1:1 맞춤 케어' },
    { icon: MessageCircle, text: '당일 예약 가능' },
  ],
  heroImage: imageData.hero.main,
};

// 대표 서비스 요약 섹션 데이터
// 사용자가 스크롤 초반에 어떤 서비스를 제공하는지 빠르게 이해하도록 돕습니다.
export const servicesOverviewData: ServicesOverviewData = {
  sectionHeader: {
    badge: {
      icon: Sparkles,
      text: 'Premium Care',
    },
    title: '대표 시술',
    description: '전문가의 섬세한 손길로 제공하는 맞춤형 뷰티 케어 서비스',
  },
  // 대표 서비스 카드 목록
  // 서비스명, 설명, 소요시간을 함께 보여줘 비교가 쉽게 구성했습니다.
  services: [
    {
      icon: Flower2,
      title: '피부 관리',
      description: '피부 타입에 맞는 클렌징, 각질 제거, 수분 공급 등 기본 케어부터 집중 관리까지',
      duration: '60-90분',
    },
    {
      icon: Scissors,
      title: '헤어 시술',
      description: '얼굴형과 헤어 스타일에 맞춘 컷, 펌, 염색 시술',
      duration: '60-180분',
    },
    {
      icon: HandMetal,
      title: '네일 케어',
      description: '기본 손톱 정리부터 젤 네일, 아트 디자인까지',
      duration: '60-90분',
    },
    {
      icon: Eye,
      title: '속눈썹',
      description: '속눈썹 연장, 펌 시술로 자연스럽고 또렷한 눈매 연출',
      duration: '60-120분',
    },
    {
      icon: Sparkles,
      title: '왁싱',
      description: '부드럽고 깨끗한 피부를 위한 전문 왁싱 케어',
      duration: '30-60분',
    },
    {
      icon: Sparkle,
      title: '메이크업',
      description: '일상 메이크업부터 특별한 날을 위한 메이크업까지',
      duration: '60-90분',
    },
  ],
  cta: {
    text: '시술 프로그램 안내 보기',
    href: '#service-details',
  },
};

// 상세 서비스 안내 데이터
// 대표 서비스보다 한 단계 더 자세한 정보와 추천 대상을 보여주는 영역입니다.
export const serviceDetailsData: ServiceDetailsData = {
  sectionHeader: {
    title: '시술 프로그램 안내',
    description: '각 프로그램별 특징과 추천 대상을 확인하고 나에게 맞는 서비스를 선택하세요',
  },
  // 카드 내부 공통 라벨 문구
  // 템플릿 전체에서 톤을 통일하기 위해 별도 필드로 분리했습니다.
  // 문의 섹션 내 표시 라벨
  // 다국어 확장이나 문구 변경 시 여기만 수정하면 전체 반영이 쉽습니다.
  labels: {
    benefit: '효과',
    target: '추천',
    duration: '소요 시간',
  },
  // 서비스 카테고리별 상세 항목
  // 업종 변경 시 이 배열 구조만 유지하면 다른 업종에도 같은 UI를 그대로 적용할 수 있습니다.
  categories: [
    {
      category: '피부 관리',
      // 대표 서비스 카드 목록
  // 서비스명, 설명, 소요시간을 함께 보여줘 비교가 쉽게 구성했습니다.
  services: [
        {
          name: '딥 클렌징',
          benefit: '모공 속 노폐물 제거 및 피부 정돈',
          target: '피지, 블랙헤드 고민',
          duration: '60분',
          highlight: '인기',
        },
        {
          name: '수분 진정 관리',
          benefit: '건조하고 민감한 피부에 수분 공급',
          target: '건조, 민감성 피부',
          duration: '75분',
        },
        {
          name: '탄력 관리',
          benefit: '피부 탄력 개선 및 결 정돈',
          target: '탄력 저하 고민',
          duration: '90분',
        },
      ],
    },
    {
      category: '헤어 시술',
      // 대표 서비스 카드 목록
  // 서비스명, 설명, 소요시간을 함께 보여줘 비교가 쉽게 구성했습니다.
  services: [
        {
          name: '컷',
          benefit: '얼굴형에 어울리는 헤어 스타일 연출',
          target: '스타일 변화',
          duration: '60분',
        },
        {
          name: '펌',
          benefit: '자연스러운 볼륨과 웨이브',
          target: '볼륨, 웨이브 연출',
          duration: '120-150분',
          highlight: '인기',
        },
        {
          name: '염색',
          benefit: '다양한 컬러 연출 및 백발 커버',
          target: '컬러 변화, 백발 염색',
          duration: '120-180분',
        },
      ],
    },
    {
      category: '네일 & 속눈썹',
      // 대표 서비스 카드 목록
  // 서비스명, 설명, 소요시간을 함께 보여줘 비교가 쉽게 구성했습니다.
  services: [
        {
          name: '젤 네일',
          benefit: '2-3주 지속되는 네일 컬러와 아트',
          target: '네일 디자인',
          duration: '60-90분',
          highlight: '인기',
        },
        {
          name: '속눈썹 연장',
          benefit: '자연스럽고 풍성한 속눈썹',
          target: '속눈썹 볼륨',
          duration: '90-120분',
        },
        {
          name: '속눈썹 펌',
          benefit: '자연스러운 컬로 또렷한 눈매',
          target: '속눈썹 컬',
          duration: '60분',
        },
      ],
    },
  ],
  cta: {
    text: '예약 문의',
    href: '#contact',
  },
};

// 갤러리 섹션 데이터
// 실제 이미지 목록은 images.ts에서 관리하고, 여기서는 섹션 제목과 연결만 담당합니다.
export const galleryData: GalleryData = {
  sectionHeader: {
    title: '갤러리',
    description: '고객님들의 만족스러운 변화와 프리미엄 공간을 만나보세요',
  },
  images: [...imageData.gallery],
};

// 가격 안내 섹션 데이터
// 대표 가격 예시를 보여주는 용도이며, 실제 운영에서는 최소 가격/대표 가격 중심으로 관리하는 것이 좋습니다.
export const pricingData = {
  sectionHeader: {
    title: '대표 가격 안내',
    description:
      '자주 찾는 프로그램 기준의 예시 가격입니다. 정확한 비용은 현재 상태와 디자인 옵션에 따라 상담 후 안내드립니다.',
  },
  // 가격 카드 목록
  // 각 카드에는 가격뿐 아니라 포함 가치와 차별 포인트를 함께 넣어 설득력을 높입니다.
  items: [
    {
      category: '피부 관리',
      price: '55,000원~',
      description: '딥 클렌징, 수분 진정, 탄력 관리 등 피부 타입별 맞춤 케어',
      highlights: ['1:1 상태 체크', '저자극 제품 사용'],
    },
    {
      category: '헤어 시술',
      price: '35,000원~',
      description: '컷, 펌, 염색 등 얼굴형과 모발 상태를 고려한 맞춤 시술',
      highlights: ['스타일 상담 포함', '시술 후 홈케어 안내'],
      featured: true,
    },
    {
      category: '네일 · 속눈썹',
      price: '45,000원~',
      description: '젤 네일, 속눈썹 펌, 연장 등 디테일 완성도를 높이는 관리',
      highlights: ['트렌드 디자인 반영', '예약 우선제 운영'],
    },
  ],
  notice:
    '예약 시간, 모발 길이, 추가 디자인 여부에 따라 금액이 달라질 수 있습니다. 첫 방문 고객은 상담 후 가장 적합한 프로그램으로 안내해드립니다.',
  cta: {
    text: '가격 상담 문의',
    href: '#contact',
  },
} as const;

// 예약 안내 섹션 데이터
// 처음 방문하는 고객이 예약 흐름을 쉽게 이해하도록 단계형 정보로 구성했습니다.
export const reservationGuideData = {
  sectionHeader: {
    title: '예약 안내',
    description: '처음 방문하시는 분도 편하게 예약하실 수 있도록 과정을 간단히 안내드립니다.',
  },
  // 예약 진행 단계
  // 상담 → 추천 → 예약 확정 → 방문 흐름으로 이어지도록 설계했습니다.
  steps: [
    {
      title: '원하시는 시술 전달',
      description: '전화 또는 카카오톡으로 원하는 시술, 날짜, 시간을 알려주세요.',
    },
    {
      title: '상태 체크 및 추천',
      description: '피부 타입, 모발 상태, 디자인 취향을 확인한 뒤 적합한 프로그램을 안내해드립니다.',
    },
    {
      title: '예약 확정',
      description: '가능 시간 확인 후 예약을 확정하고 방문 전 유의사항을 함께 전달드립니다.',
    },
    {
      title: '방문 및 맞춤 케어',
      description: '예약 시간에 맞춰 방문하시면 1:1 상담 후 편안하게 케어를 진행합니다.',
    },
  ],
  // 예약 전 확인사항
  // 취소 규정, 민감성 안내 등 실제 문의 전에 꼭 알려줘야 하는 내용을 담습니다.
  tips: [
    '당일 예약 가능 여부는 예약 현황에 따라 달라질 수 있습니다.',
    '시술 변경 또는 취소는 최소 하루 전 연락을 권장드립니다.',
    '알레르기, 민감성 피부, 이전 시술 이력은 예약 시 미리 알려주세요.',
  ],
} as const;

// 소개 섹션 데이터
// 브랜드 스토리, 운영 철학, 대표자 정보처럼 신뢰 형성에 필요한 내용을 모아둡니다.
export const aboutData: AboutData = {
  sectionHeader: {
    title: '살롱 소개',
    description: '고객님의 아름다움을 위해 최선을 다하는 전문가와 함께하세요',
  },
  // 브랜드 소개 문단
  // 너무 길게 쓰기보다 신뢰와 차별점을 바로 전달할 수 있는 2~3문단 구성이 좋습니다.
  brandStory: {
    title: 'La Belle 이야기',
    paragraphs: [
      'La Belle은 2014년부터 강남에서 프리미엄 뷰티 서비스를 제공해온 전문 살롱입니다. 고객 한 분 한 분의 피부와 스타일을 세심하게 살피며, 편안하고 만족스러운 시간을 제공하는 것이 저희의 목표입니다.',
      '10년 이상의 경력을 바탕으로 한 전문 기술과 정성스러운 케어로 많은 고객님께 신뢰받고 있습니다.',
    ],
    stats: [
      { icon: Award, value: '10년+', label: '운영 경력' },
      { icon: Heart, value: '5,000+', label: '만족 고객' },
    ],
  },
  // 대표자/원장 소개
  // 업종 특성상 사람 신뢰가 중요한 경우 매우 중요한 영역입니다.
  director: {
    name: '김수진 원장',
    position: '대표 원장',
    image: imageData.about.director.url,
    bio: '피부 관리, 헤어, 네일 전문 교육을 이수하고 10년 이상 현장에서 고객님을 만나온 전문가입니다.',
    credentials: ['피부 관리사 자격증', '미용사 (일반) 자격증', '네일 아트 전문가 과정 수료'],
  },
  // 핵심 운영 가치
  // 고객이 느끼는 차별 포인트를 짧고 명확하게 정리합니다.
  values: [
    {
      icon: Heart,
      title: '1:1 맞춤 케어',
      description: '개인별 피부 타입과 니즈에 맞는 맞춤 서비스',
    },
    {
      icon: Award,
      title: '전문 기술',
      description: '풍부한 경력과 전문 자격을 갖춘 숙련된 전문가',
    },
    {
      icon: Clock,
      title: '편안한 공간',
      description: '프라이빗하고 깔끔한 공간에서의 여유로운 시간',
    },
  ],
};

// 후기 섹션 데이터
// 실고객 후기 형태의 카드 목록으로 신뢰도를 높이는 역할을 합니다.
export const testimonialsData: TestimonialsData = {
  sectionHeader: {
    title: '고객 후기',
    description: 'La Belle을 이용하신 고객님들의 생생한 후기를 만나보세요',
  },
  // 후기 카드 목록
  // 이름, 서비스명, 평점, 코멘트, 날짜를 함께 보여주면 현실감이 높아집니다.
  testimonials: [
    {
      name: '이지은',
      service: '피부 관리',
      rating: 5,
      comment: '피부가 많이 좋아졌어요. 원장님이 세심하게 봐주셔서 믿고 맡기고 있습니다.',
      date: '2024.02',
    },
    {
      name: '박서현',
      service: '헤어 컷',
      rating: 4,
      comment: '제 얼굴형에 딱 맞는 컷을 해주셨어요. 상담도 꼼꼼하게 해주시고 결과도 만족스럽습니다.',
      date: '2024.02',
    },
    {
      name: '김민지',
      service: '속눈썹 연장',
      rating: 5,
      comment: '자연스럽고 예쁘게 해주셔서 매번 만족합니다. 지속력도 좋아요.',
      date: '2024.01',
    },
    {
      name: '정수아',
      service: '네일',
      rating: 5,
      comment: '디자인 감각이 좋으시고 꼼꼼하게 작업해주십니다. 네일이 오래가서 좋아요.',
      date: '2024.01',
    },
    {
      name: '최유진',
      service: '피부 관리',
      rating: 4,
      comment: '공간도 깨끗하고 조용해서 관리받기 좋습니다. 피부 컨디션이 좋아졌어요.',
      date: '2024.01',
    },
    {
      name: '한서연',
      service: '피부 관리',
      rating: 5,
      comment: '예민한 피부인데 자극 없이 관리받을 수 있어서 좋습니다. 피부 톤이 맑아졌어요.',
      date: '2023.12',
    },
  ],
  cta: {
    message: '많은 고객님이 만족하신 La Belle의 서비스를 경험해보세요',
    buttonText: '예약 문의',
    buttonHref: '#contact',
  },
};

// FAQ 섹션 데이터
// 예약 전 자주 묻는 질문을 미리 정리해 문의 부담을 줄입니다.
export const faqData: FAQData = {
  sectionHeader: {
    title: '자주 묻는 질문',
    description: '궁금하신 사항을 확인해보세요',
  },
  // 질문/답변 목록
  // 실제 상담에서 반복되는 질문 위주로 유지하는 것이 가장 효과적입니다.
  faqs: [
    {
      question: '예약은 어떻게 하나요?',
      answer:
        '전화(02-1234-5678) 또는 카카오톡으로 예약 가능합니다. 원하시는 시술과 날짜, 시간을 말씀해주시면 예약 가능 여부를 확인해드립니다. 당일 예약도 가능하나 사전 예약을 권장합니다.',
    },
    {
      question: '처음 방문인데 상담은 무료인가요?',
      answer: '네, 초기 상담은 무료입니다. 피부 상태나 원하시는 스타일을 상담한 후 적합한 시술을 추천해드립니다.',
    },
    {
      question: '주차 가능한가요?',
      answer: '건물 지하 주차장 이용 가능하며 2시간 무료 주차권을 제공합니다.',
    },
    {
      question: '예약 변경이나 취소는 어떻게 하나요?',
      answer: '예약 변경이나 취소는 방문 1일 전까지 연락주시면 됩니다. 당일 취소의 경우 다음 예약에 제한이 있을 수 있습니다.',
    },
    {
      question: '시술 가격은 어떻게 되나요?',
      answer:
        '대표 가격 안내 섹션에서 프로그램별 예시 가격을 확인하실 수 있으며, 정확한 금액은 현재 상태와 추가 옵션에 따라 상담 후 안내해드립니다.',
    },
    {
      question: '첫 방문 전에 준비해야 할 것이 있나요?',
      answer:
        '평소 사용 중인 제품, 알레르기 여부, 최근 시술 이력이 있다면 미리 말씀해주세요. 피부나 모발 상태에 맞춰 더 정확한 상담이 가능합니다.',
    },
    {
      question: '민감성 피부도 관리 가능한가요?',
      answer: '네, 가능합니다. 민감성 피부를 위한 저자극 제품을 사용하며, 상담 시 피부 타입과 알레르기 여부를 말씀해주시면 맞춤 케어를 제공합니다.',
    },
  ],
  cta: {
    message: '더 궁금하신 사항이 있으신가요?',
    linkText: '예약 문의',
    linkHref: '#contact',
  },
};

// 문의 섹션 데이터
// 전화, 이메일, 카카오톡, 지도, 영업시간 등 최종 전환 정보가 모이는 영역입니다.
export const contactData: ContactData = {
  sectionHeader: {
    title: '예약 및 문의',
    description: '편하신 방법으로 문의주시면 친절하게 안내해드립니다',
  },
  // 카드 내부 공통 라벨 문구
  // 템플릿 전체에서 톤을 통일하기 위해 별도 필드로 분리했습니다.
  // 문의 섹션 내 표시 라벨
  // 다국어 확장이나 문구 변경 시 여기만 수정하면 전체 반영이 쉽습니다.
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
  // 영업시간 표기 데이터
  // 표 형태, 리스트 형태 어디서든 재사용할 수 있도록 배열로 관리합니다.
  businessHours: [...siteData.businessHours],
  closedDay: siteData.closedDay,
  transportation: [
    { label: '지하철', info: '2호선, 신분당선 강남역' },
    { label: '버스', info: '146, 740, 341 강남역 정류장' },
    { label: '주차', info: '건물 지하 주차장 (2시간 무료)' },
  ],
  mapEmbed: siteData.map.embedUrl,
  googleMapsUrl: siteData.map.googleMapsUrl,
  naverMapsUrl: siteData.map.naverMapsUrl,
  reservationNotice:
    '원활한 서비스 제공을 위해 사전 예약을 권장드립니다. 당일 예약도 가능하나 예약 상황에 따라 대기 시간이 발생할 수 있습니다. 예약 시 원하시는 시술과 시간을 말씀해주세요.',
  cta: {
    title: '예약 문의',
    description: '편하신 시간에 맞춰 예약하세요.\n빠른 상담과 예약 안내를 도와드립니다.',
    phoneButtonLabel: '전화 예약',
    kakaoButtonLabel: '카카오톡 상담',
  },
};

// 푸터 데이터
// 사이트 하단에서 브랜드명, 연락처, 간단한 링크를 다시 한 번 정리합니다.
export const footerData: FooterData = {
  brand: {
    name: siteData.brandName,
    tagline: '프리미엄 뷰티 케어 전문 당신의 아름다움을 완성합니다',
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
  copyright: '© 2026 La Belle. All rights reserved.',
};
