import { useState } from 'react'
import Header from './Header'
import TodoList from './TodoList'

function App() {
  const [todos, setTodos] = useState([
    { id: '1', text: 'groceries' },
    { id: '2', text: 'laundry' },
    { id: '3', text: 'homework' },
  ])

  console.log(todos)

  // pass in the ID of the one we want to delete
  // loop through each item in our todo list
  // if the id of the one we clicked/passed in matches an id from our list, it gets removed from the array

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id))
  }

  console.log(todos)

  return (
    <div className='App'>
      <Header />
      <TodoList todos={todos} handleDelete={deleteTodo} />
    </div>
  )
}

export default App
