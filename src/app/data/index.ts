// ============================================================
// 뷰티 업종 템플릿 - 데이터 중앙 관리 파일
// ============================================================
// 이 파일은 템플릿의 모든 데이터 파일을 한 곳에서 확인할 수 있도록 합니다.
// 새로운 뷰티샵/피부관리샵/네일샵 사이트를 만들 때는
// 아래 데이터 파일들만 수정하면 됩니다.
// ============================================================

// 공통 데이터
export { brandName, contactInfo, mainNavigation, businessHours, closedDay, servicesList } from './siteData';

// 섹션별 데이터
export { headerData } from './headerData';
export { heroData } from './heroData';
export { servicesOverviewData } from './servicesOverviewData';
export { serviceDetailsData } from './serviceDetailsData';
export { galleryData } from './galleryData';
export { aboutData } from './aboutData';
export { testimonialsData } from './testimonialsData';
export { faqData } from './faqData';
export { contactData } from './contactData';
export { footerData } from './footerData';

// 타입 정의
export * from './types';
