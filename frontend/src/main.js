import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Cookies from 'js-cookie'; // npm install js-cookie
import axios from 'axios';
import config from './shared/config';
import FullPageState from './shared/Components/FullPageState/FullPageState.js';

import DashboardPage from './pages/DashboardPage/index.js';
import LandingPage from './pages/LandingPage/index.js';
import ProfilePage from './pages/ProfilePage/index.js';

import LoginPage from './pages/LoginPage/index.js';
import PasswordResetPage from './pages/PasswordResetPage/index.js';
import SignupPage from './pages/RegisterPage/index.js';
import RepositoryPage from './pages/RepositoryPage/index.js';
import CreateRepository from './pages/CreateRepository/index.js';


const AppRouter = () => {
  const initialUser = Cookies.get('dotcom_user') || null;
  const [user, setUser] = useState(initialUser);
  const [isAuthResolved, setIsAuthResolved] = useState(!initialUser);

  useEffect(() => {
    let isMounted = true;

    const finishAuthCheck = (nextUser) => {
      if (!isMounted) return;
      setUser(nextUser);
      setIsAuthResolved(true);
    };

    const fetchCurrent = async () => {
      try {
        const resp = await axios.get(`${config.API_BASE_BACKEND}/api/User/current`, {
          withCredentials: true,
          timeout: config.API_TIMEOUT_MS,
        });
        const currentUser = resp?.data?.username || null;

        if (currentUser) {
          Cookies.set('dotcom_user', currentUser);
          finishAuthCheck(currentUser);
          return;
        }

        Cookies.remove('dotcom_user');
        finishAuthCheck(null);
      } catch (e) {
        Cookies.remove('dotcom_user');
        finishAuthCheck(null);
      }
    };

    if (!initialUser) {
      finishAuthCheck(null);
      return () => {
        isMounted = false;
      };
    }

    fetchCurrent();

    return () => {
      isMounted = false;
    };
  }, [initialUser]);

  if (!isAuthResolved) {
    return (
      <FullPageState
        title="Checking session..."
        description="Verifying your local GitHub Clone session."
      />
    );
  }

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
            
              <Route path="/:urlUserName" element={<ProfilePage />} />
              <Route path="/" element={<LandingPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/password_reset" element={<PasswordResetPage />} />
              <Route path="/signup" element={<SignupPage />} />
            </>
          )
        }
      </Routes>
    </Router>
  );
};

export default AppRouter;

