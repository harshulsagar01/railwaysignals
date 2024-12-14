import React from 'react';
import { Mountain, Shield } from 'lucide-react';

export default function SignalMounting() {
  return (
    <section id="mounting" className="py-16 bg-gray-100">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Signal Mounting Systems</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <Mountain className="w-12 h-12 text-blue-500 mb-4" />
            <h3 className="text-xl font-bold mb-2">Ground Mounting</h3>
            <p>Secure foundation systems for ground-based signals</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <Shield className="w-12 h-12 text-purple-500 mb-4" />
            <h3 className="text-xl font-bold mb-2">Gantry Mounting</h3>
            <p>Overhead mounting systems for multiple track signaling</p>
          </div>
        </div>
      </div>
    </section>
  );
}