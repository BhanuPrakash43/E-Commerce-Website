import { Link } from "react-router-dom";
import styles from "./Nav.module.css"

function Nav() {
  return (
    <nav className={styles.nav}>
      <h1 className={styles.logo}>E-COMMERCE</h1>
      <ul className={styles.navItems}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/Contact">Contact</Link>
        </li>
        <li>
          <Link to="/cart">Cart</Link>
        </li>
      </ul>
    </nav>
  );
}
export default Nav;