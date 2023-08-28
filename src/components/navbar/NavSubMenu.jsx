import { NavDropdown } from "react-bootstrap";

function NavSubMenu(props) {
  return props.submenu.map((sm) => {
    return <NavDropdown.Item key={sm.id}>{sm.name}</NavDropdown.Item>;
  });
}

export default NavSubMenu;