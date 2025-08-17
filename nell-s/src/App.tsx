import "./App.css";
import Navbar from "./Navbar.tsx";
import { Outlet } from 'react-router-dom'; 
import NellsLogo from "./assets/Nells.svg";

function App() {
  return (
    <>
      <header>
    <img src={NellsLogo} alt="Nell's Logo"></img>
        <div>
          <Navbar />
          <div>
            <Outlet/>
          </div>
        </div>
      </header>
     
    </>
  );
}

export default App;
