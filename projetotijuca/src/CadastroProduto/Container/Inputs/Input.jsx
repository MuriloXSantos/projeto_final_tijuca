function Input({ id, type, placeholder, name, value, onChange }) {
  return (
    <>
      <input
        required
        id={id}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </>
  )
}

export default Input
