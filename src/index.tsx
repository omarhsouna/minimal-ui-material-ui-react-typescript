import * as React from 'react';
import ReactDOM from 'react-dom/client';
import { StyledEngineProvider, ThemeProvider } from '@mui/material/styles';
import App from './App';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Auth0ProviderWithNavigate } from './auth0-provider-with-navigate';
import { BrowserRouter } from 'react-router-dom';
import theme from './config/theme';
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnMount: false,
      refetchOnReconnect: false,
      retry: false,
      staleTime: 5 * 60 * 1000,
    },
  },
});
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Auth0ProviderWithNavigate>
        <QueryClientProvider client={queryClient}>
          <StyledEngineProvider injectFirst>
            <ThemeProvider theme={theme}>
              <App />
            </ThemeProvider>
          </StyledEngineProvider>
        </QueryClientProvider>
      </Auth0ProviderWithNavigate>
    </BrowserRouter>
  </React.StrictMode>
);
