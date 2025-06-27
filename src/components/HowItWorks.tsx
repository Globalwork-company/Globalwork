import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Search, Upload, CreditCard, Video, Plane, CheckCircle } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: <Search className="h-8 w-8" />,
      title: "1. Browse & Select",
      description: "Choose from verified job opportunities in Canada and USA that match your skills and preferences.",
      color: "bg-blue-100 text-blue-600"
    },
    {
      icon: <Upload className="h-8 w-8" />,
      title: "2. Submit Documents",
      description: "Upload your CV, passport copy, and relevant certificates through our secure platform.",
      color: "bg-green-100 text-green-600"
    },
    {
      icon: <CreditCard className="h-8 w-8" />,
      title: "3. Pay Application Fee",
      description: "Secure your application with our low processing fee via M-PESA, card, or mobile money.",
      color: "bg-purple-100 text-purple-600"
    },
    {
      icon: <Video className="h-8 w-8" />,
      title: "4. Interview Process",
      description: "Participate in video interviews with employers and receive guidance from our team.",
      color: "bg-orange-100 text-orange-600"
    },
    {
      icon: <CheckCircle className="h-8 w-8" />,
      title: "5. Visa & Documentation",
      description: "Get comprehensive support for work permits, visas, and all required documentation.",
      color: "bg-teal-100 text-teal-600"
    },
    {
      icon: <Plane className="h-8 w-8" />,
      title: "6. Travel & Start Work",
      description: "Receive travel assistance and orientation to begin your new career abroad successfully.",
      color: "bg-red-100 text-red-600"
    }
  ];

  return (
    <section id="how-it-works" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Your journey to working abroad simplified into 6 easy steps with full support at every stage
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step, index) => (
            <Card key={index} className="hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <CardContent className="p-6 text-center">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full ${step.color} mb-4`}>
                  {step.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-blue-900 text-white rounded-lg p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Ready to Start Your Journey?</h3>
            <p className="text-blue-100 mb-6">
              Join thousands of successful applicants who are now living and working abroad with secure jobs and competitive salaries.
            </p>
            <button className="bg-teal-500 hover:bg-teal-400 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Start Application Process
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;