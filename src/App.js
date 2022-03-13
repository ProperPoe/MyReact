import { useState } from 'react'
import Header from './components/Header.js'
import Todos from './components/Todos.js'
import AddToDo from './components/AddToDo.js'

function App() {
  const [items, setItems] = useState([
    {
        id: 1,
        item: 'Clean room',
    },
    {
        id: 2,
        item: 'Do homework',
    },
    {
        id: 3,
        item: 'Tell ya go fuck yaself'
    }
])

const addToDo = (bro) => {
  const id = Math.floor(Math.random() * 10000) + 1
  const newTodo = {id, ...bro}
  setItems([...items, newTodo])
}

const deleteTodo = (id) => {
  setItems(items.filter((item) => item.id !== id))
}

  return (
    <div className="App">
      <Header text="Steve's Todos"/>
      <AddToDo onAdd={addToDo}/>
      {items.length > 0 ? (
        <Todos color='blue' todoos={items} onDelete={deleteTodo}/>
      ) : (<h3 style={{color:'brown'}}>No Todos</h3>)}
    </div>
  );
}

export default App;
