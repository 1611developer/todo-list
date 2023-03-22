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

  let count = 0

  function updateTodos(id, updatedTodoText) {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, text: updatedTodoText }
      } else {
        return todo
      }
    })
    setTodos(updatedTodos)
  }

  return (
    <div className='App' style={{ color: 'red', backgroundColor: 'blue'}}>
      <p>Count: {count ? { count } : null}</p>
      <p>Count: {count && { count }}</p>
      {console.log(typeof count)}

      <Header />
      <Form
        newTodoText={newTodoText}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
      <TodoList
        todos={todos}
        handleDelete={deleteTodo}
        handleUpdate={updateTodos}
      />
    </div>
  )
}

export default App
