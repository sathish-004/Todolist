import { useState } from "react"

import "../style.css"
const Todo = () => {
    const[todos,setTodos] = useState([]);
    const[input,setInput] = useState("");

    const handleclick = () => {
        setTodos((todos) => {
             return todos.concat({
                text : input,
                id: Math.floor(Math.random() * 10)
            })
        })

        setInput("");
    }

    const removetodo = id => setTodos((todos) => todos.filter((t) => t.id !== id))
    
  return (
    <div className="container">
        <h1 >Todo list</h1>
        <input type="text" placeholder="New Todo"  value={input}
         onChange={(e) => setInput(e.target.value)}/>
         <button onClick={handleclick}>Submit</button>

        <ul className="todos-list">
            {
                todos.map(({text,id}) => (
                    <li  className="todo" key={id}>
                        <span>{text}</span>
                        <button className="close" onClick={(e) => removetodo(id)}>delete</button>
                    </li>
                ))

            }
        </ul>
    </div>
  )
}

export default Todo