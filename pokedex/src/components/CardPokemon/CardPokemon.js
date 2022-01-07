import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import GlobalStateContext from "../../context/GlobalContext/GlobalStateContext";
import { ButtonCard, CardContainer, CardText, ImgContainer, ImgPokemon } from "./styled";
import { goToDetailPage } from "../../routes/coordinator";

const CardPokemon = (props) => {

    const history = useHistory()
    const [detailsPokemon, pokedex, setPokedex] = useContext(GlobalStateContext)
    console.log(pokedex)
    const addPokemon = (name, photo) => {
        console.log(name, photo)
        const newPokedex = [...pokedex, { name, photo }]
        console.log(newPokedex)

        setPokedex(newPokedex)
        console.log(pokedex)

    }

    return (
        <CardContainer>
            <ImgContainer>
                <ImgPokemon src={props.photo} />
                <CardText>{props.name}
                <ButtonCard>
                <button onClick={() => addPokemon(props.name, props.photo)}>Adicionar Pokemon</button>
                <button onClick={() => goToDetailPage(history, `${props.name}`)}>Ver detalhes</button>
                </ButtonCard>
                </CardText>
            </ImgContainer>
        </CardContainer>
    )
}
export default CardPokemon