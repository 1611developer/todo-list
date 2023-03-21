import { useState } from 'react'
import Header from './Header'
import TodoList from './TodoList'
import Form from './Form'

function App() {
  const [todos, setTodos] = useState([
    { id: '1', text: 'groceries' },
    { id: '2', text: 'laundry' },
    { id: '3', text: 'homework' },
  ])

  const [newTodoText, setNewTodoText] = useState('')

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id))
  }

  const handleChange = (e) => {
    setNewTodoText(e.target.value)
  }

  // prevent refresh
  // prevent empty submission
  // create a new todo object with id and text
  // setTodos state to previous value plus new todo
  // reset newTodoText

  const handleSubmit = (e) => {
    // prevent refresh
    e.preventDefault()
    // prevent empty submission
    if (!newTodoText) return
    // create a new todo object with id and text
    const newTodo = {
      id: todos.length + 1,
      text: newTodoText,
    }
    // setTodos state to previous value plus new todo
    setTodos([...todos, newTodo])
    // reset newTodoText
    setNewTodoText('')
  }

  return (
    <div className='App'>
      <Header />
      <Form
        newTodoText={newTodoText}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
      <TodoList todos={todos} handleDelete={deleteTodo} />
    </div>
  )
}

export default App
