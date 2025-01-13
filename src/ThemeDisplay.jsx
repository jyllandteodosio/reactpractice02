import './App.css'
import { ThemeContext } from './ThemeContext'
import { useContext } from 'react'

function ThemeDisplay() {

	const { theme } = useContext(ThemeContext)

	return (
		<>
			<div><p>Current theme: {theme}</p></div>
		</>
	)
}

export default ThemeDisplay