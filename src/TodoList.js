import TodoItem from './TodoItem'

function TodoList({ todos, handleDelete, handleUpdate }) {
  return (
    <div>
      {todos.map((todo) => (
        <p>
          <TodoItem
            key={todo.id}
            todo={todo}
            handleDelete={handleDelete}
            handleUpdate={handleUpdate}
          />
        </p>
      ))}
    </div>
  )
}

export default TodoList
