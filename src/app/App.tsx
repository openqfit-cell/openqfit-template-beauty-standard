import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ServicesOverview } from './components/ServicesOverview';
import { ServiceDetails } from './components/ServiceDetails';
import { Gallery } from './components/Gallery';
import { Pricing } from './components/Pricing';
import { ReservationGuide } from './components/ReservationGuide';
import { About } from './components/About';
import { Testimonials } from './components/Testimonials';
import { FAQ } from './components/FAQ';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ScrollIndicator } from './components/ScrollIndicator';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <ServicesOverview />
        <ServiceDetails />
        <Gallery />
        <Pricing />
        <About />
        <Testimonials />
        <ReservationGuide />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <ScrollIndicator />
    </div>
  );
}
