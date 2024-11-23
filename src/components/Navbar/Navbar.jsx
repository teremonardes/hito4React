import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Button from 'react-bootstrap/Button'

const NavbarP = () => {
  const total = 25000
  // const token = false
  return (
    <Navbar expand='lg' bg='dark' data-bs-theme='dark'>
      <Container>
        <Navbar.Brand href='#home'>Pizzería Mamma Mia</Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='me-auto'>
            <Nav.Link href='#home'>🍕Home
            </Nav.Link>
            <Nav.Link href='#profile'>🔓Profile</Nav.Link>
            <Nav.Link href='#logout'>🔒Logout</Nav.Link>
            <Nav.Link href='#login'>🔐Login</Nav.Link>
            <Nav.Link href='#registrer'>🔐Register</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Button variant='outline-light'> 🛒Total: ${total} </Button>

      </Container>
    </Navbar>
  )
}

export default NavbarP
