 import React from 'react';
import logo from './logo.svg';
import './App.css';

import {Form, FormControl, Button, Navbar, Nav, NavItem, NavDropdown} from 'react-bootstrap';

function App() {
  return (
    <div className="App">
	  <Navbar bg="light" expand="lg">
		  <Navbar.Brand>
		    <a href="#">React-Bootstrap</a>
		  </Navbar.Brand>
		  <Navbar.Toggle aria-controls="basic-navbar-nav"/>
		  <Navbar.Collapse id="basic-navbar-nav">
		    <Nav className="mr-auto">
			  <Nav.Link href="#home">Home</Nav.Link>
			  <Nav.Link href="#link">Link</Nav.Link>
			  <NavDropdown title="Dropdown" id="basic-nav-dropdown">
			    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
				<NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
				<NavDropdown.Divider />
				<NavDropdown.Item href="#action/3.3">Seperated link</NavDropdown.Item>
				
			  </NavDropdown>
			</Nav>
			<Form inline>
			  <FormControl type="text" placeholder="Search" className="mr-sm-2" />
			  <Button variant="outline-success">Search</Button>
			</Form>
		  </Navbar.Collapse>
	  </Navbar>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hi!
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
