import { NavItem, ContactInfo, BusinessHour } from './types';

// ============================================================
// 공통 사이트 데이터
// 브랜드명, 연락처, 네비게이션 등 여러 컴포넌트에서 공통으로 사용되는 데이터
// ============================================================

export const brandName = 'La Belle';

export const contactInfo: ContactInfo = {
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
};

export const mainNavigation: NavItem[] = [
  { label: '서비스', href: '#services' },
  { label: '갤러리', href: '#gallery' },
  { label: '가격', href: '#pricing' },
  { label: '소개', href: '#about' },
  { label: '후기', href: '#reviews' },
  { label: '예약/문의', href: '#contact' },
];

export const businessHours: BusinessHour[] = [
  { day: '평일', hours: '10:00 - 20:00' },
  { day: '토요일', hours: '10:00 - 19:00' },
  { day: '일요일/공휴일', hours: '예약제 운영' },
];

export const closedDay = '매주 월요일 정기 휴무';

export const servicesList = [
  '피부 관리',
  '헤어 시술',
  '네일 케어',
  '속눈썹',
  '왁싱',
  '메이크업',
];
