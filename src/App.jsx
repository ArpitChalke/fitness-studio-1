/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import ScrollProgress from './components/ScrollProgress';
import DemoNoticeBar from './components/DemoNoticeBar';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import SectionHeader from './components/SectionHeader';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import PortfolioSection from './components/PortfolioSection';
import StatsSection from './components/StatsSection';
import TestimonialsSection from './components/TestimonialsSection';
import CTASection from './components/CTASection';
import Footer from './components/Footer';


export default function App() {
  return (
    <div className="overflow-x-hidden selection:bg-neon-green selection:text-black">
      <ScrollProgress />
      <DemoNoticeBar />
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <PortfolioSection />
      <StatsSection />
      <TestimonialsSection />
      <CTASection />
      <Footer />

      <div className="fixed top-0 left-0 w-full h-full pointer-events-none -z-10 overflow-hidden">
        <div className="absolute top-[20%] -left-20 w-96 h-96 bg-neon-green/5 blur-[150px] rounded-full" />
        <div className="absolute bottom-[20%] -right-20 w-96 h-96 bg-neon-green/5 blur-[150px] rounded-full" />
      </div>
    </div>
  );
}
