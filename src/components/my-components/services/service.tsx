import { Box, Flex, Icon, Text } from "@chakra-ui/react";
import { ReactNode } from "react";

interface ServiceProps {
    service: string
    description: string
    iconColor: string
    children: ReactNode
}

export function Service({
    children,
    description,
    service,
    iconColor
}: ServiceProps) {
    return (
        <Flex
            p='1.25rem'
            h='155px'
            w={['90vw', '280px']}
            border='2px solid'
            borderColor='gray.500'
            borderRadius='12px'
            direction='column'
            justifyContent='space-between'
        >
            <Icon color={iconColor} fontSize='3rem'>{children}</Icon>
            <Box>
                <Text
                    fontFamily='Asap'
                    fontSize='titleSm'
                    fontWeight='bold'
                    color='gray.100'
                >
                    {service}
                </Text>
                <Text fontFamily='Maven Pro' fontSize='textSm' color='gray.200'>
                    {description}
                </Text>
            </Box>
        </Flex>
    )
}