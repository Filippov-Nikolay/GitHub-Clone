import React, { useState } from 'react';
import { Header } from '../../shared/Header/Header.js';
import { Nav } from '../../shared/Nav/Nav.js';
import { Aside } from '../../shared/Aside/Aside.js';
import { EditAside } from '../../shared/EditAside/EditAside.js';
import { Overview } from './components/Overview/Overview.js';
import { Footer } from '../../shared/Footer/Footer.js';

export function Index() {
    const savedData = localStorage.getItem('profileData');

    const initialProfileData = savedData ? JSON.parse(savedData) : {
        avatar: '../../shared/assets/img/LogoProfile.png',
        name: 'chirag singla',
        bio: 'Currently working in KAN LABs, NYC USA as an ML Engineer(Remote)',
        pronouns: 'he/him',
        company: '',
        location: 'Delhi',
        showTime: true,
        timezone: 'UTC',
        website: 'https://neuralai.co/',
        social1: '',
        social2: '',
        social3: '',
        social4: ''
    };

    const [isEditing, setIsEditing] = useState(false);
    const [profileData, setProfileData] = useState(initialProfileData);

    const handleEdit = () => setIsEditing(true);
    const handleCancel = () => setIsEditing(false);
    const handleSave = (newData) => {
        setProfileData(newData); 
        setIsEditing(false);
        localStorage.setItem('profileData', JSON.stringify(newData));
    };

    return (
        <div className='profile'>
            <Header avatar={profileData.avatar}/>
            <Nav />
            <main className='main'>
                <div className='profile-container'>
                    <div className='profile-content'>
                        {isEditing
                            ? <EditAside initialData={initialProfileData} onSave={handleSave} onCancel={handleCancel} />
                            : <Aside data={initialProfileData} onEdit={handleEdit} />
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
