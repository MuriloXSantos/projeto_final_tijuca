function Select3({ options, className, name, value, onChange }) {
  return (
    <>
      <select
        name={name}
        value={value}
        onChange={onChange}
        className={className}
      >
        {options.map((item) => {
          return <option value={item.value} label={item.label}></option>
        })}
      </select>
    </>
  )
}
export default Select3
