import TodoItem from './TodoItem'

function TodoList({ todos, handleDelete }) {
  return (
    <div>
      {todos.map((todo) => (
        <p>
          <TodoItem key={todo.id} todo={todo} handleDelete={handleDelete} />
        </p>
      ))}
    </div>
  )
}

export default TodoList
