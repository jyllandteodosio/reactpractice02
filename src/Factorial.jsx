import './App.css'
import { useState, useMemo } from 'react'

function Factorial() {

	const [number, setNumber] = useState("")

	const calculateFactorial = (num) => {
		if (num === 0 || num === 1)
			return 1
		return num * (calculateFactorial(num - 1))
	}

	const factorial = useMemo(() => {
		const num = parseInt(number, 10);
		return isNaN(num) ? null : calculateFactorial(num);
	}, [number])

	const handleChange = (e) => {
		const value = e.target.value
		setNumber(value)
	}

	return (
		<>
			<h4>Factorial Calculator</h4>
			<p>
				<input onChange={handleChange} type="number" min="0" id="factorial-input" />{" "}
			</p>
			<p>Result: {factorial !== null ? factorial : "Enter a valid number"}</p>
		</>
	)
}


export default Factorial