import React, { useEffect, useState } from "react";
import axios from "axios";
import GlobalStateContext from "./GlobalStateContext"

const GlobalState = (props) => {
    const [pokemons, setPokemons] = useState([])
    const detalhesPokemon = []

    useEffect(() => {
        pegarPokemons()
    }, [])

    //PRIMEIRA REQUISIÇÃO - RETORNA ARRAY DE NOMES E URLS

    const pegarPokemons = async () => {
        try {
            const response = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=20&offset=1")
            setPokemons(response.data.results)
        } catch (error) {
            alert("Deu erro!")
        }
    }

    // PEGA DETALHES DOS POKEMONS 

    const pegarDetalhesPokemons = async (url) => {
        try {
            const response = await axios.get(url)
            detalhesPokemon.push(response.data)

        } catch (error) {
            alert(error.response.message)
        }
    }

    // SALVA ARRAY DE URLS
    const urlsPokemons = pokemons && pokemons.map((pokemon) => {
        return pokemon.url
    })


    //FAZ REQUISIÇÃO COM AS URLS E SALVA NUM ARRAY TODAS AS INFORMAÇÕES
    urlsPokemons && urlsPokemons.map((url) => {
        pegarDetalhesPokemons(url)
    })

    return (
        <GlobalStateContext.Provider value={detalhesPokemon}>
            {props.children}
        </GlobalStateContext.Provider>
    )
}

export default GlobalState