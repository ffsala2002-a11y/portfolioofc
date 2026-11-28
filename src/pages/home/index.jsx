import './styles.css'
import '../../index.css'
import imgdiego from '../../assets/Diego.png'
import imgprojeto01 from '../../assets/projeto_01.png'
import imgprojeto02 from '../../assets/projeto_02.png'



function Home() {
    return (
        <div>
            <nav className="main-navigation">
                <ul className="navigation_list">
                    <li className="navigation_item">
                        <a href="#inicio" className="navigation_link">
                            <i className="fa-solid fa-house"></i>
                            Início
                        </a>
                    </li>

                    <li className="navigation_item">
                        <a href="#sobre" className="navigation_link">
                            <i className="fa-solid fa-info"></i>
                            Sobre
                        </a>
                    </li>

                    <li className="navigation_item">
                        <a href="#projetos" className="navigation_link">
                            <i className="fa-solid fa-gear"></i>
                            Projetos
                        </a>
                    </li>

                    <li className="navigation_item">
                        <a href="#contato" className="navigation_link">
                            <i className="fa-solid fa-phone-flip"></i>
                            Contato
                        </a>
                    </li>
                </ul>

                <button id="btnClose" className="btn-close">X</button>
            </nav>

            <button id="menuButton" className="menu-button">
                <i className="fa-solid fa-bars"></i>
            </button>

            <div id="navigationBackground" className="navigationBackground"></div>

            <main id="inicio" className="main">
                <img className="main_img-avatar" src={imgdiego} alt="Foto de perfil de Diego Silva" />
                <h1 className="main_title">
                    Diego Silva
                </h1>
                <p className="main_sub-title">
                    Desenvolvedor Front-End
                </p>
            </main>

            <section id="sobre" className="sobre">
                <h2 className="sobre_title">Sobre mim</h2>

                <div className="sobre_content">
                    <p className="sobre_description">
                        Tenho conhecimentos em desenvolvimento Front-End, com foco em HTML, CSS e JavaScript. Tenho
                        experiência
                        na criação de interfaces responsivas, organização de código, estilização de componentes e
                        desenvolvimento de funcionalidades interativas, sempre buscando boas práticas, usabilidade e código
                        limpo.
                    </p>
                </div>
            </section>

            <section id="projetos" className="project">
                <h2 className="project_title">Meus projetos</h2>

                <div className="project_list">

                    <div className="project_card">
                        <div className="card-box_img">
                            <img className="card_image" src={imgprojeto01} alt="Foto projeto 01" />
                        </div>
                        <div className="card_content">
                            <h3 className="card_title">Sistema de Alterações de Preços</h3>
                            <p className="card_description">
                                Sistema open source desenvolvido para automatizar a comparação de tabelas de preços,
                                identificando aumentos, reduções, novos produtos e alterações de estoque. Permite importar
                                arquivos, pesquisar produtos por NCE ou nome e gerar relatórios em PDF, tornando a conferência
                                de preços mais rápida e eficiente.

                                Tecnologias e arquitetura: desenvolvido com HTML5, CSS3 e JavaScript puro (Vanilla JS), sem
                                dependência de frameworks. Utiliza JavaScript Modules (ES Modules) para modularização e
                                separação de responsabilidades, além de uma arquitetura CSS organizada em arquivos específicos,
                                facilitando a manutenção, reutilização e escalabilidade do código.
                            </p>
                        </div>
                    </div>

                    <div className="project_card">
                        <div className="card-box_img">
                            <img className="card_image" src={imgprojeto02} alt="Foto projeto 02" />
                        </div>
                        <div className="card_content">
                            <h3 className="card_title">Sistema de Gestão de Estoque</h3>
                            <p className="card_description">
                                Sistema web desenvolvido para facilitar o gerenciamento de estoque de oficinas de motos. Permite
                                cadastrar produtos, controlar entradas e saídas de peças, acompanhar movimentações e identificar
                                automaticamente itens com estoque baixo. Possui autenticação de usuários, painel administrativo
                                com indicadores e interface responsiva para computadores e dispositivos móveis.

                                Tecnologias utilizadas: HTML5, CSS3, JavaScript puro (Vanilla JavaScript), Supabase (Backend as
                                a Service), PostgreSQL e SQL.
                            </p>
                        </div>
                    </div>

                </div>
            </section>

            <section id="contato" className="section-contact">
                <h2 className="contact_title">Entre em contato</h2>
                <form id="formZap" className="contact">

                    <div className="contact_group">
                        <input id="inputName" className="contact_input" type="text" placeholder="Seu nome" />
                    </div>

                    <div className="contact_group">
                        <textarea id="textMessage" className="contact_textarea" placeholder="Sua mensagem"></textarea>
                    </div>

                    <button className="contact_button" type="submit">
                        Enviar mensagem
                    </button>

                </form>

                <div id="modalAlert" className="modalAlert">
                    <h4 id="message" className="modalAlert_message">Esse é meu Modal Alert Warning</h4>
                </div>
            </section>
        </div>
    )
}

export default Home