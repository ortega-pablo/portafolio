import About from './components/About'
import Home from './components/Home'
import NavBar from './components/NavBar'
import Portfolio from './components/Portfolio/Portfolio'
import SocialNav from './components/SocialNav'
import Technologies from './components/Technologies/Technologies'

function App() {
	return (
		<div>
			<NavBar />
			<Home />
			<About />
			<Technologies />
			<Portfolio />
			<SocialNav />
		</div>
	)
}

export default App
