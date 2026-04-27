import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <header className="site-header">
      <nav className="navbar page-container" aria-label="Primary">
        <NavLink className="nav-brand" to="/">
          Swastik
        </NavLink>

        <div className="nav-links">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "nav-link is-active" : "nav-link"
            }
            end
          >
            Home
          </NavLink>
          <NavLink
            to="/projects"
            className={({ isActive }) =>
              isActive ? "nav-link is-active" : "nav-link"
            }
          >
            Projects
          </NavLink>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
