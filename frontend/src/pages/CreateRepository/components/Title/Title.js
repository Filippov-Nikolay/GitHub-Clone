import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import { BookRepositorySVG, LockSVG } from '../../../../shared/assets/svg/SvgComponents';
import { createRepository } from '../../services/CreateRepository';
import './Title.css';

export function Title() {
  const user = Cookies.get('dotcom_user');
  const navigate = useNavigate();
  const [showError, setShowError] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    isPrivate: false,
    isPinned: false,
  });

  const handleChange = (e) => {
    const { name, type, value, checked } = e.target;

    if (name === 'isPrivate') {
      setFormData({
        ...formData,
        isPrivate: value === 'true',
      });
      return;
    }

    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await createRepository(formData);
      navigate(`/repository/${user}/${formData.name}`);
    } catch (error) {
      console.error('An error occurred by creating repository:', error);
      setShowError(true);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="repo-container">
        <h2 className="title">Create a new repository</h2>
        <p className="subtitle">
          A repository contains all project files, including the revision history. Already have a project repository elsewhere?{' '}
          <a href="https://docs.github.com/en/repositories/creating-and-managing-repositories/duplicating-a-repository" className="link">
            Import a repository
          </a>
        </p>

        <div className="section-divider"></div>

        <div className="input-row">
          <div className="input-group">
            <label htmlFor="owner" className="label">
              Owner<span className="required">*</span>
            </label>
            <input id="owner" disabled value={user} className="input small" />
          </div>
          <div className="slash">/</div>
          <div className="input-group">
            <label htmlFor="repo" className="label">
              Repository name<span className="required">*</span>
            </label>
            <input id="repo" placeholder="my-repo" className="input" name="name" value={formData.name} onChange={handleChange} />
          </div>
        </div>

        <p className="note">
          Great repository names are short and memorable. Need inspiration? How about{' '}
          <a href="https://github.blog/open-source/git/find-insightful-random-repository-names-with-github/" className="bookish-link">
            bookish-octo-spoon?
          </a>
        </p>

        <div className="input-group">
          <label htmlFor="desc" className="label">
            Description <span className="optional">(optional)</span>
          </label>
          <input id="desc" className="input full" placeholder="Description" name="description" value={formData.description} onChange={handleChange} />
          <div className="section-divider"></div>
        </div>

        <div className="radio-group">
          <label>
            <input type="radio" name="isPrivate" value="false" checked={formData.isPrivate === false} onChange={handleChange} />
            <BookRepositorySVG /> Public
          </label>
          <span className="radio-note">Anyone on the internet can see this repository. You choose who can commit.</span>

          <label>
            <input type="radio" name="isPrivate" value="true" checked={formData.isPrivate === true} onChange={handleChange} />
            <LockSVG /> Private
          </label>
          <span className="radio-note">You choose who can see and commit to this repository.</span>
          <div className="section-divider"></div>
        </div>

        <div className="checkbox-group">
          <label className="list">
            <input type="checkbox" /> Add a README file
          </label>
          <span className="checkbox-note">
            This is where you can write a long description for your project.{' '}
            <a href="https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/about-readmes">
              Learn more about READMEs.
            </a>
          </span>
        </div>

        <div className="select-group">
          <label className="list">Add .gitignore</label>
          <select className="input full">
            <option>None</option>
          </select>
          <span className="checkbox-note">
            Choose which files not to track from a list of templates.{' '}
            <a href="https://docs.github.com/en/get-started/getting-started-with-git/ignoring-files">Learn more about ignoring files.</a>
          </span>
        </div>

        <div className="select-group">
          <label className="list">Choose a license</label>
          <select className="input full">
            <option>None</option>
          </select>
          <span className="checkbox-note">
            A license tells others what they can and can&apos;t do with your code.{' '}
            <a href="https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/licensing-a-repository">
              Learn more about licenses.
            </a>
          </span>
          <div className="section-divider"></div>
        </div>

        <hr className="separator" />

        {showError && <p className="note">Repository creation failed. Please try again.</p>}

        <p className="info-note">You are creating a public repository in your personal account.</p>
        <div className="section-divider"></div>

        <button className="create-btn">Create repository</button>
      </div>
    </form>
  );
}

export default Title;
