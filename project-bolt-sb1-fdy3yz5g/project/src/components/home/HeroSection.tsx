import React from 'react';

export default function HeroSection() {
  return (
    <div 
      className="h-screen bg-cover bg-center flex items-center"
      style={{
        backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url("https://images.unsplash.com/photo-1474487548417-781cb71495f3?auto=format&fit=crop&q=80")',
      }}
    >
      <div className="container mx-auto px-6 text-white">
        <h1 className="text-5xl font-bold mb-4">Railway Signaling Systems</h1>
        <p className="text-xl mb-8">Advanced solutions for modern railway safety and efficiency</p>
        <button className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-semibold transition">
          Learn More
        </button>
      </div>
    </div>
  );
}