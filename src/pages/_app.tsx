import type { AppProps } from 'next/app';

import { MantineProvider } from 'services/mantine';
import 'styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MantineProvider>
      <Component {...pageProps} />
    </MantineProvider>
  );
}

export default MyApp;
