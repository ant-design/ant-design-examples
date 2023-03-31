import '../public/antd.min.css';
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import withTheme from '../theme';

export default function App({ Component, pageProps }: AppProps) {
  return withTheme(<Component {...pageProps} />);
}
