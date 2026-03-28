import { useState, useEffect } from 'react';
import { Menu, X, Calendar } from 'lucide-react';
import { headerData } from '../data/headerData';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // 모바일 메뉴 열림 시 스크롤 방지
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    // 클린업: 컴포넌트 언마운트 시 스크롤 복원
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  return (
    <>
      {/* 모바일 메뉴 배경 Dim */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-neutral-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <div className="flex-shrink-0">
              <a href="#" className="text-xl sm:text-2xl font-semibold text-neutral-900 tracking-tight">
                {headerData.brandName}
              </a>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {headerData.navigation.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-neutral-600 hover:text-neutral-900 transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center space-x-3">
              <a
                href={headerData.ctaButtons.booking.href}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-rose-500 text-white rounded-lg hover:bg-rose-600 transition-all text-sm duration-300 hover:shadow-lg hover:-translate-y-1"
              >
                <Calendar className="w-4 h-4" />
                <span>{headerData.ctaButtons.booking.label}</span>
              </a>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-neutral-600 hover:bg-neutral-50 transition-colors"
              aria-label={mobileMenuOpen ? '메뉴 닫기' : '메뉴 열기'}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-neutral-100 bg-white">
            <nav className="px-4 py-4 space-y-1">
              {headerData.navigation.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-4 py-3 text-neutral-600 hover:bg-neutral-50 rounded-lg transition-colors"
                >
                  {item.label}
                </a>
              ))}
              <div className="pt-4 space-y-2">
                <a
                  href={headerData.ctaButtons.booking.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-center gap-2 px-4 py-3 bg-rose-500 text-white rounded-lg hover:bg-rose-600 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                >
                  <Calendar className="w-4 h-4" />
                  <span>{headerData.ctaButtons.booking.label}</span>
                </a>
              </div>
            </nav>
          </div>
        )}
      </header>
    </>
  );
}