import { Container } from 'react-bootstrap';
import NavigationBar from './components/NavigationBar';
import Landing from './components/Landing';
import FeaturedWorks from './components/FeaturedWorks';
import ToolsAndTech from './components/ToolsAndTech';
import Contact from './components/Contact';


function App() {

	return (
		<>
			<NavigationBar />
			<Container>
				<Landing />
			</Container>
			<FeaturedWorks />
			<ToolsAndTech />
			<Contact />
		</>
	)
}

export default App;
