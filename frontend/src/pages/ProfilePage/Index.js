import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'; // <-- важно
import { Header } from '../../shared/Header/Header.js';
import { Nav } from '../../shared/Nav/Nav.js';
import { Aside } from '../../shared/Aside/Aside.js';
import { EditAside } from '../../shared/EditAside/EditAside.js';
import { Overview } from './components/Overview/Overview.js';
import { Footer } from '../../shared/Footer/Footer.js';
import DefaultAvatar from '../../shared/assets/img/avatar_account.png'
import { getProfileByName, saveProfile } from './services/profileApi.js'; // <-- используй новый метод

export function Index() {
    const [isEditing, setIsEditing] = useState(false);
    const [profileData, setProfileData] = useState(null);
    const [loading, setLoading] = useState(true);

    const { username } = useParams(); // <-- получить username из URL

    useEffect(() => {
        if (!username) return;
    
        getProfileByName(username)
            .then(response => {
                const profile = response.data;
                // Просто сетим как есть
                setProfileData({
                    ...profile,
                    userName: username, // только дописываем, если нужно
                });
                setLoading(false);
            })
            .catch(error => {
                console.error('Ошибка загрузки профиля', error);
                setLoading(false);
            });
    }, [username]);

    const handleEdit = () => setIsEditing(true);
    const handleCancel = () => setIsEditing(false);

    const handleSave = (newData) => {
        saveProfile(newData)
            .then(response => {
                const updatedProfile = response.data;
                setProfileData(prev => ({
                    ...prev,
                    ...updatedProfile
                }));
                setIsEditing(false);
            })
            .catch(error => {
                console.error('Ошибка сохранения профиля', error);
            });
    };

    function getCookie(name) {
        const value = `; ${document.cookie}`;
        const parts = value.split(`; ${name}=`);
        if (parts.length === 2) return parts.pop().split(';').shift();
    }
    const currentUser = getCookie('dotcom_user');
    const isOwnProfile = currentUser === username;


    if (loading) {
        return <div>loading...</div>;
    }

    return (
        <div className="profile">
            <Header 
                avatar={profileData?.avatar ? profileData.avatar : DefaultAvatar}
                user={profileData?.userName}
                userDetails={profileData?.name}
            />
            <Nav userDetails={profileData?.name}/>
            <main className="main">
                <div className="profile-container">
                    <div className="profile-content">
                        {isEditing
            ? <EditAside initialData={profileData} onSave={handleSave} onCancel={handleCancel} />
            : <Aside data={profileData} onEdit={isOwnProfile ? handleEdit : null} isOwnProfile={isOwnProfile} />
                        }
                        <Overview />
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}

export default Index;
