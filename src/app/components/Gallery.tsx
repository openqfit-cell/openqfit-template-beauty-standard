/**
 * UI 섹션/기능 컴포넌트
 * - 화면 표시 전용 파일입니다.
 * - 실제 문구/이미지/링크 값은 data 폴더에서 가져오고, 이 파일은 레이아웃과 표현 방식만 담당합니다.
 * - 템플릿 재사용 시 디자인 유지와 데이터 교체를 분리하기 위해 이런 구조로 관리합니다.
 */
import { galleryData } from '../data/data';
import { AnimatedSection } from './AnimatedSection';

export function Gallery() {
  return (
    <AnimatedSection id="gallery" delay={0.05} className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl text-neutral-900 mb-4">
            {galleryData.sectionHeader.title}
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            {galleryData.sectionHeader.description}
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6">
          {galleryData.images.map((image, index) => (
            <div
              key={index}
              className="group relative aspect-square rounded-xl overflow-hidden bg-neutral-100"
            >
              <img
                src={image.url}
                alt={image.alt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-70 lg:opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="inline-block px-3 py-1 bg-white/90 text-neutral-900 text-sm rounded-full">
                    {image.category}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}