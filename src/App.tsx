import React from 'react';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from './globalStyles';
import { defaultTheme } from './theme';

import Index from './pages/index';
import Header from './components/Header';


function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <Header />
      <Index />
    </ThemeProvider>
  );
}

export default App;
