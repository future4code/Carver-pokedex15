import axios from "axios"
import { useLayoutEffect, useState } from "react"
import { useParams } from "react-router-dom"

const DetailPage = () => {
    const params = useParams()
    const [powers, setPowers] = useState([])
    const [types, setTypes] = useState([])
    const [attacks, setAttacks] = useState([])
    const [photoBack, setPhotoBack] = useState("")
    const [photoFront, setPhotoFront] = useState("")

    useLayoutEffect(() => {
        pegarDetalhesPokemons()
    }, [])

    //PEGA OS DETALHES DO POKEMON A PARTIR DO NOME DO URL

    const pegarDetalhesPokemons = async () => {
        try {
            const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${params.name}/`)

            setPhotoBack(response.data.sprites.back_default)
            setPhotoFront(response.data.sprites.front_default)
            setPowers(response.data.stats)
            setTypes(response.data.types)
            setAttacks(response.data.moves)

        } catch (error) {
            console.log(error.response)
        }
    }

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