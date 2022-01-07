import { useContext, useLayoutEffect, useState } from "react"
import { useParams } from "react-router-dom"
import GlobalStateContext from "../../context/GlobalContext/GlobalStateContext"
import { Attacks, Container, ContainerCentral, Imagens, Powers, PowersDiv, Types } from "./styled"

const DetailPage = () => {
    const params = useParams()
    const [detailsPokemon, , ] = useContext(GlobalStateContext)
    const [powers, setPowers] = useState([])
    const [types, setTypes] = useState([])
    const [attacks, setAttacks] = useState([])
    const [photoBack, setPhotoBack] = useState("")
    const [photoFront, setPhotoFront] = useState("")



    useLayoutEffect(() => {
        const pokemonEscolhido = detailsPokemon && detailsPokemon.filter((pokemon) => {
            return pokemon.name === params.name
        })
        setPhotoBack(pokemonEscolhido[0].sprites.back_default)
        setPhotoFront(pokemonEscolhido[0].sprites.front_default)
        setPowers(pokemonEscolhido[0].stats)
        setTypes(pokemonEscolhido[0].types)
        setAttacks(pokemonEscolhido[0].moves)
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

            </ContainerCentral>

        </Container>
    )
}

export default DetailPage