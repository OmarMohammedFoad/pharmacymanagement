import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "./Components/Home";
import Update from "./Components/Update";
import Navbar from "./Components/Navbar"
import SideBar from "./Components/Sidebar";
import AddMedicine from "./Components/Add"
import LoginPage from "./Components/Login/Login";
function App() {
  return (
    <div className="App">
          <BrowserRouter>
      <Navbar/>
      <div className="row">
      <div className="col-2">
        <SideBar/>

        </div> 
        <div className="col-10">
   
    <Routes>
          <Route path="/" element={<LoginPage />}/>
          <Route path="/home" element={<Home />}/>
             
          <Route path="/update/:ID" element={<Update/>}/>
          <Route path="/Add" element={<AddMedicine/>}/>
          
        </Routes>
    </div>
    </div>
    </BrowserRouter>

    </div>
  );
}

export default App;
