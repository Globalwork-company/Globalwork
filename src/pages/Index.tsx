
import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import JobCategories from '@/components/JobCategories';
import FeaturedJobs from '@/components/FeaturedJobs';
import HowItWorks from '@/components/HowItWorks';
import Testimonials from '@/components/Testimonials';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <JobCategories />
      <FeaturedJobs />
      <HowItWorks />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Index;
