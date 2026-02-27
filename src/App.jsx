import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Login from "./components/login";
import List from "./components/list";
import Add from "./components/add";

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [items, setItems] = useState([]);

  return (
    <Router>
      {/* Navbar only after login */}
      {isLoggedIn && (
        <nav className="bg-black text-white p-3 flex gap-4">
          <Link to="/list">List</Link>
          <Link to="/add">Add</Link>
        </nav>
      )}

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/list" element={<List items={items} setItems={setItems} />} />
        <Route path="/add" element={<Add items={items} setItems={setItems} />} />
      </Routes>
    </Router>
  );
}
