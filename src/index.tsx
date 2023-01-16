import React from 'react';
import ReactDOM from 'react-dom/client';
import theme from './styles/theme';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/GlobalStyles';

import App from './App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <React.StrictMode>
    <GlobalStyles />
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
);
