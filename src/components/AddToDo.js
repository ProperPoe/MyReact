import React, { useState } from 'react'

export default function AddToDo({ onAdd }) {
    const [item, setItem] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()

        if(!item){
            alert('Please add Todo')
            return
        }

        onAdd({ item })

        setItem('')
    }
  return (
    <form onSubmit={onSubmit}>
        <input 
            type='text' 
            placeholder='Enter Todo' 
            value={item} 
            onChange={(e) => setItem(e.target.value)} />
        <input type='submit' value='Add' />
    </form>
  )
}
