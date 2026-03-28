import { MapPin, Phone, Clock, MessageCircle, Mail } from 'lucide-react';
import { contactData } from '../data/contactData';
import { AnimatedSection } from './AnimatedSection';

export function Contact() {
  return (
    <AnimatedSection id="contact" delay={0.05} className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl text-neutral-900 mb-4">
            {contactData.sectionHeader.title}
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            {contactData.sectionHeader.description}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Information */}
          <div className="space-y-8">
            {/* Location */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-rose-50 rounded-xl flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-rose-500" />
                </div>
                <h3 className="text-xl text-neutral-900">{contactData.labels.location}</h3>
              </div>
              <div className="pl-16 space-y-3">
                <div>
                  <p className="text-base text-neutral-900">{contactData.address}</p>
                  <p className="text-sm text-neutral-500 mt-1">{contactData.locationDetail}</p>
                </div>
                <div className="pt-2 space-y-1.5">
                  {contactData.transportation.map((item, index) => (
                    <div key={index} className="flex items-center gap-2 text-sm text-neutral-600">
                      <div className="w-1.5 h-1.5 rounded-full bg-rose-500 flex-shrink-0"></div>
                      <span className="text-neutral-700">{item.label}:</span>
                      <span>{item.info}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Business Hours */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-rose-50 rounded-xl flex items-center justify-center">
                  <Clock className="w-6 h-6 text-rose-500" />
                </div>
                <h3 className="text-xl text-neutral-900">{contactData.labels.businessHours}</h3>
              </div>
              <div className="pl-16 space-y-2.5">
                {contactData.businessHours.map((item, index) => (
                  <div key={index} className="flex justify-between text-neutral-700">
                    <span className="text-neutral-600">{item.day}</span>
                    <span className="font-medium">{item.hours}</span>
                  </div>
                ))}
                <p className="text-sm text-neutral-500 pt-2 border-t border-neutral-200 mt-3">
                  * {contactData.closedDay}
                </p>
              </div>
            </div>

            {/* Contact Methods */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-rose-50 rounded-xl flex items-center justify-center">
                  <Phone className="w-6 h-6 text-rose-500" />
                </div>
                <h3 className="text-xl text-neutral-900">{contactData.labels.contactMethods}</h3>
              </div>
              <div className="pl-16 space-y-3">
                {/* Phone */}
                <a
                  href={`tel:${contactData.phone.number}`}
                  className="flex items-center gap-3 text-neutral-600 hover:text-rose-500 transition-colors group"
                >
                  <div className="w-9 h-9 bg-neutral-50 group-hover:bg-rose-50 rounded-lg flex items-center justify-center transition-colors">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-sm text-neutral-900">{contactData.phone.display}</span>
                    <span className="text-xs text-neutral-500">{contactData.phone.hours}</span>
                  </div>
                </a>

                {/* Email */}
                <a
                  href={`mailto:${contactData.email.address}`}
                  className="flex items-center gap-3 text-neutral-600 hover:text-rose-500 transition-colors group"
                >
                  <div className="w-9 h-9 bg-neutral-50 group-hover:bg-rose-50 rounded-lg flex items-center justify-center transition-colors">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-sm text-neutral-900">{contactData.email.display}</span>
                    <span className="text-xs text-neutral-500">{contactData.labels.emailLabel}</span>
                  </div>
                </a>

                {/* KakaoTalk */}
                <a
                  href={contactData.kakaoTalk.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-neutral-600 hover:text-rose-500 transition-colors group"
                >
                  <div className="w-9 h-9 bg-neutral-50 group-hover:bg-rose-50 rounded-lg flex items-center justify-center transition-colors">
                    <MessageCircle className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-sm text-neutral-900">{contactData.labels.kakaoLabel}</span>
                    <span className="text-xs text-neutral-500">ID: {contactData.kakaoTalk.id}</span>
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* Map and CTA */}
          <div className="space-y-6">
            {/* Map Embed */}
            <div className="w-full aspect-[4/3] rounded-2xl overflow-hidden border border-neutral-200 bg-neutral-100">
              <iframe
                src={contactData.mapEmbed}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Business Location Map"
              ></iframe>
            </div>

            {/* Map Actions */}
            <div className="grid grid-cols-2 gap-3">
              <a
                href={contactData.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-4 py-3 bg-white text-neutral-700 border border-neutral-300 rounded-xl hover:bg-neutral-50 hover:border-neutral-400 transition-colors"
              >
                <MapPin className="w-4 h-4" />
                <span className="text-sm">{contactData.labels.googleMaps}</span>
              </a>
              <a
                href={contactData.naverMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-4 py-3 bg-white text-neutral-700 border border-neutral-300 rounded-xl hover:bg-neutral-50 hover:border-neutral-400 transition-colors"
              >
                <MapPin className="w-4 h-4" />
                <span className="text-sm">{contactData.labels.naverMaps}</span>
              </a>
            </div>

            {/* Quick Contact CTA */}
            <div className="bg-gradient-to-br from-rose-500 to-rose-600 rounded-2xl p-8 text-white">
              <h4 className="text-2xl mb-2">{contactData.cta.title}</h4>
              <p className="text-rose-50 mb-6 whitespace-pre-line">
                {contactData.cta.description}
              </p>
              <div className="space-y-3">
                <a
                  href={`tel:${contactData.phone.number}`}
                  className="flex items-center justify-center gap-2 w-full px-6 py-3.5 bg-white text-rose-500 rounded-xl hover:bg-rose-50 transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  <span>{contactData.cta.phoneButtonLabel}</span>
                </a>
                <a
                  href={contactData.kakaoTalk.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full px-6 py-3.5 bg-white/10 backdrop-blur text-white border border-white/50 rounded-xl hover:bg-white/30 transition-colors"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>{contactData.cta.kakaoButtonLabel}</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Notice */}
        <div className="mt-12 p-6 bg-neutral-50 rounded-xl border border-neutral-200">
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center flex-shrink-0">
              <MapPin className="w-5 h-5 text-rose-500" />
            </div>
            <div className="text-sm text-neutral-600">
              <p className="mb-0">
                <strong className="text-neutral-900">{contactData.labels.reservationNoticeLabel}</strong> {contactData.reservationNotice}
              </p>
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}