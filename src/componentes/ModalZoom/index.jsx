import styled from "styled-components";
import Imagem from "../Galeria/Imagem";

const OverLay = styled.div`
  background-color: rgba(0, 0, 0, 0.7);
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
`;
const DialogEstilizado = styled.dialog`
  position: absolute;
  top: 294px;
  background: transparent;
  padding: 0;
  width: 1156px;
  display: flex;
  border: none;
  justify-content: center;
`;

const BotaoIcone = styled.button`
  position: relative;
  top: -322px;
  right: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

const ModalZoom = ({ foto, aoFechar, aoAlternarFavorito }) => {
  return (
    <>
      {foto && (
        <>
          <OverLay />
          <DialogEstilizado open={!!foto}>
            <Imagem
              foto={foto}
              expandido={true}
              aoFavoritar={aoAlternarFavorito}
            />
            {/* <form method="dialog"> */}
            <BotaoIcone /*formMethod="dialog"*/ onClick={aoFechar}>
              <img src="/icones/fechar.png" alt="icone de fechar" />
            </BotaoIcone>
            {/* </form> */}
          </DialogEstilizado>
        </>
      )}
    </>
  );
};
export default ModalZoom;
