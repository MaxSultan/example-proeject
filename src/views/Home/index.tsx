import React from 'react';
import NavBar from '../../components/Layout/NavBar';
import Footer from '../../components/Layout/Footer';
import Cta from '../../components/Layout/Cta';
import HeroSection from '../../components/Layout/HeroSection';
import LogoCloud from '../../components/Layout/LogoCloud';
import AlternatingFeature from '../../components/Layout/AlternatingFeature';
import Stats from '../../components/Layout/Stats';
import Features from '../../components/Layout/Features';

export interface HomeProps {
  title: string;
}

const Home: React.FC = () => (
  <>
    <div className="bg-white">
      <NavBar />
      <main>
        <HeroSection />
        <LogoCloud />
        <AlternatingFeature />
        <Features />
        <Stats />
        <Cta />
      </main>
      <Footer />
    </div>
  </>
);

export default Home;
