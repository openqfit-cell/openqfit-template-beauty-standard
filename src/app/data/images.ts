/**
 * 이미지 전용 데이터 파일
 * - 텍스트 데이터(data.ts)와 분리하여 이미지 경로만 관리합니다.
 * - 고객이 사진만 교체하는 경우 이 파일만 수정하면 되도록 설계했습니다.
 * - 추후 Tally/Zapier/Notion 자동화 시에도 이미지 URL만 별도로 매핑하기 쉽게 만든 구조입니다.
 */
// 이미지 경로 통합 객체
// public/images 기준 경로를 넣는 방식으로 관리하며, 나중에 CDN URL로 바꿔도 같은 구조를 유지할 수 있습니다.
export const imageData = {
  // 헤더 로고 이미지
  // 브랜드 교체 시 가장 먼저 수정되는 항목입니다.
  header: {
    logo: {
      src: '/images/logo.png',
      alt: 'La Belle',
    },
  },
  // 히어로 대표 이미지
  // 첫 인상을 결정하므로 비율, 품질, 용량을 가장 신경 써서 관리하는 것이 좋습니다.
  hero: {
    main: {
      url: '/images/hero_img.jpg',
      alt: 'Beauty salon interior',
    },
  },
  // 대표자/원장 소개 이미지
  // 인물 신뢰를 보여주는 영역이므로 실제 촬영본으로 교체하면 효과가 큽니다.
  about: {
    director: {
      url: '/images/director_img.jpg',
      alt: '김수진 원장',
    },
  },
  // 갤러리 이미지 목록
  // 카드형 UI에 그대로 연결되므로 순서 자체가 화면 노출 순서라고 보면 됩니다.
  gallery: [
    {
      url: '/images/face_img.jpg',
      alt: 'Facial treatment',
      category: 'Facial',
    },
    {
      url: '/images/nail_img.jpg',
      alt: 'Nail art',
      category: 'Nail',
    },
    {
      url: '/images/hair_img.jpg',
      alt: 'Hair styling',
      category: 'Hair',
    },
    {
      url: '/images/eyelash_img.jpg',
      alt: 'Eyelash extension',
      category: 'Eyelash',
    },
    {
      url: '/images/treatmentroom_img.jpg',
      alt: 'Massage therapy',
      category: 'Body',
    },
    {
      url: '/images/naileyelash_img.jpg',
      alt: 'Beauty products',
      category: 'Products',
    },
    {
      url: '/images/interiorgallery_img.jpg',
      alt: 'Salon interior',
      category: 'Interior',
    },
    {
      url: '/images/interiorpremium_img.jpg',
      alt: 'Treatment room',
      category: 'Interior',
    },
  ],
} as const;
