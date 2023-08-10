import React from 'react';
import { Nav, NavDropdown  } from 'react-bootstrap';

const submenuOptions = [
    { id: 1, text: 'Bandai' },
    { id: 2, text: 'Figma' },
    { id: 3, text: 'Mezco' },
  ];


const NavbarSelesOff = () =>{
    return (
        <NavDropdown title="Ofertas" id="basic-nav-dropdown">
            {submenuOptions.map(option => (
                <NavDropdown.Item key={option.id} href="#">
                    {option.text}
                </NavDropdown.Item>
            ))}
        </NavDropdown>
    );
}

export default NavbarSelesOff