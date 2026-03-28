import { reservationGuideData } from '../data/reservationGuideData';
import { AnimatedSection } from './AnimatedSection';

export function ReservationGuide() {
  return (
    <AnimatedSection delay={0.05} className="py-16 sm:py-20 lg:py-24 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16 ">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl text-neutral-900 mb-4">
            {reservationGuideData.sectionHeader.title}
          </h2>
          <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
            {reservationGuideData.sectionHeader.description}
          </p>
        </div>

        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-8 lg:gap-10 items-start">
          <div className="grid sm:grid-cols-2 gap-5 lg:gap-6">
            {reservationGuideData.steps.map((step, index) => (
              <div key={index} className="bg-white rounded-2xl border border-neutral-200 p-6 hover:shadow-md transition-shadow">
                <div className="w-10 h-10 rounded-full bg-rose-50 text-rose-500 flex items-center justify-center mb-4 text-sm">
                  {index + 1}
                </div>
                <h3 className="text-lg text-neutral-900 mb-2">{step.title}</h3>
                <p className="text-neutral-600 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-2xl border border-neutral-200 p-6 lg:p-8 hover:shadow-md transition-shadow">
            <h3 className="text-xl text-neutral-900 mb-4">예약 전 체크하면 좋은 점</h3>
            <ul className="space-y-3 text-neutral-600 leading-relaxed">
              {reservationGuideData.tips.map((tip, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-rose-500 mt-2 flex-shrink-0"></span>
                  <span>{tip}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
