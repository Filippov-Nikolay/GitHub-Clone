import React from "react";
import './ReadMeBar.css';
import  {BookSVG, BookSVG1}  from "../../../../shared/assets/svg/SvgComponents";
import {book} from "../../../../shared/assets/img/Github-Octicons-Book.png";


const ReadMeBar = () => {
    return(
   <div className="readme-wrapper">

       <div className="readme-container">
         <div className="readme-header">
         <BookSVG/>
             <div className="readme-text">README</div>


         </div>
         <div className="readme-body">
            <div className="readme-body-main-text">Add a README</div>
            <div className="readme-body-text">Help people interested in this repository understand your project by adding a README.</div>
             <div><button className="readme-btn">Add a README</button></div>
         </div>



       </div>
     </div>
        
        
    );
}

export default ReadMeBar
