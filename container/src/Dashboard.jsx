import React from "react"
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
const Dashboard = () => {
    return (
        <div className="p-5 bg-blue-500 text-white -text-3xl font-bold">
            <Link className="nav-link p-2" to="/">Dashboard </Link>
            <Link className="nav-link p-2" to="/products"> Products</Link>
            <Link className="nav-link p-2" to="/users"> Users</Link>
        </div>
    )
}

export default Dashboard;