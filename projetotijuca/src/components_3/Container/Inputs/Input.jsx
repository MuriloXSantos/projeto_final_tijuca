function Input( props ) {
  return (
    <>
      <input
        required
        id={props.id}
        type={props.type}
        name={props.name}
        value={props.value}
        onChange={props.onChange}
      />
    </>
  )
}

export default Input
