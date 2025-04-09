import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage/Index';
import ProfilePage from './pages/ProfilePage/Index';
import RepositoriesPage from './pages/RepositoriesPage/Index';
import HomePage from './pages/HomePage/Index'

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="Clone-GitHub" element={<LandingPage />} />
        <Route path="Clone-GitHub/profilePage" element={<ProfilePage />} />
        <Route path="Clone-GitHub/repositoriesPage" element={<RepositoriesPage />}/>
        <Route path="Clone-GitHub/homePage" element={<HomePage />}/>
      </Routes>
    </Router>
  );
};

export default AppRouter;