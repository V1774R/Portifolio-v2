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

export const Cabecalho = () => {
    return(
        <CabecalhoEstilizado>
            <p>About</p>
            <p>Skills</p>
            <p>Education</p>
            <p>Projects</p>
            <p>Contact</p>
        </CabecalhoEstilizado>
    )
}