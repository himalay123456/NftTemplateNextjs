import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <link
            rel="shortcut icon"
            href="images/favicon.ico"
            type="image/x-icon"
          />
          {/* <link rel="apple-touch-icon" href="/images/apple-touch-icon.png" /> */}
          <link rel="stylesheet" href="/assets/css/style.css" />
        </Head>
        <body>
          <Main />
          <NextScript />
          <script src="/assets/js/vendor/core.min.js"></script>
          <script src="/assets/js/vendor/popper.min.js"></script>
          <script src="/assets/js/vendor/bootstrap.min.js"></script>
          <script src="/assets/js/vendor/all.min.js"></script>
          <script src="/assets/js/vendor/slider.min.js"></script>
          <script src="/assets/js/vendor/countdown.min.js"></script>
          <script src="/assets/js/vendor/shuffle.min.js"></script>
          <script src="/assets/js/main.js"></script>
        </body>
      </Html>
    );
  }
}

export default MyDocument;

