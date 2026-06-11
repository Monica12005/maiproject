import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import HowItWorks from '@/components/HowItWorks';
import PowerfulTools from '@/components/PowerfulTools';
import AiAssistant from '@/components/AiAssistant';
import ExploreProjects from '@/components/ExploreProjects';
import StoneMarketplace from '@/components/StoneMarketplace';
import WhyChooseMai from '@/components/WhyChooseMai';
import OurDifference from '@/components/OurDifference';
import LatestBlog from '@/components/LatestBlog';
import Testimonials from '@/components/Testimonials';
import CallToAction from '@/components/CallToAction';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Services />
      <PowerfulTools />
      <HowItWorks />
      <ExploreProjects />
      <StoneMarketplace />
      <WhyChooseMai />
      <OurDifference />
      <LatestBlog />
      <Testimonials />
      <CallToAction />
      <Footer />
      <AiAssistant />
    </main>
  );
}
