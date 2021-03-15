import React from 'react';

import Banner from '../components/Banner';
import ClientsBar from '../components/ClientsBar';
import Solutions from '../components/Solutions'
import About from '../components/About';

const Index = () => {
  return (
    <main>
      <Banner />
      <ClientsBar />
      <Solutions />
      <About />
    </main>
  );
}

export default Index;
