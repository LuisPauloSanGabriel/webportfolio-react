import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function NavigationBar() {

	return (
	<Navbar id="Nav" expand="lg">
      <Container>
        <Navbar.Brand href="#landing" className="nav-link-custom">Luis</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#landing" className="nav-link-custom nav-link-effect">Home</Nav.Link>
            <Nav.Link href="#works" className="nav-link-custom nav-link-effect">Works</Nav.Link>
            <Nav.Link href="#ToolsAndTechStack" className="nav-link-custom nav-link-effect">Tools</Nav.Link>
            <Nav.Link href="#contact" className="nav-link-custom nav-link-effect">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
	)
}