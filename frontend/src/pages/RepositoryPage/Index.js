import React, { useState, useEffect } from 'react';
import Topbar from './components/Topbar/Topbar';
import Navbar from './components/Navbar/Navbar';
import ContainerHeader from './components/ContainerHeader/ContainerHeader';
import BranchBox from './components/BranchBox/BranchBox';
import RepositoryFiles from './components/RepositoryFiles/RepositoryFiles';
import ReadMeBar from './components/ReadMeBar/ReadMeBar';
import SideBar from './components/SideBar/SideBar';
import './components/Index.css';
import { useParams } from 'react-router-dom';
import { getRepositoryByUserAndName } from '../RepositorySettingsPage/services/EditRepository';


export function Index() {
  const { username, name } = useParams();
  const [repoName, setRepoName] = useState(name);
  const [repository, setRepository] = useState(null);


  useEffect(() => {
    async function fetchRepo() {
      try {
        const response = await getRepositoryByUserAndName(username, name);
        setRepoName(response.data.name);
        setRepository(response.data); 
      } catch (error) {
        console.error('Ошибка загрузки репозитория', error);
      }
    }

    fetchRepo();
  }, [username, name]);

  return (
    <div>
      <Topbar repoName={repoName} />
      <Navbar />
      <ContainerHeader repository={repository} />
      <BranchBox />

      <div className="main-content-wrapper">
        <div className="main-left">
          <RepositoryFiles />
          <ReadMeBar />
        </div>

        <SideBar />
      </div>
    </div>
  );
}

export default Index;

