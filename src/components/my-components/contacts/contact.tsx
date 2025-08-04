import { Flex, Icon, Text } from "@chakra-ui/react";
import Link from "next/link";
import { ReactNode } from "react";
import { MdArrowOutward } from "react-icons/md";

interface ContactProps {
    contact: string
    link: string
    hoverColor: string
    children: ReactNode
}

export function Contact({
    contact,
    link,
    hoverColor,
    children
}: ContactProps) {
    return (
        <Link
            href={link}
            target='_blank'
        >
            <Flex
                w={['90vw', '400px']}
                h='68px'
                justify='space-between'
                p='1.25rem'
                align='center'
                bg='gray.400'
                borderRadius='8px'
                cursor='pointer'
                border='2px solid transparent'
                transition='0.2s'
                _hover={{
                    borderColor: hoverColor,
                    '&:hover .contactIcon': { color: hoverColor }
                }}
            >
                <Flex align='center' gap='1rem'>
                    <Icon
                        color='gray.300'
                        fontSize='1.75rem'
                        className='contactIcon'
                    >
                        {children}
                    </Icon>
                    <Text color='gray.200' fontFamily='Maven Pro' fontSize='textMd'>
                        {contact}
                    </Text>
                </Flex>
                <Icon
                    color='blue'
                    fontSize='1.25rem'
                >
                    <MdArrowOutward />
                </Icon>
            </Flex>
        </Link>
    )
}