import './App.css'
import DynamicForm from './DynamicForm'
import MiniShop from './MiniShop'
import ReducedCounter from './ReducedCounter'
import ReducedTodo from './ReducedTodo'

function UseReducer() {

	return (
		<>
			<h1>useReducer</h1>
			<div>
				<h2>Exercise 1: Counter with useReducer</h2>
				<ReducedCounter />
				<br />
				<hr />
			</div>
			
			<div>
				<h2>Exercise 2: Todo List with useReducer</h2>
				<ReducedTodo />
				<br />
				<hr />
			</div>
			
			<div>
				<h2>Exercise 3: Dynamic Form Handling</h2>
				<DynamicForm />
				<br />
				<hr />
			</div>
			
			{/* <div>
				<h2>Exercise 4: Global State Management</h2>
				<MiniShop />
				<br />
				<hr />
			</div> */}
		</>
	)
}

export default UseReducer