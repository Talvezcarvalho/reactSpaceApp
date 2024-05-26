import styled from "styled-components";
import Titulo from "../../Titulo";
import Fotos from "./fotos-populares.json";

const SectionPopulares = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    `

const ListaPopulares = styled.section`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const Imagem = styled.img`
  max-width: 220px;
  height: 158px;
  border-radius: 20px;
`;

const BotaoEstilizado = styled.button`
    background-color: transparent;
    color: #fff;
    border: 2px solid;
    border-color: #C98CF1;
    padding: 12px 20px;
    font-size: 20px;
    border-radius: 10px;
    cursor: pointer;
    width: 100%;
    margin-top: 16px;

    `


const Populares = () => {
  return (
    <SectionPopulares>
      <Titulo $alinhamento="center">Populares</Titulo>
      <ListaPopulares>
        {Fotos.map((foto) => {
            return <Imagem key={foto.id} src={foto.path} alt={foto.alt}/>})}
      </ListaPopulares>
      <BotaoEstilizado>Ver mais</BotaoEstilizado>  
    </SectionPopulares>
  );
};
export default Populares;
