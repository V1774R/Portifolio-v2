import { styled } from 'styled-components'

const RodapeEstilizado = styled.footer`
    max-width: 100vw;
    height: 100px;
    background-color: var(--preto);
    color: var(--texto-claro);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
export const Rodape = () => {
    return(
        <RodapeEstilizado>
            <p>Desenvolvidos por Victor Almeida</p>
        </RodapeEstilizado>
    )
}