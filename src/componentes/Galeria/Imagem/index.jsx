import { useState } from "react";
import styled from "styled-components";
import BotaoIcone from "../../BotaoIcone";


const Figure = styled.figure`
  width: ${props => props.$expandido ? '1156px' : '460px'};
  height: ${props => props.$expandido ? '740px' : '336px'};
  max-width: 100%;
  margin: 0;
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  & > img {
    max-width: 100%;
    border-radius: 20px 20px 0 0;
  }
`;
const FigCaptionEstilizado = styled.figcaption`
  background-color: #001634;
  display: flex;
  justify-content: space-between;
  color: #ffffff;
  padding: 1.5em;
  border-radius: 0 0 20px 20px;
`;
const SubTitulos = styled.div`
  h3,
  h4 {
    margin: 0;
    font-size: 16px;
  }
  h3 {
    font-family: GandhiSansBold;
  }
  h4 {
    flex-grow: 1;
  }
`;
const Rodape = styled.footer`
  display: flex ;
  justify-content: space-between;
  align-items: center;
  align-self: flex-end;
`;
 
const Imagem = ({ foto, aoZoomSolicitado, aoFavoritar, expandido }) => {
    //const [expandido, setExpandido] = useState(false);

    const iconeFavorito = foto.favorita ? "/icones/favorito-ativo.png" : "/icones/favorito.png";

  return (
    <Figure $expandido= {expandido} >
      <img src={foto.path} alt="imagem"></img>
      <FigCaptionEstilizado>
        <SubTitulos>
          <h3>{foto.titulo}</h3>
          <h4>{foto.fonte}</h4>
        </SubTitulos>
        <Rodape>
          <BotaoIcone onClick={ () => aoFavoritar(foto)}><img src={iconeFavorito} alt="icone"/></BotaoIcone>
          {!expandido ? (<BotaoIcone onClick={() => aoZoomSolicitado(foto)}><img src="/icones/expandir.png" alt="icone"/></BotaoIcone>) : null}
        </Rodape>
      </FigCaptionEstilizado>
    </Figure>   
  );
};

export default Imagem;
