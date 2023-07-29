import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <title>Dashboard</title>
        <meta
          name="description"
          content="Example dashboard app using the components."
          key="desc"
        />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
