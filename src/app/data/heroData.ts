import { Calendar, Star, Award, Heart, MessageCircle } from 'lucide-react';
import { HeroData } from './types';

export const heroData: HeroData = {
  badge: {
    icon: Star,
    text: '프리미엄 뷰티 케어',
  },
  heading: {
    line1: '당신만의 아름다움을',
    line2: '완성합니다',
  },
  description: '피부, 헤어, 네일, 속눈썹까지 한 곳에서 만나는 맞춤형 토탈 뷰티 케어. 편안하고 깨끗한 공간에서 당신만의 아름다움을 완성해드립니다.',
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
    { icon: Award, text: '10년 경력 전문가' },
    { icon: Heart, text: '1:1 맞춤 케어' },
    { icon: MessageCircle, text: '당일 예약 가능' },
  ],
  heroImage: {
    url: '/images/hero_img.jpg',
    alt: 'Beauty salon interior',
  },
};
