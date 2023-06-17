import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from "next/document";
import { doExtraStyle } from "../scripts/genAntdCss";
import { StyleProvider, createCache } from "@ant-design/cssinjs";
export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const cache = createCache();
    const originalRenderPage = ctx.renderPage;
    let isReady: boolean = false;
    ctx.renderPage = () =>
      originalRenderPage({
        enhanceApp: (App) => (props) => {
          isReady = !!props.__N_SSP;
          return (
            <StyleProvider cache={cache}>
              <App {...props} />
            </StyleProvider>
          );
        },
      });

    const initialProps = await Document.getInitialProps(ctx);
    // 1.1 extract style which had been used
    const { url, fallback } = doExtraStyle({
      cache,
    });

    return {
      ...initialProps,
      styles: (
        <>
          {initialProps.styles}
          {/* 1.2 inject css */}
          {url && <link rel="stylesheet" href={isReady ? `/${fallback}` : `/${url}`} />}
        </>
      ),
    };
  }

  render() {
    return (
      <Html lang="en">
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
