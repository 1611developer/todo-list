import { useState } from 'react'
import Header from './Header'
import TodoList from './TodoList'
import Form from './Form'
import Home from './Home'
import Contact from './Contact'
import { NavLink, Routes, Route } from 'react-router-dom'
import './App.css'

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
    <div className='App' >
      {/* <p>Count: {count ? { count } : null}</p>
      <p>Count: {count && { count }}</p>
      {console.log(typeof count)} */}

      <Header />
      <nav style={{ display: "flex", gap: "20px" }}>
        <NavLink to='/'>Homepage</NavLink>
        <NavLink to='/todolist'>Todo List</NavLink>
        <NavLink to='/contact'>Contact</NavLink>
      </nav>
      {/* <Form
        newTodoText={newTodoText}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      /> */}
      {/* <TodoList
        todos={todos}
        handleDelete={deleteTodo}
        handleUpdate={updateTodos}
      /> */}

      <Routes>
        <Route path='/' element={<Home />} />
        <Route
          path='/todolist'
          element={
            <TodoList
              todos={todos}
              handleDelete={deleteTodo}
              handleUpdate={updateTodos}
            />
          }
        />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </div>
  )
}

export default App
