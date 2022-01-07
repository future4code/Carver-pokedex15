import React, { useEffect, useState } from "react";
import axios from "axios";
import GlobalStateContext from "./GlobalStateContext"

const GlobalState = (props) => {
    let [pokedex, setPokedex] = useState([])
    const [pokemons, setPokemons] = useState([])
    const [detailsPokemon, setDetailsPokemon] = useState([])

    // --------------------REQUISIÇÕES
    useEffect(() => {
        pegarPokemons()
    }, [])


    // segunda requisição pra pegar os detalhes e mostrar na tela quando abre
    useEffect(() => {

        const getDetails = async () => {
            const newDetailsPokemon = []

            for (let pokemon of pokemons) {
                try {
                    const { data } = await axios.get(pokemon.url)
                    newDetailsPokemon.push(data)
                } catch (error) {
                    console.log(error)
                }
            }

            setDetailsPokemon(newDetailsPokemon)
        }

        getDetails()

    }, [pokemons])


    //primeira requisição - retorna array com nomes e urls
    const pegarPokemons = async () => {
        try {
            const response = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=20&offset=1")
            setPokemons(response.data.results)
        } catch (error) {
            alert("Deu erro!")
        }
    }

    //----------------------------- funções de remover e adicionar na pokedex



    return (
        <GlobalStateContext.Provider value={[detailsPokemon, pokedex, setPokedex]}>
            {props.children}
        </GlobalStateContext.Provider>
    )
}

export default GlobalState