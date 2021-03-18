import React from 'react';

import Banner from '../components/Banner';
import ClientsBar from '../components/ClientsBar';
import Solutions from '../components/Solutions'
import About from '../components/About';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer'

const Index = () => {
  return (
    <main>
      <Banner />
      <ClientsBar />
      <Solutions />
      <About />
      <Newsletter />
      <Footer />
    </main>
  );
}

export default Index;
