import './App.css'
import { UserContext } from './UserContext'
import { useContext } from 'react'

function Footer() {

	const { user } = useContext(UserContext)

	return (
		<>
			<footer>
			<p>Contact: {user.email}</p>
			</footer>
		</>
	)
}

export default Footer