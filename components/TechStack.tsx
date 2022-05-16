import { Flex, Image, Box, Text } from '@chakra-ui/react'

import { SectionWrapper } from '../components'
import { useLocale } from '../lib/hooks'

const TechStack = ({ data }: { data: any }) => {
  const { t } = useLocale()

  return (
    <SectionWrapper title={t.techStack.title} description={t.techStack.description}>
      <Flex flexDir="row" justify={'center'} align="center" flexWrap={'wrap'}>
        {data?.map((tech, idx) => (
          <Box key={idx} p=".15rem" borderRadius={'10px'} boxShadow="md" m=".5rem">
            <Image src={tech?.image.src} alt="tech-stack-image" boxSize="8rem" />
            <Text textAlign={'center'} fontSize=".9rem" textTransform={'uppercase'}>
              {tech.name}
            </Text>
          </Box>
        ))}
      </Flex>
    </SectionWrapper>
  )
}
export default TechStack
