import styled from "styled-components";
import Titulo from "../Titulo";
import Tags from "./Tags";
import Populares from "./Populares";
import Imagem from "./Imagem";

const GaleriaContainer = styled.div`
  display: flex;
  gap: 24px;
`
const SecaoFluida = styled.section`
  flex-grow: 1;
`;

const ImagensGaleria = styled.section`
  display: flex;
  flex-wrap: wrap;
  gap: 1em;
  padding: 0;
  margin: 0;
`;

const Galeria = ({ fotos = [], aoFotoSelecionada }) => {
  return (
    <>
      <Tags />
      <GaleriaContainer>
        <SecaoFluida>
          <Titulo>Navegue pela galeria</Titulo>
          <ImagensGaleria>
            {fotos.map((foto) => 
                <Imagem
                  aoZoomSolicitado = {aoFotoSelecionada}
                  key={foto.id}
                  foto={foto}
                />
            )}
          </ImagensGaleria>
        </SecaoFluida>
        <Populares />
      </GaleriaContainer>
    </>
  );
};
export default Galeria;
