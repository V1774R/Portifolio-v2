import { Outlet } from "react-router-dom"
import { Cabecalho } from "../Components/Cabecalho"
import { Rodape } from "../Components/Rodape"
import { EstiloGlobal } from "../EstilosGlobais"
import { scroller } from 'react-scroll'

export const PaginaPadrao = () =>{
    const rolarParaSecao = (nomeDaSecao) =>{
        scroller.scrollTo(nomeDaSecao, {
            smooth: true,
            duration: 500
        })
    }
    return(
        <>
            <EstiloGlobal />
            <Cabecalho rolarParaSecao={rolarParaSecao}/>
                <main>
                    <Outlet rolarParaSecao={rolarParaSecao} />
                </main>
            <Rodape />
        </>
    )
}