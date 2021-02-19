import React from 'react';
import { Navbar, NavDropdown, Nav } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCar } from '@fortawesome/free-solid-svg-icons'


const NavBar = () => {
    const carIcon = <FontAwesomeIcon icon={faCar} color="Dodgerblue"/>

    return (
        <Navbar bg="dark" variant="dark" sticky="top">
            <Navbar.Brand href="/acc-gh-pages">
                {carIcon}
            </Navbar.Brand>

            <Nav className="mr-auto">
                <NavDropdown title="Services" id="collasible-nav-dropdown">
                    <NavDropdown.Item href="/oilchange">New Oil Change</NavDropdown.Item>
                    <NavDropdown.Item href="/tires">New Tires</NavDropdown.Item>
                    <NavDropdown.Item href="/battery">New Battery</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="/VINDecoder">VIN Decoder</NavDropdown.Item>
                    <NavDropdown.Item href="/vehiclelist">Vehicle List</NavDropdown.Item>
                </NavDropdown>   
            </Nav>
        </Navbar>
    )
}

export default NavBar;