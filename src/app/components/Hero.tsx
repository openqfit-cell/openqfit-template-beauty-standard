import { heroData } from '../data/heroData';

export function Hero() {
  const BadgeIcon = heroData.badge.icon;

  return (
    <section className="relative bg-gradient-to-b from-neutral-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-12">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-rose-50 text-rose-700 rounded-full text-sm mb-6">
              <BadgeIcon className="w-4 h-4 fill-current" />
              <span>{heroData.badge.text}</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl text-neutral-900 mb-6 leading-tight">
              {heroData.heading.line1}
              <span className="text-rose-500">{heroData.heading.line2}</span>
            </h1>
            
            <p className="text-lg text-neutral-600 mb-8 leading-relaxed max-w-xl mx-auto lg:mx-0 whitespace-pre-line">
              {heroData.description}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              {heroData.ctaButtons.map((button, index) => {
                const ButtonIcon = button.icon;
                return (
                  <a
                    key={index}
                    href={button.href}
                    className={`inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl transition-colors shadow-sm min-h-[48px] ${
                      button.variant === 'primary'
                        ? 'bg-rose-500 text-white hover:bg-rose-600'
                        : 'bg-white text-neutral-700 border border-neutral-200 hover:bg-neutral-50'
                    }`}
                  >
                    {ButtonIcon && <ButtonIcon className="w-5 h-5" />}
                    <span>{button.label}</span>
                  </a>
                );
              })}
            </div>

            {/* Trust Highlights */}
            <div className="flex flex-wrap gap-6 justify-center lg:justify-start text-sm text-neutral-600">
              {heroData.trustHighlights.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div key={index} className="flex items-center gap-2">
                    <Icon className="w-5 h-5 text-rose-500" />
                    <span>{item.text}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-xl">
              <img
                src={heroData.heroImage.url}
                alt={heroData.heroImage.alt}
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-rose-100 rounded-2xl -z-10 hidden lg:block"></div>
          </div>
        </div>
      </div>
    </section>
  );
}