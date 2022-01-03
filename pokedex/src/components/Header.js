import { useHistory } from "react-router-dom"
import { goToDetailPage, goToHomePage, goToPokedexPage } from "../routes/coordinator"

const Header = () => {
    const history = useHistory()
    return(
        <div>
            <button onClick={() => goToDetailPage(history)}>DetailPage</button>
            <button onClick={() => goToHomePage(history)}>HomePage</button>
            <button onClick={() => goToPokedexPage(history)}>PokedexPage</button>
        </div>
    )
}

export default Header