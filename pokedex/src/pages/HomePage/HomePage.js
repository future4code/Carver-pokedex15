import React from "react"
import { useContext } from "react"
import { useHistory } from "react-router-dom"
import GlobalStateContext from "../../context/GlobalContext/GlobalStateContext"
import HomePageContainer from "./styled"
import CardPokemon from "../../components/CardPokemon/CardPokemon"


const HomePage = () => {
    const history = useHistory()
    const [detailsPokemon, pokedex, setPokedex] = useContext(GlobalStateContext)


    const CardInfoPokemon = detailsPokemon && detailsPokemon.map((pokemon) => {
        if (pokemon.isPokedex === false) {
            return (
                <CardPokemon name={pokemon.name} photo={pokemon.sprites.front_default} isPokedex={pokemon.isPokedex} />
            )
        }


    })

    return (
        <HomePageContainer>
            {CardInfoPokemon}
        </HomePageContainer>

    )
}
export default HomePage