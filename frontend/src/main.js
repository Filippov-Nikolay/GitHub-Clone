import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Cookies from 'js-cookie';

import DashboardPage from './pages/DashboardPage/Index';
import LandingPage from './pages/LandingPage/Index';
import ProfilePage from './pages/ProfilePage/Index';
import Projects from './pages/ProfilePage/components/Projects/Projects';
import LoginPage from './pages/LoginPage/index';
import PasswordResetPage from './pages/PasswordResetPage/Index';
import SignupPage from './pages/RegisterPage/Index';
import RepositoryPage from './pages/RepositoryPage/Index';
import CreateRepository from './pages/CreateRepository/Index';
import RepositorySettingsPage from './pages/RepositorySettingsPage/Index';
// import HomePage from './pages/HomePage/';

const AppRouter = () => {
  const user = Cookies.get('dotcom_user');

  return (
    <Router>
      <Routes>
        {
          user ? (
                // Приватные маршруты
            <>
              {/* <Route path="/" element={<HomePage />} /> */}
              <Route path="/repository/:username/:name" element={<RepositoryPage />}>
                <Route path="projects" element={<Projects />} />
              </Route>
              <Route path="/:urlUserName" element={<ProfilePage />} />
              <Route path="/CreateRepository" element={<CreateRepository />} />
              <Route path="/EditRepository" element={<RepositorySettingsPage />} />
              <Route path="/repository/:username/:repoName/settings" element={<RepositorySettingsPage />} />
              <Route path="/user/:username/repo/:repoName/settings" element={<RepositorySettingsPage />} />
              <Route path="/user/:username/repo/:repoName" element={<RepositoryPage />} />
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

