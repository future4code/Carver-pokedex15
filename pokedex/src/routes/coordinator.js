export const goToHomePage = (history) => {
    history.push("/")
}

export const goToDetailPage = (history,id) => {
    history.push(`/detalhes/${id}`)
}

export const goToPokedexPage = (history) => {
    history.push("/pokedex")
}

export const goToBack = (history) => {
    history.goBack()
}