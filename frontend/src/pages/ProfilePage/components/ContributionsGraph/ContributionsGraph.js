import React from 'react';
import './ContributionsGraph.css';

const ContributionGrid = () => {
  const weeks = 53;
  const days = 7;

  return (
    <div className="contrib-container">
      <div className="contrib-header">
        <span className="contrib-count">61 contributions in the last year</span>
        <div className="contrib-controls">
          <span className="contrib-settings">Contribution settings ▼</span>
          <div className="contrib-years">
            <button className="year active">2025</button>
            <button className="year">2024</button>
            <button className="year">2023</button>
          </div>
        </div>
      </div>

      <div className="contrib-grid-box">
        <div className="months">
          <span>Apr</span><span>May</span><span>Jun</span><span>Jul</span>
          <span>Aug</span><span>Sep</span><span>Oct</span><span>Nov</span>
          <span>Dec</span><span>Jan</span><span>Feb</span><span>Mar</span><span>Apr</span>
        </div>

        <div className="contrib-graph">
          <div className="weekdays">
            <span>Mon</span>
            <span>Wed</span>
            <span>Fri</span>
          </div>

          <div className="grid">
            {[...Array(weeks)].map((_, weekIdx) => (
              <div className="week" key={weekIdx}>
                {[...Array(days)].map((_, dayIdx) => (
                  <div
                    key={dayIdx}
                    className={`cell level-${Math.floor(Math.random() * 5)}`}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>

        <div className="legend">
          <span>Learn how we count contributions</span>
          <div className="legend-scale">
            <span>Less</span>
            {[0, 1, 2, 3, 4].map((lvl) => (
              <div key={lvl} className={`cell level-${lvl}`} />
            ))}
            <span>More</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContributionGrid;