import React from 'react'
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Header = () => {

  //import variable from redux

  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin;
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">Store Name</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link>
            <Link to="/">Home</Link>
          </Nav.Link>
          <Nav.Link >
            <Link to="/product-category">Product</Link>
          </Nav.Link>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-success">Search</Button>
        </Form>
        <Navbar>
          {userInfo ? (
            <Nav>
              <Nav.Link>
                <Link to="/account">Account</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/cart">Cart</Link>
              </Nav.Link>

            </Nav>

          ) : (<Link to="/login">Login</Link>)}
        </Navbar>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Header
