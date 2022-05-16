import Head from 'next/head'
import {
  About,
  Blogs,
  Hero,
  Layout,
  Projects,
  Services,
  TechStack,
  Testimonials
} from '../components'
import { GET_HOME_DATA } from '../lib/services'

export default function Home({ about, techStack, services, reviews, projects, blogs }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Do you want quality IT services ?" />
        <meta property="og:title" content="web solutions" />
        <meta property="og:description" content="Do you want quality IT services ?" />
        <meta property="og:type" content="website" />
        <title> Sam Solutions </title>
        <meta property="og:url" content="https://sam-solutions.com" />
      </Head>

      <Layout isHeaderVisible isFooterVisible>
        <Hero />
        <About data={about} />
        <Services data={services} />
        {techStack && <TechStack data={techStack} />}
        {/* <Projects data={projects} /> */}
        <Testimonials data={reviews} />
        <Blogs data={blogs} />
      </Layout>
    </>
  )
}

export async function getStaticProps() {
  const res = await GET_HOME_DATA()
  const { about, techStack, services, reviews, projects, blogs } = res
  const someBlogs = blogs.slice(0, 4)

  return {
    props: { about, techStack, services, reviews, projects, blogs: someBlogs }
  }
}
