const ToDo = ({ to_do }) => {

  return (

    <div className="to_do">

      <p className="p_to_do">{to_do.title}</p>

      <p className="p_to_do">({to_do.category})</p>
    </div>
  )
}

export default ToDo