
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Truck, Building, Users, Coffee, Wrench, Home } from 'lucide-react';

const JobCategories = () => {
  const categories = [
    {
      icon: <Building className="h-8 w-8" />,
      title: "Agriculture & Farming",
      jobs: "45+ Jobs",
      salary: "CAD 16-22/hr",
      popular: true,
      category: "agriculture"
    },
    {
      icon: <Coffee className="h-8 w-8" />,
      title: "Hospitality",
      jobs: "32+ Jobs",
      salary: "USD 14-18/hr",
      category: "hospitality"
    },
    {
      icon: <Truck className="h-8 w-8" />,
      title: "Driving & Transport",
      jobs: "28+ Jobs",
      salary: "CAD 18-25/hr",
      category: "transport"
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Caregiving",
      jobs: "24+ Jobs",
      salary: "CAD 2500-3500/mo",
      category: "caregiving"
    },
    {
      icon: <Wrench className="h-8 w-8" />,
      title: "Construction",
      jobs: "38+ Jobs",
      salary: "USD 16-22/hr",
      category: "construction"
    },
    {
      icon: <Home className="h-8 w-8" />,
      title: "Warehouse",
      jobs: "41+ Jobs",
      salary: "USD 15-20/hr",
      category: "warehouse"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Popular Job Categories
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore high-demand opportunities across Canada and USA with competitive salaries and benefits
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <Link key={index} to={`/jobs?category=${category.category}`}>
              <Card className="hover:shadow-lg transition-all duration-300 cursor-pointer relative transform hover:-translate-y-1">
                {category.popular && (
                  <div className="absolute -top-3 -right-3 bg-teal-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Popular
                  </div>
                )}
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="p-3 bg-blue-100 rounded-lg text-blue-900">
                      {category.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">{category.title}</h3>
                      <p className="text-gray-600">{category.jobs}</p>
                    </div>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-3">
                    <div className="text-sm text-gray-600">Starting from</div>
                    <div className="text-lg font-bold text-green-600">{category.salary}</div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        <div className="text-center mt-10">
          <Button className="bg-blue-900 text-white px-8 py-3 rounded-lg hover:bg-blue-800 transition-colors" asChild>
            <Link to="/jobs">View All Categories</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default JobCategories;