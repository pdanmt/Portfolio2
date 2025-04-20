import { Flex, Icon, Text } from "@chakra-ui/react";
import { ReactNode } from "react";

interface TechProps {
    text: string
    iconColor: string
    children: ReactNode
}

export function Tech({ text, iconColor, children }: TechProps) {
    return (
        <Flex
            p='0.5rem 0.7rem'
            gap='0.5rem'
            bg='gray.400'
            color='gray.200'
            borderRadius='17px'
            align='center'
        >
            <Icon color={iconColor} fontSize='1.2rem'>{children}</Icon>
            <Text fontFamily='Inconsolata' fontSize='textMd'>{text}</Text>
        </Flex>
    )
}