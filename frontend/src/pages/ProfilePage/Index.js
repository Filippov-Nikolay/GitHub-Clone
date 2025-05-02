import React, { useState, useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { Header } from '../../shared/Header/Header';
import { Nav } from '../../shared/Nav/Nav';
import { Aside } from '../../shared/Aside/Aside';
import { EditAside } from '../../shared/EditAside/EditAside';
import { Overview } from './components/Overview/Overview';
import { Footer } from '../../shared/Footer/Footer';
import { getProfileByName, getProfile, saveProfile, uploadAvatar, Test } from './services/profileApi';

import RepoSearchInit from '../ProfilePage/components/RepoSearchInit/repoSearchInit.js'
import Projects from './components/Projects/Projects.js';
import Packages from './components/Packages/Packages.js';
import Stars from './components/Stars/Stars.js';
import { Nav as HeaderUnAuthenticated } from '../../shared/Components/Nav/Nav';

import Cookies from 'js-cookie';

export function Index() {
    const [isEditing, setIsEditing] = useState(false);
    const [profileData, setProfileData] = useState(null); // профиль, который просматривается
    const [currentUserData, setCurrentUserData] = useState(null); // залогиненный пользователь
    const [loading, setLoading] = useState(true);

    const [tab, setTab] = useState('overview');
    const { urlUserName } = useParams();
    const location = useLocation();
    const userName = Cookies.get('dotcom_user');

    

    // Загружаем профиль, который отображается по URL
    useEffect(() => {
        Test(); // TEST

        const searchParams = new URLSearchParams(location.search);
        setTab(searchParams.get('tab') || 'overview');

        if (!urlUserName) return;

        setLoading(true);
        getProfileByName(urlUserName)
            .then(response => {
                const profile = response.data;
                
                setProfileData({
                    ...profile,
                    userName: urlUserName,
                });
                setLoading(false);
            })
            .catch(error => {
                console.error('Ошибка загрузки профиля', error);
                setLoading(false);
            });
    }, [urlUserName, location.search]);

    // Загружаем профиль залогиненного пользователя
    useEffect(() => {
        if (!userName) return;
        getProfile()
            .then(response => {
                console.log('Response from getProfile():', response.data);
                setCurrentUserData({
                    ...response.data,
                    userName: userName 
                });
            })
            .catch(error => {
                console.error('Ошибка загрузки текущего пользователя', error);
            });
    }, [userName]);

    const handleEdit = () => setIsEditing(true);
    const handleCancel = () => setIsEditing(false);

    const handleSave = async (newData, avatarFile) => {
        if (avatarFile) {
            const allowedTypes = ['image/jpeg', 'image/png']; 
            if (!allowedTypes.includes(avatarFile.type)) {
                alert('Please upload a valid image file (JPEG, PNG).');
                return;
            }
    
            const newAvatarUrl = await uploadAvatar(avatarFile);
            newData.avatar = newAvatarUrl;
        }
    
        try {
            const response = await saveProfile(newData);
            const updatedProfile = response.data;
    
            setProfileData(prev => ({
                ...prev,
                ...updatedProfile
            }));
            if (userName === urlUserName) {
                setCurrentUserData(prev => ({
                    ...prev,
                    ...updatedProfile
                }));
            }
            setIsEditing(false);
        } catch (error) {
            console.error('Ошибка сохранения профиля', error);
        }
    };
    

    if (loading) {
        return <div>Loading...</div>;
    }
    
    if (!profileData) {
        return <div>Профиль не найден</div>; // или редирект, или 404
    }

    const isOwnProfile = currentUserData && userName === urlUserName;

    const renderTabContent = () => {
        switch (tab) {
            case 'repositories':
                return <RepoSearchInit/>;
            case 'projects':
                return <Projects/>;
            case 'packages':
                return <Packages/>;
            case 'stars':
                return <Stars/>;
            default:
                return <Overview/>;
        }
    };

    return (
        <div className="profile">
           {userName ? (
            <Header 
                avatar={currentUserData?.avatar}     
                name={currentUserData?.name || userName}
                userName={currentUserData?.userName}
            />
        ) : (
            <>
                <HeaderUnAuthenticated bgColor= "#161B22"/>
            </>
        )}
            <Nav profileUserName={urlUserName}/>
            <main className="main">
                <div className="profile-container">
                    <div className="profile-content">
                        {isEditing
                            ? <EditAside initialData={currentUserData} onSave={handleSave} onCancel={handleCancel} />
                            : <Aside data={profileData} onEdit={handleEdit? handleEdit : null} isOwnProfile={isOwnProfile} isAuthenticated={!!userName}/>}
                        <div className='profile-content__container'>
                            {renderTabContent()}
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}

export default Index;
