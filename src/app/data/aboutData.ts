import { Award, Heart, Clock } from 'lucide-react';
import { AboutData } from './types';

export const aboutData: AboutData = {
  sectionHeader: {
    title: '살롱 소개',
    description: '고객님의 아름다움을 위해 최선을 다하는 전문가와 함께하세요',
  },
  brandStory: {
    title: 'La Belle 이야기',
    paragraphs: [
      'La Belle은 2014년부터 강남에서 프리미엄 뷰티 서비스를 제공해온 전문 살롱입니다. 고객 한 분 한 분의 피부와 스타일을 세심하게 살피며, 편안하고 만족스러운 시간을 제공하는 것이 저희의 목표입니다.',
      '10년 이상의 경력을 바탕으로 한 전문 기술과 정성스러운 케어로 많은 고객님께 신뢰받고 있습니다.',
    ],
    stats: [
      { icon: Award, value: '10년+', label: '운영 경력' },
      { icon: Heart, value: '5000+', label: '만족 고객' },
    ],
  },
  director: {
    name: '김수진 원장',
    position: '대표 원장',
    image: '/images/director_img.jpg',
    bio: '피부 관리, 헤어, 네일 전문 교육을 이수하고 10년 이상 현장에서 고객님을 만나온 전문가입니다.',
    credentials: [
      '피부 관리사 자격증',
      '미용사 (일반) 자격증',
      '네일 아트 전문가 과정 수료',
    ],
  },
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
