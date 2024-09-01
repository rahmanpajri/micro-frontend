import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Products from "products/Products";
import Users from "users/Users"
import Dashboard from "./Dashboard";

const App = () => (
  <Router>
    <Dashboard />
      <Routes>
        <Route path="/products" element={<Products />} />
        <Route path="/users" element={<Users />} />
      </Routes> 
  </Router>
);

ReactDOM.render(<App />, document.getElementById("app"));
