import React from 'react'
import { Navbar,Nav,Form,FormControl,Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">Store Name</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
          </Form>
          <Navbar>
              <Nav>
                  <Nav.Link>
                    <Link to="/login">
                      Sign In
                    </Link>
                  </Nav.Link>
                  <Nav.Link>Account</Nav.Link>
                  <Nav.Link>
                    <Link to="/cart">
                      Chart
                    </Link>
                  </Nav.Link>
              </Nav>
          </Navbar>
        </Navbar.Collapse>
      </Navbar>
    )
}

export default Header
