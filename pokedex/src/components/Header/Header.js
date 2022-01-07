import React from "react";
import { useHistory, useLocation } from "react-router-dom"
import { Container, Conteudo } from "./styled"
import { goToPokedexPage, goToHomePage, goToBack } from '../../routes/coordinator'
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const Header = () => {
    const history = useHistory()
    const location = useLocation()
    
    return (

        /*
            se for home => VER MINHA POKEDEX
            se for pokedex => VOLTAR PARA LISTA DE POKEMONS
            se for página de detalhes => VOLTAR ------ NOME DO POKEMON ------ ADICIONAR/REMOVE DA POKEDEX
        */

        <Container position="sticky">
            <Conteudo>

                {location.pathname === "/" ?

                    <>
                        <Button color="inherit" onClick={() => goToPokedexPage(history)}>VER MINHA POKEDEX</Button>

                        <Typography variant="h6">
                            LISTA DE POKEMONS (VINDA DA API)
                        </Typography>

                    </> : location.pathname === "/pokedex" ?

                        <>
                            <Button color="inherit" onClick={() => goToHomePage(history)}>VOLTAR PARA LISTA DE POKEMONS</Button>

                            <Typography variant="h6">
                                LISTA DE POKEMONS (VINDA DA API)
                            </Typography>

                        </> :
                        <>
                            <Button color="inherit" onClick={() => goToBack(history)}>VOLTAR</Button>

                            <Typography variant="h6">
                                LISTA DE POKEMONS (VINDA DA API)
                            </Typography>

                            <Button color="inherit">ADICIONAR/REMOVE DA POKEDEX</Button>
                        </>}
            </Conteudo>
        </Container>
    )
}

export default Header

//AAAAAAAAAAAAAAAAAAAA QUE BAGUNÇA