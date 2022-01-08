import { useContext } from "react"
import { useHistory } from "react-router-dom"
import GlobalStateContext from "../context/GlobalContext/GlobalStateContext"
import { goToDetailPage } from "../routes/coordinator"

const PokedexPage = () => {
    const [detailsPokemon, pokedex, setPokedex] = useContext(GlobalStateContext)
    const history = useHistory()

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