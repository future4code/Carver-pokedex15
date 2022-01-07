import styled from "styled-components"

export const CardContainer = styled.div`
border: black;
border-radius: 15px;
margin: 10px;
width: 35vh;
height: 30vh;
background-color: white;`

export const ImgContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
justify-items: center;
`

export const ImgPokemon = styled.img`
margin: 15px;
width: 100px;
`
export const ButtonCard = styled.div`

display: flex;
flex-direction: row;
align-items: space-between;
color: blue;

button {
background-color: #fdcd3b;
box-shadow: 0 4px 6px 0 #fdcd3b;
border: 1px yellow;
border-radius: 5px;
padding: 12px 10px;
display: flex;
align-items: space-between;
margin: 5px;
border-style: outset;  
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