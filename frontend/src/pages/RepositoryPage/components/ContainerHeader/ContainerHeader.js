import React from 'react';
import { ProfileLogoSVG, PinSVG, UnwatchSVG, ForkSVG, StarSvg } from '../../../../shared/assets/svg/SvgComponents';
import './ContainerHeader.css';
import './adaptive.css';


const ContainerHeader = ({repository}) => {
    return(
        <div className='repository-container-header'>
           <ProfileLogoSVG className='profile-logo-svg'/>
           <div><a>{repository}</a></div>

           <span className='access-specificator'>Public</span>
         

<div className='buttons'>

            <button className='container-btn'>
            <div className='wrapper'><PinSVG/></div>
            <div className='button-text'>Pin</div>
            </button>

            <button className='container-btn'>
            <div className='wrapper'><UnwatchSVG/></div>
            <div className='button-text'>Unwatch</div>
            <div className='watch-count'>1</div>
            <div>&#9660;</div>
            </button>


            <button className='container-btn'>
            <div className='wrapper'><ForkSVG/></div>
            <div className='button-text'>Fork</div>
            <div className='watch-count'>0</div>
            <div className="divider"></div>
            <div>&#9660;</div>
            </button>


            <button className='container-btn'>
            <div className='wrapper'><StarSvg/></div>
            <div className='button-text'>Starred</div>
            <div className='watch-count'>1</div>
            <div className="divider"></div>
            <div>&#9660;</div>
            </button>

           </div>


           

        </div>
    );
}

  export default ContainerHeader