/**
 * UI 섹션/기능 컴포넌트
 * - 화면 표시 전용 파일입니다.
 * - 실제 문구/이미지/링크 값은 data 폴더에서 가져오고, 이 파일은 레이아웃과 표현 방식만 담당합니다.
 * - 템플릿 재사용 시 디자인 유지와 데이터 교체를 분리하기 위해 이런 구조로 관리합니다.
 */
import { MapPin, Phone, Mail } from 'lucide-react';
import { footerData } from '../data/data';

export function Footer() {
  return (
    <footer className="bg-neutral-900 text-neutral-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6 items-start mb-8 md:mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl text-white mb-2">{footerData.brand.name}</h3>
            <p className="text-sm text-neutral-400 leading-relaxed whitespace-pre-line">
              {footerData.brand.tagline}
            </p>
          </div>
          {/* Social Links */}
          <div className="flex md:justify-end gap-3">
            {footerData.socialLinks.map((social, index) => {
              const Icon = social.icon;
              return (
                <a
                  key={index}
                  href={social.url}
                  className="w-12 h-12 bg-neutral-800 hover:bg-neutral-700 rounded-lg flex items-center justify-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                  aria-label={social.platform}
                >
                  <Icon className="w-6 h-6" />
                </a>
              );
            })}
          </div>
        </div>

        {/* copyright Bar */}
        <div className="pt-8 border-t border-neutral-700">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-neutral-500">
              <p>{footerData.copyright}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}