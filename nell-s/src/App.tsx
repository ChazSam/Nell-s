import "./App.css";
import Navbar from "./Navbar.tsx";
import { Outlet } from "react-router-dom";
import NellsLogo from "./assets/Nells.svg";
import { useEffect, useState } from "react";

function App() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 768px)")

  const handleScreenChange = (isDesktop: boolean) => {
    setIsOpen(isDesktop);
  }

  handleScreenChange(mediaQuery.matches)

  const listener = (e: MediaQueryListEvent) => {
    handleScreenChange(e.matches);
  }

  mediaQuery.addEventListener('change', listener)
  
  return () => {
    mediaQuery.removeEventListener('change', listener)
  }
}, [])

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

          <main className="page-content">
            <Outlet />
          </main>
        </div>
      </header>
      <footer>
        <p>Author: Charles Sam</p>
      </footer>
    </>
  );
}

export default App;
