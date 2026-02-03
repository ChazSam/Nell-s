import "./App.css";
import Navbar from "./Navbar.tsx";
import { Outlet } from "react-router-dom";
import NellsLogo from "./assets/Nells.svg";
import { useState } from "react";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <header>
        <img src={NellsLogo} alt="Nell's Logo" className="nells-logo"></img>
        <div>
          <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
            <div className="burger"></div>
            <div className="burger"></div>
            <div className="burger"></div>
          </div>
          
          {isOpen && <Navbar />}
          <div className="page-content">
            <Outlet />
          </div>
        </div>
      </header>
      <footer>
        <p>Author: Charles Sam</p>
      </footer>
    </>
  );
}

export default App;
