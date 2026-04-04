/**
 * 앱 진입 구성 파일
 * - 실제 화면을 조립하는 최상위 컴포넌트입니다.
 * - 각 섹션 컴포넌트를 순서대로 배치해 원페이지 구조를 만듭니다.
 * - 템플릿을 복제해 다른 업종으로 바꿀 때는 보통 이 파일의 섹션 순서부터 점검합니다.
 */
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
