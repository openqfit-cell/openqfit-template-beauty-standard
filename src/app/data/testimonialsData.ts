import { TestimonialsData } from './types';

export const testimonialsData: TestimonialsData = {
  sectionHeader: {
    title: '고객 후기',
    description: 'La Belle을 이용하신 고객님들의 생생한 후기를 만나보세요',
  },
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
