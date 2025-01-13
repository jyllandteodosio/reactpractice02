import './App.css'
import { useReducer } from 'react'
import AddTask from './AddTask';

const reducer = (tasks, action) => {

	switch (action.type) {
		case 'add': {
			return [...tasks, {
				id: action.id,
				text: action.text,
				done: false
			}]
		}
		case 'toggle': {
			return tasks.map((task) =>
				task.id === action.task.id ? { ...task, done: !task.done } : task
			)
		}
		case 'remove': {
			return tasks.filter(t => t.id !== action.id)
		}
		default: {
			throw Error('Unknown action: ' + action.type)
		}
	}
}

function ReducedTodo() {
	const [tasks, dispatch] = useReducer(
		reducer,
		initialTasks
	);

	const handleAdd = (text) => {
		dispatch({
			type: 'add',
			id: nextId++,
			text: text,
		});
	}

	const handleChange = (task) => {
		dispatch({
			type: 'toggle',
			task: task
		})
		console.log(task)
	}

	const handleRemove = (taskId) => {
		dispatch({
			type: 'remove',
			id: taskId
		})
	}

	const logTasks = () => {
		console.log(tasks)
	}

	return (
		<>
			<AddTask onAddTask={handleAdd} />
			<div className="todo-list-div">
				<ul id="todo-list">
					{tasks.map(task => (
						<li className="todo-list-item" key={task.id}>
							<input type="checkbox" checked={task.done} className="toggle-item" onChange={() => { handleChange(task) }} />
							<span>{task.text}</span>
							<button className="remove-item" type="button" onClick={() => { handleRemove(task.id) }}>Remove</button>
						</li>
					))}
				</ul>
			</div>
			<p>
				<button onClick={logTasks}>Show Tasks in console</button>
			</p>
		</>
	)
}

export default ReducedTodo

let nextId = 3
const initialTasks = [
	{ id: 0, text: 'Visit Kafka Museum', done: false },
	{ id: 1, text: 'Watch a puppet show', done: false },
	{ id: 2, text: 'Lennon Wall pic', done: false }
];
