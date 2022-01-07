import { useContext, useEffect, useState } from "react"
import { useHistory } from "react-router-dom"
import GlobalStateContext from "../context/GlobalContext/GlobalStateContext"
import { goToDetailPage } from "../routes/coordinator"

const HomePage = () => {
    const history = useHistory()
    const [detailsPokemon, pokedex, setPokedex] = useContext(GlobalStateContext)
    
    const addPokemon = (name, photo) => {
        const newPokedex = [...pokedex, { name, photo }]
        setPokedex(newPokedex)
    }



    const CardPokemon = detailsPokemon.map((pokemon) => {
        return (
            <div>
                <img src={pokemon.sprites.front_default} alt="foto do pokemon" />
                <p>{pokemon.name}</p>
                <button onClick={() => addPokemon(pokemon.name, pokemon.sprites.front_default)}>adicionar na pokedex</button>
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