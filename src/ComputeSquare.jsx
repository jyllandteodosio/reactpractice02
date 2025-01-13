import './App.css'
import { useState, useMemo } from 'react'

function ComputeSquare() {

	const [number, setNumber] = useState("")

	const calculateSquare = (num) => {
		return num * num
	}

	const squaredNumber = useMemo(() => {
		const num = parseInt(number, 10);
		return isNaN(num) ? null : calculateSquare(num);
	}, [number])

	const handleChange = (e) => {
		const value = e.target.value
		setNumber(value)
	}

	return (
		<>
			<h4>Calculate Square</h4>
			<p>
				<input onChange={handleChange} type="number" min="0"/>{" "}
			</p>
			<p>Result: {squaredNumber !== null ? squaredNumber : "Enter a valid number"}</p>
		</>
	)
}


export default ComputeSquare