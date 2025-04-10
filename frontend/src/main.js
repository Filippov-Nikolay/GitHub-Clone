import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage/Index';
import ProfilePage from './pages/ProfilePage/Index';
import RepositoriesPage from './pages/RepositoriesPage/Index';
import HomePage from './pages/HomePage/Index'
import Login from './pages/LoginPage/index';
import Signup from './pages/RegisterPage/Index';

const AppRouter = () => {
  return (
    <Router>
      <Routes basename="/Clone-GitHub">
        <Route path="/" element={<LandingPage />} />
        <Route path="/profilePage" element={<ProfilePage />} />
        <Route path="/repositoriesPage" element={<RepositoriesPage />}/>
        <Route path="/homePage" element={<HomePage />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/signup" element={<Signup />}/>
      </Routes>
    </Router>
  );
};

export default AppRouter;