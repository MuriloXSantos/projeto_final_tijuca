function Input2({ type, name, id, accept, value }) {
  return (
    <>
      <input
        required
        type={type}
        name={name}
        id={id}
        accept={accept}
        value={value}
      />
    </>
  )
}

export default Input2
