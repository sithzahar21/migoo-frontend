import React from 'react';
import FAQ from '../../components/faq/FAQ';
import { useTranslation } from 'react-i18next';
import HeroSection from './components/HeroSection'; // Adjust path if needed
import Enhance from './components/Enhance';
import Plans from '../plans/Plans';
import Ready from './components/Ready';
import JoinCommunity from './components/JoinCommunity';
import Empowering from './components/Empowering';
import HowDoesItWork from './components/HowDoesItWork';
import Learn from './components/Learn';


const Home = () => {
  const { t } = useTranslation(); // Or useTranslation('help') if you're using namespaces

  return (
    <div
    >
    <HeroSection />
    <Enhance />
    <Learn />
    <JoinCommunity />
    <HowDoesItWork />
    <Empowering />
    <Plans />
    <Ready />
      <FAQ />
    </div>
  );
};

export default Home;
