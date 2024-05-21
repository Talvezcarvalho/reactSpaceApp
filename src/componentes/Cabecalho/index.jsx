import styled from "styled-components"
import CampoTexto from "./CampoTexto";

const HeaderEstilizado = styled.header`
    padding: 50px 0px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    img {
        max-width: 212px;
        margin-left: 5px;
    }   
    `

const Cabecalho = () => {
    return( 
        <HeaderEstilizado>
            <img src="public\imagens\Logo.png" alt="logo"></img>
            <CampoTexto/>
        </HeaderEstilizado>
    )
}
export default Cabecalho;