import React from 'react';
import './teams.css';
import img_team from '../../sources/images/Frame(2).png'
const Teams = () => {
    return (
        <div className="teams">
            <h2>Your teams</h2>
            <input type="text" placeholder="Find a team..." class="input-placeholder" id="teamInput" />
            <p className="team-text-picture"><img src= {img_team} alt="team" className="team-picture" />deterministic-algorithms-lab/auto-dub</p>
        </div>
    );
};

export default Teams;
