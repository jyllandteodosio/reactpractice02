import './App.css'
import Factorial from './Factorial'
import ComputeSquare from './ComputeSquare'

function UseMemo() {

	return (
		<>
			<h1>UseMemo</h1>
			<div>
				<h2>Exercise 1: Memoize Expensive Calculations</h2>
				<Factorial />
				<br />
				<hr />
			</div>
			
			<div>
				<h2>Exercise 2: Dependency Array Demonstration</h2>
				<ComputeSquare />
				<br />
				<hr />
			</div>
		</>
	)
}

export default UseMemo