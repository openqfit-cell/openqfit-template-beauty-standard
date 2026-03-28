import { Instagram, Facebook, Youtube } from 'lucide-react';
import { brandName, contactInfo, mainNavigation, servicesList } from './siteData';
import { FooterData } from './types';

export const footerData: FooterData = {
  brand: {
    name: brandName,
    tagline: '프리미엄 뷰티 케어 전문\n당신의 아름다움을 완성합니다',
  },
  labels: {
    navigation: '메뉴',
    services: '서비스',
    contact: '연락처',
    businessHours: '영업시간',
  },
  socialLinks: [
    {
      platform: 'Instagram',
      url: 'https://instagram.com/',
      icon: Instagram,
    },
    {
      platform: 'Facebook',
      url: 'https://facebook.com/',
      icon: Facebook,
    },
    {
      platform: 'Youtube',
      url: 'https://youtube.com/',
      icon: Youtube,
    },
  ],
  navigation: mainNavigation,
  services: servicesList,
  contact: {
    address: contactInfo.address,
    phone: {
      number: contactInfo.phone.number,
      display: contactInfo.phone.display,
    },
    email: {
      address: contactInfo.email.address,
      display: contactInfo.email.display,
    },
    businessHours: [
      { label: '평일', hours: '10:00 - 20:00' },
      { label: '토요일', hours: '10:00 - 19:00' },
    ],
  },
  copyright: '© 2024 La Belle. All rights reserved.',
};