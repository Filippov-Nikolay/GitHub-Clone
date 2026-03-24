import React, { useState, useEffect } from 'react';
import Topbar from './components/Topbar/Topbar';
import Navbar from './components/Navbar/Navbar';
import ContainerHeader from './components/ContainerHeader/ContainerHeader';
import BranchBox from './components/BranchBox/BranchBox';
import RepositoryFiles from './components/RepositoryFiles/RepositoryFiles';
import ReadMeBar from './components/ReadMeBar/ReadMeBar';
import SideBar from './components/SideBar/SideBar';
import './components/Index.css';
import { Header } from '../../shared/Header/Header';


export function Index()
{
    return(
    //     <div>
    //   <Topbar/>
    //   <Navbar/>
    //   <ContainerHeader/>
    //   <BranchBox/>
    //   <RepositoryFiles/>
    //   <ReadMeBar/>
    //  
    // <SideBar />
    //
    //   </div>

        <div>
            <Header />
            <Navbar />
            <ContainerHeader />
            <BranchBox />

            {/* Новый flex-контейнер для основного содержимого */}
            <div className="main-content-wrapper">
                <div className="main-left">
                    <RepositoryFiles />
                    <ReadMeBar />
                </div>

                <SideBar />
            </div>
        </div>

    fetchRepo();
  }, [username, name]);

  return (
    <div>
      <Topbar repoName={repoName} />
      <Navbar />
      <ContainerHeader repository={repository} />
      
      {/* <BranchBox /> */}

      {/* <div className="main-content-wrapper">
        <div className="main-left">
          <RepositoryFiles />
          <ReadMeBar />
        </div>

        <SideBar />
      </div> */}
      <Main />
    </div>
  );
}

export default Index;

