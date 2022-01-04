export const goToHomePage = (history) => {
    history.push("/")
}

export const goToDetailPage = (history) => {
    history.push(`/detalhes/`)
}

export const goToPokedexPage = (history) => {
    history.push("/pokedex")
}

export const goToBack = (history) => {
    history.goBack()
}