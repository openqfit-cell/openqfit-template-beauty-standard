import { useState, useEffect } from 'react';
import { Menu, X, Calendar } from 'lucide-react';
import { headerData } from '../data/headerData';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  return (
    <>
      {/* 모바일 딤 */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      <header
        className={`sticky top-0 z-50 border-b border-neutral-100 transition-all duration-300 ${
          mobileMenuOpen
            ? 'bg-white backdrop-blur-[0px]'
            : 'bg-white/70 backdrop-blur-[10px] shadow-sm'
        }`}
      >
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14 lg:h-16">
            {/* Logo */}
            <button
              onClick={() => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
                setMobileMenuOpen(false);
              }}
              className="flex flex-col group cursor-pointer"
            >
              <img
                src={headerData.image.src}
                alt={headerData.image.alt}
                className="h-8 object-cover group-hover:opacity-80"
              />
            </button>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {headerData.navigation.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-neutral-600 hover:text-rose-500 transition-colors"
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
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              className="lg:hidden p-2 rounded-lg text-neutral-600 hover:text-neutral-800 hover:bg-neutral-50 transition-colors"
              aria-label={mobileMenuOpen ? '메뉴 닫기' : '메뉴 열기'}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation Overlay */}
          <div
            id="mobile-menu"
            className={`lg:hidden absolute left-0 right-0 top-full z-50 transition-all duration-300 ${
              mobileMenuOpen
                ? 'opacity-100 translate-y-0 pointer-events-auto'
                : 'opacity-0 -translate-y-2 pointer-events-none'
            }`}
          >
            <div className="border border-neutral-200 bg-white">
              <nav className="p-4 space-y-1">
                {headerData.navigation.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-center block px-4 py-3 text-neutral-700 hover:text-rose-500 hover:bg-neutral-100 rounded-lg transition-colors"
                  >
                    {item.label}
                  </a>
                ))}

                <div className="pt-4">
                  <a
                    href={headerData.ctaButtons.booking.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-center gap-2 px-4 py-3 bg-rose-500 text-white rounded-lg hover:bg-rose-600 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 shadow-sm"
                  >
                    <Calendar className="w-4 h-4" />
                    <span>{headerData.ctaButtons.booking.label}</span>
                  </a>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}