
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MapPin, Clock, DollarSign } from 'lucide-react';

const FeaturedJobs = () => {
  const jobs = [
    {
      id: 1,
      title: "Farm Worker - Seasonal",
      company: "Sunrise Farms Ltd",
      location: "Ontario, Canada",
      salary: "CAD 18/hour",
      duration: "2-Year Contract",
      country: "🇨🇦",
      benefits: ["Housing Provided", "Health Insurance", "Visa Support"],
      urgent: true
    },
    {
      id: 2,
      title: "Live-in Caregiver",
      company: "Family Care Services",
      location: "Toronto, Canada",
      salary: "CAD 2,800/month",
      duration: "Permanent",
      country: "🇨🇦",
      benefits: ["Free Accommodation", "Family Benefits", "Path to PR"]
    },
    {
      id: 3,
      title: "Warehouse Associate",
      company: "Logistics Pro Inc",
      location: "Texas, USA",
      salary: "USD 15/hour",
      duration: "1-Year Contract",
      country: "🇺🇸",
      benefits: ["Health Coverage", "Overtime Pay", "Training Provided"]
    },
    {
      id: 4,
      title: "Hotel Housekeeper",
      company: "Oceanview Resort",
      location: "Florida, USA",
      salary: "USD 14/hour + Tips",
      duration: "Seasonal (6 months)",
      country: "🇺🇸",
      benefits: ["Staff Housing", "Meal Allowance", "Tips Included"],
      urgent: true
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Featured Job Opportunities
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Hand-picked opportunities with verified employers and complete visa support
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {jobs.map((job) => (
            <Card key={job.id} className="hover:shadow-xl transition-shadow duration-300 relative">
              {job.urgent && (
                <div className="absolute -top-2 -right-2 bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold animate-pulse">
                  URGENT
                </div>
              )}
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="text-2xl">{job.country}</span>
                      <h3 className="text-xl font-bold text-gray-900">{job.title}</h3>
                    </div>
                    <p className="text-gray-600 mb-2">{job.company}</p>
                    <div className="flex items-center text-gray-600 mb-2">
                      <MapPin className="h-4 w-4 mr-1" />
                      <span className="text-sm">{job.location}</span>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="flex items-center">
                    <DollarSign className="h-4 w-4 text-green-600 mr-2" />
                    <div>
                      <div className="text-sm text-gray-600">Salary</div>
                      <div className="font-semibold text-green-600">{job.salary}</div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 text-blue-600 mr-2" />
                    <div>
                      <div className="text-sm text-gray-600">Duration</div>
                      <div className="font-semibold">{job.duration}</div>
                    </div>
                  </div>
                </div>

                <div className="mb-4">
                  <div className="text-sm text-gray-600 mb-2">Benefits Include:</div>
                  <div className="flex flex-wrap gap-2">
                    {job.benefits.map((benefit, index) => (
                      <span
                        key={index}
                        className="bg-blue-50 text-blue-700 px-2 py-1 rounded-full text-xs"
                      >
                        {benefit}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex justify-end">
                  <Button className="bg-blue-900 hover:bg-blue-800" asChild>
                    <Link to={`/apply?job=${job.id}`}>Apply Now</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-10">
          <Button size="lg" variant="outline" className="border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-white" asChild>
            <Link to="/jobs">View All Jobs</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedJobs;
