import { useContext } from "react"
import UrlsContext from "../context/UrlsContext"

const HomePage = () => {
    const detalhesPokemons = useContext(UrlsContext)
    console.log(detalhesPokemons)

    const CardPokemon = detalhesPokemons && detalhesPokemons.map((pokemon) => {
        return (
            <div>
                <img src={pokemon.sprites.front_default} alt="foto do pokemon" />
                <p>{pokemon.name}</p>
            </div>
        )
    })

    return (
        <div>
            {CardPokemon}
        </div>
    )
}

export default HomePage