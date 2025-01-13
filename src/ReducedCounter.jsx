import './App.css'
import { useReducer } from 'react'

const reducer = (state, action) => {
	switch (action.type) {
		case 'increment': {
			return {
				count: state.count + 1
			};
		}
		case 'decrement': {
			return {
				count: state.count - 1
			};
		}
		case 'reset': {
			return {
				count: 0
			};
		}
	}
	throw Error('Unknown action: ' + action.type);
}

function ReducedCounter() {
	const [state, dispatch] = useReducer(reducer, { count: 0 });

	return (
		<>
			<div className='simple-counter'>
				<p>Counter Value: {state.count}</p>
				<p><button onClick={() => {dispatch({ type: 'increment' })}}>Increment</button></p>
				<p><button onClick={() => {dispatch({ type: 'decrement' })}}>Decrement</button></p>
				<p><button onClick={() => {dispatch({ type: 'reset' })}}>Reset</button></p>
			</div>
		</>
	)
}


export default ReducedCounter