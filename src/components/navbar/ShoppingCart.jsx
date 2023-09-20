import { Cart } from "react-bootstrap-icons";
import { Navbar, Nav } from "react-bootstrap";
import "../../styles/Link_style.css"

const NavShoppingCart = ({ total_items }) => {
  return (
    <Navbar.Brand href="/checkout" className="ms-auto">
      <Nav.Item>
        <Cart id="cartshopping" />
      </Nav.Item>
    </Navbar.Brand>
  );
};

export default NavShoppingCart;
