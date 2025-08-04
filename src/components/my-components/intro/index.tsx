import { Flex, Box, Text } from "@chakra-ui/react"
import { BiLogoTypescript } from "react-icons/bi"
import { DiHtml5, DiCss3, DiReact } from "react-icons/di"
import { IoLogoJavascript } from "react-icons/io"
import { RiNextjsLine } from "react-icons/ri"
import { Tech } from "./tech"
import Image from "next/image"
import bgIntro from '@/../public/bgIntro.png'
import avatar from '@/../public/avatar.png'
import { ScrollDownBtn } from "./scroll-down"

export function Intro() {
  return (
    <Flex
      direction='column'
      align='center'
      h='100vh'
      w='100%'
      pos='relative'
      justify='center'
      p='1rem 0.5rem'
      gap='2rem'
    >
      <Box
        zIndex='-1'
        pos='absolute'
        w='100%'
        h='100%'
      >
        <Image src={bgIntro} fill alt="" />
      </Box>
      <Flex
        direction='column'
        m='auto'
        w={['95%', '90%', '90%', '55%']}
        textAlign='center'
        align='center'
        gap='1rem'
        lineHeight={['text', 'text', 'title']}
        wordBreak='keep-all'
      >
        <Box
          w={['80px', '100px']}
          h={['80px', '100px']}
          borderRadius='100%'
          pos='relative'
          border='3px solid transparent'
          outline='3px solid'
          outlineColor='red'
          mb={['0.5rem', '2rem', '3rem']}
        >
          <Image src={avatar} alt="" fill />
        </Box>

        <Text
          fontFamily='Inconsolata'
          fontSize='subtitle'
          color='gray.200'
        >
          Hello World! Meu nome é <Text as='span' color='red'>Pedro Daniel</Text> e sou
        </Text>
        <Text
          fontFamily='Asap'
          fontSize={['2rem', '2.5rem', 'titleLg']}
          color='gray.100'
          fontWeight='bold'
        >
          Desenvolvedor Front-End
        </Text>
        <Text fontFamily='Maven Pro' fontSize='textSm' color='gray.300'>
          Sou apaixonado em transformar ideias em realidade digital. Estudante de desenvolvimento Web Front-End, com foco em criação de aplicações úteis para resolução de problemas diversos.
        </Text>

        <Flex
          mt={['0.5rem', '2rem', '3rem']}
          gap={['0.5rem', '1rem']}
          wrap='wrap'
          justify='center'
        >
          <Tech text='HTML' iconColor='red'><DiHtml5 /></Tech>
          <Tech text='CSS' iconColor='blue'><DiCss3 /></Tech>
          <Tech text='Javascript' iconColor='yellow'><IoLogoJavascript /></Tech>
          <Tech text='Typescript' iconColor='blue'><BiLogoTypescript /></Tech>
          <Tech text='React' iconColor='blue'><DiReact /></Tech>
          <Tech text='Next.JS' iconColor='gray.100'><RiNextjsLine /></Tech>
        </Flex>
      </Flex>

      <ScrollDownBtn />
    </Flex>
  )
}