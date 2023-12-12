function Input2(props) {
  return (
    <>
      <input
        required
        id={props.id}
        type={props.type}
        name={props.name}
        accept={props.accept}
        value={props.value}
        onChange={props.onChange}
      />
    </>
  )
}

export default Input2
