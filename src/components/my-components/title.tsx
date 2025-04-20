import { Box, Text } from "@chakra-ui/react";

interface TitleProps {
    subtitle: string
    title: string
}

export function Title({ subtitle, title }: TitleProps) {
    return (
        <Box textAlign='center'>
            <Text color='red' fontFamily='Inconsolata' fontSize='subtitle'>
                {subtitle}
            </Text>
            <Text color='gray.100' fontFamily='Asap' fontSize='titleMd'>
                {title}
            </Text>
        </Box>
    )
}