const { default: styled } = require("styled-components");

export const Ul = styled.ul`
display: flex;
flex-direction: column;
list-style: none;
margin-top: 15px;
width: 400px;
max-width: calc(100% - 40px);
`

export const Li = styled.li`
display: flex;
padding: 7px 20px ;
&:nth-child(odd){
    background-color: #f1f1f1;
}
&:first-child{
    font-size: 1.3rem;
    color:#e85b81 ;
    font-weight: 700;

}
`


export const Div = styled.div`
width: 50%;
`



export const Result = styled.ul`
display: flex;
flex-direction: column;
list-style: none;
margin-top: 15px;
width: 400px;
max-width: calc(100% - 40px);
margin-bottom: 30px;
`


export const ResultLi = styled.li`
display: flex;
&:first-child{
    border-bottom: 1px solid #e85b81 ;
    font-weight: 600;
    padding-bottom: 8px;

}`

export const ResultDiv = styled.div`
width: 33.3%;
text-align: center;
margin-top: 10px;


`
