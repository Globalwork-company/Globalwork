
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Star, MapPin } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Wanjiku",
      location: "Toronto, Canada",
      job: "Live-in Caregiver",
      image: "/api/placeholder/80/80",
      rating: 5,
      text: "GlobalWork Pass changed my life completely! I'm now working in Toronto as a caregiver with a wonderful family. The visa process was smooth and the support team was amazing throughout.",
      flag: "🇨🇦"
    },
    {
      name: "James Mwangi",
      location: "Texas, USA", 
      job: "Warehouse Supervisor",
      image: "/api/placeholder/80/80",
      rating: 5,
      text: "I was skeptical at first, but after 18 months in Texas, I can say this is the best decision I ever made. Great salary, benefits, and my family is proud of my progress.",
      flag: "🇺🇸"
    },
    {
      name: "Grace Akinyi",
      location: "Ontario, Canada",
      job: "Farm Worker",
      image: "/api/placeholder/80/80", 
      rating: 5,
      text: "The farm work in Ontario is exactly as described. Good pay, nice accommodation, and I'm saving money to bring my family here. Thank you GlobalWork Pass!",
      flag: "🇨🇦"
    },
    {
      name: "David Ochieng",
      location: "Florida, USA",
      job: "Hotel Staff",
      image: "/api/placeholder/80/80",
      rating: 5,
      text: "Working at a beach resort in Florida has been amazing. The tips are great, I've learned so much, and the weather is perfect. Highly recommend this opportunity!",
      flag: "🇺🇸"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Success Stories
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Real people, real success stories. Join our community of international workers thriving abroad.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover bg-gray-200"
                  />
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <div>
                        <h3 className="font-bold text-gray-900">{testimonial.name}</h3>
                        <div className="flex items-center text-sm text-gray-600">
                          <span className="mr-1">{testimonial.flag}</span>
                          <MapPin className="h-3 w-3 mr-1" />
                          {testimonial.location}
                        </div>
                      </div>
                      <div className="flex">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                    </div>
                    <div className="text-sm text-blue-600 font-semibold mb-3">
                      {testimonial.job}
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      "{testimonial.text}"
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-10">
          <div className="bg-gradient-to-r from-blue-50 to-teal-50 rounded-lg p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              Be Our Next Success Story
            </h3>
            <p className="text-gray-600 mb-6">
              Over 2,000 Kenyans are already working abroad through our platform. Your turn is next!
            </p>
            <button className="bg-blue-900 hover:bg-blue-800 text-white px-8 py-3 rounded-lg font-semibold">
              Start Your Application
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
