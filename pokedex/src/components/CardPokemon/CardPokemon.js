import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import GlobalStateContext from "../../context/GlobalContext/GlobalStateContext";
import { ButtonCard, CardContainer, CardText, ImgContainer, ImgPokemon } from "./styled";
import { goToDetailPage } from "../../routes/coordinator";

const CardPokemon = (props) => {

    const history = useHistory()
    const [detailsPokemon, pokedex, setPokedex] = useContext(GlobalStateContext)
    console.log(pokedex)

    const addPokemon = (name, photo, isPokedex) => {
        const index = (detailsPokemon.findIndex((pokemon) => {return pokemon.name === name}))
        detailsPokemon[index].isPokedex = true
        const newPokedex = [...pokedex, {name, photo, isPokedex: true }]
        setPokedex(newPokedex)
    }

    return (
        <CardContainer>
            <ImgContainer>
                <ImgPokemon src={props.photo} />
                <CardText>{props.name}
                <ButtonCard>
                <button onClick={() => addPokemon(props.name, props.photo, props.isPokedex)}>Adicionar Pokemon</button>
                <button onClick={() => goToDetailPage(history, `${props.name}`)}>Ver detalhes</button>
                </ButtonCard>
                </CardText>
            </ImgContainer>
        </CardContainer>
    )
}
export default CardPokemon