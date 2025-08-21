import React from 'react';
import Nav from './Component/Nav';
import ProfileHeader from './Component/ProfileHeader'
import RatingCard from './Component/RatingCard';
import AboutSection from './Component/AboutSection';
import SkillsSection from './Component/SkillsSection';
import Portfolio from './Component/Portfolio';


function Profile() {
  return (
    <>
      <Nav />
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Left Column */}
            <div className="lg:col-span-1 space-y-6">
              <ProfileHeader />
            </div>

            {/* Right Column */}
            <div className="lg:col-span-2 space-y-6">
              <AboutSection />
              <SkillsSection />
              <Portfolio />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;