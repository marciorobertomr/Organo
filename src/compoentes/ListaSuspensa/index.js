import './ListaSuspensa.css'

const ListaSuspensa = (props) => {
    // O map percorre a lista, realiza uma operação e retorna uma lista transformada
    // foreach apenas intera
    // key é uma chave única para cada item. No caso, foi utilizado o próprio nome do item
    return (
        <div className="lista-suspensa">
            <label>{props.label}</label>
            <select onChange={evento => props.aoAlterado(evento.target.value)} required={props.required} value={props.valor}>
                <option value=""></option>
                {props.itens.map(item => {
                    return <option key={item}>{item}</option>
                })}
            </select>
        </div>
    )
}

export default ListaSuspensa;