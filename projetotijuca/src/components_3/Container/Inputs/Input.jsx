function Input({ type, name, id, value }) {
  return (
    <>
      <input required type={type} name={name} id={id} defaultValue={value} />
    </>
  )
}

export default Input
