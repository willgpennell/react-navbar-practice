import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to={"/"}>About</Link>
        </li>
        <li>
          <Link to={"/"}>Services</Link>
        </li>
        <li>
          <Link to={"/"}>Contacts</Link>
        </li>
      </ul>
    </nav>
  );
}
