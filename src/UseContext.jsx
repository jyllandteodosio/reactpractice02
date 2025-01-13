import './App.css'
import Footer from './Footer';
import Header from './Header';
import { ThemeProvider } from "./ThemeContext";
import ThemeDisplay from './ThemeDisplay'
import ThemeToggle from './ThemeToggle'
import { UserProvider } from './UserContext';

function UseContext() {

	return (
		<>
			<h1>UseContext</h1>
			<div>
				<h2>Exercise 1: Theme Context Example</h2>
				<ThemeProvider>
					<ThemeToggle />
					<ThemeDisplay />
				</ThemeProvider>
				<br />
				<hr />
			</div>

			<div>
				<h2>Exercise 2: Dynamic Context Consumption</h2>
				<UserProvider>
					<Header />
					<Footer />
				</UserProvider>
				<br />
				<hr />
			</div>
		</>
	)
}

export default UseContext