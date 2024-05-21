import styled from "styled-components";
import Titulo from "../Titulo";
import Tags from "./Tags";
import Populares from "./Populares";
import Imagem from "./Imagem";
import { useState } from "react";

const GaleriaContainer = styled.div`
  display: flex;
`;
const SecaoFluida = styled.section`
  flex-grow: 1;
`;

const ListaImagensGaleria = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 1em;
  padding: 0;
  margin: 0;
  list-style: none;
  li {
    flex-grow: 1;
    width: ${({ expandido }) => (expandido ? "90%" : "460px")};
  }
`;

const Galeria = ({ fotos = [] }) => {
  const [expandido, setExpandido] = useState(false);
  return (
    <>
      <Tags />
      <GaleriaContainer>
        <SecaoFluida>
          <Titulo>Navegue pela galeria</Titulo>
          <ListaImagensGaleria expandido={expandido}>
            {fotos.map((foto) => (
              <li>
                <Imagem
                  foto={foto}
                  expandir={() => {
                    setExpandido(!expandido); 
                  }}
                />
              </li>
            ))}
          </ListaImagensGaleria>
        </SecaoFluida>
        <Populares />
      </GaleriaContainer>
    </>
  );
};
export default Galeria;
