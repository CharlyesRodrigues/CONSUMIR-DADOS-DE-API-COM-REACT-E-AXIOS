
import {Outlet} from "react-router-dom";
import { NavBar } from "./components/navBar";

function App() {
 

  return (
   
      <div className="App">
        <NavBar />
        <div className="container">
        <Outlet />
        </div>
     
      </div>
    
  )
}

export default App
