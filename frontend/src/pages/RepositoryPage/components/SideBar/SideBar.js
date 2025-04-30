import React from "react";
import "./SideBar.css";
import {ActivitySVG, StarSvg, UnwatchSVG, ForkSVG, SettingsSVG} from "../../../../shared/assets/svg/SvgComponents";
import "./adaptive.css";

const RepositorySidebar = () => {
    return (
        <aside className="gh-sidebar">
            <section className="gh-sidebar-section">
                <div className="about-tg">
                    <div className="about-txt">
                <h3>About</h3>
                    </div>
                    <div>
                <SettingsSVG/>
                    </div>
                </div>
                <p className="descr">No description, website, or topics provided.</p>
                <ul className="gh-about-stats">
                    <li><ActivitySVG/> Activity</li>
                    <li><StarSvg/> 1 star</li>
                    <li><UnwatchSVG/> 1 watching</li>
                    <li><ForkSVG/> 0 forks</li>
                </ul>
            </section>

            <section className="gh-sidebar-section">
                <h3>Releases</h3>
                <p>No releases published</p>
                <a href="#">Create a new release</a>
            </section>

            <section className="gh-sidebar-section">
                <h3>Packages</h3>
                <p>No packages published</p>
                <a href="#">Publish your first package</a>
            </section>

            <section className="gh-sidebar-section">
                <h3>Languages</h3>
                <div className="gh-language-bar">
                    <div className="lang-cpp" style={{ width: "88.6%" }}></div>
                    <div className="lang-c" style={{ width: "11.4%" }}></div>
                </div>
                <div className="gh-language-labels">
                    <span className="cpp">C++ 88.6%</span>
                    <span className="c">C 11.4%</span>
                </div>
            </section>

            <section className="gh-sidebar-section">
                <h3>Suggested workflows</h3>
                <button className="gh-workflow-btn">MSBuild based projects</button>
            </section>
        </aside>
    );
};

export default RepositorySidebar;
