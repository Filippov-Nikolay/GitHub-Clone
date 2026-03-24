import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
  getRepositoryByUserAndName,
  updateRepository,
  deleteRepository,
  toggleVisibility
} from '../../services/EditRepository';



const Main = ({ onRepositoryLoad }) => {
  const { username, repoName } = useParams();
  const navigate = useNavigate();
  const [repository, setRepository] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isRenaming, setIsRenaming] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [newRepoName, setNewRepoName] = useState(repoName || '');
  const [description, setDescription] = useState('');
  const [website, setWebsite] = useState('');
  const [topics, setTopics] = useState('');
  const [template, setTemplate] = useState(false);
  const [signoff, setSignoff] = useState(false);
  const [isPrivate, setIsPrivate] = useState(false);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [deleteConfirmInput, setDeleteConfirmInput] = useState('');

  useEffect(() => {
    if (!username || !repoName) return;

    async function fetchRepo() {
      setLoading(true);
      try {
        const response = await getRepositoryByUserAndName(username, repoName);
        const data = response.data;
        setRepository(data);
        setNewRepoName(data.name);
        setDescription(data.description || '');
        setWebsite(data.website || '');
        setTopics(data.topics?.join(', ') || '');
        setTemplate(data.isTemplate || false);
        setSignoff(data.signoffRequired || false);
        setIsPrivate(data.isPrivate || false);

        if (onRepositoryLoad) {
          onRepositoryLoad(data.name);
        }
      } catch (error) {
        console.error('Ошибка загрузки репозитория', error);
        setRepository(null);
      } finally {
        setLoading(false);
      }
    }

    fetchRepo();
  }, [username, repoName, onRepositoryLoad]);

  const handleRename = async () => {
    if (!repository) return;
    setIsRenaming(true);
    try {
      const trimmedName = newRepoName.trim();

      const updatedRepo = {
        ...repository,
        name: trimmedName,
        description,
        website,
        topics: topics.split(',').map(t => t.trim()).filter(Boolean),
        isTemplate: template,
        signoffRequired: signoff,
      };
      console.log('Updating repo:', {
        id: repository.id,
        name: trimmedName,
        isPrivate: !isPrivate,
      });
      await updateRepository(updatedRepo);
      setRepository(updatedRepo);
      alert('Репозиторий обновлён');
      navigate(`/repository/${username}/${trimmedName}/settings`);
      window.location.reload();
    } catch (error) {
      alert('Ошибка при обновлении: ' + (error.response?.data || error.message));
      console.error(error);
    } finally {
      setIsRenaming(false);
    }
  };

  const handleDelete = async () => {
    if (!repository) return;
    setIsDeleting(true);
    try {
      await deleteRepository(repository.id);
      alert('Репозиторий удалён');
      navigate(`/${username}?tab=repositories`);
    } catch (error) {
      alert('Ошибка при удалении');
      console.error(error);
    } finally {
      setIsDeleting(false);
    }
  };

  const handleToggleVisibility = async () => {
    if (!repository) return;
    try {
      await toggleVisibility(repository.id);
      setIsPrivate(!isPrivate);
      alert(`Репозиторий теперь ${!isPrivate ? 'приватный' : 'публичный'}`);
    } catch (error) {
      alert('Ошибка при смене видимости: ' + (error.response?.data || error.message));
      console.error(error);
    }
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!repository) {
    return <p>Репозиторий не найден.</p>;
  }

  return (
    <main className="main">
      <section className="section">
        <h2 className="section-title-main">General</h2>

        <div className="input-group">
          <label className="label" htmlFor="repoName">Repository name</label>
          <div className="input-inline">
            <input
              id="repoName"
              type="text"
              value={newRepoName}
              onChange={(e) => setNewRepoName(e.target.value)}
              className="input"
            />
            <button
              className="button"
              onClick={handleRename}
              disabled={isRenaming}
            >
              {isRenaming ? 'Сохранение...' : 'Rename'}
            </button>
          </div>
        </div>

        <div className="input-group">
          <label className="label" htmlFor="description">Description</label>
          <input
            id="description"
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="input"
          />
        </div>

        <div className="input-group">
          <label className="label" htmlFor="website">Website</label>
          <input
            id="website"
            type="text"
            value={website}
            onChange={(e) => setWebsite(e.target.value)}
            className="input"
          />
        </div>

        <div className="input-group">
          <label className="label" htmlFor="topics">Topics</label>
          <input
            id="topics"
            type="text"
            value={topics}
            onChange={(e) => setTopics(e.target.value)}
            className="input"
            placeholder="topic1, topic2"
          />
        </div>

        <div className="checkbox-group">
          <input
            type="checkbox"
            id="template"
            checked={template}
            onChange={() => setTemplate(!template)}
          />
          <label htmlFor="template">
            <strong>Template repository</strong>
            <p className="description">
              A repository with LFS content cannot be used as a template.
            </p>
          </label>
        </div>

        <div className="checkbox-group">
          <input
            type="checkbox"
            id="signoff"
            checked={signoff}
            onChange={() => setSignoff(!signoff)}
          />
          <label htmlFor="signoff">
            <strong>Require contributors to sign off on web-based commits</strong>
            <p className="description">
              Enabling this setting will require contributors to sign off on commits made through GitHub’s web interface. <a href="#">Learn more</a>.
            </p>
          </label>
        </div>
      </section>

      <section className="section">
        <h2 className="section-title-main">Default branch</h2>
        <p className="description">
          The default branch is considered the "base" branch in your repository...
        </p>
        <div className="input-inline">
          <input type="text" defaultValue="main" className="input" disabled />
          <button className="icon-button">✎</button>
        </div>
      </section>

      <section className="section">
        <h2 className="section-title-main">Social preview</h2>
        <p className="description">
          Upload an image to customize your repository’s social media preview.
          Images should be at least 640×320px (1280×640px for best display).
        </p>
        <button className="button">Edit</button>
      </section>

      <div>
        <h2 className="section-title-main">Features</h2>
        <section className="section features">
          <div className="checkbox-group">
            <input type="checkbox" id="wikis" defaultChecked />
            <label htmlFor="wikis">
              <strong>Wikis</strong>
              <p className="description">
                Wikis host documentation for your repository.
              </p>
            </label>
          </div>

          <div className="checkbox-group" style={{ paddingLeft: 24 }}>
            <input type="checkbox" id="restrict" defaultChecked />
            <label htmlFor="restrict">
              <strong>Restrict editing to collaborators only</strong>
              <p className="description">
                Public wikis will still be readable by everyone.
              </p>
            </label>
          </div>
        </section>
      </div>

      <div>
        <h2 className="danger-title">Danger Zone</h2>
        <section className="danger-zone">
          <div
            className="danger-item"
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}
          >
            <div className="danger-info">
              <strong>Change repository visibility</strong>
              <p>This repository is currently {isPrivate ? 'private' : 'public'}.</p>
            </div>
            <button className="danger-button" onClick={handleToggleVisibility}>
              {isPrivate ? 'Make Public' : 'Make Private'}
            </button>
          </div>

          <div
            className="danger-item"
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}
          >
            <div className="danger-info">
              <strong>Disable branch protection rules</strong>
              <p>Disable branch protection rules enforcement and APIs.</p>
            </div>
            <button className="danger-button">Disable protection</button>
          </div>

          <div
            className="danger-item"
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}
          >
            <div className="danger-info">
              <strong>Transfer ownership</strong>
              <p>Transfer this repository to another user or organization.</p>
            </div>
            <button className="danger-button">Transfer</button>
          </div>

          <div
            className="danger-item"
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}
          >
            <div className="danger-info">
              <strong>Archive this repository</strong>
              <p>Mark this repository as read-only.</p>
            </div>
            <button className="danger-button">Archive</button>
          </div>

          <div
            className="danger-item"
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}
          >
            <div className="danger-info">
              <strong>Delete this repository</strong>
              <p>Once you delete a repository, there is no going back. Please be certain.</p>
            </div>
            <button
              className="danger-button"
              onClick={() => setShowDeleteConfirm(true)}
              disabled={isDeleting}
            >
              {isDeleting ? 'Удаление...' : 'Delete'}
            </button>
          </div>
        </section>
      </div>

      {showDeleteConfirm && repository && (
        <div
          className="modal-overlay"
          style={{
            position: 'fixed',
            top: 0, left: 0, right: 0, bottom: 0,
            backgroundColor: 'rgba(0,0,0,0.5)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 1000
          }}
        >
          <div
            className="modal-content"
            style={{
              backgroundColor: '#161b22',
              padding: '20px',
              borderRadius: '8px',
              maxWidth: '400px',
              width: '100%',
              color: '#c9d1d9',
            }}
          >
            <h3>Confirm repository deletion</h3>
            <p>
              To delete the repository, please type its name{' '}
              <strong>{repository.name}</strong> below:
            </p>
            <input
              type="text"
              value={deleteConfirmInput}
              onChange={e => setDeleteConfirmInput(e.target.value)}
              placeholder="Repository name"
              className="input"
            />
            <div
              style={{
                marginTop: 16,
                display: 'flex',
                gap: '8px',
                justifyContent: 'flex-end'
              }}
            >
              <button
                className="danger-button"
                disabled={
                  deleteConfirmInput.trim().toLowerCase() !== repository.name.trim().toLowerCase() || isDeleting
                }
                onClick={async () => {
                  await handleDelete();
                  setShowDeleteConfirm(false);
                  setDeleteConfirmInput('');
                }}
                style={{
                  cursor:
                    deleteConfirmInput.trim().toLowerCase() === repository.name.trim().toLowerCase() && !isDeleting
                      ? 'pointer'
                      : 'not-allowed',
                }}
              >
                {isDeleting ? 'Удаление...' : 'Confirm Delete'}
              </button>
              <button
                className="button"
                onClick={() => {
                  setShowDeleteConfirm(false);
                  setDeleteConfirmInput('');
                }}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
};

export default Main;
