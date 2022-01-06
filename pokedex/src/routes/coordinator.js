export const goToHomePage = (history) => {
    history.push("/")
}

export const goToDetailPage = (history, name) => {
    history.push(`/detalhes/${name}`)
}

export const goToPokedexPage = (history) => {
    history.push("/pokedex")
}

export const goToBack = (history) => {
    history.goBack()
}