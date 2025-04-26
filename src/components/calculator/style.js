import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";


const StyledCalculator = styled.div`

color: ${({ $color }) => $color ? $color : 'black'};

margin: 0 auto;
display: flex;
flex-direction: column;
align-items:center;
justify-content: center;
width: 1000px;
height: 800px;
border-radius: 20px;
background: white;
`

// tag a 
const StyledLink = styled(Link)`

    `
// tag img
const StyledImg = styled(Image)`
    `


export { StyledCalculator }