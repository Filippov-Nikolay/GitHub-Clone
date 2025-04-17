import React, {} from "react";
import { 
    LogoSvg, PathSvg, SearchSvg
} from '../../assets/svg/svgComponents'
import { BurgerMenu } from "../BurgerMenu/BurgerMenu";
import { Menu } from "../Menu/Menu";

function SignUp() {
    return (
        <a className="nav__btn nav__btn--border" href="/signup">Sign up</a>
    )
}
export function Nav({btnClick}) {
    return (
        <nav className="nav">
            <div className="nav__wrapper">
                <div className="nav__sign-up-wrapper">
                    <SignUp></SignUp>
                </div>
                <a href="#" className="logo" aria-label='logo'><LogoSvg colorProps="#fff"></LogoSvg></a>
                <div className="nav__inner">
                    <Menu></Menu>
                    <div className="nav__wrapper-item">
                        <button className="nav__btn-search" onClick={btnClick}>
                            <div className="nav__btn-wrapper">
                                <span className="nav__btn-span nav__btn-span--search"><SearchSvg></SearchSvg></span>
                                <span className="nav__btn-text">Search GitHub</span>
                            </div>
                            <span className="nav__btn-span"><PathSvg></PathSvg></span>
                        </button>
                        <a className="nav__btn" href="/login">Sign in</a>
                        <div className="nav__sign-up"><SignUp></SignUp></div>
                    </div>
                </div>
                <div className="burger-component-wrapper">
                    <BurgerMenu></BurgerMenu>
                </div>
            </div>
        </nav>
    )
}