function TodoItem({ todo, handleDelete }) {
  return (
    <div>
      <p>{todo.text}</p>
      {/* <button onClick={() => console.log(todo.id)}>delete</button> */}
      <button onClick={() => handleDelete(todo.id)}>delete</button>
    </div>
  )
}

export default TodoItem
