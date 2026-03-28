# 뷰티 업종 템플릿 - 데이터 가이드

이 폴더는 뷰티 업종 웹사이트 템플릿의 모든 콘텐츠 데이터를 관리합니다.

## 📁 파일 구조

```
/src/app/data/
├── types.ts                    # TypeScript 타입 정의
├── siteData.ts                # 공통 데이터 (브랜드명, 연락처, 네비게이션)
├── headerData.ts              # 헤더 데이터
├── heroData.ts                # 히어로 섹션 데이터
├── servicesOverviewData.ts    # 서비스 개요 데이터
├── serviceDetailsData.ts      # 서비스 상세 데이터
├── galleryData.ts             # 갤러리 이미지 데이터
├── aboutData.ts               # 소개 섹션 데이터
├── testimonialsData.ts        # 고객 후기 데이터
├── faqData.ts                 # FAQ 데이터
├── contactData.ts             # 연락처 및 위치 정보
└── footerData.ts              # 푸터 데이터
```

## 🎯 템플릿 복제 방법

새로운 뷰티샵/피부관리샵/네일샵 사이트를 만들 때:

### 1단계: 공통 데이터 수정 (`siteData.ts`)
```typescript
export const brandName = '새로운 샵 이름';

export const contactInfo = {
  phone: {
    number: '새-전화번호',
    display: '새-전화번호',
    hours: '평일 10:00-20:00',
  },
  email: {
    address: '새이메일@example.com',
    display: '새이메일@example.com',
  },
  address: '새 주소',
  // ...
};
```

### 2단계: 섹션별 데이터 수정
각 섹션 데이터 파일을 열어서 해당 섹션의 콘텐츠를 수정합니다.

#### 히어로 섹션 (`heroData.ts`)
- 메인 제목/부제
- 설명 문구
- 버튼 라벨
- 대표 이미지

#### 서비스 (`servicesOverviewData.ts`, `serviceDetailsData.ts`)
- 제공하는 서비스 목록
- 서비스 설명
- 소요 시간
- 가격 (선택)

#### 갤러리 (`galleryData.ts`)
- 이미지 경로 목록
- 이미지 설명 (alt)

#### 소개 (`aboutData.ts`)
- 브랜드 스토리
- 원장 정보
- 자격증/경력
- 핵심 가치

#### 후기 (`testimonialsData.ts`)
- 고객 이름
- 서비스명
- 평점
- 후기 내용

#### FAQ (`faqData.ts`)
- 자주 묻는 질문 목록
- 답변 내용

#### 연락처 (`contactData.ts`)
- 주소/위치
- 영업시간
- 교통 정보
- 지도 URL

## ⚠️ 주의사항

### 절대 수정하지 말 것
- `/src/app/components/` 폴더의 컴포넌트 파일들
- UI 레이아웃이나 스타일 관련 코드

### 수정해도 되는 것
- `/src/app/data/` 폴더의 모든 데이터 파일
- 이미지 파일 (`/public/images/`)

## 💡 팁

1. **전화번호/이메일 변경**: `siteData.ts`에서 한 번만 수정하면 전체 사이트에 자동 반영
2. **네비게이션 메뉴**: `siteData.ts`의 `mainNavigation`에서 수정
3. **영업시간**: `siteData.ts`의 `businessHours`에서 수정
4. **서비스 목록**: `siteData.ts`의 `servicesList`에서 수정

## 🔄 데이터 흐름

```
siteData.ts (공통)
    ↓
headerData.ts → Header 컴포넌트
heroData.ts → Hero 컴포넌트
servicesOverviewData.ts → ServicesOverview 컴포넌트
...
footerData.ts → Footer 컴포넌트
```

## 📝 타입 안정성

모든 데이터는 `types.ts`에 정의된 TypeScript 타입을 따릅니다.
타입 에러가 발생하면 해당 타입 정의를 확인하세요.

## 🎨 이미지 관리

- 모든 이미지는 `/public/images/` 폴더에 저장
- 데이터 파일에서는 `public/images/파일명.jpg` 형식으로 참조
- alt 텍스트는 접근성을 위해 반드시 작성

## 🚀 배포 전 체크리스트

- [ ] `siteData.ts`의 브랜드명, 연락처 업데이트
- [ ] `heroData.ts`의 메인 메시지 업데이트
- [ ] `servicesOverviewData.ts`의 서비스 목록 업데이트
- [ ] `galleryData.ts`의 이미지 경로 업데이트
- [ ] `aboutData.ts`의 브랜드 스토리 업데이트
- [ ] `testimonialsData.ts`의 후기 업데이트
- [ ] `faqData.ts`의 질문/답변 업데이트
- [ ] `contactData.ts`의 주소/지도 URL 업데이트
- [ ] `footerData.ts`의 저작권 정보 업데이트
