
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Users, Target, Award, Globe } from 'lucide-react';

const About = () => {
  const stats = [
    { number: '5,000+', label: 'Successful Placements', icon: Users },
    { number: '200+', label: 'Partner Companies', icon: Target },
    { number: '50+', label: 'Countries Served', icon: Globe },
    { number: '98%', label: 'Success Rate', icon: Award }
  ];

  const team = [
    {
      name: 'Sarah Johnson',
      role: 'CEO & Founder',
      bio: 'Former immigration lawyer with 15+ years of experience helping people work abroad.',
      image: '👩‍💼'
    },
    {
      name: 'Michael Chen',
      role: 'Head of Operations',
      bio: 'Expert in international recruitment and visa processing with a track record of 3,000+ successful placements.',
      image: '👨‍💼'
    },
    {
      name: 'Emma Rodriguez',
      role: 'Client Relations Director',
      bio: 'Multilingual specialist ensuring smooth communication and support throughout the application process.',
      image: '👩‍🏫'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About GlobalWork Pass
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're dedicated to connecting talented individuals worldwide with life-changing career opportunities in Canada and the USA, providing comprehensive support every step of the way.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center">
              <CardContent className="p-6">
                <stat.icon className="h-8 w-8 text-blue-900 mx-auto mb-3" />
                <div className="text-3xl font-bold text-gray-900 mb-1">{stat.number}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <Card>
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                To bridge the gap between skilled professionals seeking international opportunities and employers in Canada and the USA who need talented workers. We believe everyone deserves the chance to build a better future for themselves and their families.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                To become the world's most trusted platform for international job placement, known for our integrity, success rate, and unwavering commitment to our clients' dreams of working abroad.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Company Information */}
        <Card className="mb-16">
          <CardContent className="p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Company Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <h4 className="text-lg font-semibold text-blue-900 mb-2">Main Office</h4>
                <p className="text-gray-600">California, USA</p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-blue-900 mb-2">Contact Email</h4>
                <p className="text-gray-600">globalworkpass@gmail.com</p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-blue-900 mb-2">Phone Number</h4>
                <p className="text-gray-600">+1 (210) 204-3122</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Our Story */}
        <Card className="mb-16">
          <CardContent className="p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Story</h3>
            <div className="prose max-w-none text-gray-600">
              <p className="mb-4">
                GlobalWork Pass was founded in 2018 with a simple yet powerful vision: to make international career opportunities accessible to talented individuals worldwide. Our founder, Sarah Johnson, experienced firsthand the challenges of navigating international job markets and visa processes while helping clients as an immigration lawyer.
              </p>
              <p className="mb-4">
                Recognizing the need for a comprehensive, trustworthy platform that could guide job seekers through every step of the process, Sarah assembled a team of experts in recruitment, immigration law, and international business. Together, we've helped thousands of people achieve their dreams of working in Canada and the USA.
              </p>
              <p>
                Today, we work with over 200 verified employers across North America, offering opportunities in agriculture, healthcare, hospitality, construction, and many other industries. Our success is measured not just in placements, but in the lives we've helped transform.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Team */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">Meet Our Team</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index}>
                <CardContent className="p-6 text-center">
                  <div className="text-6xl mb-4">{member.image}</div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h4>
                  <div className="text-blue-600 font-medium mb-3">{member.role}</div>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Why Choose Us */}
        <Card>
          <CardContent className="p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Why Choose GlobalWork Pass?</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3"></div>
                  <div>
                    <strong className="text-gray-900">Verified Opportunities:</strong>
                    <span className="text-gray-600"> All our job listings are from legitimate, verified employers.</span>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3"></div>
                  <div>
                    <strong className="text-gray-900">Complete Support:</strong>
                    <span className="text-gray-600"> From application to arrival, we guide you through every step.</span>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3"></div>
                  <div>
                    <strong className="text-gray-900">Transparent Process:</strong>
                    <span className="text-gray-600"> No hidden fees or false promises, just honest guidance.</span>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3"></div>
                  <div>
                    <strong className="text-gray-900">Expert Team:</strong>
                    <span className="text-gray-600"> Immigration lawyers, recruiters, and support specialists.</span>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3"></div>
                  <div>
                    <strong className="text-gray-900">Proven Track Record:</strong>
                    <span className="text-gray-600"> 98% success rate with thousands of satisfied clients.</span>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3"></div>
                  <div>
                    <strong className="text-gray-900">Ongoing Support:</strong>
                    <span className="text-gray-600"> We're here for you even after you start your new job.</span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Footer />
    </div>
  );
};

export default About;
