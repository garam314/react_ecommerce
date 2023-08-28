import NavShoppingCart from "./ShoppingCart.jsx";
import NavMenu from "./NavMenu.jsx";
import { Container, Navbar, Nav } from "react-bootstrap";
import menu from "../../json_db/db_Nav.json";

function NavBar() {
  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="#">CollectiLand</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar-nav" />
          <Navbar.Collapse id="navbar-nav">
            <Nav className="ml-auto">
              <NavMenu menu={menu.menu} />
            </Nav>
            <NavShoppingCart total_items={2} />
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;
