import React, { useContext, useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom"
import { Container, Conteudo } from "./styled"
import { goToPokedexPage, goToHomePage, goToBack } from '../../routes/coordinator'
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import GlobalStateContext from "../../context/GlobalContext/GlobalStateContext";

const Header = () => {
    const [detailsPokemon, pokedex, setPokedex] = useContext(GlobalStateContext)
    const history = useHistory()
    const location = useLocation()
    const name = (location.pathname.split("/"))
    const [textButton, setTextButton] = useState("")


    const chosenPokemon = detailsPokemon.filter((pokemon) => {
        return pokemon.name === name[2]
    })

    console.log(name[2])

    useEffect(() => {
        if (location.pathname.includes(name[2])) {
            const index = (pokedex.findIndex((pokemon) => pokemon.name === name[2]))
            console.log(index)
            if (index === -1) {
                setTextButton("Adicionar")
            } else {
                setTextButton("Remover")
            }
        }
    }, [])

    const addOrRemovePokemon = (name, photo) => {
        const index = (pokedex.findIndex((pokemon) => pokemon.name === name))
        if (index === -1) {
            const newPokedex = [...pokedex, { name, photo }]
            setPokedex(newPokedex)
        } else {
            const newPokedex = [...pokedex];
            newPokedex.splice(index, 1)
            setPokedex(newPokedex)
        }
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
                                {name[2].toUpperCase()}
                            </Typography>

                            <Button color="inherit" onClick={() => addOrRemovePokemon(chosenPokemon[0].name, chosenPokemon[0].sprites.front_default)}>{textButton === "Adicionar" ? <> Adicionar </> : <> Remover </>}</Button>
                        </>}
            </Conteudo>
        </Container>
    )
}

export default Header