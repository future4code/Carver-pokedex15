import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { goToDetailPage } from "../../routes/coordinator";
import { ButtonCard, CardContainer, CardText, ImgContainer, ImgPokemon } from "./styled";
import GlobalStateContext from "../../context/GlobalContext/GlobalStateContext";

const CardPokemon = (props) => {

    const history = useHistory()
    const [detailsPokemon, pokedex, setPokedex] = useContext(GlobalStateContext)

    const addPokemon = (name, photo, isPokedex) => {

        const index = (detailsPokemon.findIndex((pokemon) => { return pokemon.name === name }))
        detailsPokemon[index].isPokedex = true
        const newPokedex = [...pokedex, { name, photo, isPokedex: true }]
        setPokedex(newPokedex)

    }

    const removePoke = (name) => {
        
        // index de remover
        const indexRemove = (pokedex.findIndex((pokemon) => pokemon.name === name))
        const newPokedex = [...pokedex];
        newPokedex.splice(indexRemove, 1)
        setPokedex(newPokedex)

        // index da renderização
        const indexRender = (detailsPokemon.findIndex((pokemon) => { return pokemon.name === name }))
        detailsPokemon[indexRender].isPokedex = false
    }

    return (
        <CardContainer>

            <ImgContainer>

                <ImgPokemon src={props.photo} />

                <CardText>{props.name}

                    <ButtonCard>

                        {props.button === "add" ?
                        <button onClick={() => addPokemon(props.name, props.photo, props.isPokedex)}>Adicionar Pokemon</button> :
                        <button onClick={() => removePoke(props.name)}>Remover</button>}

                        <button onClick={() => goToDetailPage(history, `${props.name}`)}>Ver detalhes</button>

                    </ButtonCard>

                </CardText>

            </ImgContainer>

        </CardContainer>
    )
}
export default CardPokemon