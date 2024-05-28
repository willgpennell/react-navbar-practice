import { Link, NavLink } from "react-router-dom";

import "./Navbar.css";

export default function Navbar() {
  return (
    <nav>
      <ul>
        <Link to={"/"} className="title">
          Home
        </Link>
        <li>
          <NavLink to={"/About"}>About</NavLink>
        </li>
        <li>
          <NavLink to={"/Services"}>Services</NavLink>
        </li>
        <li>
          <NavLink to={"/Contacts"}>Contacts</NavLink>
        </li>
      </ul>
    </nav>
  );
}
