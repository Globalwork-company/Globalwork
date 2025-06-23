
import React from 'react';
import { Button } from '@/components/ui/button';
import { CheckCircle, Users, Shield } from 'lucide-react';

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-teal-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Work Abroad in Canada & USA
            <span className="block text-teal-300">Start Your Journey Today!</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
            Secure verified job opportunities with visa support, competitive salaries, and comprehensive benefits. Join thousands who've successfully started their international careers.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="bg-teal-500 hover:bg-teal-400 text-white px-8 py-4 text-lg">
              Browse Jobs Now
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 text-lg">
              How It Works
            </Button>
          </div>

          {/* Trust Badges */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="flex items-center justify-center space-x-3 bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <Shield className="h-8 w-8 text-teal-300" />
              <div className="text-left">
                <div className="font-semibold">Visa Support</div>
                <div className="text-sm text-blue-200">Complete assistance</div>
              </div>
            </div>
            <div className="flex items-center justify-center space-x-3 bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <CheckCircle className="h-8 w-8 text-teal-300" />
              <div className="text-left">
                <div className="font-semibold">Verified Jobs</div>
                <div className="text-sm text-blue-200">100% legitimate</div>
              </div>
            </div>
            <div className="flex items-center justify-center space-x-3 bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <Users className="h-8 w-8 text-teal-300" />
              <div className="text-left">
                <div className="font-semibold">5,000+ Success</div>
                <div className="text-sm text-blue-200">Happy workers worldwide</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
