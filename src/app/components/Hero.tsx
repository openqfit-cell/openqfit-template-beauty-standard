import { heroData } from '../data/heroData';
import { AnimatedSection } from './AnimatedSection';
import { motion } from 'framer-motion';

export function Hero() {
  const BadgeIcon = heroData.badge.icon;

  return (
    <section className="relative bg-gradient-to-b from-neutral-50 to-white">
      <div className="max-w-7xl mx-auto px-0 sm:px-6 lg:px-8 py-16 sm:py-16 lg:py-12">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left px-8 sm:px-0">
            <div className="absolute inset-0 w-full h-full sm:hidden">
              <img
                src={heroData.heroImage.url}
                alt={heroData.heroImage.alt}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            {/* Gradient Overlay for Readability */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/50 sm:hidden" />
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              className="relative z-10 inline-flex items-center gap-2 px-4 py-2 bg-rose-50 text-rose-700 rounded-full text-sm mb-2">
              <BadgeIcon className="w-4 h-4 fill-current" />
              <span>{heroData.badge.text}</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="relative z-10 text-4xl sm:text-5xl lg:text-6xl text-neutral-100 sm:text-neutral-900 mb-6 leading-tight tracking-tighter"
            >
              {heroData.heading.line1} <span className="text-rose-500">{heroData.heading.line2}</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative z-10 text-lg text-neutral-300 sm:text-neutral-600 mb-8 leading-relaxed max-w-xl mx-auto lg:mx-0 whitespace-pre-line">
              {heroData.description}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="relative z-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              {heroData.ctaButtons.map((button, index) => {
                const ButtonIcon = button.icon;
                return (
                  <a
                    key={index}
                    href={button.href}
                    className={`inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl transition-all duration-300 hover:shadow-lg hover:-translate-y-1 shadow-sm min-h-[48px] ${button.variant === 'primary'
                      ? 'bg-rose-500 text-white hover:bg-rose-600'
                      : 'bg-white text-neutral-700 border border-neutral-200 hover:bg-neutral-50'
                      }`}
                  >
                    {ButtonIcon && <ButtonIcon className="w-5 h-5" />}
                    <span>{button.label}</span>
                  </a>
                );
              })}
            </motion.div>

            {/* Trust Highlights */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="relative z-10 flex flex-wrap gap-6 justify-center lg:justify-start text-sm text-neutral-100 sm:text-neutral-600">
              {heroData.trustHighlights.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div key={index} className="flex items-center gap-2">
                    <Icon className="w-5 h-5 text-rose-500" />
                    <span>{item.text}</span>
                  </div>
                );
              })}
            </motion.div>
          </div>

          {/* Hero Image */}
          <div className="relative hidden sm:block h-full">
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              whileHover={{ scale: 1.02 }} transition={{ duration: 0.3 }}
              className="aspect-[4/5] rounded-2xl overflow-hidden shadow-xl">
              <img
                src={heroData.heroImage.url}
                alt={heroData.heroImage.alt}
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>


        </div>
      </div>
    </section>
  );
}