import { Route, Routes } from "react-router-dom"
import React from "react"
import './App.css'
import Home from "./Components/Home";
import { AuthProvider } from "./Config/auth";
import Order from "./Components/Order";
import Booking from "./Components/Booking";
import Page from "./Components/Page"
import Page1 from "./Components/Page1"
import Page2 from "./Components/Page2"
import Page3 from "./Components/Page3"

function App () {
  return (
    <Routes>
      <Route path="/" element={<Order />} />
      <Route path="home" element={<Home />} />
      <Route path="pageLeftA" element={<Page />} />
      <Route path="pageLeftE" element={<Page1 />} />
      <Route path="pageRightA" element={<Page2 />} />
      <Route path="pageRightE" element={<Page3 />} />
    </Routes>
  )
}

export default App;
