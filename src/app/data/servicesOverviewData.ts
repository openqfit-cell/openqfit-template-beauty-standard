import { Sparkles, Scissors, HandMetal, Eye, Flower2, Sparkle } from 'lucide-react';
import { ServicesOverviewData } from './types';

export const servicesOverviewData: ServicesOverviewData = {
  sectionHeader: {
    badge: {
      icon: Sparkles,
      text: 'Premium Care',
    },
    title: '대표 시술',
    description: '전문가의 섬세한 손길로 제공하는 맞춤형 뷰티 케어 서비스',
  },
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
