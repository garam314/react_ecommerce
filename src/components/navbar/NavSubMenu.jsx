import { NavDropdown } from "react-bootstrap";
import { useNavigate } from "react-router";

function NavSubMenu(props) {
  const navigate = useNavigate();
  return props.submenu.map((sm) => {

    return (
      <NavDropdown.Item
        onClick={() => {
          navigate(`/${encodeURIComponent(sm.filter)}/${encodeURIComponent(sm.name)}`);
        }}
        key={sm.id}
      >
        {sm.name}
      </NavDropdown.Item>
    );
  });
}

export default NavSubMenu;
