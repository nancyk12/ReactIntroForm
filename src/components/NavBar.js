import Navbar from 'react-bootstrap/NavBar'
import Nav from 'react-bootstrap/Nav'
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container'

const NavBar = () => {
    return (
/*<div>
    <nav className="navbar">
        <img src="./images/icons8-film-reel-30.png" className="nav--logo" alt="reel"/>
        <Link to="/">Home</Link>
        <Link to="/MovieFormPage">All Moves</Link>
        <Link to="/MoviePage">One Movie</Link>
    </nav>
    
</div>*/

  <Navbar bg="dark" variant="dark">
     <Container fluid className="justify-content-center">
        <Row>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/MovieFormPage">All Movies</Nav.Link>
            <Nav.Link href="/MoviePage">One Movie</Nav.Link>
          </Nav>
        </Row>
      </Container>
    </Navbar>

    )
}

export default NavBar;
