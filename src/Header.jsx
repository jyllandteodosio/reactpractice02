import './App.css'
import { UserContext } from './UserContext'
import { useContext } from 'react'

function Header() {

	const { user } = useContext(UserContext)

	return (
		<>
			<header>
				<h1>Welcome, {user.name}!</h1>
			</header>
		</>
	)
}

export default Header