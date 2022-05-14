import { Flex } from '@chakra-ui/react'
import { Blog } from './'
import SectionWrapper from './SectionWrapper'
import { useLocale } from '../lib/hooks'

const Blogs = ({ data }: { data: any }) => {
  const { t } = useLocale()
  return (
    <SectionWrapper title={t.blogs.title} description={t.blogs.description}>
      <Flex flexDir="row" flexWrap="wrap" alignItems="center" justifyContent="center">
        {data.length > 0 && data.map((blog, idx) => <Blog key={idx} data={blog} />)}
      </Flex>
    </SectionWrapper>
  )
}
export default Blogs
