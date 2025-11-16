
import React from 'react';
import Header from './components/Header';
import HeroSection from './components/sections/HeroSection';
import ProblemSection from './components/sections/ProblemSection';
import SolutionSection from './components/sections/SolutionSection';
import CourseBreakdownSection from './components/sections/CourseBreakdownSection';
import InstructorBioSection from './components/sections/InstructorBioSection';
import SocialProofSection from './components/sections/SocialProofSection';
import TargetAudienceSection from './components/sections/TargetAudienceSection';
import PricingSection from './components/sections/PricingSection';
import FaqSection from './components/sections/FaqSection';
import FinalCtaSection from './components/sections/FinalCtaSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-white text-brand-dark font-sans">
      <Header />
      <main>
        <HeroSection />
        <ProblemSection />
        <SolutionSection />
        <CourseBreakdownSection />
        <InstructorBioSection />
        <SocialProofSection />
        <TargetAudienceSection />
        <PricingSection />
        <FaqSection />
        <FinalCtaSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
