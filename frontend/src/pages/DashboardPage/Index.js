import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
/* Global Components */
import { Header}  from '../../shared/Header/Header.js';
import Profile from '../../shared/Profile/Profile.js';
import Feed from '../../shared/Components/Feed/Feed.js';
import { Footer } from '../../shared/Footer/Footer.js';

import './styles/main.css';

import TopRepositories from './components/TopRepositories/TopRepositories.js'
import LatestChanges from './components/LatestChanges/LatestChanges.js';
import ExploreRepositories from './components/ExploreRepos/ExploreRepos.js';

import { getProfile } from '../ProfilePage/services/profileApi.js';

const HomePage = () => {

    const [profileData, setProfileData] = useState(null);
    const [loading, setLoading] = useState(true);

    const userName = Cookies.get('dotcom_user');

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

    return (
        <div className="vb-app">
            <Header avatar={profileData?.avatar} name={profileData?.name} userName={userName}/>

            <div className='vb-app-contain'>
                <div className="panels">
                    <div className="left-panel">
                        <div className="left-panel__container">
                            <TopRepositories />
                        </div>
                    </div>
                    <div className="container">
                        <div className="container__wrapper">
                            <div className="center-panel">
                                <Feed
                                    srcImg={profileData?.avatar}
                                />
                                <Footer />
                            </div>
                            <div className="right-panel">
                                <div className="right-panel__item">
                                    <LatestChanges />
                                </div>
                                <div className="right-panel__item">
                                    <ExploreRepositories />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomePage;
