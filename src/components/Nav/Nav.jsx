import React from 'react';
import {Navbar, Nav, Form, NavDropdown, Button, FormControl} from 'react-bootstrap';
import {Link} from 'react-router-dom';


const Navbars = () => {

    const navStyle= {
        color: 'grey',
        padding: '10px',
        listStyle: 'none',
    }

    return (
        <div className="container-fluid">
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="#home">Allan's Node</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Link style={navStyle} to="/">Dashboard</Link>
                        <Link style={navStyle} to="/assets">Assets</Link>
                        <Link style={navStyle} to="/streams">Streams</Link>
                        <Link style={navStyle} to="/leaderboard">Leaderboard</Link>
                    </Nav>
                    <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <Button variant="outline-success">Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default Navbars;