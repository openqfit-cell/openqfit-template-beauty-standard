import { Instagram, Facebook, Youtube } from 'lucide-react';
import { brandName, contactInfo, mainNavigation, servicesList } from './siteData';
import { FooterData } from './types';

export const footerData: FooterData = {
  brand: {
    name: brandName,
    tagline: '프리미엄 뷰티 케어 전문 당신의 아름다움을 완성합니다',
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
  copyright: '© 2026 La Belle. All rights reserved.',
};