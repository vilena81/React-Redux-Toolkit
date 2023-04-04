
import './App.css';
import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addText, deleteText, deleteAll } from './TodoSlice'

function App() {
  const [text, setText] = useState("")
  const dispatch = useDispatch()
  const todo = useSelector((state) => state.todo)



  return (
    <div className="App">
      <div>

        <input onChange={(el) => setText(el.target.value)} />
        <button onClick={() => dispatch(addText(text))}>Add</button>
        <button onClick={() => dispatch(deleteAll())}>deletAll</button>
        {todo.todolist.map((value, index) => {
          return (
            <div key={index}>
              {value}
              <button onClick={() => dispatch(deleteText(index))}>X</button>
            </div>
          )
        })}
      </div>
    </div>
  );
}

export default App;