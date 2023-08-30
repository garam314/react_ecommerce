import { NavDropdown } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import NavSubMenu from "./NavSubMenu";

function NavMenu(props) {
  const { menu } = props;

  return (
    <>
      {menu.map((option) => {
        if ("submenu" in option) {
          return (
            <NavDropdown title={option.name} key={option.id}>
              <NavSubMenu submenu={option.submenu} />
            </NavDropdown>
          );
        } else {
          return <Nav.Link key={option.id}>{option.name}</Nav.Link>;
        }
      })}
    </>
  );
}

export default NavMenu;
