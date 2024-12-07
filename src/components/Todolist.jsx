import React from 'react'
import "../style1.css";
import { useState} from 'react';


const Todolist = () => {
  const [todos,settodos]=useState([]);
  const [input,setinput]=useState("");


  const handler=()=>{
    settodos((todos)=>{
     return todos.concat({text:input,
        id:Math.floor(Math.random()*10)})
    })
    setinput("");
  }
  const removetodo=id=>settodos(todos=>todos.filter(t=>t.id!=id));
  return (
    <div className='container'>
      <input type="text" placeholder='enter the text' value={input} onChange={(e)=> setinput(e.target.value)}/>
      <button onClick={handler}>submit</button>

      <ul className='todos-list'>
          {todos.map(({text,id})=>(
            <li className='todo' key={id}>
              <span>{text}</span>
              <button className='close' onClick={()=> removetodo(id)}>X</button>
            </li>
          ))}
      </ul>

    </div>
  )
}

export default Todolist