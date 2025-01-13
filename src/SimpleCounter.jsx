import './App.css'
import { useState, useCallback } from 'react'
import CountLogger from './CountLogger'

function SimpleCounter() {

	const [counter, setCounter] = useState(0)

	const logCount = useCallback(() => {
		console.log("Counter value logged");
	}, []);
	
	const increment = () => {
		setCounter(counter + 1)
	}

	return (
		<>
			<div className='simple-counter'>
				<p>Counter Value: {counter}</p>
				<button onClick={increment}>Increment</button>
				<CountLogger logCount={logCount} />
			</div>
		</>
	)
}


export default SimpleCounter