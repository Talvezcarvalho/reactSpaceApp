import styled from "styled-components";

const Imagem = ({ foto, expandir }) => {


    const aoClicar = () => {
        expandir()
    }

    const FiguraEstilizada = styled.figure`
        list-style: none;
        height: 336px;
        margin: 0;
        display: flex;
        flex-direction: column;
        & > img {
            max-width: 100%;
            border-radius: 20px 20px 0 0;
        }
    `

    const FigCaptionEstilizado = styled.figcaption `
        background-color: #001634;
        display: flex;
        justify-content: space-between;
        color: #FFFFFF;
        padding: 1.5em;
    `
    const SubTitulosEstilizados = styled.div`
        h3,
        h4 {
            margin: 0;
            font-size: 16px;
        }
        h3 {font-family: GandhiSansBold;}
        h4 {flex-grow: 1;}
    `
    const FooterEstilizado = styled.footer`
        align-self: flex-end;
    `
    return (<FiguraEstilizada>
        <img src={foto.path} alt="imagem"></img>
        <FigCaptionEstilizado>
            <SubTitulosEstilizados>
                <h3>{foto.titulo}</h3>
                <h4>fonte</h4>
            </SubTitulosEstilizados> 
            <FooterEstilizado>
                <button>Favorito</button>
                <button onClick={aoClicar}>Expandir</button>
            </FooterEstilizado>
        </FigCaptionEstilizado>
    </FiguraEstilizada>)
}

export default Imagem