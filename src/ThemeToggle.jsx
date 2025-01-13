import './App.css'
import { ThemeContext } from './ThemeContext'
import { useContext } from 'react'

function ThemeToggle() {

	const { toggleTheme } = useContext(ThemeContext)

	return (
		<>
			<button onClick={toggleTheme}>Toggle Theme</button>
		</>
	)
}

export default ThemeToggle