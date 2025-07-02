import React, { useState } from "react";
import './Title.css';
import { BookRepositorySVG, LockSVG} from '../../../../shared/assets/svg/SvgComponents';
import { useNavigate } from 'react-router-dom';
import { createRepository } from "../../services/CreateRepository";
import Cookies from "js-cookie";



export function Title() {

    const user = Cookies.get("dotcom_user");
    const navigate = useNavigate();
    const [showError, setShowError] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        description: "",
        isPrivate: false,
        isPinned: false
        
    });
    


    const handleChange = (e) => {
        const { name, type, value, checked } = e.target;

        if (name === "isPrivate") {
            setFormData({
                ...formData,
                isPrivate: value === "true", // "true" → true, "false" → false
            });
        }
        else{


        setFormData({
            ...formData,
            [name]: type === "checkbox" ? checked : value,
        });
    }

    };

    const handleSubmit = async (e) => {
        e.preventDefault(); // предотвращает перезагрузку страницы при отправке формы
        try{
            console.log("dotcom_user =", user); // ← это то, что приходит из куки
            await createRepository(formData);
            navigate(`/repository/${user}/${formData.name}`);
            console.log("Creating repository...", formData);
        }
        catch(error)
        {
            console.error("An error occurred by creating repository:", error);
            setShowError(true);
        }
    
   
    };
        

    return(
        <form onSubmit={handleSubmit}>
    
        <div className="repo-container">
            <h2 className="title">Create a new repository</h2>
            <p className="subtitle">
                A repository contains all project files, including the revision history. Already have a project repository elsewhere?&nbsp;
                <a href="#" className="link">Import a repository</a>
            </p>
            
            <div className="section-divider"></div>


            <div className="input-row">
                <div className="input-group">
                    <label htmlFor="owner" className="label">Owner<span className="required">*</span></label>
                    <input id="owner" disabled value={user} className="input small" />
                </div>
                <div className="slash">/</div>
                <div className="input-group">
                    <label htmlFor="repo" className="label">Repository name<span className="required">*</span></label>
                    <input id="repo" placeholder="my-repo" className="input" name="repositoryName" name="name" value={formData.name} onChange={handleChange} />
                </div>
            </div>

            <p className="note">
                Great repository names are short and memorable. Need inspiration? How about&nbsp;
                <a href="#" className="bookish-link">bookish-octo-spoon?</a>
            </p>

            <div className="input-group">
                <label htmlFor="desc" className="label">Description <span className="optional">(optional)</span></label>
                <input id="desc" className="input full" placeholder="Description" name="description" value={formData.description} onChange={handleChange}/>
                <div className="section-divider"></div>

            </div>
            

            <div className="radio-group">
                <label><input type="radio" name="isPrivate" value="false" checked={formData.isPrivate === false} onChange={handleChange} defaultChecked /><BookRepositorySVG/> Public</label>
                <span className="radio-note">Anyone on the internet can see this repository. You choose who can commit.</span>

                <label><input type="radio" name="isPrivate" value="true" checked={formData.isPrivate === true} onChange={handleChange}/><LockSVG/> Private</label>
                <span className="radio-note">You choose who can see and commit to this repository.</span>
                <div className="section-divider"></div>

            </div>

         

            <div className="checkbox-group">
                <label className="list"><input type="checkbox" /> Add a README file</label><tr/>
                <span className="checkbox-note">This is where you can write a long description for your project. <a href="#">Learn more about READMEs.</a></span>
            </div>

            <div className="select-group">
                <label className="list">Add .gitignore</label>
                <select className="input full">
                    <option>None</option>
                </select>
                <span className="checkbox-note">Choose which files not to track from a list of templates. <a href="#">Learn more about ignoring files.</a></span>
            </div>

            <div className="select-group">
                <label className="list">Choose a license</label>
                <select className="input full">
                    <option>None</option>
                </select>
                <span className="checkbox-note">A license tells others what they can and can't do with your code. <a href="#">Learn more about licenses.</a></span>
                <div className="section-divider"></div>

            </div>

            <hr className="separator" />

            <p className="info-note">You are creating a public repository in your personal account.</p>
            <div className="section-divider"></div>

 
            <button className="create-btn">Create repository</button>
            
        </div>
        </form>
    );
}


export default Title;