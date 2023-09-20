import { Cart } from "react-bootstrap-icons";
import { Navbar, Nav } from "react-bootstrap";
import { useContext } from "react"
import { CartContext } from "../../Contexts/CartContext"
import "../../styles/Link_style.css"

const NavShoppingCart = ({ total_items }) => {
  const { items } = useContext(CartContext)
  return (
    <Navbar.Brand href="/checkout" className="ms-auto">
      <Nav.Item>
        {items.length}
        <Cart id="cartshopping" />
      </Nav.Item>
    </Navbar.Brand>
  );
};

export default NavShoppingCart;
