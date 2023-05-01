import './CampoTexto.css'

// props são parâmetros que o react recebeu e que passa isso para a função. No exemplo abaixo, ele recebe a label e o placeholder
const CampoTexto = (props) => {

    // const [valor, setValor] = useState('Texto predefinido');
    
    const aoDigitado = (evento) => {
        // setValor(evento.target.value)
        // console.log(valor);
        props.aoAlterado(evento.target.value);
    };

    return (
        <div className="campo-texto">
            <label>{props.label}</label>
            <input value={props.valor} onChange={aoDigitado} placeholder={props.placeholder} />
        </div>
    )
}

export default CampoTexto;