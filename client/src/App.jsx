import About from './components/About'
import Contact from './components/Contact'
import ThemeToggle from './components/ThemeToggle'
import Home from './components/Home'
import NavBar from './components/NavBar'
import Portfolio from './components/Portfolio/Portfolio'
import SocialNav from './components/SocialNav'
import Technologies from './components/Technologies/Technologies'

function App() {
	return (
		<div>
			<ThemeToggle />
			<NavBar />
			<Home />
			<About />
			<Technologies />
			<Portfolio />
			<Contact />
			<SocialNav />
		</div>
	)
}

export default App
