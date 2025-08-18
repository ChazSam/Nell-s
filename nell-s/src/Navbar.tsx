import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <NavLink
        to="/"
        className={({ isActive }: { isActive: boolean }) =>
          isActive ? "active-link" : ""
        }
        end
      >
        Home
      </NavLink>

      <NavLink
        to="/about"
        className={({ isActive }: { isActive: boolean }) =>
          isActive ? "active-link" : ""
        }
        end
      >
        About
      </NavLink>

      <NavLink
        to="/menu"
        className={({ isActive }: { isActive: boolean }) =>
          isActive ? "active-link" : ""
        }
        end
      >
        Menu
      </NavLink>

      <NavLink
        to="/reviews"
        className={({ isActive }: { isActive: boolean }) =>
          isActive ? "active-link" : ""
        }
        end
      >
        Reviews
      </NavLink>
    </nav>
  );
}

export default Navbar;
