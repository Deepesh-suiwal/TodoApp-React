import React, { useState } from 'react'



function TodoList() {
    const [input, setInput] = useState("")
    const [task, setTask] = useState([])

    function addTask() {
        const obj = { id: Date.now(), taskValue: input }
        setTask([...task, obj])
    }
    return (
        <>
            <input type="text" placeholder='enter your name' value={input} onChange={(e) => { setInput(e.target.value) }} />
            <button onClick={addTask}>Click_Here</button>
            <ul>

                {task.map((item) => {
                    return (
                        <li key={item.id}>{item.taskValue}</li>
                    )
                })}
            </ul>

        </>
    )
}

export default TodoList