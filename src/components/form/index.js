'use client';
import { useState } from "react";
import { S } from "./style"


function FormCalculator({ data }) {
    const [peso, setPeso] = useState('')
    const [altura, setAltura] = useState('')





    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(peso)
        console.log(altura)
        setPeso('')
    }

    return (

        <form onSubmit={handleSubmit}>
            <label htmlFor="peso">
                <span>Peso</span>
                <S.Input id="peso" type="number" name='Peso' value={peso} onChange={(e) => setPeso(e.target.value)} />
            </ label>
            <label htmlFor="altura">
                <span>Altura</span>
                <S.Input id="altura" type="number" name='Altura' value={altura} onChange={(e) => setAltura(e.target.value)} />
            </ label>
            {/* <Input nome='peso' onChange={(e) => setPeso(e.target.value)} ></Input>
            <Input nome='altura'></Input> */}

            <button type="submit">Calcular</button>
        </form>
    )
}

export { FormCalculator }