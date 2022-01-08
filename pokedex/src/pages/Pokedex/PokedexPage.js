import React, { useContext } from "react"
import GlobalStateContext from "../../context/GlobalContext/GlobalStateContext"
import CardPokemon from "../../components/CardPokemon/CardPokemon";
import PokedexContainer from "./styled";


const PokedexPage = () => {
    const [, pokedex,] = useContext(GlobalStateContext)

    const pokemons = pokedex && pokedex.map((poke) => {
        return (
            <CardPokemon name={poke.name} photo={poke.photo} button={"remove"} />
        )
    })

    return (
        <PokedexContainer>
            {pokemons}
        </PokedexContainer>
    )
}

export default PokedexPage