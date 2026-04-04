/**
 * UI 섹션/기능 컴포넌트
 * - 화면 표시 전용 파일입니다.
 * - 실제 문구/이미지/링크 값은 data 폴더에서 가져오고, 이 파일은 레이아웃과 표현 방식만 담당합니다.
 * - 템플릿 재사용 시 디자인 유지와 데이터 교체를 분리하기 위해 이런 구조로 관리합니다.
 */
import { Star, Quote } from 'lucide-react';
import { testimonialsData } from '../data/data';

export function Testimonials() {
  return (
    <section id="reviews" className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl text-neutral-900 mb-4">
            {testimonialsData.sectionHeader.title}
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            {testimonialsData.sectionHeader.description}
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {testimonialsData.testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white border border-neutral-200 rounded-2xl p-6 hover:shadow-lg transition-shadow"
            >
              {/* Quote Icon */}
              <div className="w-10 h-10 bg-rose-50 rounded-full flex items-center justify-center mb-4">
                <Quote className="w-5 h-5 text-rose-500" />
              </div>

              {/* Rating */}
              <div className="flex items-center gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                ))}
              </div>

              {/* Comment */}
              <p className="text-neutral-700 leading-relaxed mb-4">
                "{testimonial.comment}"
              </p>

              {/* Author Info */}
              <div className="flex items-center justify-between pt-4 border-t border-neutral-100">
                <div>
                  <div className="text-sm text-neutral-900 mb-0.5">{testimonial.name}</div>
                  <div className="text-xs text-neutral-500">{testimonial.service}</div>
                </div>
                <div className="text-xs text-neutral-400">{testimonial.date}</div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-neutral-600 mb-6">
            {testimonialsData.cta.message}
          </p>
          <a
            href={testimonialsData.cta.buttonHref}
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-neutral-900 text-white rounded-xl hover:bg-neutral-800 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 min-h-[48px]"
          >
            <span>{testimonialsData.cta.buttonText}</span>
            <span>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}