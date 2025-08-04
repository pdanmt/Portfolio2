import { Flex } from "@chakra-ui/react";
import { LuBrainCircuit, LuMonitorSmartphone } from "react-icons/lu";
import { Title } from "../title";
import { Service } from "./service";
import { CgSmartphone } from "react-icons/cg";

export function Services() {
  return (
    <Flex
      minH='480px'
      w='100%'
      bg='gray.600'
      p='1rem'
      direction='column'
      justify='center'
    >
      <Title
        subtitle='Meus serviços'
        title='Como posso ajudar seu negócio'
      />
      <Flex
        gap='2rem'
        justify='center'
        wrap='wrap'
        m='auto'
      >
        <Service
          service='Websites Responsivos'
          description='Desenvolvimento de sites'
          iconColor='purple'
        >
          <LuMonitorSmartphone />
        </Service>
        <Service
          service='Aplicativos'
          description='Criação de apps Android e IOS'
          iconColor='red'
        >
          <CgSmartphone />
        </Service>
        <Service
          service='Soluções'
          description='Soluções inteligentes para problemas complexos'
          iconColor='blue'
        >
          <LuBrainCircuit />
        </Service>
      </Flex>
    </Flex>
  )
}