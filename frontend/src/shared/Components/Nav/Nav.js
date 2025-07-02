import {React, useState} from "react";
import { 
    LogoSvg, PathSvg, SearchSvg
} from '../../../shared/assets/svg/SvgComponents'
import { BurgerMenu } from "../BurgerMenu/BurgerMenu";
import { Menu } from "../Menu/Menu";
import BtnSearch from "../BtnSearch/BtnSearch";
import { ModalWindowInput } from "../ModalWindowInput/ModalWindowInput";

import './nav.css';
import './adaptive.css'

function SignUp() {
    return (
        <a className="nav__btn nav__btn--border" href="/signup">Sign up</a>
    )
}
export function Nav({bgColor = "#ffffff00", theme = 'dark'}) {
    const [isModalVisible, setModalVisible] = useState(false);
    const handleButtonClick = () => {
        setModalVisible(!isModalVisible);
    };

    return (
        <>
            <ModalWindowInput isActive={isModalVisible} setIsActive={setModalVisible} theme={theme}/>
            <nav className="nav" style={{backgroundColor: bgColor}}>
                <div className="nav__wrapper">
                    <div className="nav__sign-up-wrapper"><SignUp></SignUp></div>
                    <a href="/" className="logo" aria-label='logo'><LogoSvg colorProps="#fff"></LogoSvg></a>
                    <div className="nav__inner">
                        <Menu></Menu>
                        <div className="nav__wrapper-item">
                            <BtnSearch
                                btnClick={handleButtonClick}
                                svgComponent={<SearchSvg></SearchSvg>}
                                btnText={'Search GitHub'}
                                additionalSvgComponent={<PathSvg></PathSvg>}
                            />
                            <a className="nav__btn" href="/login">Sign in</a>
                            <div className="nav__sign-up"><SignUp></SignUp></div>
                        </div>
                    </div>
                    <div className="burger-component-wrapper">
                        <BurgerMenu></BurgerMenu>
                    </div>
                </div>
            </nav>
        </>
    )
}