
import { useEffect } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/home/HeroSection';
import ValuePropositionSection from '@/components/home/ValuePropositionSection';
import ThreePillarsSection from '@/components/home/ThreePillarsSection';
import SocialProofSection from '@/components/home/SocialProofSection';
import ProblemSolutionSection from '@/components/home/ProblemSolutionSection';
import CTASection from '@/components/home/CTASection';

const Index = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow overflow-hidden">
        <HeroSection />
        <ValuePropositionSection />
        <ThreePillarsSection />
        <SocialProofSection />
        <ProblemSolutionSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
