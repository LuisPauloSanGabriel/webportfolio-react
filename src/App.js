import { Container } from 'react-bootstrap';
import NavigationBar from './components/NavigationBar';
import Landing from './components/Landing';
import ExpStats from './components/ExperienceStats';
import FeaturedWorks from './components/FeaturedWorks';
import ToolsAndTech from './components/ToolsAndTech';
import Contact from './components/Contact';
import Footer from './components/Footer';


function App() {

	return (
		<>
			<NavigationBar />
			<Container>
				<Landing />
			</Container>
			<ExpStats />
			<FeaturedWorks />
			<ToolsAndTech />
			<Contact />
			<Footer />
		</>
	)
}

export default App;
