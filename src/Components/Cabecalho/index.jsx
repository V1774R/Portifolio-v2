import { Link } from "react-scroll"
import styled from "styled-components"

const CabecalhoEstilizado = styled.header`
    max-width: 100vw;
    height: 60px;
    background-color: var(--preto);
    color: var(--texto-claro);
    display: flex;
    gap: 20px;
    align-content: center;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    z-index: 9999;
    p{
        cursor: pointer;
        transition: 0.1s;

    }
    p:hover{
        transition: 0.1s;
        color: #c1f7eb;
        scale: 1.05;
    }
`

export const Cabecalho = ({ rolarParaSecao }) => {
    return(
        <CabecalhoEstilizado>
            <Link 
                to="AboutSec" 
                offset={-100} 
                smooth={true} 
                onClick={rolarParaSecao('AboutSec')}
            >
                <p>About</p>
            </Link>
            <Link 
                to="SkillsSec"
                offset={-100}
                smooth={true}
                onClick={rolarParaSecao('SkillsSec')}
            >
                <p>Skills</p>
            </Link>
            <Link 
                to="EducationSec"
                smooth={true}
                offset={-70}
            >
                <p>Education</p>
            </Link> 
            <Link
                to="ProjectsSec"
                smooth={true}
                offset={-70}
            >
                <p>Projects</p>
            </Link>
            <Link
                to="ContactSec"
                smooth={true}
                
            >
                <p>Contact</p>
            </Link>

        </CabecalhoEstilizado>
    )
}