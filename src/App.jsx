import { styled } from "styled-components";
import EstilosGlobais from "./componentes/estilosGlobais";
import Cabecalho from "./componentes/Cabecalho";
import BarraLateral from "./componentes/BarraLateral";
import Banner from "./componentes/Banner";
import Bannerimg from "./assets/banner.png";
import Galeria from "./componentes/Galeria";
import fotos from "./fotos.json";
import { useState } from "react";
import ModalZoom from "./componentes/ModalZoom";

const AppContainer = styled.div`
  width: 1440px;
  margin: 0 auto;
  max-width: 100%;
`;
const MainContainer = styled.main`
  display: flex;
  gap: 3em;
`;

const ConteudoGaleria = styled.section`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

const FundoGradiente = styled.div`
  background: linear-gradient(
    174.61deg,
    #041833 4.16%,
    #04244f 48%,
    #154580 96.76%
  );
  width: 100%;
  min-height: 100vh;
`;
const App = () => {
  const [fotosDaGaleria, setfotosDaGaleria] = useState(fotos);
  const [fotoSelecionada, setFotoSelecionada] = useState(null);

  const aoAlternarFavorito = (foto) => {
    if(foto.id === fotoSelecionada?.id) {
      setFotoSelecionada({
        ...fotoSelecionada,
        favorita: !fotoSelecionada.favorita
      })
    }


    setfotosDaGaleria(fotosDaGaleria.map(fotoDaGaleria => {
      return {
        ...fotoDaGaleria,
        favorita: fotoDaGaleria.id === foto.id ? !foto.favorita : fotoDaGaleria.favorita
      }
    }))
  }
  return (
    <FundoGradiente>
      <EstilosGlobais />
      <AppContainer>
        <Cabecalho />
        <MainContainer>
          <BarraLateral />
          <ConteudoGaleria>
            <Banner backgroundImage={Bannerimg}>
              A galeria mais completa de fotos do espaço!
            </Banner>
            <Galeria
              fotos={fotosDaGaleria}
              aoAlternarFavorito= {fav =>aoAlternarFavorito(fav)}
              aoFotoSelecionada={foto => setFotoSelecionada(foto)}
            />
          </ConteudoGaleria>
        </MainContainer>
      </AppContainer>
      <ModalZoom 
      foto={fotoSelecionada}
      aoFechar={() => setFotoSelecionada(null)}
      aoAlternarFavorito={fav =>aoAlternarFavorito(fav)}
       />
    </FundoGradiente>
  );
};

export default App;
