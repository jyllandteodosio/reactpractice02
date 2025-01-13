import './App.css'
import { useState } from 'react'

function AddTask({ onAddTask }) {
	const [text, setText] = useState("")

	return (
		<>
			<input id="todo-input" type="text" onChange={e => setText(e.target.value)} value={text}></input>
			{" "}
			<button id="add-item" type="text" onClick={() => {
				setText("")
				onAddTask(text)
			}}>Add</button>
		</>
	)
}

export default AddTask