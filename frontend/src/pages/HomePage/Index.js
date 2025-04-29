import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
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

import { getProfile } from '../ProfilePage/services/profileApi.js';

const HomePage = () => {

    const [profileData, setProfileData] = useState(null);
        const [loading, setLoading] = useState(true);
    
        const username = Cookies.get('dotcom_user');

        useEffect(() => {
            getProfile()
                .then(response => {
                    const userData = response.data;
                    setProfileData(userData);
                    setLoading(false);
                })
                .catch(error => {
                    console.error('Ошибка загрузки профиля', error);
                    setLoading(false);
                });
        }, []);

        if (loading) {
            return <div>Loading...</div>;
        }

        // avatar={profileData.avatar}
    return (
        <div className="vb-app">
            <Header  userDetails={profileData?.name}/> 
            <div className='vb-app-contain'>
                <div className="panels">
                    <div className="left-panel">
                        <Profile 
                            // avatar={profileData.avatar}
                            username={username} 
                        />
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