import styled from 'styled-components';
import tags from './tags.json'

const ContainerTags = styled.div`
    margin-top: 3.5em;
    display: flex;
    gap: 3em;
    p {
        color: white;
        font-size: 24px;
    }
`
const TagsEstilizadas = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5em  
`

const BotaoEstilizado = styled.button`
    font-size: 24px;
    color: #FFFFFF;
    background: rgba(217, 217, 217, 0.3);
    border-radius: 10px;
    height: 60px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    padding: 0px 12px;
    box-sizing: border-box;
    border: 2px solid transparent;
    &:hover {
      border-color: #C98CF1;
    }
    `

const Tags = () => {
    return <ContainerTags>
     <p>Busque por tags:</p>
     <TagsEstilizadas>{tags.map(tag => <BotaoEstilizado key={tag.id}>{tag.titulo}</BotaoEstilizado>)}</TagsEstilizadas>
    </ContainerTags>
   
}
export default Tags;