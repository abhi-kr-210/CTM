import React from 'react';
import {BrowserRouter, Routes, Route } from "react-router-dom";
import Homes from './Pages/Homes/Homes';
import Login from './Pages/Login';
import RegisterasSnapper from './Pages/RegisterasSnapper';
import RegisterasUser from './Pages/RegisterasUser';
import { AuthProvider } from './Context/AuthContext';
import ProfileUser from './Pages/ProfileUser';
import ProfileMain from './Pages/ProfileMain';
import BookingPage from './Pages/BookingPage';

function App() {
  return (
<AuthProvider>
    <BrowserRouter>

    <Routes>
    <Route path="/" element={<Homes />} />
    <Route path="/login"  element={<Login/> }  />
    <Route path="/register_photographer" element={<RegisterasSnapper />} />
    <Route path="/register_user" element={<RegisterasUser/>} />
    <Route path="/profile_user" element={<ProfileUser/>} />
    <Route path="/profilemain" element={<ProfileMain/>} />
    <Route path="/booknow" element={<BookingPage/>} />

    </Routes>
    </BrowserRouter>
</AuthProvider>

  );
}

export default App;
