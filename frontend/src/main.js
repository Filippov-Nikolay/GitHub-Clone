import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import Cookies from 'js-cookie'; // npm install js-cookie

import LandingPage from './pages/LandingPage/Index';
import ProfilePage from './pages/ProfilePage/Index';
import RepositoriesPage from './pages/RepositoriesPage/Index';
import HomePage from './pages/HomePage/Index'
import LoginPage from './pages/LoginPage/Index';
import PasswordResetPage from './pages/PasswordResetPage/Index';
import SignupPage from './pages/RegisterPage/Index';

const PrivateRoute = ({ children }) => {
  const user = Cookies.get('dotcom_user');
  return user ? children : <Navigate to="/" />;
};

const AppRouter = () => {
  return (
    <Router>
      <Routes basename="/">
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />}/>
        <Route path="/password_reset" element={<PasswordResetPage />}/>
        <Route path="/signup" element={<SignupPage />}/>

        <Route path="/:username" element={
          <PrivateRoute>
            <ProfilePage />
          </PrivateRoute>
        } />
        <Route path="/:username/repositoriesPage" element={
          <PrivateRoute>
            <RepositoriesPage />
          </PrivateRoute>
        }/>
        <Route path="/homePage" element={
          <PrivateRoute>
            <HomePage />
          </PrivateRoute>
        }/>
      </Routes>
    </Router>
  );
};

export default AppRouter;