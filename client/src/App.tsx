import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './components/About'
import Proof from './components/Proof'
import HowISolve from './components/HowISolve'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Stack from './components/Stack'
import Education from './components/Education'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
	return (
		<div id='top'>
			<Nav />
			<main>
				<Hero />
				<About />
				<Proof />
				<HowISolve />
				<Experience />
				<Projects />
				<Stack />
				<Education />
				<Contact />
			</main>
			<Footer />
		</div>
	)
}

export default App
