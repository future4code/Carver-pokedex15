import React, { useContext, useLayoutEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Attacks, Container, ContainerCentral, Imagens, Pokebola, PowersDiv, Types } from "./styled"
import { MdCatchingPokemon, MdOutlineCancel } from 'react-icons/md';
import GlobalStateContext from "../../context/GlobalContext/GlobalStateContext"


const DetailPage = () => {
    const params = useParams()
    const [detailsPokemon, pokedex, setPokedex] = useContext(GlobalStateContext)
    const [powers, setPowers] = useState([])
    const [types, setTypes] = useState([])
    const [attacks, setAttacks] = useState([])
    const [photoBack, setPhotoBack] = useState("")
    const [photoFront, setPhotoFront] = useState("")
    const [name, setName] = useState("")
    const [isPokedex, setIsPokedex] = useState(true)


    const addPokemon = (name, photo, isPokedex) => {
        const index = (detailsPokemon.findIndex((pokemon) => { return pokemon.name === name }))
        detailsPokemon[index].isPokedex = true
        const newPokedex = [...pokedex, { name, photo, isPokedex: true }]
        setPokedex(newPokedex)
        setIsPokedex(true)
    }

    const removePoke = (name) => {
        // index de remover
        const indexRemove = (pokedex.findIndex((pokemon) => pokemon.name === name))
        const newPokedex = [...pokedex];
        newPokedex.splice(indexRemove, 1)
        setPokedex(newPokedex)
        setIsPokedex(false)

        // index da renderização
        const indexRender = (detailsPokemon.findIndex((pokemon) => { return pokemon.name === name }))
        detailsPokemon[indexRender].isPokedex = false
    }


    useLayoutEffect(() => {

        const chosenPokemon = detailsPokemon && detailsPokemon.filter((pokemon) => {
            return pokemon.name === params.name
        })

        setPhotoBack(chosenPokemon[0].sprites.back_default)
        setPhotoFront(chosenPokemon[0].sprites.front_default)
        setPowers(chosenPokemon[0].stats)
        setTypes(chosenPokemon[0].types)
        setAttacks(chosenPokemon[0].moves)
        setName(chosenPokemon[0].name)
        setIsPokedex(chosenPokemon[0].isPokedex)

    }, [])



    // CONSTRUÇÃO CARD DOS PODERES

    const cardPower = powers && powers.map((power) => {
        return (
            <div key={power.stat.name}>
                <p>{power.stat.name}:{power.base_stat}</p>
            </div>
        )

    })

    // CONSTRUÇÃO CARD DOS TIPOS

    const cardTypes = types && types.map((type) => {
        return (
            <>
                <p>{type.type.name}</p>
            </>
        )
    })

    // CONSTRUÇÃO CARD DOS PRINCIPAIS ATAQUES

    const principalsAttacks = attacks && attacks.map((attack, index) => {

        while (index < 5) {
            return (
                <p>{attack.move.name}</p>
            )
        }

    })

    return (
        <Container>
            
            <ContainerCentral>

                <Imagens>
                    <img src={photoFront} alt="imagem do pokemon de frente" />
                    <img src={photoBack} alt="imagem do pokemon de costas" />
                </Imagens>
                <PowersDiv>
                    <h2>PODERES:</h2>
                    {cardPower}

                </PowersDiv>

                <Types>
                    <h2>TIPOS:</h2>
                    {cardTypes}
                </Types>

                <Attacks>
                    <h2>PRINCIPAIS ATAQUES:</h2>
                    {principalsAttacks}
                </Attacks>
                <Pokebola>
                    {isPokedex ? <MdOutlineCancel onClick={() => removePoke(name)} /> : <MdCatchingPokemon onClick={() => addPokemon(name, photoFront, isPokedex)} />}
                </Pokebola>

            </ContainerCentral>

        </Container>
    )
}

export default DetailPage