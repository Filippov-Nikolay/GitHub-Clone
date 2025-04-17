import React from 'react';
import Users from '../PeopleCard/PeopleCard';
import './recommendedUsers.css';
import { GoPeople } from "react-icons/go";
import Avatar1 from "../../../../shared/assets/img/Image_repo.png"
const recommendedUsers = [
    { user: "Saurabh Mittal", userAvatar: Avatar1, description: "Software engineer | DTU" },
    { user: "shivam7374", userAvatar: Avatar1, description: "Software engineer | XYZ" },
    // other users
];

const RecommendedUsers = () => {
    return (
        <div className="recommendedUsers">
            <h2 className="recommendedUsers__title"><GoPeople /> Recommended based on people you follow</h2>
            <ul className="recommendedUsers__list">
                {recommendedUsers.map((users, index) => (
                    <Users
                        key={index}
                        user={users.user}
                        repoName={users.repoName}
                        description={users.description}
                        userAvatar={users.userAvatar}
                    />
                ))}
            </ul>
        </div>
    );
};

export default RecommendedUsers;
