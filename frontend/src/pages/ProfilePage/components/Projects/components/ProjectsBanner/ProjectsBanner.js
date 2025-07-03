import { React, useState, useEffect } from 'react';
import Cookies from 'js-cookie';

import { CloseBurgerSVG } from '../../../../../../shared/assets/svg/SvgComponents';
import './projectsBanner.css'; 

export default function ProjectsBanner() {
    let isShowBanner = Cookies.get("is_show_banner");
    const [showBanner, setShowBanner] = useState(isShowBanner !== "false");

    useEffect(() => {
        if (isShowBanner == null) {
            Cookies.set("is_show_banner", "true");
            setShowBanner(true);
        }
    }, [isShowBanner]);

    const handleCloseBanner = () => {
        setShowBanner(false);
    };

    return (
        <div className={`projects-banner ${showBanner ? "" : "projects-banner--hidden"}`}>
            <button className="close" onClick={handleCloseBanner}>
                <div className="close__span"><CloseBurgerSVG/></div>
            </button>

            <div className="projects-banner__content">
                <h2 className="projects-banner__title">Welcome to projects</h2>
                <p className="projects-banner__description">
                    Built like a spreadsheet, project tables give you a live canvas to filter, sort, and group issues and pull requests. Tailor them to your needs with custom fields and saved views.
                </p>
                <a href="#" className="btn">Learn more</a>
            </div>
        </div>
    );
}
