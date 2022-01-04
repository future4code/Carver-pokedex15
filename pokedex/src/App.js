import Router from "./routes/Router";
import UrlsContext from "./context/UrlsContext";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {

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
      console.log(error)
    }
  }

  // PEGA DETALHES DOS POKEMONS 

  const pegarDetalhesPokemons = async (url) => {
    try{
        const response = await axios.get(url)
        detalhesPokemon.push(response.data)
        // console.log(detalhesPokemon)

    }catch(error){
        // console.log(error.response)
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
    <UrlsContext.Provider value={detalhesPokemon}>
      <Router />
    </UrlsContext.Provider>
  );
}

export default App;
