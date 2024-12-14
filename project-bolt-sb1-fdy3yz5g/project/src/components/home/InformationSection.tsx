import React from 'react';
import { BookOpen } from 'lucide-react';

export default function InformationSection() {
  return (
    <section className="py-16 bg-blue-900 text-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h2 className="text-3xl font-bold mb-4">Learn More About Railway Signals</h2>
            <p className="mb-6">Download our comprehensive guide to railway signaling systems</p>
            <button className="bg-white text-blue-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
              Download Guide
            </button>
          </div>
          <div className="md:w-1/3">
            <BookOpen className="w-48 h-48 mx-auto" />
          </div>
        </div>
      </div>
    </section>
  );
}