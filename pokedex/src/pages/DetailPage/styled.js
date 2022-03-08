import styled from "styled-components"

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 89vh;
    background-image: url("https://cutewallpaper.org/21/pokemon-repeating-background/68-images-about-Backgrounds-on-We-Heart-It-See-more-about-.jpg");
`

export const ContainerCentral = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    gap: 1vw;
    width: 60%;
    height: 80vh;
    background-color: rgba(253,225,177);
    padding: 1vw;
    border: 5px double white;

    @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 90%;
        height: auto;
        padding: 5vw 1vw 5vw 1vw;
        background-color: rgba(146,199,241);
        margin: 3vw;
    }
`

export const Imagens = styled.div`
    display: flex;
    flex-direction: column;
    grid-column: 1;
    grid-row: 1/4;
    background-color: rgba(146,199,241);
    border-radius: 2vw;

    @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
        justify-content: center;
        border: 1px solid black;
        width: 95%;
        height: 65%;
        background-color: rgba(253,225,177, 0.8);

        img{
            height: 23vh;
        }
    }
`

export const PowersDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    grid-column: 2;
    grid-row: 1/3;
    background-color: rgba(146,199,241);
    border-radius: 2vw;
    padding: 1vw;

    h2{
        font-size: 3vw;
        margin: 1vw;
    }

    p{
        font-size: 1.5vw;
    }

    @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
        border: 2px solid black;
        width: 95%;
        height: auto;
        padding-bottom: 3vw;
        background-color: rgba(253,225,177, 0.8);

        h2{
            font-size: 8vw;
            margin: 2vw;
        }

        p{
            font-size: 5vw;
            font-weight: bold;
        }
    }

`

export const Types = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    grid-column: 2;
    background-color: rgba(146,199,241);
    border-radius: 2vw;
    padding: 1vw;

    h2{
        font-size: 3vw;
        margin: 1vw;
    }

    p{
        font-size: 1.5vw;
    }

    @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
        border: 2px solid black;
        width: 95%;
        height: auto;
        padding-bottom: 3vw;
        background-color: rgba(253,225,177, 0.8);

        h2{
            font-size: 8vw;
            margin: 2vw;
        }

        p{
            font-size: 5vw;
            font-weight: bold;
        }
    }

`

export const Attacks = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    grid-row: 1/3;
    background-color: rgba(146,199,241);
    border-radius: 2vw;
    padding: 1vw;

    h2{
        font-size: 2vw;
        margin: 1vw;
        text-align: center;
    }

    p{
        font-size: 1.5vw;
    }

    @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
        border: 2px solid black;
        width: 95%;
        height: auto;
        padding-bottom: 3vw;
        background-color: rgba(253,225,177, 0.8);

        h2{
            font-size: 8vw;
            margin: 2vw;
        }

        p{
            font-size: 5vw;
            font-weight: bold;
        }
    }
`

export const Pokebola = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    svg{
        height: 50%;
        width: 50%;
    }
`