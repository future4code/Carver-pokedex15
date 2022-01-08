import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    background-color: rgba(253,206,66);
    height: 11vh;
`

export const Home = styled.div`
    display: flex;
    justify-content: space-between;
    width: 54.5%;
    align-items: center;
    padding: 1vw;

    @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
        justify-content: space-between;
        width: 100%;
        padding: 5vw;

        button{
            border: 1px solid black;
        }
    }
`

export const Pokedex = styled.div`
    display: flex;
    justify-content: space-between;
    width: 53.8%;
    align-items: center;
    padding: 1vw;

    @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
        justify-content: space-between;
        width: 100%;
        padding: 5vw;

        button{
            border: 1px solid black;
        }
    }
`


export const Detalhes = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    align-items: center;
    padding: 1vw;

    @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
        padding: 5vw;

        button{
            border: 1px solid black;
        }
    }
`