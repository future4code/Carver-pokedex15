import { useState } from "react"
import HistoryContext from "./HistoryStateContext"

const HistoryState = (props) => {
    
    const [page, setPage] = useState("home")

    return (
        <HistoryContext.Provider value={[page, setPage]}>
            {props.children}
        </HistoryContext.Provider>
    )
}

export default HistoryState