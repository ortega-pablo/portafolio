import About from './components/About'
import Home from './components/Home'
import NavBar from './components/NavBar'
import Portfolio from './components/Portfolio/Portfolio'
import SocialNav from './components/SocialNav'

function App() {
	return (
		<div>
			<NavBar />
			{/* <Home />
			<About /> */}
			<Portfolio />
			<SocialNav />
		</div>
	)
}

export default App
