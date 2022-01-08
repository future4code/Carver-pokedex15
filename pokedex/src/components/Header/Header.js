import React, { useContext, useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom"
import { Container, Detalhes, Home, Pokedex, } from "./styled"
import { goToPokedexPage, goToHomePage, goToBack } from '../../routes/coordinator'
import { Typography, Button } from '@material-ui/core';
import GlobalStateContext from "../../context/GlobalContext/GlobalStateContext";

const Header = () => {
    const history = useHistory()
    const location = useLocation()
    const [detailsPokemon, ,] = useContext(GlobalStateContext)
    const name = (location.pathname.split("/"))
    const [pokemon, setPokemon] = useState([])


    useEffect(() => {

        const getPokemon = () => {
            const chosenPokemon = detailsPokemon.filter((pokemon) => {
                return pokemon.name === name[2]
            })
            setPokemon(chosenPokemon)
            console.log(pokemon)
        }

        getPokemon()

    }, [])

    return (

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

                        <Button color="inherit" onClick={() => goToHomePage(history)}>HOMEPAGE</Button>

                    </Detalhes>}
        </Container>
    )
}

export default Header