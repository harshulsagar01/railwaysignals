import React from 'react';

export default function SignalColors() {
  return (
    <section id="colors" className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Understanding Signal Colors</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="w-24 h-24 rounded-full bg-red-600 mx-auto mb-4"></div>
            <h3 className="font-bold">Red</h3>
            <p>Stop</p>
          </div>
          <div className="text-center">
            <div className="w-24 h-24 rounded-full bg-yellow-400 mx-auto mb-4"></div>
            <h3 className="font-bold">Yellow</h3>
            <p>Caution</p>
          </div>
          <div className="text-center">
            <div className="w-24 h-24 rounded-full bg-green-500 mx-auto mb-4"></div>
            <h3 className="font-bold">Green</h3>
            <p>Proceed</p>
          </div>
          <div className="text-center">
            <div className="w-24 h-24 rounded-full bg-white border-2 border-gray-300 mx-auto mb-4"></div>
            <h3 className="font-bold">White</h3>
            <p>Shunting</p>
          </div>
        </div>
      </div>
    </section>
  );
}