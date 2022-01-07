import { Button } from "@material-ui/core"
import React from "react"
import { useContext, useEffect, useState } from "react"
import { useHistory } from "react-router-dom"
import GlobalStateContext from "../context/GlobalContext/GlobalStateContext"
import { goToDetailPage } from "../routes/coordinator"

const HomePage = () => {
    const history = useHistory()
    const [detailsPokemon, pokedex, setPokedex] = useContext(GlobalStateContext)

    const addPokemon = (name, photo, isPokedex) => {
        const index = (detailsPokemon.findIndex((pokemon) => {return pokemon.name === name}))
        detailsPokemon[index].isPokedex = true
        const newPokedex = [...pokedex, {name, photo, isPokedex: true }]
        setPokedex(newPokedex)

    }


    const CardPokemon = detailsPokemon.map((pokemon) => {

        if (pokemon.isPokedex === false) {
            return (
                <div>
                    <img src={pokemon.sprites.front_default} alt="foto do pokemon" />
                    <p>{pokemon.name}</p>
                    {/* <button onClick={() => addPokemon(pokemon.name, pokemon.sprites.front_default)}>adicionar na pokedex</button> */}

                    <Button variant="contained" onClick={() => addPokemon(pokemon.name, pokemon.sprites.front_default, pokemon.isPokedex)} disabled={pokedex.includes(pokemon.order)}>Adicionar Pokemon</Button>

                    <button onClick={() => goToDetailPage(history, `${pokemon.name}`)}>Ver detalhes</button>
                </div>
            )
        }
    })

    return (
        <div>
            {CardPokemon}
        </div>
    )
}

export default HomePage