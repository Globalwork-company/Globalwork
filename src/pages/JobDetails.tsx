
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { MapPin, Clock, DollarSign, Users, Building, CheckCircle, ArrowLeft } from 'lucide-react';

const JobDetails = () => {
  const { id } = useParams();
  
  // Mock job data - in real app, this would come from API
  const job = {
    id: 1,
    title: "Farm Worker - Seasonal",
    company: "Sunrise Farms Ltd",
    location: "Ontario, Canada",
    salary: "CAD 18/hour",
    duration: "2-Year Contract",
    country: "🇨🇦",
    benefits: ["Housing Provided", "Health Insurance", "Visa Support", "Transportation", "Meals Included"],
    description: "Join our team at Sunrise Farms, one of Ontario's leading agricultural operations. We are seeking dedicated farm workers to help with seasonal crop production including vegetables, fruits, and grain harvesting.",
    responsibilities: [
      "Plant, cultivate, and harvest crops according to seasonal schedules",
      "Operate and maintain farm equipment and machinery",
      "Monitor crop health and report any issues to supervisors",
      "Assist with irrigation and fertilization activities",
      "Maintain clean and organized work areas",
      "Follow all safety protocols and procedures"
    ],
    requirements: [
      "Physical fitness and ability to work outdoors in various weather conditions",
      "Previous agricultural experience preferred but not required",
      "Ability to work as part of a team",
      "Willingness to work flexible hours during peak seasons",
      "Basic English communication skills",
      "Clean criminal background check"
    ],
    visaSupport: [
      "Complete work permit application assistance",
      "Documentation preparation and review",
      "Interview preparation and coaching",
      "Travel arrangements and logistics support",
      "Orientation program upon arrival"
    ]
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-6">
          <Link
            to="/jobs"
            className="inline-flex items-center text-blue-600 hover:text-blue-500 mb-4"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Jobs
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <Card className="mb-6">
              <CardContent className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <span className="text-3xl">{job.country}</span>
                  <div>
                    <h1 className="text-2xl font-bold text-gray-900">{job.title}</h1>
                    <p className="text-lg text-gray-600">{job.company}</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  <div className="flex items-center">
                    <MapPin className="h-5 w-5 text-gray-400 mr-2" />
                    <div>
                      <div className="text-sm text-gray-600">Location</div>
                      <div className="font-medium">{job.location}</div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <DollarSign className="h-5 w-5 text-green-600 mr-2" />
                    <div>
                      <div className="text-sm text-gray-600">Salary</div>
                      <div className="font-medium text-green-600">{job.salary}</div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-5 w-5 text-blue-600 mr-2" />
                    <div>
                      <div className="text-sm text-gray-600">Duration</div>
                      <div className="font-medium">{job.duration}</div>
                    </div>
                  </div>
                </div>

                <div className="mb-6">
                  <h3 className="text-lg font-semibold mb-3">Job Description</h3>
                  <p className="text-gray-700 leading-relaxed">{job.description}</p>
                </div>

                <div className="mb-6">
                  <h3 className="text-lg font-semibold mb-3">Key Responsibilities</h3>
                  <ul className="space-y-2">
                    {job.responsibilities.map((item, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h3 className="text-lg font-semibold mb-3">Requirements</h3>
                  <ul className="space-y-2">
                    {job.requirements.map((item, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-blue-500 mr-2 mt-1 flex-shrink-0" />
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3">Visa & Immigration Support</h3>
                  <ul className="space-y-2">
                    {job.visaSupport.map((item, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-teal-500 mr-2 mt-1 flex-shrink-0" />
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <Card className="sticky top-8">
              <CardContent className="p-6">
                <div className="mb-6">
                  <h3 className="text-lg font-semibold mb-3">Benefits Package</h3>
                  <div className="space-y-2">
                    {job.benefits.map((benefit, index) => (
                      <div key={index} className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        <span className="text-sm text-gray-700">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-4">
                  <Button
                    asChild
                    size="lg"
                    className="w-full bg-blue-900 hover:bg-blue-800"
                  >
                    <Link to={`/apply?job=${job.id}`}>Apply for This Job</Link>
                  </Button>
                  
                  <Button
                    variant="outline"
                    size="lg"
                    className="w-full"
                  >
                    Save Job
                  </Button>
                </div>

                <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                  <div className="flex items-center mb-2">
                    <Users className="h-5 w-5 text-blue-600 mr-2" />
                    <span className="font-medium text-blue-900">Need Help?</span>
                  </div>
                  <p className="text-sm text-blue-700 mb-3">
                    Our team is here to assist you with your application
                  </p>
                  <Link
                    to="/contact"
                    className="text-sm text-blue-600 hover:text-blue-500 font-medium"
                  >
                    Contact Support →
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default JobDetails;
