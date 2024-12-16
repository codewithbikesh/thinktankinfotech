import React from 'react';
import { Target, Lightbulb } from 'lucide-react';

const CompanyIntro = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl font-bold text-gray-900 mb-6">About Think Tank IT</h1>
            <p className="text-lg text-gray-600 mb-8">
              Since 2010, Think Tank IT has been at the forefront of technological innovation, 
              helping businesses transform their digital landscape with cutting-edge solutions 
              and expert consulting services.
            </p>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <Target className="h-6 w-6 text-blue-600 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Our Mission</h3>
                  <p className="text-gray-600">
                    To empower businesses through innovative technology solutions that drive 
                    growth and efficiency.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Lightbulb className="h-6 w-6 text-blue-600 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Our Vision</h3>
                  <p className="text-gray-600">
                    To be the global leader in delivering transformative IT solutions that 
                    shape the future of digital business.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              alt="Team collaboration"
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyIntro;