import React, { useState } from 'react';
import { INTRO, APPLICATION } from '../config/content';
import SocialLinks from './SocialLinks';
import AboutCard from './AboutCard';
import InterestsSection from './InterestsSection';
import CurrentlySection from './CurrentlySection';
import RandomFactsSection from './RandomFactsSection';
import QuotesSection from './QuotesSection';
import ApplicationModal from './ApplicationModal';

export default function MainPage() {
  const [showApplication, setShowApplication] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-12 md:py-20">
      <main className="max-w-md mx-auto">
        
        {/* Intro Section */}
        <section className="text-center mb-10 animate-fade-in">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            {INTRO.greeting}
          </h1>
          <p className="text-gray-600 text-lg mb-2">
            {INTRO.subtext}
          </p>
          <p className="text-gray-400 text-sm">
            {INTRO.note}
          </p>
        </section>

        {/* Social Links */}
        <section className="mb-10">
          <SocialLinks />
        </section>

        {/* About Card */}
        <section className="mb-4">
          <AboutCard />
        </section>

        {/* Currently Section */}
        <section className="mb-4">
          <CurrentlySection />
        </section>

        {/* Interests */}
        <section className="mb-4">
          <InterestsSection />
        </section>

        {/* Random Facts */}
        <section className="mb-4">
          <RandomFactsSection />
        </section>

        {/* Quotes */}
        <section className="mb-8">
          <QuotesSection />
        </section>

        {/* Application Button */}
        <section className="mb-12">
          <button
            onClick={() => setShowApplication(true)}
            className="w-full py-4 px-6 bg-gray-900 hover:bg-gray-800 text-white font-medium rounded-2xl transition-all hover:-translate-y-0.5"
          >
            {APPLICATION.buttonLabel}
          </button>
        </section>

        {/* Footer */}
        <footer className="text-center text-gray-400 text-sm">
          <p>thanks for stopping by ✌️</p>
        </footer>

      </main>

      {/* Application Modal */}
      <ApplicationModal
        isOpen={showApplication}
        onClose={() => setShowApplication(false)}
      />
    </div>
  );
}
