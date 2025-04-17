import React from 'react';
import FeederCard from '../FeederCard/FeederCard';
import './feed.css';
import { ReactComponent as Icon } from '../../sources/svg/Feed.svg';
import FeedImg from '../../sources/images/Feed.png'
import FeedImg2 from '../../sources/images/Feed_Lol.png'
const Feed = () => {
    return (
        <div className="feed">
            <FeederCard 
                imageSrc= {FeedImg}
                IconComponent={Icon}
                description="Empower developers. Supercharge productivity."
                second_description="Register now for our virtual enterprise event on March 28–31."
                buttonText={"Register now"}            
            />
            <FeederCard 
                imageSrc= {FeedImg2}
                title={"Start coding instantly with GitHub Codespaces"}
                description="Spin up fully configured dev environments on powerful VMs that start in seconds. Get up to 60 hours a month of free time."
                buttonText={"Get started"}            
            />
            {/* Other components */}
        </div>
    );
};

export default Feed;
