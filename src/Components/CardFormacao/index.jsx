import { useState } from "react"
import { Link } from "react-scroll"
import styled from "styled-components"

const Card = styled.div`
    
    display: flex;
    flex-direction: column;
    padding: 45px 10px 20px 10px;
    gap: 10px;
    background-color: #807e7e;
    position: relative;
    color: #d8d6d6;
    h3{
        font-weight: 500;
        background-color: #000000;
        color: #ffffff;
        padding: 5px;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
    }
    h4{
        font-weight: 500;
    }
    p{
        text-align: justify;
        background-color: none;
    }
`

export const CardFormacao = ({curso, escola, descricao, rolarParaSecao}) =>{
    const [completo, setCompleto] = useState(false)

    const alternarExibicaoTexto = () => {
        completo ? setCompleto(false):setCompleto(true);
        
    }

    
    
    // onClick={()=>{alternarExibicaoTexto()}}
    return(
        <Card>
            <h3 >{curso}</h3>
            <h4>{escola}</h4>
            {
                completo ? (
                    <>
                        <p>{descricao}</p>
                        <Link 
                            to="EducationSec" 
                            smooth={true} 
                            onClick={()=>{alternarExibicaoTexto()}}
                        >
                            <p className="reduzir">Reduzir Conteúdo</p>
                        </Link>
                    </>
                    
                ):(
                    <p>{descricao.slice(0, descricao.indexOf("."))}... <span className="verMais" onClick={()=>{alternarExibicaoTexto()}}> ver mais</span></p>
                )
            }
        </Card>
    )
}