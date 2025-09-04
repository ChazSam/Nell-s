import "./App.css";
import Navbar from "./Navbar.tsx";
import { Outlet } from "react-router-dom";
import NellsLogo from "./assets/Nells.svg";


function App() {
  return (
    <>
      <header>
        <img src={NellsLogo} alt="Nell's Logo" className="nells-logo"></img>
        <div>
          <Navbar />
          <div className="page-content">
            <Outlet />
    
          </div>
        </div>
      </header>
    </>
  );
}

export default App;
