import Image from "next/image";
import Link from "next/link";

const { default: styled } = require("styled-components");

const StyledHeader = styled.div`
   color: ${({ $color }) => $color ? $color : 'black'};
background: green;
`

// tag a 
const StyledLink = styled(Link)`

    `
// tag img
const StyledImg = styled(Image)`
    `


export { StyledHeader }