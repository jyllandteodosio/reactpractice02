import './App.css'
import { useState, useCallback, useRef } from 'react'

function SimpleForm() {

	const [formData, setFormData] = useState({
		firstName: "",
		lastName: ""
	})
	const firstName = useRef(null)
	const lastName = useRef(null)

	const handleChange = (e) => {
		const { name, value } = e.target
		setFormData((prev) => ({
			...prev,
			[name]: value,
		}));
	}

	const handleSubmit = useCallback((e) => {
		e.preventDefault()
		console.log(formData)
	},[formData])

	return (
		<>
			<form id='simple-form' onSubmit={handleSubmit}>
				<p>
					<label htmlFor="firstName">First Name: </label>
					<input ref={firstName} type="text" name="firstName" onChange={handleChange} value={formData.firstName} />
				</p>
				<p>
					<label htmlFor="lastName">Last Name: </label>
					<input ref={lastName} type="text" name="lastName" onChange={handleChange} value={formData.lastName} />
				</p>
				<p>
					<button type="submit">Submit</button>
				</p>

			</form>
		</>
	)
}


export default SimpleForm