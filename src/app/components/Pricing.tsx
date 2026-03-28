import { pricingData } from '../data/pricingData';
import { AnimatedSection } from './AnimatedSection';

export function Pricing() {
  return (
    <AnimatedSection id="pricing" delay={0.05} className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl text-neutral-900 mb-4">
            {pricingData.sectionHeader.title}
          </h2>
          <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
            {pricingData.sectionHeader.description}
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
          {pricingData.items.map((item, index) => (
            <div
              key={index}
              className={`rounded-2xl border p-6 lg:p-8 transition-shadow hover:shadow-lg ${
                item.featured ? 'border-rose-300 bg-rose-50/40' : 'border-neutral-200 bg-white'
              }`}
            >
              <div className="flex items-start justify-between gap-4 mb-5">
                <div>
                  <h3 className="text-xl text-neutral-900 mb-2">{item.category}</h3>
                  <p className="text-neutral-600 leading-relaxed">{item.description}</p>
                </div>
                {item.featured && (
                  <span className="px-3 py-1 rounded-full bg-rose-500 text-white text-xs whitespace-nowrap">
                    추천
                  </span>
                )}
              </div>

              <div className="text-3xl text-neutral-900 mb-5">{item.price}</div>

              <ul className="space-y-2.5 text-sm text-neutral-600 mb-2">
                {item.highlights.map((highlight, highlightIndex) => (
                  <li key={highlightIndex} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-rose-500 flex-shrink-0"></span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>

            </div>
          ))}
        </div>

        <div className="mt-8 p-5 bg-neutral-50 border border-neutral-200 rounded-xl text-sm text-neutral-600 leading-relaxed">
          {pricingData.notice}
        </div>

        <div className="text-center mt-8 lg:mt-8">
          <a
            href={pricingData.cta.href}
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-neutral-900 text-white rounded-xl hover:bg-neutral-800 transition-colors min-h-[56px] text-base"
          >
            <span>{pricingData.cta.text}</span>
            <span>→</span>
          </a>
        </div>

      </div>
    </AnimatedSection>
  );
}
