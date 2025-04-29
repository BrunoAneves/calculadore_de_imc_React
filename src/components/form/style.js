
import styled from "styled-components";

const Form = styled.form`
display: flex;
flex-direction: column;
gap: 20px;
width: 400px;
max-width: calc(100% - 40px);
`

const Input = styled.input`
display: flex;
width: 100%;
padding: 15px;
font-size: 1rem;
margin-top: 10px;
border-radius: 10px;
color: black;
border-color: #e85b81;
outline-width: 2px;
outline-color: #e85b81;
-moz-appearance: textfield;
&::-webkit-outer-spin-button,
&::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
`

const Span = styled.span`
    font-weight: 700;
`


const Button = styled.button`
    background-color: #e85b81;
    border: none;
    color: #FFF;
    font-size: 1rem;
    padding: 15px;
    width: 100%;
    border-radius: 10px;
`


const Div = styled.div`
    height: 20px;
    text-align: center;
    color: crimson;
    font-size: 1.1rem;
    font-weight: 700;
`

export const S = { Input, Button, Form, Div, Span }