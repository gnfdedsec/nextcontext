import '@/styles/globals.css'
import Layout from '@/components/layout'
import { MyContextProvider } from '@/src/context';

export default function MyApp({ Component, pageProps }) {
  return (
    <MyContextProvider>
      <Layout>
       
        <Component {...pageProps} />
      </Layout>
      </MyContextProvider>
  );
}

