function Input({ id, type, placeholder, name, value, onChange }) {
  return (
    <>
      <input
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
