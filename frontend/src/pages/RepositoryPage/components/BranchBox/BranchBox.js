import React from "react";
import { ForkSVG, TagSVG, MagnifyingGlassSVG, SearchSVG } from "../../../../shared/assets/svg/SvgComponents";
import './BranchBox.css'
import {SearchSvg} from "../../../../shared/assets/svg/SvgComponents";
import './adaptive.css'

const BranchBox = () => {

return(

<div className="main-container">
                <button className="container-btn-branch">
                    <div className='wrapper'><ForkSVG /></div>
                    <div className='button-text'>Master</div>
                 
                    <div>&#9660;</div>
             
                </button>

                <button className="btn-without-border">
                    <div className='wrapper'><ForkSVG /></div>
                    <div className='button-text'>1</div>
                    <div className='button-text'>Branch</div>
                </button>

                <button className="btn-without-border">
                    <div className='wrapper'><TagSVG /></div>
                    <div className='button-text'>0</div>
                    <div className='button-text'>Tags</div>
                </button>



             <div className="left-side"></div>
                <div className="searchbar">
                    <div className="nav__btn-search">
                    <button className="nav__btn-wrapper">
                        <span className="nav__btn-span nav__btn-span--search"><SearchSvg></SearchSvg></span>
                        <span className="nav__btn-text">Go to file</span>
                    </button>
                    </div>
                    </div>
                 
                    
               {/*<span className="nav__btn-span nav__btn-span--search"><SearchSVG/></span>*/}
               {/* <input className="search-input" type="text" placeholder="Go to file" />*/}
               {/* </div>*/}


                <button className="container-btn-branch">
                    <div className='wrapper'>Add file</div>
                    <div>&#9660;</div>
                </button>


                <button className="container-btn-branch code-btn">
                    <div className='wrapper'>&#60; &#62;</div>
                    <div className='button-text'>Code</div>
                    <div>&#9660;</div>
                </button>

            </div>
       

);

}

export default BranchBox;