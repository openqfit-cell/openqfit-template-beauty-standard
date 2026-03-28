현재 열려 있는 뷰티/에스테틱 웹사이트 템플릿 파일을 기준으로, 디자인과 레이아웃은 유지하면서 “판매용 템플릿 원본” 수준으로 데이터 구조를 분리해줘.

중요 목표:
- 현재 각 컴포넌트 내부에 있는 const content 객체들을 컴포넌트 밖의 data 파일로 이동
- 컴포넌트는 표현 전용으로 최대한 단순하게 유지
- 나중에 브랜드명, 서비스명, 후기, FAQ, 연락처만 바꿔서 다른 뷰티샵/피부관리샵/네일샵 템플릿으로 쉽게 복제할 수 있게 만들기
- 전체 스타일과 UI는 유지
- 과도한 레이아웃 변경 금지
- 현재 동작을 깨뜨리지 않는 안전한 구조로 수정

반드시 아래 원칙을 적용해줘.

[1. 현재 상태 기준]
현재 프로젝트는 각 컴포넌트 내부에 아래와 같은 로컬 콘텐츠 객체가 있음:
- aboutContent
- contactInfo
- servicesContent
- testimonialsContent
- faqContent
- heroContent
- footerContent
등

이 구조를 유지하지 말고, 반드시 src/app/data 폴더로 분리해줘.

[2. 최종 목표 구조]
아래처럼 data 폴더를 만들어 콘텐츠를 컴포넌트 밖으로 이동해줘.

추천 구조:
- src/app/data/siteData.ts
- src/app/data/headerData.ts
- src/app/data/heroData.ts
- src/app/data/servicesOverviewData.ts
- src/app/data/serviceDetailsData.ts
- src/app/data/galleryData.ts
- src/app/data/aboutData.ts
- src/app/data/testimonialsData.ts
- src/app/data/faqData.ts
- src/app/data/contactData.ts
- src/app/data/footerData.ts
- src/app/data/types.ts

중요:
너무 복잡하면 일부는 통합해도 되지만, 최소한 “섹션별 data 파일” 또는 “명확한 공통 data 구조”가 되게 해줘.

[3. 컴포넌트 수정 원칙]
각 컴포넌트는 다음 원칙으로 수정해줘.
- 데이터는 컴포넌트 내부에 직접 작성하지 말 것
- data 파일에서 import 해서 사용할 것
- UI 렌더링 전용 컴포넌트처럼 단순하게 유지
- 긴 문장, 후기, FAQ, 주소, 영업시간, 버튼 문구는 모두 data에서 가져오게 수정
- icon 참조가 필요한 경우에도 data 구조와 렌더링 구조가 읽기 쉽게 유지되게 해줘

[4. 데이터 분리 대상]
반드시 아래 콘텐츠를 data로 분리해줘.

1) Header
- 브랜드명
- 네비게이션 메뉴
- CTA 버튼 문구

2) Hero
- 배지 문구
- 메인 타이틀
- 서브 설명
- 버튼 문구
- 대표 이미지 경로
- 통계/강점 문구

3) ServicesOverview
- 섹션 타이틀
- 설명
- 대표 시술 목록
- 각 시술명 / 설명 / 소요 시간
- CTA 버튼 문구

4) ServiceDetails
- 시술 카테고리 제목
- 시술 상세 항목
- 가격/설명/특징/소요 시간 등 들어 있는 모든 데이터
- CTA 문구

5) Gallery
- 섹션 제목
- 설명
- 이미지 리스트
- 이미지 alt
- 갤러리 카드 문구

6) About
- 섹션 제목/설명
- 브랜드 스토리
- 운영 경력, 만족 고객 등 수치
- 원장 정보
- 자격/경력
- 핵심 가치 항목

7) Testimonials
- 섹션 제목/설명
- 후기 리스트
- 고객명
- 서비스명
- 평점
- 후기 내용
- 날짜
- 하단 CTA 문구

8) FAQ
- 섹션 제목/설명
- 질문/답변 목록
- 하단 문의 CTA 문구

9) Contact
- 섹션 제목/설명
- 주소
- 위치 설명
- 전화번호
- 이메일
- 카카오톡
- 영업시간
- 휴무일
- 교통 안내
- 지도 URL
- 예약 안내 문구
- 문의 버튼 문구

10) Footer
- 브랜드명
- 소개 문구
- 빠른 링크 제목/항목
- 연락처 정보
- 운영시간 요약
- 소셜 링크 또는 정책 링크
- 저작권 문구

[5. 공통 siteData 정리]
아래처럼 공통값은 siteData로 분리해줘.
예:
- brandName
- phone
- email
- address
- kakaoUrl
- kakaoId
- primary CTA labels
- 공통 네비게이션
- 공통 링크
- 기본 메타용 제목/설명 값

즉, 여러 컴포넌트에서 중복 사용할 수 있는 정보는 siteData로 묶어줘.

[6. types.ts 정리]
types.ts도 함께 정리해줘.
목표:
- data 구조를 타입으로 정리
- 너무 과하게 복잡하지 않게
- 읽기 쉬운 수준으로 유지
- icon이 필요한 항목은 타입 충돌 없이 안전하게 유지

예:
- NavItem
- CTA
- SectionHeader
- ServiceItem
- TestimonialItem
- FAQItem
- BusinessHour
- ContactInfo
등

중요:
초중급 개발자가 봐도 수정하기 쉬운 타입 구조로 정리해줘.

[7. 이미지 경로]
현재 public/images 안에 이미지가 정리되어 있으니 이 구조는 유지해줘.
다만 각 이미지 경로와 alt 텍스트는 data에서 관리하게 수정해줘.

[8. 스타일/레이아웃]
디자인 변경 최소화
- 현재 뷰티/에스테틱 톤 유지
- 컬러, 여백, 카드 스타일, 섹션 순서 유지
- 반응형 구조 유지
- 레이아웃을 새로 갈아엎지 말고 데이터 구조만 정리하는 데 집중

[9. 결과물 목표]
최종 결과는 아래 조건을 만족해야 해.
- 컴포넌트 안의 로컬 content 객체 제거
- data 폴더에서 import해서 사용하는 구조
- 텍스트/링크/후기/FAQ/주소 변경 시 data 파일만 수정하면 되게 만들기
- 뷰티형 템플릿을 판매용 원본처럼 관리 가능하게 만들기
- 이후 청소형/학원형에도 같은 패턴을 적용할 수 있는 구조 만들기

[10. 작업 후 점검]
수정 후 아래 기준으로 한 번 더 정리해줘.
- 아직 컴포넌트 안에 남아 있는 하드코딩 콘텐츠가 있는지 점검
- 공통 데이터와 섹션별 데이터가 적절히 분리됐는지 점검
- 데이터 파일명과 import 경로가 읽기 쉬운지 점검
- 결과가 깨지지 않게 안전하게 마감

주의:
- 전체 레이아웃을 다시 디자인하지 말 것
- 구조 분리 중심으로 수정할 것
- 과도한 추상화 금지
- 코드가 지나치게 복잡해지지 않게 할 것
- 실제 템플릿 제작/복제에 유리한 구조로 만들 것