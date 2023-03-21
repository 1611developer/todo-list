function Form({ newTodoText, handleChange, handleSubmit }) {
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type='text' value={newTodoText} onChange={handleChange} />
        <button type='submit'>Add</button>
      </form>
    </div>
  )
}

export default Form
