import './App.css'
import PropTypes from 'prop-types'
import React from 'react'

const CountLogger = React.memo(({ logCount }) =>{

	console.log("ChildComponent re-rendered");

	return (
		<>
			<p><button onClick={logCount}>Log Counter Value</button></p>
		</>
	)
})

CountLogger.propTypes = {
	logCount: PropTypes.func
}

export default CountLogger