import React from 'react'
import Todo from './Todo.js'

export default function Todos({todoos, onDelete}) {
  return (
    <div>
        {todoos.map((boy) => (<Todo key={boy.id} todo={boy} onDelete={onDelete} />))}
    </div>
  )
}