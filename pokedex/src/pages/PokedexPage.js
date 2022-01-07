import { useContext } from "react"
import { useHistory } from "react-router-dom"
import GlobalStateContext from "../context/GlobalContext/GlobalStateContext"
import { goToDetailPage } from "../routes/coordinator"

const PokedexPage = () => {
    const [, pokedex, setPokedex] = useContext(GlobalStateContext)
    const history = useHistory()

    const removePoke = (name) => {
        const index = (pokedex.findIndex((pokemon) => pokemon.name === name))
        const newPokedex = [...pokedex];
        newPokedex.splice(index, 1)
        setPokedex(newPokedex)
    }

    const pokemons = pokedex && pokedex.map((poke) => {
        return (
            <div>
                <img src={poke.photo} alt="foto do pokemon" />
                <p>Nome: {poke.name}</p>
                <button onClick={() => removePoke(poke.name)}>Remover</button>
                <button onClick={() => goToDetailPage(history, `${poke.name}`)}>Detalhes</button>
            </div>
        )
    })
    return (
        <div>
            {pokemons}
        </div>
    )
}

export default PokedexPage