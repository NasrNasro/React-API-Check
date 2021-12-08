import "./App.css";
import React from "react";
import Navb from "./Components/Navb";
import UserList from "./Components/UserList";
import Footer from "./Components/Footer";
import { Routes,Route } from "react-router-dom";
import Details from "./Components/Details";

function App() {
  return (
    <div className="App">
      <Navb />
      <Routes>
        <Route path='/' element={<UserList />} />
        <Route path="/Details/:id" element={<Details />} />        
      </Routes>
      <Footer />
    </div> 
  );
}

export default App;
