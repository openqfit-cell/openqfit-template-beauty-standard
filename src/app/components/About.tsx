import { Star } from 'lucide-react';
import { aboutData } from '../data/aboutData';
import { AnimatedSection } from './AnimatedSection';

export function About() {
  return (
    <AnimatedSection id="about" delay={0.05} className="py-16 sm:py-20 lg:py-24 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl text-neutral-900 mb-4">
            {aboutData.sectionHeader.title}
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            {aboutData.sectionHeader.description}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16">
          {/* Brand Story */}
          <div>
            <h3 className="text-2xl text-neutral-900 mb-6">{aboutData.brandStory.title}</h3>
            <div className="space-y-4 text-neutral-600 leading-relaxed">
              {aboutData.brandStory.paragraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-4 mt-8">
              {aboutData.brandStory.stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div key={index} className="bg-white rounded-xl p-4 border border-neutral-200 hover:shadow-md transition-shadow">
                    <div className="flex items-center gap-2 mb-2">
                      <Icon className="w-5 h-5 text-rose-500 flex-shrink-0" />
                      <span className="text-xl sm:text-2xl text-neutral-900">{stat.value}</span>
                    </div>
                    <span className="text-sm text-neutral-600">{stat.label}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Director Profile */}
          <div className="bg-white rounded-2xl p-8 border border-neutral-200 shadow-md hover:shadow-lg transition-shadow">
            <div className="flex flex-col sm:flex-row gap-6 items-start">
              <div className="flex-shrink-0">
                <div className="w-32 h-32 rounded-2xl overflow-hidden bg-neutral-100">
                  <img
                    src={aboutData.director.image}
                    alt={aboutData.director.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <div className="flex-1">
                <div className="mb-4">
                  <h4 className="text-xl text-neutral-900 mb-1">{aboutData.director.name}</h4>
                  <p className="text-sm text-neutral-500">{aboutData.director.position}</p>
                </div>

                <div className="space-y-3 text-sm text-neutral-600">
                  <p>{aboutData.director.bio}</p>
                  <div className="space-y-2 pt-2">
                    {aboutData.director.credentials.map((credential, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <Star className="w-4 h-4 text-rose-500 flex-shrink-0" />
                        <span>{credential}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="grid sm:grid-cols-3 gap-6 lg:gap-8">
          {aboutData.values.map((value, index) => {
            const Icon = value.icon;
            return (
              <div key={index} className="text-center p-6">
                <div className="w-16 h-16 bg-rose-50 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-8 h-8 text-rose-500" />
                </div>
                <h4 className="text-lg text-neutral-900 mb-2">{value.title}</h4>
                <p className="text-sm text-neutral-600 leading-relaxed">{value.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </AnimatedSection>
  );
}