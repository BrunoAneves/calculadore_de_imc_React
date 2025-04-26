'use client'
import { S } from "./style"


function Input({ nome }) {
    return (
        <label>
            <span>{nome}</span>
            <S.Input type="number" name={nome} />
        </ label>)
}


export { Input } 