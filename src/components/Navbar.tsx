import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <ul>
        <Link to={"/"}>Home</Link>
        <li>
          <Link to={"/About"}>About</Link>
        </li>
        <li>
          <Link to={"/Services"}>Services</Link>
        </li>
        <li>
          <Link to={"/Contacts"}>Contacts</Link>
        </li>
      </ul>
    </nav>
  );
}
