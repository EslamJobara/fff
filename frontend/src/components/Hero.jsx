import React from 'react';
import { Clock, Shield, Truck } from 'lucide-react';

const Hero = () => {
  return (
    <section className="hero-gradient text-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                Your shortcut
                <br />
                <span className="text-primary-200">for healing</span>
              </h1>
              <p className="text-xl text-primary-100 max-w-md">
                Get your medicines delivered fast and safely to your doorstep with our 24/7 service.
              </p>
            </div>

            {/* Features */}
            <div className="flex items-center space-x-2 text-primary-100">
              <div className="flex items-center space-x-2">
                <Clock className="w-8 h-8 p-1.5 bg-white/20 rounded-full" />
                <span className="text-2xl font-bold">24/7</span>
              </div>
              <span className="text-lg">Available</span>
            </div>

            {/* CTA Button */}
            <button className="bg-white text-primary-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-primary-50 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200">
              Order Now!
            </button>

            {/* Additional Features */}
            <div className="grid grid-cols-2 gap-6 pt-8">
              <div className="flex items-center space-x-3">
                <Shield className="w-6 h-6 text-primary-200" />
                <span className="text-primary-100">Verified Products</span>
              </div>
              <div className="flex items-center space-x-3">
                <Truck className="w-6 h-6 text-primary-200" />
                <span className="text-primary-100">Fast Delivery</span>
              </div>
            </div>
          </div>

          {/* Right Illustration */}
          <div className="relative">
            <div className="relative z-10">
              {/* Pharmacy Illustration */}
              <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
                <div className="space-y-6">
                  {/* Pharmacist */}
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                      <div className="w-8 h-8 bg-primary-300 rounded-full"></div>
                    </div>
                    <div className="space-y-1">
                      <div className="h-3 bg-white/30 rounded w-24"></div>
                      <div className="h-2 bg-white/20 rounded w-16"></div>
                    </div>
                  </div>

                  {/* Medicine Shelves */}
                  <div className="grid grid-cols-4 gap-2">
                    {[...Array(12)].map((_, i) => (
                      <div
                        key={i}
                        className="h-8 bg-white/20 rounded border border-white/30"
                      ></div>
                    ))}
                  </div>

                  {/* Counter */}
                  <div className="h-12 bg-primary-600 rounded-lg flex items-center justify-center">
                    <div className="w-6 h-6 bg-white rounded flex items-center justify-center">
                      <div className="w-3 h-3 bg-primary-500 rounded"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Background Decorations */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-white/10 rounded-full"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-white/5 rounded-full"></div>
            <div className="absolute top-1/2 -right-8 w-16 h-16 bg-white/10 rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;