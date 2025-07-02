import React from 'react';
import './Main.css';
import { ComputerSVG, AddPeopleSVG, ClipboardSVG } from '../../../../shared/assets/svg/SvgComponents';

const Main = () => {
  return (
    <div className="container">
      {/* Codespaces и Collaborators */}
      <div className="flex-row-md">
        <div className="card">
          <ComputerSVG className="computer-icon" />
          <h2 className="font-semibold text-lg mb-2">Start coding with Codespaces</h2>
          <p className="text-sm text-gray-300 mb-4">
            Add a README file and start coding in a secure, configurable, and dedicated development environment.
          </p>
          <button className="button-gray">
            Create a codespace
          </button>
        </div>
        <div className="card">
          <AddPeopleSVG className="add-people-icon" />
          <h2 className="font-semibold text-lg mb-2">Add collaborators to this repository</h2>
          <p className="text-sm text-gray-300 mb-4">
            Search for people using their GitHub username or email address.
          </p>
          <button className="button-gray">
            Invite collaborators
          </button>
        </div>
      </div>

      {/* Quick setup */}
      <div className="quick-setup">
        <h3 className="font-semibold mb-3">
          Quick setup — if you’ve done this kind of thing before
        </h3>

    <div className="flex-wrap">
  <button className="button-gray">Set up in Desktop</button>
  <span className="text-gray-400">or</span>
  <button className="button-gray">HTTPS</button>
  <button className="button-gray">SSH</button>

  <div className="input-wrapper">
    <input
      type="text"
      readOnly
      value="https://github.com/account/repository.git"
      className="input-link"
    />
    <button className="copy-button" title="Copy">
      <ClipboardSVG />
    </button>
  </div>
</div>

        <p className="text-sm text-gray-400 no-wrap-text">
          Get started by creating a new file or uploading an existing file. We recommend every repository include a README, LICENSE, and .gitignore.
        </p>
      </div>

      {/* CLI команды */}
      <div className="cli-section">
        <h4 className="font-semibold mb-2">…or create a new repository on the command line</h4>
        <pre className="gitlab-style-box">
          <code>
            <span className="command">echo</span> <span className="string">"# re"</span> <span className="arg">&gt; README.md</span>
            {"\n"}
            <span className="command">git</span> <span className="arg">init</span>
            {"\n"}
            <span className="command">git</span> <span className="arg">add README.md</span>
            {"\n"}
            <span className="command">git</span> <span className="arg">commit -m</span> <span className="string">"first commit"</span>
            {"\n"}
            <span className="command">git</span> <span className="arg">branch -M main</span>
            {"\n"}
            <span className="command">git</span> <span className="arg">remote add origin</span> <span className="string">https://github.com/account/repository.git</span>
            {"\n"}
            <span className="command">git</span> <span className="arg">push -u origin main</span>
          </code>
        </pre>

        <h4 className="font-semibold mb-2">…or push an existing repository from the command line</h4>
        <pre className="gitlab-style-box">
          <code>
            <span className="command">git</span> <span className="arg">remote add origin</span> <span className="string">https://github.com/account/repository.git</span>
            {"\n"}
            <span className="command">git</span> <span className="arg">branch -M main</span>
            {"\n"}
            <span className="command">git</span> <span className="arg">push -u origin main</span>
          </code>
        </pre>
      </div>
    </div>
  );
};

export default Main;
