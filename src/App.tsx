import React from 'react';

import GlobalStyle from './globalStyles';
import Header from './components/Header';
import Banner from './components/Banner';
import ClientsBar from './components/ClientsBar';
import Solutions from './components/Solutions'

function App() {
  return (
    <div>
      <GlobalStyle />
      <Header />
      <Banner />
      <ClientsBar />
      <Solutions />
    </div>
  );
}

export default App;
