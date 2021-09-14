import React from 'react';
import NavBar from '../../components/Layout/NavBar';
import Footer from '../../components/Layout/Footer';
import Contact from '../../components/Layout/Contact';
import HeroSection from '../../components/Layout/HeroSection';
import LogoCloud from '../../components/Layout/LogoCloud';
import AlternatingFeatureSection from '../../components/Layout/AlternatingFeatureSection';
import Stats from '../../components/Layout/Stats';
import Features from '../../components/Layout/Features';

export interface HomeProps {
  title: string;
}

const Home = () => (
  <>
    <div className="bg-white">
      <NavBar />
      <main>
        <HeroSection />
        <LogoCloud />
        <AlternatingFeatureSection />
        <Features />
        <Stats />
        <Contact />
      </main>
      <Footer />
    </div>
  </>
);

export default Home;
