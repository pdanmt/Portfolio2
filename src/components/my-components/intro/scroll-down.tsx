'use client'

import { Button } from "@chakra-ui/react";
import { RiArrowDownDoubleFill } from "react-icons/ri";

export function ScrollDownBtn() {
    function handleScroll() {
        window.scrollTo({
            top: window.innerHeight,
            behavior: 'smooth',
        })
    }

    return (
        <Button
            onClick={handleScroll}
            color='gray.300'
            size='lg'
            bg='transparent'
            boxSizing='content-box'
            as={RiArrowDownDoubleFill}
        />
    )
}