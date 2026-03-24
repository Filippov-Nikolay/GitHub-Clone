import React, { useState, useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import Cookies from 'js-cookie';

import { Header } from '../../shared/Header/Header';
import { Nav } from '../../shared/Nav/Nav';
import { Aside } from '../../shared/Aside/Aside';
import { EditAside } from '../../shared/EditAside/EditAside';
import { Overview } from './components/Overview/Overview';
import { Footer } from '../../shared/Footer/Footer';
import RepoSearchInit from './components/RepoSearchInit/repoSearchInit';
import Projects from './components/Projects/Projects';
import Packages from './components/Packages/Packages';
import Stars from './components/Stars/Stars';
import Following from '../../shared/Components/Following/Following';
import { Nav as HeaderUnAuthenticated } from '../../shared/Components/Nav/Nav';

import { getProfileByName, getProfile, saveProfile, uploadAvatar } from './services/profileApi';
import { subscribeToUser, unsubscribeFromUser } from '../../shared/Components/Following/Services/subscriptionApi';
import { getFollowers, getFollowing } from '../../shared/Components/Following/Services/subscriptionApi';

export function Index() {
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState(null);
  const [currentUserData, setCurrentUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [tab, setTab] = useState('overview');

  const [followers, setFollowers] = useState([]);
  const [following, setFollowing] = useState([]);

  const [isFollowing, setIsFollowing] = useState(false);
  const [followersCount, setFollowersCount] = useState(0);
  const [followingCount, setFollowingCount] = useState(0);

  const { urlUserName } = useParams();
  const location = useLocation();
  const userName = Cookies.get('dotcom_user');

  // Установка текущего таба
  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    setTab(searchParams.get('tab') || 'overview');
  }, [location.search]);

  // Загрузка профиля по username из URL
  useEffect(() => {
    if (!urlUserName) return;

    setLoading(true);

    getProfileByName(urlUserName)
      .then(res => {
        const profile = res.data;
        setProfileData({
          ...profile,
          userName: urlUserName,
        });
        setIsFollowing(profile.isFollowing || false);
        setFollowersCount(profile.followersCount || 0);
        setFollowingCount(profile.followingCount || 0);
        setLoading(false);
      })
      .catch(err => {
        console.error('Ошибка загрузки профиля', err);
        setLoading(false);
      });
  }, [urlUserName]);

  // Загрузка текущего пользователя
  useEffect(() => {
    if (!userName) return;

    getProfile()
      .then(res => {
        setCurrentUserData({
          ...res.data,
          userName,
        });
      })
      .catch(err => console.error('Ошибка загрузки текущего пользователя', err));
  }, [userName]);

    useEffect(() => {
  if (!urlUserName) return;

  if (tab === 'following') {
    getFollowing(urlUserName)
      .then(res => {
        const flatUsers = res.data.map(user => ({
          ...user,
          ...user.userDetailsDTO
        }));
        setFollowing(flatUsers);
      })
      .catch(err => console.error('Ошибка загрузки подписок', err));
  } else if (tab === 'followers') {
    getFollowers(urlUserName)
      .then(res => {
        const flatUsers = res.data.map(user => ({
          ...user,
          ...user.userDetailsDTO
        }));
        setFollowers(flatUsers);
      })
      .catch(err => console.error('Ошибка загрузки подписчиков', err));
  }
}, [tab, urlUserName]);


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
      const res = await saveProfile(newData);
      const updatedProfile = res.data;

      setProfileData(prev => ({ ...prev, ...updatedProfile }));
      if (userName === urlUserName) {
        setCurrentUserData(prev => ({ ...prev, ...updatedProfile }));
      }

      setIsEditing(false);
    } catch (err) {
      console.error('Ошибка сохранения профиля', err);
    }
  };

  const handleFollowToggle = async (userId, isCurrentlyFollowing) => {
  if (!userName) {
    window.location.href = '/login';
    return;
  }

  try {
    if (isCurrentlyFollowing) {
      await unsubscribeFromUser(userId);
    } else {
      await subscribeToUser(userId);
    }

    // Обновим состояние списков — переключим поле isFollowing для этого пользователя
    const updateFollowStatus = (list) => list.map(user => 
      user.id === userId ? { ...user, isFollowing: !isCurrentlyFollowing } : user
    );

    setFollowers(prev => updateFollowStatus(prev));
    setFollowing(prev => updateFollowStatus(prev));

    // Также обновим состояние самого профиля (текущего просматриваемого)
    const refreshed = await getProfileByName(urlUserName);
    const data = refreshed.data;

    setProfileData(prev => ({ ...prev, ...data }));
    setIsFollowing(data.isFollowing || false);
    setFollowersCount(data.followersCount || 0);
    setFollowingCount(data.followingCount || 0);
  } catch (err) {
    console.error('Ошибка подписки/отписки', err);
  }
};


  const renderTabContent = () => {
    switch (tab) {
      case 'repositories':
        return <RepoSearchInit />;
      case 'projects':
        return <Projects />;
      case 'packages':
        return <Packages />;
      case 'stars':
        return <Stars />;
      case 'followers':
      case 'following':
        return (
          <Following
            users={tab === 'followers' ? followers : following}
            isAuthenticated={!!userName}
            onFollowToggle={handleFollowToggle}
            tab={tab}
            currentUserId={currentUserData?.id}
          />
        );
      default:
        return <Overview />;
    }
  };

  const isOwnProfile = userName === urlUserName;

  if (loading) return <div>Loading...</div>;
  if (!profileData) return <div>Профиль не найден</div>;

  return (
    <div className="profile">
      {userName ? (
        <Header
          avatar={currentUserData?.avatar}
          name={currentUserData?.name || userName}
          userName={currentUserData?.userName}
          pageUserName={urlUserName}
          recentlyUserName={userName}
        />
      ) : (
        <HeaderUnAuthenticated bgColor="#161B22" />
      )}

      <Nav profileUserName={urlUserName} />

      <main className="main">
        <div className="profile-container">
          <div className="profile-content">
            {isEditing ? (
              <EditAside
                initialData={currentUserData}
                onSave={handleSave}
                onCancel={handleCancel}
              />
            ) : (
              <Aside
                data={profileData}
                onEdit={handleEdit}
                isOwnProfile={isOwnProfile}
                isAuthenticated={!!userName}
                isFollowing={isFollowing}
                followersCount={followersCount}
                followingCount={followingCount}
                onFollowToggle={() => handleFollowToggle(profileData.id, isFollowing)}
              />
            )}

            <div className="profile-content__container">
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
