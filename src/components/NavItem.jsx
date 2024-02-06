import { Link } from "react-router-dom";

function NavItem({ text, path }) {
  return (
    <li className="cars-list-item">
      <Link to={path}>{text}</Link>
    </li>
  );
}

export default NavItem;
