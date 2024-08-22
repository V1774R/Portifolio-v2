import { Outlet } from "react-router-dom"
import { Cabecalho } from "../Components/Cabecalho"
import { Rodape } from "../Components/Rodape"
import { EstiloGlobal } from "../EstilosGlobais"

export const PaginaPadrao = () =>{
    return(
        <>
            <EstiloGlobal />
            <Cabecalho />
                <main>
                    <Outlet />
                </main>
            <Rodape />
        </>
    )
}