'use client'
import {
  Banner, CategoriesSection, FeaturedSection,
  RecommendedSection, LimitedOfferSection, HowItWorksSection
} from '@/components';

export default function Home() {
  return (
    <>
      <Banner />
      <CategoriesSection />
      <FeaturedSection />
      <RecommendedSection />
      <LimitedOfferSection />
      <HowItWorksSection />
    </>
  )
}
