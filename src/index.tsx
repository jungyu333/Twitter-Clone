import React from 'react';
import ReactDOM from 'react-dom/client';
import { theme } from './styles/theme';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/GlobalStyles';
import store from 'redux/store';

import App from './App';
import { StyledEngineProvider } from '@mui/material';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <StyledEngineProvider injectFirst>
        <GlobalStyles />
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </StyledEngineProvider>
    </Provider>
  </React.StrictMode>,
);
