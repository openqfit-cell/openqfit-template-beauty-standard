import { brandName, contactInfo } from './siteData';
import { Phone, Calendar } from 'lucide-react';

export const headerData = {
  brandName,
  phoneNumber: contactInfo.phone.number,
  navigation: [
    { label: '서비스', href: '#services' },
    { label: '갤러리', href: '#gallery' },
    { label: '가격', href: '#pricing' },
    { label: '소개', href: '#about' },
    { label: '후기', href: '#reviews' },
    { label: '예약/문의', href: '#contact' },
  ],
  ctaButtons: {
    phone: {
      label: '전화 상담',
      href: `tel:${contactInfo.phone.number}`,
    },
    booking: {
      label: '예약 문의',
      href: '#contact',
      icon: Calendar,
    },
  },
};
