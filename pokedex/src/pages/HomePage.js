import { useContext } from "react"
import { useHistory } from "react-router-dom"
import GlobalStateContext from "../context/GlobalContext/GlobalStateContext"
import { goToDetailPage } from "../routes/coordinator"


const HomePage = () => {
    const history = useHistory()
    const detalhesPokemons = useContext(GlobalStateContext)

    const CardPokemon = detalhesPokemons && detalhesPokemons.map((pokemon) => {
        return (
            <div>
                <img src={pokemon.sprites.front_default} alt="foto do pokemon" />
                <p>{pokemon.name}</p>
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