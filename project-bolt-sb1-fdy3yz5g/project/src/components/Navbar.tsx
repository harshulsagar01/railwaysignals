import React from 'react';
import { Link } from 'react-router-dom';
import { Train, Info, UserCircle2 } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="bg-blue-900 text-white py-4 px-6 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2 text-xl font-bold">
          <Train size={24} />
          <span>RailSignal Pro</span>
        </Link>
        <div className="flex space-x-6">
          <Link to="/" className="hover:text-blue-200 transition">Home</Link>
          <Link to="/about" className="hover:text-blue-200 transition">About</Link>
          <Link to="/auth" className="hover:text-blue-200 transition">Login/Signup</Link>
        </div>
      </div>
    </nav>
  );
}