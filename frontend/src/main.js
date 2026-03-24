import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Cookies from 'js-cookie'; // npm install js-cookie
import axios from 'axios';
import config from './shared/config';

import DashboardPage from './pages/DashboardPage';
import LandingPage from './pages/LandingPage';
import ProfilePage from './pages/ProfilePage';

import LoginPage from './pages/LoginPage/index';
import PasswordResetPage from './pages/PasswordResetPage';
import SignupPage from './pages/RegisterPage';
import RepositoryPage from './pages/RepositoryPage';
import CreateRepository from './pages/CreateRepository';


const AppRouter = () => {
  const [user, setUser] = useState(Cookies.get('dotcom_user'));

  useEffect(() => {
    const fetchCurrent = async () => {
      try {
        const resp = await axios.get(`${config.API_BASE_BACKEND}/api/User/current`, { withCredentials: true });
        if (resp?.data?.username) setUser(resp.data.username);
      } catch (e) {
        // ignore
      }
    };
    if (!user) fetchCurrent();
  }, []);

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
