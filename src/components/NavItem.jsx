import { Link } from "react-router-dom";

import { Stack } from "react-bootstrap";

function NavItem({ text, path, icon }) {
  return (
    <li className="cars-list-item">
      <Link to={path}>
        <Stack direction="horizontal" gap={3}>
          <div className="cars-list-item__icon">{icon}</div>
          <div className="cars-list-item__text">{text}</div>
        </Stack>
      </Link>
    </li>
  );
}

export default NavItem;
