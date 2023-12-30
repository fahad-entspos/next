import React from 'react'
import dynamic from "next/dynamic";
import Layout from './pages/layout'
 function App({ Component, pageProps }) {
  return <>
<Layout>
      <Component {...pageProps} />
</Layout>
  </>
}

export default dynamic (() => Promise.resolve(Layout), {ssr: false})




