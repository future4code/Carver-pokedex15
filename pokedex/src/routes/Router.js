import { BrowserRouter, Switch, Route } from 'react-router-dom'
import ErrorPage from '../pages/ErrorPage'
import HomePage from '../pages/HomePage'
import PokedexPage from '../pages/PokedexPage'
import DetailPage from '../pages/DetailPage/DetailPage'
import Header from '../components/Header/Header'
import HistoryState from '../context/HistoryContext/HistoryState'

const Router = () => {
    return (
        <HistoryState>
            <BrowserRouter>
                <Header />
                <Switch>
                    <Route exact path={"/"}>
                        <HomePage />
                    </Route>
                    <Route exact path={"/pokedex"}>
                        <PokedexPage />
                    </Route>
                    <Route exact path={"/detalhes/:name"}>
                        <DetailPage />
                    </Route>
                    <Route>
                        <ErrorPage />
                    </Route>
                </Switch>
            </BrowserRouter>
        </HistoryState>

    )
}

export default Router