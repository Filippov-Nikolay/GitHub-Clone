import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import RepositoryCard from '../../../HomePage/components/RepositoryCard/RepositoryCard';
import './repoSearchInit.css';
import Avatar1 from '../../../../shared/assets/img/Image_repo.png';
import { getUserRepositories } from '../../services/profileApi';

const fallbackRepositories = [
  {
    user: 'pymodbus-dev',
    repoName: 'pymodbus',
    description: 'A full modbus protocol written in python',
    language: 'Python',
    stars: '3',
    userAvatar: Avatar1,
  },
  {
    user: 'BuilderIO',
    repoName: 'demo-editor',
    description: '',
    language: 'JavaScript',
    stars: '8',
    userAvatar: Avatar1,
  },
  {
    user: 'stared',
    repoName: 'livelossplot',
    description: 'Live training loss plot in Jupyter Notebook for Keras, PyTorch and others',
    language: 'Python',
    stars: '1.2k',
    userAvatar: Avatar1,
  },
];

const RepoSearchInit = () => {
  const { urlUserName } = useParams();
  const [repositories, setRepositories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isActive = true;

    async function fetchRepos() {
      if (!urlUserName) {
        setRepositories([]);
        setLoading(false);
        return;
      }

      setLoading(true);

      try {
        const response = await getUserRepositories(urlUserName);
        const repos = (response.data || []).map((repo) => ({
          user: repo.userName || repo.ownerName || urlUserName,
          repoName: repo.name,
          description: repo.description || '',
          language: repo.language || 'Unknown',
          stars: repo.starsCount ? repo.starsCount.toString() : '0',
          userAvatar: Avatar1,
        }));

        if (isActive) {
          setRepositories(repos);
        }
      } catch (error) {
        if (isActive) {
          setRepositories(
            fallbackRepositories.map((repo) => ({
              ...repo,
              user: urlUserName || repo.user,
            })),
          );
        }
      } finally {
        if (isActive) {
          setLoading(false);
        }
      }
    }

    fetchRepos();

    return () => {
      isActive = false;
    };
  }, [urlUserName]);

  if (loading) {
    return <div className="search-app">Loading repositories...</div>;
  }

  if (repositories.length === 0) {
    return <div className="search-app">No repositories found.</div>;
  }

  return (
    <div className="search-app">
      {repositories.map((repo) => (
        <RepositoryCard
          key={`${repo.user}-${repo.repoName}`}
          user={repo.user}
          repoName={repo.repoName}
          description={repo.description}
          language={repo.language}
          stars={repo.stars}
          userAvatar={repo.userAvatar}
        />
      ))}
    </div>
  );
};

export default RepoSearchInit;
