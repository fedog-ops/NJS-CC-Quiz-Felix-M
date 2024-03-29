import '@/styles/globals.css';
import {QueryClient, QueryClientProvider} from 'react-query';
import type {AppProps} from 'next/app';

// Initialize the query client
const queryClient = new QueryClient();

export default function App({Component, pageProps}: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />
    </QueryClientProvider>
  );
}
