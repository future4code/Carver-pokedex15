import { useContext, useEffect } from "react"
import { useHistory } from "react-router-dom"
import GlobalStateContext from "../context/GlobalContext/GlobalStateContext"
import { goToDetailPage } from "../routes/coordinator"

const HomePage = () => {
    const history = useHistory()
    const [detalhesPokemons, pokedex] = useContext(GlobalStateContext)

    const sendDetails = (name, photo) => {
        pokedex.push({name, photo})
        console.log(pokedex)
    }

    const CardPokemon = detalhesPokemons.map((pokemon) => {
        return (
            <div>
                <img src={pokemon.sprites.front_default} alt="foto do pokemon" />
                <p>{pokemon.name}</p>
                <button onClick={() => sendDetails(pokemon.name, pokemon.sprites.front_default)}>adicionar na pokedex</button>
                <button onClick={() => goToDetailPage(history, `${pokemon.name}`)}>Ver detalhes</button>
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