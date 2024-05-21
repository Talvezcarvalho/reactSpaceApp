import styled from "styled-components"
import Bannerimg from '../../assets/banner.png'

const FigureEstilizada = styled.figure`
    background-image: ${props =>`url(${props.$backgroundImage})`};
    flex-grow: 1;
    background-repeat: no-repeat;
    border-radius: 10px;
    display: flex;
    align-items: center;
    min-height: 328px;
    margin: 0;
    background-size: cover;
`
const TituloEstilizado = styled.h1`
    font-weight: 400; 
    font-size: 40px;
    max-width: 300px;
    line-height: 48px;
    color: #FFFFFF;
    padding: 0 1.5em;
    text-align: left;
        `

const Banner = ( {children, backgroundImage} ) => {
    return(
        <FigureEstilizada
        $backgroundImage={backgroundImage}>
            <TituloEstilizado>{children}</TituloEstilizado>
        </FigureEstilizada>
    )
}
export default Banner;