import Router from "./routes/Router";
import GlobalState from "./context/GlobalContext/GlobalState";
import { Container, GlobalStyle } from "./appStyled";

function App() {

  return (
    <Container>
      <GlobalStyle />
      <GlobalState>
        <Router />
      </GlobalState>
    </Container>

  );
}

export default App;
