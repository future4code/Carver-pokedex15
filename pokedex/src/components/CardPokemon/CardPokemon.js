import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import GlobalStateContext from "../../context/GlobalContext/GlobalStateContext";
import { ButtonCard, CardContainer, ImgContainer, ImgPokemon } from "./styled";
import { goToDetailPage } from "../../routes/coordinator";

const CardPokemon = (props) => {

    const history = useHistory()
    const detalhesPokemons = useContext(GlobalStateContext)

    return (
        <CardContainer>
            <ImgContainer>
        <ImgPokemon src={props.photo} />
        <p>{props.name}</p>
        <button onClick={}></button>
        <ButtonCard onClick={() => goToDetailPage(history, `${detalhesPokemons.name}`)}>Ver detalhes</ButtonCard>
        </ImgContainer>    
        </CardContainer>
    )
}
export default CardPokemon