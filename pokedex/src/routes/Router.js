import { BrowserRouter, Switch, Route } from 'react-router-dom'
import ErrorPage from '../pages/ErrorPage'
import HomePage from '../pages/HomePage'
import PokedexPage from '../pages/PokedexPage'
import DetailPage from '../pages/DetailPage'
import Header from '../components/Header'

const Router = () => {
    return (
        <BrowserRouter>
            <Header/>
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
    )
}

export default Router