import { useContext } from "react"
import { useHistory } from "react-router-dom"
import GlobalStateContext from "../context/GlobalContext/GlobalStateContext"
import { goToDetailPage } from "../routes/coordinator"

const PokedexPage = () => {
    const [detalhesPokemon, pokedex] = useContext(GlobalStateContext)
    const history = useHistory()


    const pokemons = pokedex && pokedex.map((poke) => {
        return (
            <>
                <img src={poke.photo} alt="foto do pokemon"/>
                <p>Nome: {poke.name}</p>
                <button>Remover</button>
                <button onClick={() => goToDetailPage(history, `${poke.name}`)}>Detalhes</button>
            </>
        )
    })
    return (
        <div>
            {pokemons}
        </div>
    )
}

export default PokedexPage