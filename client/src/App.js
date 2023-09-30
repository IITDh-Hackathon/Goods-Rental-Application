import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Home from './components/Home';
import Navbar from './components/Navbar';
import About from './components/About';
import Login from './components/Login';
import ApiState from './context/api/ApiState';
import AdminHome from './components/admin/AdminHome';

function App() {
  return (
    <>
    <ApiState>
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<AdminHome/>} />
      </Routes>
    </BrowserRouter>
    </ApiState>
    </>
  );
}

export default App;
