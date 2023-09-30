import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Login from "./components/Login";
import ApiState from "./context/api/ApiState";

function App() {
  return (
    <>
      <ApiState>
        <BrowserRouter>
          <Navbar />
          <div className="content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/login" element={<Login />} />
            </Routes>
          </div>
        </BrowserRouter>
      </ApiState>
    </>
  );
}

export default App;
