import React, { useContext, useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom"
import { Container, Detalhes, Home, Pokedex, } from "./styled"
import { goToPokedexPage, goToHomePage, goToBack } from '../../routes/coordinator'
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import GlobalStateContext from "../../context/GlobalContext/GlobalStateContext";

const Header = () => {
    const [detailsPokemon, pokedex, setPokedex] = useContext(GlobalStateContext)
    const history = useHistory()
    const location = useLocation()
    const name = (location.pathname.split("/"))
    const [text, setText] = useState(true)
    const [pokemon, setPokemon] = useState([])


    useEffect(() => {
        pegarPokemon()

        if (pokemon.isPokedex === false) {
            setText("Adicionar")
        } else {
            setText("Remover")
        }

    }, [pokemon.isPokedex])

    const pegarPokemon = () => {
        const chosenPokemon = detailsPokemon.filter((pokemon) => {
            return pokemon.name === name[2]
        })
        setPokemon(chosenPokemon)
        console.log(pokemon)
    }



    const addOrRemovePokemon = (name, photo, isPokedex) => {
        console.log(name, photo, isPokedex)
        console.log(pokedex)

        if (isPokedex === false) {
            // setText(!text)

            const index = (detailsPokemon.findIndex((pokemon) => { return pokemon.name === name }))
            detailsPokemon[index].isPokedex = true
            const newPokedex = [...pokedex, { name, photo, isPokedex: true }]
            setPokedex(newPokedex)
            console.log(pokedex)


        } else {
            // setText(!text)

            // index de remover
            const indexRemove = (pokedex.findIndex((pokemon) => pokemon.name === name))
            const newPokedex = [...pokedex];
            newPokedex.splice(indexRemove, 1)
            setPokedex(newPokedex)
            console.log(pokedex)

            const indexRender = (detailsPokemon.findIndex((pokemon) => { return pokemon.name === name }))
            detailsPokemon[indexRender].isPokedex = false
        }

    }

    console.log(pokedex)

    const addPokemon = (name, photo, isPokedex) => {
        const index = (detailsPokemon.findIndex((pokemon) => { return pokemon.name === name }))
        detailsPokemon[index].isPokedex = true
        const newPokedex = [...pokedex, { name, photo, isPokedex: true }]
        setPokedex(newPokedex)

    }
    // pokedex.map(())


    // }

    //preciso procurar pra ver se o pokemon ta no pokedex. se estiver, aparecer pra remover, se não tiver aparecer pra adicionar

    return (

        /*
            se for home => VER MINHA POKEDEX
            se for pokedex => VOLTAR PARA LISTA DE POKEMONS
            se for página de detalhes => VOLTAR ------ NOME DO POKEMON ------ ADICIONAR/REMOVE DA POKEDEX
        */

        <Container>

            {location.pathname === "/" ?

                <Home>
                    <Button color="inherit" onClick={() => goToPokedexPage(history)}>POKEBOLA</Button>

                    <Typography variant="h6">
                        POKEDEX
                    </Typography>

                </Home> : location.pathname === "/pokedex" ?

                    <Pokedex>
                        <Button color="inherit" onClick={() => goToHomePage(history)}>HOMEPAGE</Button>

                        <Typography variant="h6">
                            POKEDEX
                        </Typography>

                    </Pokedex> :
                    <Detalhes>
                        <Button color="inherit" onClick={() => goToBack(history)}>VOLTAR</Button>

                        <Typography variant="h6">
                            {name[2].toUpperCase()}
                        </Typography>

                        <Button color="inherit" onClick={() => addOrRemovePokemon(pokemon.name, pokemon.sprites.front_default, pokemon.isPokedex)}>{text === "Adicionar" ? <> Adicionar </> : <>Remover</>}</Button>
                    </Detalhes>}
        </Container>
    )
}

export default Header