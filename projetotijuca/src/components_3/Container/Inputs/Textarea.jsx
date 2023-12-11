function Textarea({ name, value }) {
  return (
    <>
      <textarea required name={name} defaultValue={value}></textarea>
    </>
  )
}

export default Textarea
