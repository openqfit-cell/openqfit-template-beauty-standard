import { MapPin, Phone, Mail } from 'lucide-react';
import { footerData } from '../data/footerData';

export function Footer() {
  return (
    <footer className="bg-neutral-900 text-neutral-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-2xl text-white mb-4">{footerData.brand.name}</h3>
            <p className="text-sm text-neutral-400 leading-relaxed mb-4 whitespace-pre-line">
              {footerData.brand.tagline}
            </p>
            {/* Social Links */}
            <div className="flex items-center gap-3">
              {footerData.socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.url}
                    className="w-9 h-9 bg-neutral-800 hover:bg-neutral-700 rounded-lg flex items-center justify-center transition-colors"
                    aria-label={social.platform}
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white mb-4">{footerData.labels.navigation}</h4>
            <ul className="space-y-2 text-sm">
              {footerData.navigation.map((item, index) => (
                <li key={index}>
                  <a href={item.href} className="hover:text-white transition-colors">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white mb-4">{footerData.labels.services}</h4>
            <ul className="space-y-2 text-sm">
              {footerData.services.map((service, index) => (
                <li key={index}>{service}</li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white mb-4">{footerData.labels.contact}</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" />
                <span>{footerData.contact.address}</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <a
                  href={`tel:${footerData.contact.phone.number}`}
                  className="hover:text-white transition-colors"
                >
                  {footerData.contact.phone.display}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <a
                  href={`mailto:${footerData.contact.email.address}`}
                  className="hover:text-white transition-colors"
                >
                  {footerData.contact.email.display}
                </a>
              </li>
            </ul>
            <div className="mt-4 text-sm">
              <p className="text-neutral-400">{footerData.labels.businessHours}</p>
              {footerData.contact.businessHours.map((item, index) => (
                <p key={index} className="text-neutral-300">
                  {item.label} {item.hours}
                </p>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-neutral-800">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-neutral-500">
            <div>
              <p>{footerData.copyright}</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}