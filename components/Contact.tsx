import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Link,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
  Textarea,
  useColorModeValue,
  useToast
} from '@chakra-ui/react'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import { BsDiscord, BsGithub, BsPerson } from 'react-icons/bs'
import { MdEmail, MdLocationOn, MdOutlineEmail, MdPhone, MdCorporateFare } from 'react-icons/md'
import { FaLinkedin, FaTwitter } from 'react-icons/fa'
import { AiOutlinePhone } from 'react-icons/ai'
import { ErrorMessage, SectionWrapper } from '../components'
import { contactSchema } from '../lib/validation'
import { CONTACT } from '../lib/services'
import { useLocale } from '../lib/hooks'

const contacts = [
  {
    data: '+213 540498180',
    icon: <MdPhone color="#38a169" size="20px" />,
    id: 0
  },
  {
    data: 'senanisammy@gmail.com',
    icon: <MdEmail color="#38a169" size="20px" />,
    id: 1
  },
  {
    data: 'Paris, France',
    icon: <MdLocationOn color="#38a169" size="20px" />,
    id: 2
  }
  // {
  //   data: 'dev-pro.com',
  //   icon: <AiOutlineGlobal color="#38a169" size="20px" />,
  //   id: 3
  // }
]
const socialMedia = [
  {
    icon: <FaLinkedin size="28px" color="#38a169" />,
    id: 0,
    link: 'https://www.linkedin.com/in/samy-senani/'
  },
  {
    icon: <FaTwitter size="28px" color="#38a169" />,
    id: 2,
    link: 'https://twitter.com/samy_senani'
  },
  {
    icon: <BsDiscord size="28px" color="#38a169" />,
    id: 3,
    link: ''
  },
  {
    icon: <BsGithub size="28px" color="#38a169" />,
    id: 1,
    link: 'https://github.com/Samlogy'
  }
]

export default function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(contactSchema)
  })
  const { t } = useLocale()

  const toast = useToast()

  const onContact = async (contact: any) => {
    const res = await CONTACT(contact)
    if (res) {
      toast({
        title: `Message Sent`,
        variant: 'left-accent',
        position: 'bottom-right',
        status: 'success',
        // variant: 'subtle',
        duration: 3000,
        isClosable: true
      })
    } else {
      toast({
        title: `an Error occured`,
        variant: 'left-accent',
        position: 'bottom-right',
        status: 'error',
        // variant: 'subtle',
        duration: 3000,
        isClosable: true
      })
    }
  }

  const bgColor = useColorModeValue('gray_9', 'gray_2')
  const textColor = useColorModeValue('balck', 'white')
  const inputColor = useColorModeValue('white', 'gray_3')

  return (
    <SectionWrapper title={t.contacts.title} id="contact">
      <Flex
        flexDir={'row'}
        flexWrap={'wrap'}
        justifyContent={['space-between', '', 'space-around', '']}
        borderRadius={'10px'}
        boxShadow="md"
        p={['1.5rem 1rem', '1.5rem 2rem', '', '']}
        bg={bgColor}
      >
        <Flex
          flexDir="column"
          justifyContent={'space-between'}
          alignItems={['center', '', '', 'flex-start']}
          mb={['2rem', '', '0', '']}
          flexBasis={'40%'}
        >
          <Text color={textColor} fontSize={'1rem'} maxW="20rem">
            {t.contacts.description}
          </Text>

          <Flex
            flexDir={'column'}
            justifyContent="center"
            alignItems={['center', '', '', 'flex-start']}
            mb={['2rem', '', '0', '']}
            w="100%"
          >
            {contacts.map(contact => (
              <Flex
                key={contact.id}
                justifyContent={'space-between'}
                align={'center'}
                w="100%"
                h="4rem"
              >
                <Box as="span" mr="1rem" color={'gray_9'} w="20%">
                  {contact.icon}
                </Box>
                <Text fontSize="1rem" color={textColor} w="80%">
                  {contact.data}
                </Text>
              </Flex>
            ))}
          </Flex>

          <Flex
            flexDir="row"
            pl={0}
            alignItems={'center'}
            justifyContent={['center', '', 'start', '']}
          >
            {socialMedia.map(el => (
              <IconButton
                key={el.id}
                as={Link}
                href={el.link}
                aria-label="social media icon"
                variant="ghost"
                size="lg"
                py=".5rem"
                mr={['1rem', '', '0', '']}
                isRound={true}
                icon={el.icon}
              />
            ))}
          </Flex>
        </Flex>

        <Flex
          flexBasis={'40%'}
          flexDir="column"
          justifyContent={'space-between'}
          mx={['auto', '', '0', '']}
        >
          <form onSubmit={handleSubmit(onContact)}>
            <FormControl id="name" mb="1rem">
              <FormLabel>
                {t.contacts.name}
                {/* <Box as="span" color="gray_4" fontSize=".85rem" ml=".15rem" fontStyle={'italic'}>
                    (Optional)
                  </Box> */}
              </FormLabel>
              <InputGroup>
                <InputLeftElement pointerEvents="none">
                  <BsPerson color="gray_1" />
                </InputLeftElement>
                <Input
                  type="text"
                  size="md"
                  isInvalid={errors.name ? true : false}
                  focusBorderColor={errors.name ? 'error' : 'accent_6'}
                  errorBorderColor="error"
                  borderRadius="5px"
                  bg={inputColor}
                  {...register('name')}
                />
              </InputGroup>
              {errors.name && <ErrorMessage error={errors.name.message} />}
            </FormControl>

            <FormControl id="company" mb="1rem">
              <FormLabel>
                {t.contacts.company}
                {/* <Box as="span" color="gray_4" fontSize=".85rem" ml=".15rem" fontStyle={'italic'}>
                    (Optional)
                  </Box> */}
              </FormLabel>
              <InputGroup>
                <InputLeftElement pointerEvents="none">
                  <MdCorporateFare color="gray_1" />
                </InputLeftElement>
                <Input
                  type="text"
                  size="md"
                  isInvalid={errors.company ? true : false}
                  focusBorderColor={errors.company ? 'error' : 'accent_6'}
                  errorBorderColor="error"
                  borderRadius="5px"
                  bg={inputColor}
                  {...register('company')}
                />
              </InputGroup>
              {errors.company && <ErrorMessage error={errors.company.message} />}
            </FormControl>

            <FormControl id="email" mb="1rem">
              <FormLabel> {t.contacts.email} </FormLabel>
              <InputGroup>
                <InputLeftElement pointerEvents="none">
                  <MdOutlineEmail color="gray_1" />
                </InputLeftElement>
                <Input
                  type="email"
                  size="md"
                  isInvalid={errors.email ? true : false}
                  focusBorderColor={errors.email ? 'error' : 'accent_6'}
                  errorBorderColor="error"
                  borderRadius="5px"
                  bg={inputColor}
                  {...register('email')}
                />
              </InputGroup>
              {errors.email && <ErrorMessage error={errors.email.message} />}
            </FormControl>

            <FormControl id="phone" mb="1rem">
              <FormLabel> {t.contacts.phone} </FormLabel>
              <InputGroup>
                <InputLeftElement pointerEvents="none">
                  <MdOutlineEmail color="gray_1" />
                </InputLeftElement>
                <Input
                  type="phone"
                  size="md"
                  isInvalid={errors.phone ? true : false}
                  focusBorderColor={errors.phone ? 'error' : 'accent_6'}
                  errorBorderColor="error"
                  borderRadius="5px"
                  bg={inputColor}
                  {...register('phone')}
                />
              </InputGroup>
              {errors.phone && <ErrorMessage error={errors.phone.message} />}
            </FormControl>

            <FormControl id="message" mb="1rem">
              <FormLabel> {t.contacts.message} </FormLabel>
              <Textarea
                placeholder="message"
                isInvalid={errors.message ? true : false}
                focusBorderColor={errors.message ? 'error' : 'accent_6'}
                errorBorderColor="error"
                bg={inputColor}
                borderRadius="5px"
                h={'8rem'}
                {...register('message')}
              />
              {errors.message && <ErrorMessage error={errors.message.message} />}
            </FormControl>

            <FormControl id="send-message" float="right" mb=".5rem">
              <Button type="submit" bg="accent_4" color="white" _hover={{ bg: 'accent_3' }}>
                {t.contacts.button}
              </Button>
            </FormControl>
          </form>
        </Flex>
      </Flex>
    </SectionWrapper>
  )
}
