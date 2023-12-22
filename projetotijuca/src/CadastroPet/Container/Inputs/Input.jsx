function Input({ id, type, name, value, onChange }) {
  return (
    <>
      <input
        id={id}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
      />
    </>
  )
}

export default Input
