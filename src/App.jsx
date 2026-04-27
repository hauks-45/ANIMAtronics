import CustomCursor from './components/CustomCursor'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import HowItWorksSection from './components/HowItWorksSection'
import FeatureChessSection from './components/FeatureChessSection'
import FeaturesGridSection from './components/FeaturesGridSection'
import StatsSection from './components/StatsSection'
import TestimonialsSection from './components/TestimonialsSection'
import CTAFooterSection from './components/CTAFooterSection'

export default function App() {
  return (
    <>
      <CustomCursor />
      <Navbar />
      <main>
        <HeroSection />
        <HowItWorksSection />
        <FeatureChessSection />
        <FeaturesGridSection />
        <StatsSection />
        <TestimonialsSection />
        <CTAFooterSection />
      </main>
    </>
  )
}
