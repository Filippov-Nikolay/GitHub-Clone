import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Cookies from 'js-cookie'; // npm install js-cookie

import HomePage from './pages/HomePage/Index';
import LandingPage from './pages/LandingPage/Index';
import ProfilePage from './pages/ProfilePage/Index';

import LoginPage from './pages/LoginPage/Index';
import PasswordResetPage from './pages/PasswordResetPage/Index';
import SignupPage from './pages/RegisterPage/Index';


const AppRouter = () => {
    const user = Cookies.get('dotcom_user');

    return (
      <Router>
        <Routes>
          {
            user ? (
               // Приватные маршруты
               <>
                <Route path="/" element={<HomePage/>} />
               </>
            ) : (
              // Публичные маршруты
              <>
                <Route path="/" element={<LandingPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/password_reset" element={<PasswordResetPage />} />
                <Route path="/signup" element={<SignupPage />} />

                <Route path="/:urlUserName" element={<ProfilePage />}/>
              </>
            )
          }
        </Routes>
      </Router>
    );
};
  

export default AppRouter;