function Textarea(props) {
  return (
    <>
      <textarea
        required
        name={props.name}
        value={props.value}
        onChange={props.onChange}
      ></textarea>
    </>
  )
}

export default Textarea
