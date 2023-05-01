import Colaborador from '../Colaborador'
import './Time.css'

const Time = (props) => {

    const css = { backgroundColor: props.corSecundaria }

    return (
        // props.colaboradroes.length > 0
        // Rendenrização React para validação de campos. No caso, valida-se se tem mais de 1 colaborador por time. Se tiver, executa a expresão após o operador &&. Se não (se for false), não irá apresentar o campo time que está vazio.
        (props.colaboradores.length > 0) && <section className="time" style={ css }>
            <h3 style={{ borderColor: props.corPrimaria }}>
                {props.nome}
            </h3>
            <div className='colaboradores' >
                {props.colaboradores.map(colaborador => <Colaborador key={colaborador.nome} nome={colaborador.nome} cargo={colaborador.cargo} imagem={colaborador.imagem} corPrimaria={props.corPrimaria}/>)}
            </div>
        </section>
    )
}

export default Time