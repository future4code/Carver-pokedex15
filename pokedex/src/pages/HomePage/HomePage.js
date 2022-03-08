import React, {useContext} from "react"
import GlobalStateContext from "../../context/GlobalContext/GlobalStateContext"
import CardPokemon from "../../components/CardPokemon/CardPokemon"
import HomePageContainer from "./styled"


const HomePage = () => {
    const [detailsPokemon, ,] = useContext(GlobalStateContext)

    const CardInfoPokemon = detailsPokemon && detailsPokemon.map((pokemon) => {

        if (pokemon.isPokedex === false) {
            return (
                <CardPokemon name={pokemon.name} photo={pokemon.sprites.front_default} isPokedex={pokemon.isPokedex} button={"add"} />
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