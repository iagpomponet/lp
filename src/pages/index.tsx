import React from 'react';

import Banner from '../components/Banner';
import ClientsBar from '../components/ClientsBar';
import Solutions from '../components/Solutions'
import About from '../components/About';
import Newsletter from '../components/Newsletter'

const Index = () => {
  return (
    <main>
      <Banner />
      <ClientsBar />
      <Solutions />
      <About />
      <Newsletter />
    </main>
  );
}

export default Index;
