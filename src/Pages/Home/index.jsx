import styled from "styled-components"
import { CardFormacao } from "../../Components/CardFormacao"
import { Element } from "react-scroll"

const DivEstilizada = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5px;
    width: calc(100vw - 20px);
    background-color: none;

    .im{
        font-size: 1.4rem;
        background-color: none;
    }
    .titulo{
        text-align: center;
        font-size: 2rem;
        margin-top: -4px;
        background-color: none;
    }
    .desc{
        width: calc(100% - 20px);
        margin: auto;
        text-align: justify;
        background-color: none;
    }

`
export const Home = ({ rolarParaSecao }) => {

    const listaHabilidades = ["HTML5", "CSS3", "JAVASCRIPT", "REACT", "NODEJS", "JAVA", "PYTHON", "PHP"]
    const formacoes = [
        {
            curso: "Especialização em Front-end",
            escola: "Oracle",
            descricao: "O curso de Front-End da One Next Education oferece uma formação abrangente e prática na construção de interfaces web modernas e responsivas. Este programa é projetado para fornecer aos alunos as habilidades necessárias para se destacar no competitivo mercado de desenvolvimento web. Durante o curso, os participantes exploram as principais tecnologias e práticas do desenvolvimento Front-End. Iniciando com HTML5 e CSS3, eles aprendem a estruturar e estilizar páginas web, dominando técnicas avançadas de layout e design responsivo para criar experiências visuais atraentes e funcionais em diversos dispositivos. O currículo avança para JavaScript e suas funcionalidades modernas com ES6, capacitando os alunos a desenvolver interatividade e manipular o DOM de forma eficiente. A formação inclui uma introdução a frameworks e bibliotecas amplamente utilizados, como React, permitindo aos participantes construir aplicações dinâmicas e otimizar seu fluxo de trabalho com ferramentas como Git, npm e Webpack. A abordagem prática do curso é um dos seus principais destaques. Os alunos têm a oportunidade de aplicar os conhecimentos adquiridos em projetos reais, enfrentando desafios que simulam situações do mercado de trabalho. Isso proporciona uma experiência valiosa e prática, preparando-os para resolver problemas reais e atender às expectativas de empregadores. Ao final do curso, os participantes recebem um certificado de conclusão que atesta sua competência nas tecnologias e metodologias abordadas. Este certificado é um reconhecimento formal das habilidades desenvolvidas e uma adição valiosa ao currículo, evidenciando o preparo do aluno para atuar como desenvolvedor Front-End."
        },
        {
            curso: "Análise e Desenvolvimento de Sistemas",
            escola: "Uninter",
            descricao: "O curso de Análise e Desenvolvimento de Sistemas da UNINTER oferece uma formação sólida e abrangente na criação e gerenciamento de soluções tecnológicas. Destinado a preparar profissionais para o mercado de tecnologia da informação, o programa abrange uma ampla gama de disciplinas e habilidades essenciais para o desenvolvimento e análise de sistemas informatizados. O currículo do curso é projetado para fornecer uma compreensão profunda tanto das teorias quanto das práticas envolvidas na análise e desenvolvimento de sistemas. Os alunos são introduzidos a fundamentos de programação e linguagens de desenvolvimento, como Java, Python e SQL, permitindo-lhes criar e implementar aplicações robustas e eficientes. Além da programação, o curso aborda metodologias modernas de desenvolvimento de software, incluindo práticas ágeis e DevOps, que são cruciais para a gestão e otimização de projetos de tecnologia. Os alunos também estudam análise de requisitos, design de sistemas, engenharia de software e banco de dados, desenvolvendo a capacidade de projetar soluções que atendam às necessidades específicas dos usuários e das organizações. Uma parte significativa do curso é dedicada à prática, com projetos e estágios que permitem aos alunos aplicar os conhecimentos adquiridos em situações reais. Isso proporciona uma experiência prática valiosa e prepara os alunos para enfrentar desafios reais no mercado de trabalho. Os alunos têm a oportunidade de trabalhar em projetos colaborativos e desenvolver habilidades de resolução de problemas e comunicação, essenciais para o sucesso profissional. O curso da UNINTER também enfatiza a importância da ética e da segurança da informação, preparando os alunos para lidar com questões críticas relacionadas à proteção de dados e conformidade com regulamentações. Ao concluir o curso, os graduados recebem um diploma de Análise e Desenvolvimento de Sistemas, que atesta sua competência e preparo para atuar em diversas funções na área de tecnologia. Este diploma é um reconhecimento formal da formação recebida e uma importante adição ao currículo, destacando o profissional no competitivo mercado de trabalho."         
        },
        {
            curso: "Javascript Full Stack",
            escola: "Udemy",
            descricao: "O curso de JavaScript Full Stack com foco no desenvolvimento de APIs é uma formação completa que capacita desenvolvedores a criar soluções web integradas, desde a construção de interfaces interativas até o desenvolvimento de servidores e APIs robustas. Este curso é ideal para profissionais e estudantes que desejam dominar a programação com JavaScript em todas as camadas do desenvolvimento web, com uma ênfase particular na criação e gerenciamento de APIs. Os participantes começam explorando os fundamentos avançados do JavaScript, aprendendo a manipular o DOM, gerenciar eventos e integrar dados em interfaces de usuário dinâmicas. Utilizando frameworks modernos como React ou Vue.js, os alunos são capacitados a construir front-ends interativos que consomem e interagem com APIs, garantindo uma experiência de usuário fluida e eficiente. No lado do back-end, o curso mergulha no desenvolvimento de servidores e APIs com Node.js e Express.js. Os alunos aprendem a criar APIs RESTful e GraphQL, abordando desde o design inicial até a implementação de funcionalidades avançadas como autenticação, autorização e documentação. A formação inclui também a integração com bancos de dados, tanto relacionais quanto não relacionais, como MongoDB, para o gerenciamento eficaz de dados. Além das habilidades técnicas, o curso enfatiza as melhores práticas de desenvolvimento, como testes automatizados, gerenciamento de erros e técnicas de otimização. Os alunos aplicam esses conhecimentos em projetos práticos, desenvolvendo APIs e sistemas completos que simulam cenários reais do mercado. Ao final do curso, os participantes são certificados em JavaScript Full Stack com foco em desenvolvimento de APIs, um reconhecimento formal das habilidades adquiridas que valoriza o currículo e prepara os alunos para enfrentar desafios no dinâmico campo do desenvolvimento de software." 
        }
    ]
    return(
        <>
            <section>
                <Element name="AboutSec"></Element>
                <DivEstilizada>
                    <div>
                        <p className="im">I'm a</p>
                        <h1 className="titulo">FULL STACK WEB DEVELOPER </h1>
                    </div>
                    <p className="desc">
                        I am a technology enthusiast, 
                        I have been involved with programming since 2011, 
                        initially started as a hobby. I currently have a 
                        specialization in front-end, I continue to seek to 
                        improve skills in full stack development with react and express.

                        At the moment, I am assigned to the NÚCLEO SETORIAL DE TECNOLOGIA
                        of the GUARDA CIVIL MUNICIPAL DO RECIFE.
                    </p>
                </DivEstilizada>
                
            </section>
            <section>
                <Element name="SkillsSec"></Element>
                <h2 className="subTitulo">Skills</h2>
                <div className="artigo">
                    {
                        listaHabilidades.map(skill => (
                            <p key={skill} className="icone">{skill}</p>
                        ))
                    }
                </div>
            </section>   
            <section>
                <Element name="EducationSec"></Element>
                <h2 className="subTitulo">Education</h2>
                <div className="artigo">
                    {
                        formacoes.map(formacao => (
                            <CardFormacao 
                                rolarParaSecao={rolarParaSecao}
                                key={formacao.curso}
                                curso={formacao.curso}
                                escola={formacao.escola}
                                descricao={formacao.descricao}
                            />
                        ))
                    }
                </div>
            </section>    
            <section>
                <Element name="ProjectsSec"></Element>
                <h2 className="subTitulo">Projects</h2>
                <div className="artigo"style={{flexDirection: "column", alignItems: "center", justifyContent: "center"}}>

                    <img className="projeto" src="img/boe.png" alt="Imagem do projeto de Boletim eletrônico da Guarda Civil Municipal do Recife" />
                    <a target="_blank" href="https://boe-v3.vercel.app"><button>DEMO</button></a>                    
                    
                    <img className="projeto" src="https://portifolio-villar.vercel.app/imgs/eaf.png" alt="Imagem do projeto Espaço Amanda Fernandes" />
                    <a target="_blank" href="https://projeto-eaf.vercel.app"><button>DEMO</button></a>

                    <img className="projeto" src="img/pedefacil.png" alt="Imagem do projeto de cardapio" />
                    <a target="_blank" href="https://cardapio-eight-omega.vercel.app"><button>DEMO</button></a>
                </div>
            </section>
            <section>
                <Element name="ContactSec"></Element>
                <h2 className="subTitulo">Contact</h2>
                <div className="artigo">
                    <a target="_black" href="https://www.linkedin.com/in/v1774r">
                        <img style={{width: "200px", borderRadius: "0px"}} src="https://pngimg.com/uploads/linkedIn/linkedIn_PNG8.png" />
                    </a>
                </div>
            </section> 
        </>
    )
}