function Input({ type, name, id, value }) {
  return (
    <>
      <input required type={type} name={name} id={id} value={value} />
    </>
  )
}

export default Input
