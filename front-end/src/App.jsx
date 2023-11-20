import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

//pages
import Users from "./pages/Users";
import CreateUsers from "./pages/CreateUser";
import UpdateUsers from "./pages/UpdateUser";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Users />} />
          <Route path="/create" element={<CreateUsers />} />
          <Route path="/update/:id" element={<UpdateUsers />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
