import React, { useState, useEffect } from 'react';

import '../../shared/Profile/profile.css'
import { Header } from '../../shared/Header/Header'
import { Nav } from '../../shared/Nav/Nav'
import { Aside } from '../../shared/Aside/Aside'
import { Footer } from '../../shared/Footer/Footer'
import RepoSearchInit from './components/RepoSearchInit/repoSearchInit'

import { getProfile } from '../ProfilePage/services/profileApi.js';

export function Index() {
    const [profileData, setProfileData] = useState(null);
    const [loading, setLoading] = useState(true);

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

    return(
        <div className='vbb-profile'>
            <Header />
            <Nav />
            <main className='vbb-main'>
                <div className='vbb-profile-container'>
                    <div className='vbb-profile-content'>
                        <Aside data={profileData}/>
                        <RepoSearchInit />
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    )
}

export default Index;