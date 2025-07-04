import React, { useState } from 'react';
import './overview.css'
import { ExitSvg,BookSvg,OrangeSvg,BlueSvg,StarSvg } from '../../../../shared/assets/svg/SvgComponents';
import ContributionsGraph  from '../ContributionsGraph/ContributionsGraph.js';


const pinnedItemsData = [
    {
      title: 'DL_PyTorch',
      description: 'Deep Learning using Pytorch',
      iconD: <OrangeSvg />,
      type: 'Public',
      icon: <StarSvg />,
    },
    {
      title: 'Machine-Learning',
      description: 'Jupyter Notebook',
      iconD: <OrangeSvg />,
      type: 'Public',
      icon: <StarSvg />,
    },
    {
      title: 'NLP-and-Speech',
      description: 'Code for various NLP and Speech Task',
      iconD: <OrangeSvg />,
      type: 'Public',
      icon: <StarSvg />,
    },
    {
      title: 'Reinforcement-Learning',
      description: 'Jupyter Notebook',
      iconD: <OrangeSvg />,
      type: 'Public',
      icon: <StarSvg />,
    },
    {
      title: 'determini-algorithms-lab',
      description: 'Python',
      iconD: <BlueSvg />,
      type: 'Public',
      icon: <StarSvg />,
    },
  ];

  const PinnedItems = () => {
    return (
      <ul className="pinned-items-list">
        {pinnedItemsData.map((item, index) => (
          <li key={index} className="pinned-item">
            <div className="pinned-item-header">
              <span className="pinned-item-title">
                <BookSvg /> {item.title}
              </span>
              <span className="pinned-item-type">{item.type}</span>
            </div>
            <div className="pinned-item-footer">
              <div className="pinned-item-description">
                {item.iconD} {item.description}
              </div>
              <div className="pinned-item-icon">{item.icon}</div>
            </div>
          </li>
        ))}
      </ul>
    );
  };


export function Overview() {

const [isNotificationVisible, setIsNotificationVisible] = useState(true);

  const handleExitClick = () => {
    setIsNotificationVisible(false);
  };

  const contributions = {
    Mon: [0, 3, 5, 0, 0, 0, 0],
    Tue: [0, 0, 0, 0, 0, 0, 0],
    Wed: [1, 2, 6, 0, 0, 0, 0],
    Thu: [0, 0, 0, 0, 0, 0, 0],
    Fri: [0, 2, 4, 5, 0, 0, 0],
    Sat: [0, 0, 0, 0, 0, 0, 0],
    Sun: [0, 0, 0, 0, 0, 0, 0],
  };

  return(
    <article className='article' >
        {isNotificationVisible && ( <section className='section notification'>
            <div className='article__wrapper'>
              <div className='article__container'>
                <p className='article__container-text'>
                  You unlocked new Achievements with private contributions! Show them off by including private contributions in your profile in <span className='article__container--link'>settings</span>.
                </p>
                <div className='article__container-btn' onClick={handleExitClick}>
                  <ExitSvg />
                </div>
              </div>
            </div>
          </section>
        )}
        <section className='section'>
            <div className='article__wrapper'>
                <div className='article__header'>
                    <p className='article__header-name'>Pinned</p>
                    <button type='button' className='article__header-edit'>Customize your pins</button>
                </div>
                <PinnedItems />
                <ContributionsGraph  contributions={contributions}/>
            </div>

        </section>
    </article>
  )
}