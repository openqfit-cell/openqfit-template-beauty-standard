import { Check, Clock, Users } from 'lucide-react';
import { serviceDetailsData } from '../data/serviceDetailsData';
import { AnimatedSection } from './AnimatedSection';

export function ServiceDetails() {
  return (
    <AnimatedSection id="service-details" delay={0.05} amount={0.05} className="py-16 sm:py-20 lg:py-24 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl text-neutral-900 mb-4">
            {serviceDetailsData.sectionHeader.title}
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            {serviceDetailsData.sectionHeader.description}
          </p>
        </div>

        {/* Service Categories */}
        <div className="space-y-12 lg:space-y-16">
          {serviceDetailsData.categories.map((category, categoryIndex) => (
            <div key={categoryIndex}>
              <h3 className="text-2xl text-neutral-900 mb-6 pb-3 border-b-2 border-rose-500">
                {category.category}
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.services.map((service, serviceIndex) => (
                  <div
                    key={serviceIndex}
                    className="bg-white rounded-xl p-6 border border-neutral-200 hover:shadow-md transition-shadow"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <h4 className="text-lg text-neutral-900">{service.name}</h4>
                      {service.highlight && (
                        <span className="px-2.5 py-1 bg-rose-50 text-rose-600 text-xs rounded-full flex-shrink-0">
                          {service.highlight}
                        </span>
                      )}
                    </div>

                    <div className="space-y-3 mb-1">
                      <div className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-rose-500 flex-shrink-0 mt-0.5" />
                        <div className="flex-1 min-w-0">
                          <span className="text-xs text-neutral-500 block">{serviceDetailsData.labels.benefit}</span>
                          <span className="text-sm text-neutral-700">{service.benefit}</span>
                        </div>
                      </div>

                      <div className="flex items-start gap-2">
                        <Users className="w-4 h-4 text-rose-500 flex-shrink-0 mt-0.5" />
                        <div className="flex-1 min-w-0">
                          <span className="text-xs text-neutral-500 block">{serviceDetailsData.labels.target}</span>
                          <span className="text-sm text-neutral-700">{service.target}</span>
                        </div>
                      </div>

                      <div className="flex items-start gap-2">
                        <Clock className="w-4 h-4 text-rose-500 flex-shrink-0 mt-0.5" />
                        <div className="flex-1 min-w-0">
                          <span className="text-xs text-neutral-500 block">{serviceDetailsData.labels.duration}</span>
                          <span className="text-sm text-neutral-700">{service.duration}</span>
                        </div>
                      </div>
                    </div>
    
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Section CTA */}
        <div className="text-center mt-12 lg:mt-16">
          <a
            href={serviceDetailsData.cta.href}
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-rose-500 text-white rounded-xl hover:bg-rose-600 transition-colors min-h-[56px] text-base shadow-sm"
          >
            <span>{serviceDetailsData.cta.text}</span>
            <span>→</span>
          </a>
        </div>
      </div>
    </AnimatedSection>
  );
}