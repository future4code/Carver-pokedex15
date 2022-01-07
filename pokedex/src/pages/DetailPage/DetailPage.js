import { useContext, useLayoutEffect, useState } from "react"
import { useParams } from "react-router-dom"
import GlobalStateContext from "../../context/GlobalContext/GlobalStateContext"

const DetailPage = () => {
    const params = useParams()
    const [detalhesPokemon, pokedex] = useContext(GlobalStateContext)
    const [powers, setPowers] = useState([])
    const [types, setTypes] = useState([])
    const [attacks, setAttacks] = useState([])
    const [photoBack, setPhotoBack] = useState("")
    const [photoFront, setPhotoFront] = useState("")


    useLayoutEffect(() => {
        const pokemonEscolhido = detalhesPokemon && detalhesPokemon.filter((pokemon) => {
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
                <bold>{power.stat.name}:</bold>
                {power.base_stat}
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
        <div>
            <img src={photoFront} alt="imagem do pokemon de frente" />
            <img src={photoBack} alt="imagem do pokemon de costas" />
            <div>
                <h2>Poderes:</h2>
                {cardPower}
            </div>

            <div>
                <h2>Tipos:</h2>
                {cardTypes}
            </div>

            <div>
                <h2>Principais ataques:</h2>
                {principalsAttacks}
            </div>


        </div>
    )
}

export default DetailPage