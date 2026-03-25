import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Cookies from 'js-cookie'; // npm install js-cookie
import axios from 'axios';
import config from './shared/config';
import FullPageState from './shared/Components/FullPageState/FullPageState';

import DashboardPage from './pages/DashboardPage/index';
import LandingPage from './pages/LandingPage/index';
import ProfilePage from './pages/ProfilePage/index';

import LoginPage from './pages/LoginPage/index';
import PasswordResetPage from './pages/PasswordResetPage/index';
import SignupPage from './pages/RegisterPage/index';
import RepositoryPage from './pages/RepositoryPage/index';
import CreateRepository from './pages/CreateRepository/index';


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

