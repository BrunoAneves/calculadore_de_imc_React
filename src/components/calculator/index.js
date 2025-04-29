'use client'
import React, { useState } from "react"
import { FormCalculator } from "../form"
import { Result } from "../result"


import { StyledCalculator } from "./style"

function Calculator() {
    const [info, setInfo] = useState();

    return <>
        <StyledCalculator >
            <FormCalculator data={{ setInfo: setInfo }} />
            <Result data={{ ...info }} />
        </StyledCalculator>
    </>
}

export { Calculator }