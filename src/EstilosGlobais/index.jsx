import { createGlobalStyle } from "styled-components";

export const EstiloGlobal = createGlobalStyle`
    :root{
        --fonte-padrao: "Quicksand";
        --preto: #0a0a0a;
        --texto-claro: #e4e4e4;
       
    }
    body{
        background-color: #e4e4e4;
    }
    main{
        min-height: calc(100vh - 160px);
    }
    section{
        width: 100%;
        min-height: 60vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 10px 0px 0px 0px;
        margin: 1px auto 1px auto;
        background-color: #bdbdbd;
    }
    section h2{
        width: 100%;
        background-color: none;
        max-width: 100%;
        text-indent: 20px;
        padding: 15px 0px 15px 0px;
        font-size: 2.3rem;
    }
    section .artigo{
        max-width: 100%;
        display: flex;
        justify-content: space-around;
        background-color: none;
        flex-wrap: wrap;
    }
    section .artigo img{
        width: 120px;
        border-radius: 50%;
        margin: 10px;
    }
    .icone{
        width: 105px;
        height: 105px;
        background-color: #000000;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        color: #ffffff;
        font-weight: bolder;
        transition: 500ms;
        margin: 5px;
        cursor: pointer;
    }
    .icone:hover{
        transition: 500ms;
        opacity: 0.8;
    }
    .artigo .projeto{
        width: 350px;
        border-radius: 0px;
        margin: auto;
    }
    .artigo button{
        width: 350px;
        margin: auto auto 30px auto;
    }

    button{
        background-color: #000000;
        color: #ececec;
        border: none;
        padding: 5px;
        font-weight: bolder;
    }
    .verMais, .reduzir{
        font-weight: 400;
        cursor: pointer;
    }
    .reduzir{
        background-color: #000000;
        color: #ffffff;
        margin: 10px;
        padding: 2px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    *{
        margin: 0px;
        font-weight: lighter;
        font-family: var(--fonte-padrao);
        box-sizing: border-box;
    }
`