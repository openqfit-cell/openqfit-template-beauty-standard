import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { faqData } from '../data/faqData';

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 sm:py-20 lg:py-24 bg-neutral-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl text-neutral-900 mb-4">
            {faqData.sectionHeader.title}
          </h2>
          <p className="text-lg text-neutral-600">
            {faqData.sectionHeader.description}
          </p>
        </div>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqData.faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white border border-neutral-200 rounded-xl overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-5 sm:p-6 text-left hover:bg-neutral-50 transition-colors min-h-[60px]"
              >
                <span className="text-base sm:text-lg text-neutral-900 pr-4">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-neutral-400 flex-shrink-0 transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="px-5 sm:px-6 pb-5 sm:pb-6">
                  <p className="text-sm sm:text-base text-neutral-600 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Additional Help */}
        <div className="mt-12 text-center">
          <p className="text-neutral-600 mb-4">
            {faqData.cta.message}
          </p>
          <a
            href={faqData.cta.linkHref}
            className="inline-flex items-center gap-2 text-rose-500 hover:text-rose-600 transition-colors min-h-[44px] py-2"
          >
            <span>{faqData.cta.linkText}</span>
            <span>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}