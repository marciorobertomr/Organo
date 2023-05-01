import './Colaborador.css'

// Forma diferente de receber props, é declarar logo as variáveis que deseja receber. Ajuda para identificar rapidamente o que se precisa no método
const Colaborador = ({ nome, imagem, cargo, corPrimaria }) => {
    return (
        <div className='colaborador'>
            <div className='cabecalho' style={{ backgroundColor: corPrimaria }}>
                <img src={imagem} alt={nome} />
            </div>
            <div className='rodape'>
                <h4>
                    {nome}
                </h4>
                <h5>
                    {cargo}
                </h5>
            </div>
        </div>
    )
}

export default Colaborador;