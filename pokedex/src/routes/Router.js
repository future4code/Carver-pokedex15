import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Header from '../components/Header/Header'
import HomePage from '../pages/HomePage/HomePage'
import PokedexPage from '../pages/Pokedex/PokedexPage'
import DetailPage from '../pages/DetailPage/DetailPage'

const Router = () => {
    return (
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
            </Switch>
        </BrowserRouter>
    )
}

export default Router