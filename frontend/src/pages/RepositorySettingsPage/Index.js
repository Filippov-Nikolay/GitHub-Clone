import { useParams } from 'react-router-dom';
import React, { useState, useEffect } from 'react';


import Topbar from '../RepositoryPage/components/Topbar/Topbar';
import Navbar from '../RepositoryPage/components/Navbar/Navbar';
import LeftBar from '../RepositorySettingsPage/components/LeftBar/LeftBar';
import Sidebar from '../RepositorySettingsPage/components/LeftBar/LeftBar';

import Main from './components/Main/Main';

export function Index() {
  const { username, repoName } = useParams();
  const [currentRepoName, setCurrentRepoName] = useState(repoName || '');

 
  const handleRepositoryLoad = (loadedRepoName) => {
    setCurrentRepoName(loadedRepoName);
  };

  return (
    <div>
      <Topbar repoName={currentRepoName} username={username} />
      <Navbar />
    <div className="content-layout">
  <Sidebar />
  <Main onRepositoryLoad={handleRepositoryLoad} />
</div>

    </div>
  );
}

export default Index;
