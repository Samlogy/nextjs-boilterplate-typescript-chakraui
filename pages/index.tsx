import Head from 'next/head'
import { Layout, SectionTemplate } from '../components'
// import { GET_HOME_DATA } from '../lib/services'

export default function Home() {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="description" />
        <meta property="og:title" content="content title" />
        <meta property="og:description" content="description" />
        <meta property="og:type" content="website" />
        <title> title </title>
        <meta property="og:url" content="website url..." />
      </Head>

      <Layout isHeaderVisible isFooterVisible>
        Home
      </Layout>
    </>
  )
}

// export async function getStaticProps() {
//   const data = await GET_HOME_DATA()

//   return {
//     props: { data }
//   }
// }
