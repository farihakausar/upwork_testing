
import './App.css';
import * as React from 'react';
import { Routes, Route } from 'react-router-dom';


import Register from './Components/Register';
import Login from './Components/Login';
import Reset from './Components/Reset';


export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={< Login/>} />
        <Route path="register" element={<Register />} />
        <Route path="reset" element={<Reset />} />
      </Routes>
    </div>
  );
}