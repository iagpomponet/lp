import React from 'react';

import GlobalStyle from './globalStyles';
import Header from './components/Header';
import Banner from './components/Banner';
import ClientsBar from './components/ClientsBar';

function App() {
  return (
    <div>
      <GlobalStyle />
      <Header />
      <Banner />
      <ClientsBar />
    </div>
  );
}

export default App;
