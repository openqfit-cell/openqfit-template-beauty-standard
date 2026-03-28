import { servicesOverviewData } from '../data/servicesOverviewData';
import { AnimatedSection } from './AnimatedSection';

export function ServicesOverview() {
  const BadgeIcon = servicesOverviewData.sectionHeader.badge!.icon;

  return (
    <AnimatedSection id="services" delay={0.05} className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-rose-50 text-rose-700 rounded-full text-sm mb-4">
            <BadgeIcon className="w-4 h-4" />
            <span>{servicesOverviewData.sectionHeader.badge!.text}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl text-neutral-900 mb-4">
            {servicesOverviewData.sectionHeader.title}
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            {servicesOverviewData.sectionHeader.description}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {servicesOverviewData.services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group bg-white border border-neutral-200 rounded-2xl p-6 lg:p-8 hover:shadow-lg hover:border-rose-200 transition-all duration-300"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-rose-50 rounded-xl flex items-center justify-center group-hover:bg-rose-100 transition-colors">
                    <Icon className="w-6 h-6 text-rose-500" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-xl text-neutral-900 mb-1">{service.title}</h3>
                    <span className="text-sm text-neutral-500">{service.duration}</span>
                  </div>
                </div>
                <p className="text-neutral-600 leading-relaxed">{service.description}</p>
              </div>
            );
          })}
        </div>

        {/* Section CTA */}
        <div className="text-center mt-12 lg:mt-16">
          <a
            href={servicesOverviewData.cta.href}
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-neutral-900 text-white rounded-xl hover:bg-neutral-800 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 min-h-[56px] text-base"
          >
            <span>{servicesOverviewData.cta.text}</span>
            <span>→</span>
          </a>
        </div>
      </div>
    </AnimatedSection>
  );
}