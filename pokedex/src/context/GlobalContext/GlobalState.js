import React, { useEffect, useState } from "react";
import axios from "axios";
import GlobalStateContext from "./GlobalStateContext"

const GlobalState = (props) => {
    let [pokedex, setPokedex] = useState([])
    const [pokemons, setPokemons] = useState([])
    const [detailsPokemon, setDetailsPokemon] = useState([])

    // --------------------REQUISIÇÕES
    useEffect(() => {
        getPokemons()
    }, [])


    // segunda requisição pra pegar os detalhes e mostrar na tela quando abre
    useEffect(() => {

        const getDetails = async () => {
            const newDetailsPokemon = []

            for (let pokemon of pokemons) {
                try {
                    const { data } = await axios.get(pokemon.url)
                    const newData = { ...data, isPokedex: false }
                    newDetailsPokemon.push(newData)

                } catch (error) {
                    alert(error.response.message)
                }
            }

            setDetailsPokemon(newDetailsPokemon)
        }

        getDetails()

    }, [pokemons])


    //primeira requisição - retorna array com nomes e urls
    const getPokemons = async () => {

        try {
            const response = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=20&offset=24")

            setPokemons(response.data.results)
        } catch (error) {
            alert(error.response.message)
        }

    }

    return (
        <GlobalStateContext.Provider value={[detailsPokemon, pokedex, setPokedex]}>
            {props.children}
        </GlobalStateContext.Provider>
    )
}

export default GlobalState