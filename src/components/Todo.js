import React from 'react'

export default function Todo({ todo, onDelete }) {
  return (
    <div className='toDoline'>
        <h3>{todo.item} <button style={{ cursor: 'pointer', backgroundColor: 'white', color: 'red' }} onClick={() => onDelete(todo.id)}>x</button></h3>
    </div>
  )
}
