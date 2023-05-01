import { Fragment } from 'react';
import './Banner.css'

function Banner() {
    //JSX - Como o React lê os codigos para implementar
    // Fragmento é utilizado para resolver alguns problemas de sintaxe. Ele não aparece no código html explícito na página.
    return (
        <Fragment>
            <header className="banner">
                <img src="/imagens/banner.png" alt="O banner principal da página do Organo"/>
            </header>
        </Fragment>
    )
}

export default Banner;