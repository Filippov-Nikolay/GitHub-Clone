import React, { useState, useEffect } from 'react';
import { Header } from '../../shared/Header/Header.js';
import { Nav } from '../../shared/Nav/Nav.js';
import { Aside } from '../../shared/Aside/Aside.js';
import { EditAside } from '../../shared/EditAside/EditAside.js';
import { Overview } from './components/Overview/Overview.js';
import { Footer } from '../../shared/Footer/Footer.js';
import { getProfile, saveProfile } from './services/profileApi.js';

export function Index() {
    const [isEditing, setIsEditing] = useState(false);
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

    const handleEdit = () => setIsEditing(true);
    const handleCancel = () => setIsEditing(false);

    const handleSave = (newData) => {
        saveProfile(newData)
            .then(response => {
                const userData = response.data;

                setProfileData(userData);
                setIsEditing(false);
            })
            .catch(error => {
                console.error('Ошибка сохранения профиля', error);
            });
    };

    if (loading) {
        return <div>loading...</div>;
    }

    return (
        <div className="profile">
            <Header avatar={profileData.avatar} />
            <Nav />
            <main className="main">
                <div className="profile-container">
                    <div className="profile-content">
                        {isEditing
                            ? <EditAside initialData={profileData} onSave={handleSave} onCancel={handleCancel} />
                            : <Aside data={profileData} onEdit={handleEdit} />
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
