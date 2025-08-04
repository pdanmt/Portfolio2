import { Box, Flex, Link, Text } from "@chakra-ui/react"
import Image from "next/image"

interface ProjectProps {
    imgUrl: string
    name: string
    description: string
    url: string
}

export function Project({
    description,
    imgUrl,
    name,
    url
}: ProjectProps) {
    return (
        <Link
            w={['95vw', '330px']}
            minH='260px'
            bg='gray.400'
            p='0.7rem'
            borderRadius='12px'
            display='flex'
            flexDirection='column'
            justifyContent='space-between'
            cursor='pointer'
            border='1px solid transparent'
            transition='0.2s'
            _hover={{ borderColor: 'gray.100' }}
            href={url}
            target='_blank'
        >
            <Box
                w='100%'
                minH='156px'
                maxH='156px'
                pos='relative'
                bg='gray.500'
                borderRadius='8px'
            >
                <Image
                    src={imgUrl}
                    alt=''
                    fill
                    style={{
                        objectFit: 'cover',
                        borderRadius: '8px',
                    }}
                />
            </Box>
            <Flex
                direction='column'
                flex={1}
                w='100%'
            >
                <Text
                    fontFamily='Asap'
                    fontSize='titleSm'
                    color='gray.100'
                    fontWeight='bold'
                >
                    {name}
                </Text>
                <Text fontFamily='Maven Pro' fontSize='textSm' color='gray.200'>
                    {description}
                </Text>
            </Flex>
        </Link >
    )
}