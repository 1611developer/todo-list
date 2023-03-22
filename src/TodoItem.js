import { useState } from 'react'

function TodoItem({ todo, handleDelete, handleUpdate }) {
  const [editMode, setEditMode] = useState(false)
  const [updatedTodoText, setUpdatedTodoText] = useState(todo.text)

  // handleSave:
  function handleSave() {
    handleUpdate(todo.id, updatedTodoText)
    setEditMode(false)
  }

  // handleCancel:
  function handleCancel() {
    setEditMode(false)
  }

  // handleEdit:
  function handleEdit() {
    setEditMode(true)
  }

  // handleChange:
  function handleChange(e) {
    setUpdatedTodoText(e.target.value)
  }

  // handleDelete:

  return (
    <div>
      {editMode ? (
        <>
          <input type='text' value={updatedTodoText} onChange={handleChange} />
          <button onClick={handleSave}>Save</button>
          <button onClick={handleCancel}>Cancel</button>
        </>
      ) : (
        <>
          <p>{todo.text}</p>
          <button onClick={handleEdit}>Edit</button>
          <button onClick={() => handleDelete(todo.id)}>delete</button>
        </>
      )}
    </div>
  )
}

export default TodoItem
