import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom"
import { Container, Conteudo } from "./styled"
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import HistoryState from "../../context/HistoryContext/HistoryState";

import { goToPokedexPage, goToHomePage } from '../../routes/coordinator'

const Header = () => {
    const history = useHistory()


    return (
        <Container position="sticky">
            <button onClick={() => goToHomePage(history)}>HomePage</button>
            <button onClick={() => goToPokedexPage(history)}>PokedexPage</button>
        </Container>


        /*
            se for home => VER MINHA POKEDEX
            se for pokedex => VOLTAR PARA LISTA DE POKEMONS
            se for página de detalhes => VOLTAR ------ NOME DO POKEMON ------ ADICIONAR/REMOVE DA POKEDEX
        */

        // <Container position="sticky">
        //     <Conteudo>

        //         {page === "home" ?

        //             <>
        //                 <Button color="inherit" onClick={() => goToPokedexPage1()}>VER MINHA POKEDEX</Button>

        //                 <Typography variant="h6">
        //                     LISTA DE POKEMONS (VINDA DA API)
        //                 </Typography>

        //             </> : page === "pokedex" ?

        //                 <>
        //                     <Button color="inherit" onClick={() => goToHomePage1()}>VOLTAR PARA LISTA DE POKEMONS</Button>

        //                     <Typography variant="h6">
        //                         LISTA DE POKEMONS (VINDA DA API)
        //                     </Typography>

        //                 </> : page === "detalhes" ?
        //                     <>
        //                         <Button color="inherit" onClick={() => goToHomePage1()}>VOLTAR</Button>

        //                         <Typography variant="h6">
        //                             LISTA DE POKEMONS (VINDA DA API)
        //                         </Typography>

        //                         <Button color="inherit">ADICIONAR/REMOVE DA POKEDEX</Button>
        //                     </> : <p>Sentimos muito. Página de erro</p> }

        //     </Conteudo>
        // </Container>
    )
}

export default Header

//AAAAAAAAAAAAAAAAAAAA QUE BAGUNÇA