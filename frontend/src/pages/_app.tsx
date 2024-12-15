import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import Layout from '@/components/Layout/Layout';
import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect } from 'react';

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
