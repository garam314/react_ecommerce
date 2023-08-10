import NavbarSelesOff from './SaleOff.jsx';
import NavbarCollectibles from './Collectibles.jsx';
import NavbarModelKit from './ModelKit.jsx';
import NavbarPresales from './Presale.jsx';
import NavShoppingCart from './ShoppingCart.jsx'
import { Container, Navbar, Nav } from 'react-bootstrap'

function NavBar() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
            <Navbar.Brand href="#">CollectiLand</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbar-nav" />
            <Navbar.Collapse id="navbar-nav">
                <Nav className="ml-auto">
                  <NavbarSelesOff />
                  <NavbarCollectibles />
                  <NavbarModelKit />
                  <NavbarPresales />
                </Nav>
                <NavShoppingCart total_items={2}/>
            </Navbar.Collapse>
        </Container>
    </Navbar>
);
}

export default NavBar;
