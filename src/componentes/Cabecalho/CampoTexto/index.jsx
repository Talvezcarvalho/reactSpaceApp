import styled from "styled-components"
import search from '/public/imagens/Vector.png'

const ContainerEstilizado = styled.div`
    width: 34em;
    max-height: 3em;
    position: relative;
    display: inline-block;
    margin-right: 1.5em;
`
const CampoTextoEstilizado = styled.input`
    height: 3.5em;
    width: 32em;
    padding: 1.2px 10px;
    border-radius: 10px;
    border: 2px solid #c98CF1;
    background: transparent;
    color: #d9d9d9;
    font-weight: 400;
    font-size: 20;
    line-height: 20px;
`
const IconeLupa = styled.img`
position: absolute;
top: 21px;
right: 30px;
width: 1.3em;
height: 1.3em;
`

const CampoTexto = () => {
    return (
        <ContainerEstilizado>
            <CampoTextoEstilizado placeholder="O que você procura?
">
            </CampoTextoEstilizado>
            <span>
                <IconeLupa src={search} alt="Lupa"/>
            </span>
        </ContainerEstilizado>
    )
}
export default CampoTexto;