import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import ManagedModal from "@/components/common/modal/managed-modal";
import { Provider } from 'react-redux'
import { store, persistor } from "@/store";
import { PersistGate } from 'redux-persist/integration/react';
import { Toaster } from 'react-hot-toast';




const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {

  return (
    <>
      <Head>
        <title>Recipe App</title>
        <meta name="Recipe App" content="Recipe App" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet" />

      </Head>

      <QueryClientProvider client={queryClient}>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <Component {...pageProps} />
            <ManagedModal />
            <Toaster position="top-right" reverseOrder={false} />
          </PersistGate>
        </Provider>
      </QueryClientProvider>

    </>
  )
}
