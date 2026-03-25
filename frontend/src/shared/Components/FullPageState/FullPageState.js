import React from 'react';
import './fullPageState.css';

export default function FullPageState({ title = 'Loading...', description = '' }) {
  return (
    <div className="full-page-state">
      <div className="full-page-state__content">
        <p className="full-page-state__title">{title}</p>
        {description ? <p className="full-page-state__description">{description}</p> : null}
      </div>
    </div>
  );
}
