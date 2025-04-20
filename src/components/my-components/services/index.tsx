import { Flex } from "@chakra-ui/react";
import { LuMonitorSmartphone } from "react-icons/lu";
import { Title } from "../title";
import { Service } from "./service";

export function Services() {
    return (
        <Flex minH='480px' w='100%' bg='gray.600'>
        <Flex direction='column' w='60%' align='center' m='auto' gap='3rem'>
          <Title subtitle='Meus serviços' title='Como posso ajudar seu negócio' />
          <Flex gap='2rem' justify='center' wrap='wrap'>
            <Service
              description='Desenvolvimento de interfaces'
              service='Websites Responsivos'
              iconColor='purple'
            >
              <LuMonitorSmartphone />
            </Service>
          </Flex>
        </Flex>
      </Flex>
    )
}