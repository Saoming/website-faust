import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head>
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="true"
          />
          <link 
            rel="preconnect" 
            href="https://fonts.googleapis.com"
          />
          <link
            rel="preload"
            as="style"
            href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@300..700&family=Inconsolata:wght@200..900&family=Inter:wght@100..900&display=swap"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
