import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

export const Container = styled.div`
    border: 1px solid red;
    min-height: 100vh;
`