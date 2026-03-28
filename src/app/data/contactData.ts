import { contactInfo, businessHours, closedDay } from './siteData';
import { ContactData } from './types';

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
  address: contactInfo.address,
  locationDetail: contactInfo.locationDetail || '',
  phone: {
    number: contactInfo.phone.number,
    display: contactInfo.phone.display,
    hours: contactInfo.phone.hours || '평일 10:00-20:00',
  },
  email: {
    address: contactInfo.email.address,
    display: contactInfo.email.display,
  },
  kakaoTalk: {
    url: contactInfo.kakaoTalk.url,
    id: contactInfo.kakaoTalk.id,
  },
  businessHours,
  closedDay,
  transportation: [
    { label: '지하철', info: '2호선, 신분당선 강남역' },
    { label: '버스', info: '146, 740, 341 강남역 정류장' },
    { label: '주차', info: '건물 지하 주차장 (2시간 무료)' },
  ],
  mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3165.4079294985537!2d127.02761587649893!3d37.49794197204438!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca159e9e88187%3A0x64e4f2d5d83a8378!2sGangnam%20Station!5e0!3m2!1sen!2skr!4v1234567890123!5m2!1sen!2skr',
  googleMapsUrl: 'https://map.google.com/maps?q=서울시+강남구+테헤란로+123',
  naverMapsUrl: 'https://map.naver.com/p/search/서울시 강남구 테헤란로 123',
  reservationNotice: '원활한 서비스 제공을 위해 사전 예약을 권장드립니다. 당일 예약도 가능하나 예약 상황에 따라 대기 시간이 발생할 수 있습니다. 예약 시 원하시는 시술과 시간을 말씀해주세요.',
  cta: {
    title: '예약 문의',
    description: '편하신 시간에 맞춰 예약하세요.\n빠른 상담과 예약 안내를 도와드립니다.',
    phoneButtonLabel: '전화 예약',
    kakaoButtonLabel: '카카오톡 상담',
  },
};