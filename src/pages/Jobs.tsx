
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { MapPin, Clock, DollarSign, Filter, Search } from 'lucide-react';

const Jobs = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCountry, setSelectedCountry] = useState('all');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const jobs = [
    {
      id: 1,
      title: "Farm Worker - Seasonal",
      company: "Sunrise Farms Ltd",
      location: "Ontario, Canada",
      salary: "CAD 18/hour",
      duration: "2-Year Contract",
      country: "🇨🇦",
      category: "agriculture",
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
      category: "caregiving",
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
      category: "warehouse",
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
      category: "hospitality",
      benefits: ["Staff Housing", "Meal Allowance", "Tips Included"],
      urgent: true
    },
    {
      id: 5,
      title: "Construction Worker",
      company: "BuildRight Corp",
      location: "Alberta, Canada",
      salary: "CAD 22/hour",
      duration: "18-Month Contract",
      country: "🇨🇦",
      category: "construction",
      benefits: ["Safety Training", "Health Insurance", "Overtime Available"]
    },
    {
      id: 6,
      title: "Truck Driver",
      company: "TransCanada Logistics",
      location: "British Columbia, Canada",
      salary: "CAD 25/hour",
      duration: "Permanent",
      country: "🇨🇦",
      category: "transport",
      benefits: ["Company Vehicle", "Fuel Allowance", "Insurance Coverage"]
    }
  ];

  const filteredJobs = jobs.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCountry = selectedCountry === 'all' || 
                          (selectedCountry === 'canada' && job.country === '🇨🇦') ||
                          (selectedCountry === 'usa' && job.country === '🇺🇸');
    const matchesCategory = selectedCategory === 'all' || job.category === selectedCategory;
    
    return matchesSearch && matchesCountry && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Job Opportunities</h1>
          <p className="text-xl text-gray-600">Find your perfect international career opportunity</p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search jobs..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <select
              value={selectedCountry}
              onChange={(e) => setSelectedCountry(e.target.value)}
              className="border border-gray-300 rounded-md px-3 py-2"
            >
              <option value="all">All Countries</option>
              <option value="canada">Canada</option>
              <option value="usa">USA</option>
            </select>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="border border-gray-300 rounded-md px-3 py-2"
            >
              <option value="all">All Categories</option>
              <option value="agriculture">Agriculture</option>
              <option value="caregiving">Caregiving</option>
              <option value="warehouse">Warehouse</option>
              <option value="hospitality">Hospitality</option>
              <option value="construction">Construction</option>
              <option value="transport">Transport</option>
            </select>
            <Button className="bg-blue-900 hover:bg-blue-800">
              <Filter className="h-4 w-4 mr-2" />
              Apply Filters
            </Button>
          </div>
        </div>

        {/* Job Results */}
        <div className="mb-6">
          <p className="text-gray-600">
            Showing {filteredJobs.length} job{filteredJobs.length !== 1 ? 's' : ''}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {filteredJobs.map((job) => (
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

                <div className="flex justify-between items-center">
                  <Link
                    to={`/job/${job.id}`}
                    className="text-blue-600 hover:text-blue-500 text-sm font-medium"
                  >
                    View Details
                  </Link>
                  <Button
                    asChild
                    className="bg-blue-900 hover:bg-blue-800"
                  >
                    <Link to={`/apply?job=${job.id}`}>Apply Now</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredJobs.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No jobs found matching your criteria.</p>
            <Button
              onClick={() => {
                setSearchTerm('');
                setSelectedCountry('all');
                setSelectedCategory('all');
              }}
              variant="outline"
              className="mt-4"
            >
              Clear Filters
            </Button>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default Jobs;
