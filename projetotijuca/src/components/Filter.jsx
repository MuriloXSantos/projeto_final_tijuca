const Filter = ({filter, setFilter}) => {

  return (
    <div className="filter">

        <h2>Filtrar:</h2>

        <div className="filter_options">

            <p className="p_filter">Status:</p>

            <select className="select" value={filter} onChange={(e) => setFilter(e.target.value)}>
                <option value="Todos" label="Todos"></option>
                <option value="Limpeza" label="Limpeza"></option>
                <option value="Remédio" label="Remédio"></option>
                <option value="Vestimenta" label="Vestimenta"></option>
            </select>
        </div>
    </div>
  )
}

export default Filter