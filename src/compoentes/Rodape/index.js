import './Rodape.css'

const Rodape = () => {

    const redesSociais = [
        {
            nome: 'instagram',
            link: 'https://www.instagram.com/marcioroberto_mr/',
            imagem: '/imagens/logo-instagram.svg'
        },
        {
            nome: 'linkedin',
            link: 'https://www.linkedin.com/in/marciorobertomr/',
            imagem: '/imagens/logo-linkedin.svg'
        },
        {
            nome: 'github',
            link: 'https://github.com/marciorobertomr',
            imagem: '/imagens/logo-github.svg'
        }
    ]

    return(
        <footer className='rodape_app'>
            <section>
                <ul className='lista'>
                    <li>
                        <a href={redesSociais[0].link} target='_blanck'>
                            <img src={redesSociais[0].imagem} alt={redesSociais[0].nome} />
                        </a>
                    </li>
                    <li>
                        <a href={redesSociais[1].link} target='_blanck'>
                            <img src={redesSociais[1].imagem} alt={redesSociais[1].nome} />
                        </a>
                    </li>
                    <li>
                        <a href={redesSociais[2].link} target='_blanck'>
                            <img src={redesSociais[2].imagem} alt={redesSociais[2].nome} />
                        </a>
                    </li>
                </ul>
            </section>
            <section>
                <img src="/imagens/logo.svg" alt='Logo' />
            </section>
            <section>
                <p>
                    Desenvolvido por Alura
                </p>
            </section>
        </footer>
    )
}

export default Rodape;