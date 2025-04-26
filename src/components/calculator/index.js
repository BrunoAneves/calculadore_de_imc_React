'use client'
import React, { useState } from "react"
import { FormCalculator } from "../form"
import { Resultado } from "../resultado"


import { StyledCalculator } from "./style"

function Calculator() {
    const [info, setInfo] = useState();

    return <>
        <StyledCalculator >
            <FormCalculator data={{ setInfo: setInfo }} />
            <Resultado />
        </StyledCalculator>
    </>
}

export { Calculator }