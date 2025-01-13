import './App.css'
import { useReducer } from 'react'

const initialFormState = {
	name: "",
	email: "",
	address: ""
}

const reducer = (state, action) => {
	switch (action.type) {
		case 'Update': {
			return {
				...state,
				[action.field]: action.value
			}
		}
		case 'Reset_Form': {
			return initialFormState
		}
		default: {
			throw Error('Unknown action: ' + action.type)
		}
	}
}

function DynamicForm() {
	const [state, dispatch] = useReducer(reducer, initialFormState);

	const handleUpdate = (e) => {
		const { name, value } = e.target

		dispatch({
			type: 'Update',
			field: name, value
		});
	}

	const handleReset = () => {
		dispatch({
			type: 'Reset_Form',
		});
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		console.log("Form submitted: ", state)
		handleReset()
	}

	return (
		<>
			<form className="dynamic-form" onSubmit={handleSubmit}>
				<p>
					<label htmlFor="name">Name: </label>
					<input type="text" name="name" onChange={handleUpdate} value={state.name} />
				</p>
				<p>
					<label htmlFor="email">Email: </label>
					<input type="email" name="email" onChange={handleUpdate} value={state.email} />
				</p>
				<p>
					<label htmlFor="address">Address: </label>
					<input type="text" name="address" onChange={handleUpdate} value={state.address} />
				</p>
			</form>
			<div className="form-data">
				<p>Form data:</p>
				<pre>{JSON.stringify(state, null, 2)}</pre>
			</div>
		</>
	)
}

export default DynamicForm

