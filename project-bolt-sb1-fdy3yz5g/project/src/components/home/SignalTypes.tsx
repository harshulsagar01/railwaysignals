import React from 'react';
import { AlertTriangle, Lightbulb, Compass } from 'lucide-react';

export default function SignalTypes() {
  return (
    <section id="signals" className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Types of Railway Signals</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 border rounded-lg shadow-lg">
            <AlertTriangle className="w-12 h-12 text-red-500 mb-4" />
            <h3 className="text-xl font-bold mb-2">Stop Signals</h3>
            <p>Mandatory stopping signals for train safety and traffic control</p>
          </div>
          <div className="p-6 border rounded-lg shadow-lg">
            <Lightbulb className="w-12 h-12 text-yellow-500 mb-4" />
            <h3 className="text-xl font-bold mb-2">Distant Signals</h3>
            <p>Warning signals indicating upcoming signal status</p>
          </div>
          <div className="p-6 border rounded-lg shadow-lg">
            <Compass className="w-12 h-12 text-green-500 mb-4" />
            <h3 className="text-xl font-bold mb-2">Route Signals</h3>
            <p>Directional signals for track switching and routing</p>
          </div>
        </div>
      </div>
    </section>
  );
}