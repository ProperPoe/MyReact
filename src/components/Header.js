import React from 'react'

export default function Header(props) {
  return (
    <div>
        <h1 className='header'>{props.text}</h1>
    </div>
  )
}
