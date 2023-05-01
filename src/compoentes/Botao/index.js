import './Botao.css'

// {props.children} >> Pega tudo o que tiver entre a abertura e o fechamento do componente. Por exemplo: Ele irá pegar o Criar Botao
// <Botao>
//      Criar Botão
// </Botao>

const Botao = (props) => {
    return (
        <button className="botao">
            {props.texto}
        </button>
    )
}

export default Botao;