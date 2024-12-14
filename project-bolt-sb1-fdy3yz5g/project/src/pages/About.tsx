import React from 'react';
import { History, Users, Target, Award } from 'lucide-react';

export default function About() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div 
        className="h-[40vh] bg-cover bg-center flex items-center"
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url("https://images.unsplash.com/photo-1555601568-c9e6f328489b?auto=format&fit=crop&q=80")',
        }}
      >
        <div className="container mx-auto px-6 text-white">
          <h1 className="text-5xl font-bold mb-4">About Us</h1>
          <p className="text-xl">Leading the way in railway signaling innovation</p>
        </div>
      </div>

      {/* Company Info */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-gray-600 mb-4">
                Founded in 1970, RailSignal Pro has been at the forefront of railway signaling technology for over five decades. Our commitment to safety and innovation has made us a trusted partner for railway operators worldwide.
              </p>
              <p className="text-gray-600">
                We specialize in designing, manufacturing, and maintaining advanced signaling systems that ensure the safe and efficient operation of railways across the globe.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-6 bg-gray-50 rounded-lg">
                <History className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="font-bold mb-2">50+ Years</h3>
                <p className="text-gray-600">Of Experience</p>
              </div>
              <div className="text-center p-6 bg-gray-50 rounded-lg">
                <Users className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="font-bold mb-2">1000+</h3>
                <p className="text-gray-600">Employees</p>
              </div>
              <div className="text-center p-6 bg-gray-50 rounded-lg">
                <Target className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="font-bold mb-2">50+</h3>
                <p className="text-gray-600">Countries Served</p>
              </div>
              <div className="text-center p-6 bg-gray-50 rounded-lg">
                <Award className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="font-bold mb-2">200+</h3>
                <p className="text-gray-600">Awards Won</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-gray-600">
                To provide cutting-edge railway signaling solutions that enhance safety, efficiency, and reliability in rail transportation systems worldwide.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-gray-600">
                To be the global leader in innovative railway signaling technology, setting industry standards for safety and performance.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}