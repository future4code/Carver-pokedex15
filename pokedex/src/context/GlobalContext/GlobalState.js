import React, { useEffect, useState } from "react";
import axios from "axios";
import GlobalStateContext from "./GlobalStateContext"

const GlobalState = (props) => {
    const [pokemons, setPokemons] = useState([])
    let pokedex = []
    const [detalhesPokemon, setDetalhesPokemon] = useState([])

    useEffect(() => {
        pegarPokemons()
    }, [])

    useEffect(() => {

        const getDetails = async () => {
            const newDetailsPokemon = []

            for (let pokemon of pokemons) {
                try{
                    const {data} = await axios.get(pokemon.url)
                    newDetailsPokemon.push(data)
                }catch(error){
                    console.log(error)
                }
            }

            setDetalhesPokemon(newDetailsPokemon)
        }

        getDetails()

    }, [pokemons])



    //PRIMEIRA REQUISIÇÃO - RETORNA ARRAY DE NOMES E URLS

    const pegarPokemons = async () => {
        try {
            const response = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=20&offset=1")
            setPokemons(response.data.results)
        } catch (error) {
            alert("Deu erro!")
        }
    }


    return (
        <GlobalStateContext.Provider value={[detalhesPokemon, pokedex]}>
            {props.children}
        </GlobalStateContext.Provider>
    )
}

export default GlobalState