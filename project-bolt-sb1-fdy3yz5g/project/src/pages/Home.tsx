import React from 'react';
import HeroSection from '../components/home/HeroSection';
import SignalTypes from '../components/home/SignalTypes';
import SignalMounting from '../components/home/SignalMounting';
import SignalColors from '../components/home/SignalColors';
import InformationSection from '../components/home/InformationSection';

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <SignalTypes />
      <SignalMounting />
      <SignalColors />
      <InformationSection />
    </div>
  );
}