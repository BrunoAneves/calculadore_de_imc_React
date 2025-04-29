'use client';
import { useState } from "react";
import { S } from "./style"



function FormCalculator({ data }) {
    const { setInfo } = data
    const [peso, setPeso] = useState('')
    const [altura, setAltura] = useState('')
    const [error, setError] = useState('')



    const handleError = () => {
        if ((peso == 0 || peso > 350) && (altura == 0 || altura > 250)) {
            setError('Digite uma altura e um peso correto')
        } else if (peso == 0 || peso > 350) {
            setError('Digite um peso correto')
        } else {
            setError('Digite uma altura correta')
        }

        setTimeout(() => {
            setError('')
        }, 4000)
    }


    const handleSubmit = (e) => {
        e.preventDefault()
        if (peso == 0 || peso > 350 || altura == 0 || altura > 300) return handleError()
        const alturaMetro = altura / 100
        const total = peso / (alturaMetro * alturaMetro)

        setInfo({ imc: total.toFixed(2), peso: peso, altura: altura })


    }

    return (

        <S.Form onSubmit={handleSubmit}>
            <label htmlFor="peso">
                <S.Span>Peso</S.Span>
                <S.Input id="peso" type="number" name='Peso' placeholder="KG" value={peso.toString() || ''} onChange={(e) => setPeso(e.target.value)} />
            </ label>
            <label htmlFor="altura">
                <S.Span>Altura</S.Span>
                <S.Input id="altura" type="number" name='Altura' placeholder="CM" value={altura.toString() || ''} onChange={(e) => setAltura(e.target.value)} />
            </ label>

            <S.Div>{error}</S.Div>
            <S.Button type="submit">Calcular</S.Button>

        </S.Form>
    )
}

export { FormCalculator }