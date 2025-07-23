import "./App.css";
import Navbar from "./Navbar.tsx";
import { Outlet } from 'react-router-dom'; // Import Outlet


function App() {
  return (
    <>
      <header>
        <p>Nell's </p>
        <p>Bar & Grill</p>
        <div>
          <Navbar />
          <div>
            <Outlet></Outlet>
          </div>
        </div>
      </header>
     
    </>
  );
}

export default App;
