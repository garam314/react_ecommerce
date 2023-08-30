import { Cart } from "react-bootstrap-icons";
import { Navbar, Nav } from "react-bootstrap";

const NavShoppingCart = ({ total_items }) => {
  return (
    <Navbar.Brand href="#" className="ms-auto">
      <Nav.Item>
        <Cart id="cartshopping" />
        {total_items > 0 && <span id="count-cartshopping">{total_items}</span>}
      </Nav.Item>
    </Navbar.Brand>
  );
};

export default NavShoppingCart;
