import Nav, { BottomNav } from './components/Nav'
import Hero from './components/Hero'
import Cases from './components/Cases'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Stack from './components/Stack'
import Education from './components/Education'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
	return (
		<>
			<a className='skip' href='#contenido'>
				Saltar al contenido
			</a>
			<Nav />
			<main id='contenido'>
				<Hero />
				<Cases />
				<Projects />
				<Experience />
				<Stack />
				<Education />
				<Contact />
			</main>
			<Footer />
			<BottomNav />
		</>
	)
}

export default App
