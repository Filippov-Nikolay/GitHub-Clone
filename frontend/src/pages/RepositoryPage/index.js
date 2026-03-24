import React from 'react';
import Navbar from './components/Navbar/Navbar';
import ContainerHeader from './components/ContainerHeader/ContainerHeader';
import BranchBox from './components/BranchBox/BranchBox';
import RepositoryFiles from './components/RepositoryFiles/RepositoryFiles';
import ReadMeBar from './components/ReadMeBar/ReadMeBar';
import SideBar from './components/SideBar/SideBar';
import './components/Index.css';
import { Header } from '../../shared/Header/Header';

export function Index() {
  return (
    <div>
      <Header />
      <Navbar />
      <ContainerHeader />
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
