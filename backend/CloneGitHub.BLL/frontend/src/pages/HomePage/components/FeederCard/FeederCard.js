import React, { useState } from 'react';
import './feederCard.css';

const FeederCard = ({ imageSrc, title, description, second_description, feedbackLink, buttonText, IconComponent }) => {
    const [isVisible, setIsVisible] = useState(true);

    const handleClose = () => {
        setIsVisible(false);
    };

    if (!isVisible) {
        return null;
    }

     const backgroundStyle = imageSrc 
        ? { 
            backgroundImage: `url(${imageSrc})`,
            backgroundSize: 'cover', 
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center'
        } 
        : { 
            backgroundColor: '#141618' 
        };
    return (
        <div className="feedHeader" style={backgroundStyle}>
            <button className="feedHeader__close" onClick={handleClose}>×</button>
            <div className="feedHeader__icon">
                {IconComponent && <IconComponent />}
            </div>
            <h2 className="feedHeader__title">{title}</h2>
            <p className="feedHeader__description">{description}</p>
            <p className="feedHeader__description-copy">{second_description}</p>
            {feedbackLink && (
                <a href={feedbackLink} className="feedHeader__feedback">Send feedback</a>
            )}
             {buttonText && (
                <button className="feedHeader__button">{buttonText}</button>
            )}
        </div>
    );
};

export default FeederCard;
