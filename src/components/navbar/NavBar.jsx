import NavShoppingCart from "./ShoppingCart.jsx";
import NavMenu from "./NavMenu.jsx";
import { Container, Navbar, Nav } from "react-bootstrap";
import menu from "../../db/db_Nav.json";
import { useNavigate } from "react-router";

function NavBar() {
  const navigate = useNavigate();
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand
          href="#"
          onClick={() => {
            navigate("/");
          }}
        >
            <img
              alt=""
              src="https://i.ibb.co/YTt2mSk/Untitled-2.png"
              width="80"
              height="40"
              className="d-inline-block align-top"
            />{' '}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ml-auto">
            <NavMenu menu={menu.menu} />
          </Nav>
          <NavShoppingCart />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
