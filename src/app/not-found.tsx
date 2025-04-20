import { Flex, Text } from "@chakra-ui/react"
import Link from "next/link"

export default function NotFound() {
    return (
        <Flex
            bg='gray.600'
            w='100%'
            minH='100vh'
            justify='center'
            align='center'
            direction='column'
            fontFamily='Maven Pro'
            textAlign='center'
        >
            <Text
                fontSize={['titleMd', 'titleMd', 'titleLg']}
                color='gray.100'
            >
                Opa... Como chegou aqui?
            </Text>
            <Link
                style={{ color: '#3996DB' }}
                href='/'
            >
                Clique aqui para voltar ao portfólio.
            </Link>
        </Flex>
    )
}