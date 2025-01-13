import './App.css'
import SimpleCounter from './SimpleCounter'
import SimpleForm from './SimpleForm'

function UseCallback() {

	return (
		<>
			<h1>UseCallback</h1>
			<div>
				<h2>Exercise 1: Prevent Unnecessary Re-Renders</h2>
				{/* <ProductPage productId={1} referrer={'google'} theme={"christmas"}/> */}
				<SimpleCounter />
				<br />
				<hr />
			</div>

			<div>
				<h2>Exercise 2: Passing Memoized Callback Functions</h2>
				<SimpleForm />
				<br />
				<hr />
			</div>
		</>
	)
}

export default UseCallback