import { Flex, Box, Text } from "@chakra-ui/react"
import { AiOutlineMail } from "react-icons/ai"
import { FaGithub, FaLinkedin } from "react-icons/fa"
import { Contact } from "./contact"
import bgContacts from '@/../public/bgContacts.png'
import Image from "next/image"

export function Contacts() {
    return (
        <Flex minH='100vh' w='100%' justify='center'>
            <Box
                zIndex='-1'
                pos='absolute'
                w='100%'
                minH='100vh'
            >
                <Image src={bgContacts} fill alt="" />
            </Box>
            <Flex direction='column' gap='3rem' justify='center'>
                <Box m='0 auto' textAlign='center' lineHeight='1.7'>
                    <Text fontFamily='Inconsolata' fontSize='subtitle' color='purple'>
                        Contato
                    </Text>
                    <Text fontFamily='Asap' fontSize='titleMd' color='gray.100'>
                        Gostou do meu trabalho?
                    </Text>
                    <Text fontFamily='Maven Pro' fontSize='textMd' color='gray.200'>
                        Entre em contato ou acompanhe as minhas redes sociais!
                    </Text>
                </Box>
                <Flex direction='column' gap='1rem' align='center'>
                    <Contact
                        contact='Github'
                        link='https://github.com/pdanmt'
                        hoverColor='gray.100'
                    >
                        <FaGithub />
                    </Contact>
                    <Contact
                        contact='Email'
                        link='mailto:pddsambook@gmail.com'
                        hoverColor='red'
                    >
                        <AiOutlineMail />
                    </Contact>
                    <Contact
                        contact='Linkedin'
                        link='https://www.linkedin.com/in/pedro-daniel-467592360/'
                        hoverColor='blue'
                    >
                        <FaLinkedin />
                    </Contact>
                </Flex>
            </Flex>
        </Flex>
    )
}