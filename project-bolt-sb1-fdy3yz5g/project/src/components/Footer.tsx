import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <div className="space-y-2">
              <p className="flex items-center"><Mail className="mr-2" size={18} /> contact@railsignalpro.com</p>
              <p className="flex items-center"><Phone className="mr-2" size={18} /> +1 (555) 123-4567</p>
              <p className="flex items-center"><MapPin className="mr-2" size={18} /> Railway Signal HQ, New York</p>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#signals" className="hover:text-blue-400">Signal Types</a></li>
              <li><a href="#mounting" className="hover:text-blue-400">Signal Mounting</a></li>
              <li><a href="#colors" className="hover:text-blue-400">Signal Colors</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Newsletter</h3>
            <p className="mb-4">Stay updated with our latest signal technology news</p>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-2 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:border-blue-500"
            />
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p>&copy; 2024 RailSignal Pro. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}