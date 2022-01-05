import { AppBar, Toolbar } from '@material-ui/core'
import styled from 'styled-components'

export const Container = styled(AppBar)`
    display: flex;
    justify-content: center;
    border: 1px solid blue;
    background-color: lightsalmon;
`

export const Conteudo = styled(Toolbar)`
    display: flex;
    justify-content: space-between;
    border: 1px solid white;
    width: 65%;
   
`

