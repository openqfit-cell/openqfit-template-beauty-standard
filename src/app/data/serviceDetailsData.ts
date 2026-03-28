import { ServiceDetailsData } from './types';

export const serviceDetailsData: ServiceDetailsData = {
  sectionHeader: {
    title: '시술 프로그램 안내',
    description: '각 프로그램별 특징과 추천 대상을 확인하고 나에게 맞는 서비스를 선택하세요',
  },
  labels: {
    benefit: '효과',
    target: '추천',
    duration: '소요 시간',
  },
  categories: [
    {
      category: '피부 관리',
      services: [
        {
          name: '딥 클렌징',
          benefit: '모공 속 노폐물 제거 및 피부 정돈',
          target: '피지, 블랙헤드 고민',
          duration: '60분',
          highlight: '인기',
        },
        {
          name: '수분 진정 관리',
          benefit: '건조하고 민감한 피부에 수분 공급',
          target: '건조, 민감성 피부',
          duration: '75분',
        },
        {
          name: '탄력 관리',
          benefit: '피부 탄력 개선 및 결 정돈',
          target: '탄력 저하 고민',
          duration: '90분',
        },
      ],
    },
    {
      category: '헤어 시술',
      services: [
        {
          name: '컷',
          benefit: '얼굴형에 어울리는 헤어 스타일 연출',
          target: '스타일 변화',
          duration: '60분',
        },
        {
          name: '펌',
          benefit: '자연스러운 볼륨과 웨이브',
          target: '볼륨, 웨이브 연출',
          duration: '120-150분',
          highlight: '인기',
        },
        {
          name: '염색',
          benefit: '다양한 컬러 연출 및 백발 커버',
          target: '컬러 변화, 백발 염색',
          duration: '120-180분',
        },
      ],
    },
    {
      category: '네일 & 속눈썹',
      services: [
        {
          name: '젤 네일',
          benefit: '2-3주 지속되는 네일 컬러와 아트',
          target: '네일 디자인',
          duration: '60-90분',
          highlight: '인기',
        },
        {
          name: '속눈썹 연장',
          benefit: '자연스럽고 풍성한 속눈썹',
          target: '속눈썹 볼륨',
          duration: '90-120분',
        },
        {
          name: '속눈썹 펌',
          benefit: '자연스러운 컬로 또렷한 눈매',
          target: '속눈썹 컬',
          duration: '60분',
        },
      ],
    },
  ],
  cta: {
    text: '예약 문의',
    href: '#contact',
  },
};