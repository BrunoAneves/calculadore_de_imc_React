import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";


const StyledCalculator = styled.div`

color: ${({ $color }) => $color ? $color : 'black'};

margin:  auto;
display: flex;
flex-direction: column;
align-items:center;
justify-content: space-between;
padding-block: 50px;
width: 1000px;
max-width: calc(100% - 40px);
height: 800px;
max-height: calc(100% - 40px);
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