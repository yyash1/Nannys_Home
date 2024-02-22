import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function CustomNavbar() {
  const handleContactClick = () => {
    // Define the behavior when the Contact link is clicked
    // For now, let's just console.log a message
    console.log("Contact link clicked");
  };

  return (
    <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
      <Container>
        <Navbar.Brand>Nanny's Home</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Link to="/" className="nav-link">
              Login
            </Link>
            <Link to="/signup" className="nav-link">
              Sign Up
            </Link>
            <Nav.Link onClick={handleContactClick} className="nav-link">
              Contact
            </Nav.Link>
            <Nav.Link href="#privacy">Privacy</Nav.Link>
            <Nav.Link href="#about">About Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}