import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from '../components/Login';
import Albums from '../components/Albums';
import MyAlbums from '../components/MyAlbums';
import Navbar from '../components/Navbar';

const AppRoutes = () => (
  <Router>
    <Navbar />
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/albums" element={<Albums />} />
      <Route path="/my-albums" element={<MyAlbums />} />
    </Routes>
  </Router>
);

export default AppRoutes;
