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
        min-height: 50vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding-bottom: 0px;
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
    .formacao{
        display: flex;
        flex-direction: column;
        padding: 45px 10px 20px 10px;
        gap: 10px;
        background-color: #807e7e;
        position: relative;
    }
    .formacao h3{
        font-weight: 500;
        background-color: #000000;
        color: #ffffff;
        padding: 5px;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
    }
    .formacao h4{
        font-weight: 500;
    }
    .formacao p{
        text-align: justify;
        background-color: none;
    }
    .artigo .projeto{
        width: 350px;
        border-radius: 0px;
    }
    .artigo button{
        width: 350px;
        margin-bottom: 30px;
    }
    .artigo a{
        margin-top: -9px;
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