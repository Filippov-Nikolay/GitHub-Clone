import React, { useState, useEffect } from 'react';
// import RepositorySearch from '../../../HomePage/components/RepoSearch/RepoSearch';
import './repoSearchInit.css';
import Avatar1 from "../../../../shared/assets/img/Image_repo.png";
import { getUserRepositories } from '../../services/profileApi';

const RepoSearchInit = ({ username }) => {
  const [repositories, setRepositories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!username) return;

    async function fetchRepos() {
      try {
        const response = await getUserRepositories(username);
        const repos = (response.data || []).map(repo => ({
          user: repo.userName || repo.ownerName || username,
          repoName: repo.name,
          description: repo.description || "",
          language: repo.language || "Unknown",
          languageColor: getLanguageColor(repo.language),
          stars: repo.starsCount ? repo.starsCount.toString() : "0",
          userAvatar: Avatar1,
          url: repo.html_url || `https://github.com/${username}/${repo.name}`,
        }));
        setRepositories(repos);
      } catch (e) {
        setRepositories([]);
      } finally {
        setLoading(false);
      }
    }

    fetchRepos();
  }, [username]);

  function getLanguageColor(language) {
    const colors = {
      JavaScript: "#f1e05a",
      Python: "#3572A5",
    };
    return colors[language] || "#cccccc";
  }

  if (loading) return <div>Загрузка репозиториев...</div>;
  if (repositories.length === 0) return <div>Репозитории не найдены</div>;

  return (
    <div className="search-app">
      {/* <RepositorySearch repositories={repositories} /> */}
    </div>
  );
};

export default RepoSearchInit;
