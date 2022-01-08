import styled from "styled-components"

export const CardContainer = styled.div`
    border-radius: 15px;
    margin: 1.2vw;
    margin-bottom: 2vw;
    width: 35vh;
    height: 30vh;
    background-color: white;
`

export const ImgContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const ImgPokemon = styled.img`
    margin: 15px;
    width: 100px;
`
export const ButtonCard = styled.div`
    display: flex;
    flex-direction: row;

    button {
        
        display: flex;
        align-items: space-between;
        border: 1px yellow;
        border-radius: 5px;
        border-style: outset;  
        padding: 12px 10px;
        margin: 5px;
        box-shadow: 0 4px 6px 0 #fdcd3b;
        background-color: #fdcd3b;

    &:hover {
        background-color: yellow;
    }
}
`
export const CardText = styled.div`
    font-family: Georgia;
    text-align: center;
    text-transform: capitalize;
`