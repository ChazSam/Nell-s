import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <NavLink
        to="/"
        className={({ isActive }: { isActive: boolean }) =>
          isActive ? "active-link" : ""
        }
        end
      >
        Home_
      </NavLink>

      <NavLink
        to="/about"
        className={({ isActive }: { isActive: boolean }) =>
          isActive ? "active-link" : ""
        }
        end
      >
        About_
      </NavLink>

      <NavLink
        to="/menu"
        className={({ isActive }: { isActive: boolean }) =>
          isActive ? "active-link" : ""
        }
        end
      >
        Menu_
      </NavLink>

      <NavLink
        to="/reviews"
        className={({ isActive }: { isActive: boolean }) =>
          isActive ? "active-link" : ""
        }
        end
      >
        Reviews_
      </NavLink>
    </nav>
  );
}

export default Navbar;
