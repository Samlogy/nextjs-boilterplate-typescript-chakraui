import React from 'react'
import { Blog, PageTemplate } from '../components'
import { GET_HOME_DATA } from '../lib/services'

function Blogs({ blogs }) {
  return (
    <PageTemplate title="Our Blogs" flexWrap="wrap" justifyContent="center">
      {blogs?.map(blog => (
        <Blog key={blog.id} data={blog} />
      ))}
    </PageTemplate>
  )
}

export default Blogs

export async function getStaticProps() {
  const res = await GET_HOME_DATA()
  return {
    props: res
  }
}
