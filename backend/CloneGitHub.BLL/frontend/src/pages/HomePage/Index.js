import React from 'react';

/* Global Components */
import { Header}  from '../../shared/Header/Header.js';
import Profile from '../../shared/Profile/Profile.js';
import { Footer } from '../../shared/Footer/Footer.js';

import './styles/vb_App.css';
import TopRepositories from './components/TopRepositories/TopRepositories.js'
import RecentActivity from './components/RecentActivity/RecentActivity.js';
import Teams from './components/Teams/Teams.js'
import FeedHeader from './components/FeedHeader/FeedHeader.js';
import RepositoryList from './components/RepositoryList/RepositoryList.js';
import TrendingRepositories from './components/TrendingRepositories/TrendingRepositories.js';
import TopicBasedRepositories from './components/TopicBasedRepositories/TopicBasedRepositories.js';
import RecommendedUsers from './components/RecommendedUsers/RecommendedUsers.js';
import Feed from './components/Feed/Feed.js';
import LatestChanges from './components/LatestChanges/LatestChanges.js';
import ExploreRepositories from './components/ExploreRepos/ExploreRepos.js';

const HomePage = () => {
    return (
        <div className="vb-app">
            <Header />
            <div className='vb-app-contain'>
                <div className="panels">
                    <div className="left-panel">
                        <Profile />
                        <TopRepositories />
                        <RecentActivity />
                        <Teams />
                    </div>
                    <div className="center-panel">
                        <FeedHeader />
                        <RepositoryList />
                        <TrendingRepositories />
                        <TopicBasedRepositories />
                        <RecommendedUsers />
                    </div>
                    <div className="right-panel">
                        <Feed />
                        <LatestChanges />
                        <ExploreRepositories />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default HomePage;