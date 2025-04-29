'use client'
import * as S from './style'

function Result({ data }) {
    const { imc, peso, altura } = data
    if (!imc || !peso || !altura) return null;
    return (
        <>
            <S.Result>
                <S.ResultLi>
                    <S.ResultDiv>Peso</S.ResultDiv>
                    <S.ResultDiv>Altura</S.ResultDiv>
                    <S.ResultDiv>IMC</S.ResultDiv>

                </S.ResultLi>


                <S.ResultLi>
                    <S.ResultDiv>{peso}</S.ResultDiv>
                    <S.ResultDiv>{altura}</S.ResultDiv>
                    <S.ResultDiv>{imc}</S.ResultDiv>

                </S.ResultLi>


            </S.Result>

            <S.Ul>
                <S.Li>
                    <S.Div>IMC</S.Div>
                    <S.Div>Classificação</S.Div>

                </S.Li>
                <S.Li>
                    <S.Div>Menos de 17</S.Div>
                    <S.Div>Muito abaixo do peso</S.Div>

                </S.Li> <S.Li>
                    <S.Div>Entre 17 e 18,49</S.Div>
                    <S.Div>Abaixo do peso</S.Div>

                </S.Li> <S.Li>
                    <S.Div>Entre 18,5 e 24,99</S.Div>
                    <S.Div>Peso normal</S.Div>

                </S.Li> <S.Li>
                    <S.Div>Entre 25 e 29,99</S.Div>
                    <S.Div>Acima do peso</S.Div>

                </S.Li> <S.Li>
                    <S.Div>Entre 30 e 34,99</S.Div>
                    <S.Div>Obesidade I</S.Div>

                </S.Li> <S.Li>
                    <S.Div>Entre 35 e 39,99</S.Div>
                    <S.Div>Obesidade II (severa)</S.Div>

                </S.Li> <S.Li>
                    <S.Div>Acima de 40</S.Div>
                    <S.Div>Obesidade III (mórbida)</S.Div>

                </S.Li>


            </S.Ul>


        </>

    )
}

export { Result }