import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Cookies from 'js-cookie'; // npm install js-cookie

import DashboardPage from './pages/DashboardPage';
import LandingPage from './pages/LandingPage';
import ProfilePage from './pages/ProfilePage';

import LoginPage from './pages/LoginPage/index';
import PasswordResetPage from './pages/PasswordResetPage';
import SignupPage from './pages/RegisterPage';
import RepositoryPage from './pages/RepositoryPage';
import CreateRepository from './pages/CreateRepository';


const AppRouter = () => {
    const user = Cookies.get('dotcom_user');

    return (
      <Router>
        <Routes>
          {
            user ? (
               // Приватные маршруты
               <>
                <Route path="/" element={<DashboardPage/>} />
                <Route path="/:urlUserName" element={<ProfilePage />}/>
                <Route path="/CreateRepository" element={<CreateRepository />} />
                <Route path="/RepositoryPage" element={<RepositoryPage />} />
               </>
            ) : (
              // Публичные маршруты
              <>
                <Route path="/:urlUserName" element={<ProfilePage />}/>
                <Route path="/" element={<LandingPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/password_reset" element={<PasswordResetPage />} />
                <Route path="/signup" element={<SignupPage />} />

                <Route path="/RepositoryPage" element={<RepositoryPage />} />
              </>
            )
          }
        </Routes>
      </Router>
    );
};
  

export default AppRouter;
