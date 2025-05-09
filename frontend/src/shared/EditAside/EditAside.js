import React, { useState, useRef } from 'react';
import './editAside.css';
import DefaultAvatar from '../assets/img/avatar_account.png'


export function EditAside({ initialData, onSave, onCancel }) {
    const [formData, setFormData] = useState(initialData);
    const [avatarFile, setAvatarFile] = useState(null);
    const fileInputRef = useRef(null);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };
    
    const handleAvatarClick = () => {
        fileInputRef.current.click();
    };
    
    const handleAvatarChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const localUrl = URL.createObjectURL(file);
            setFormData(prev => ({
                ...prev,
                avatar: localUrl
            }));
            setAvatarFile(file);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSave(formData, avatarFile);
    };
    
    return (
        <aside className="profile-edit-aside">
            <form onSubmit={handleSubmit} className="profile-edit-aside__main">
                <div className="profile-edit-aside__wrapper">
                    <div className="profile-edit-aside__logo" onClick={handleAvatarClick} style={{ cursor: 'pointer' }}>
                        <img src={formData.avatar ? formData.avatar : DefaultAvatar} alt="Avatar" className="edit-avatar" />
                        <input
                            type="file"
                            accept="image/*"
                            ref={fileInputRef}
                            style={{ display: 'none' }}
                            onChange={handleAvatarChange}
                        />
                    </div>
    
                    <div className="profile-edit-aside__info">
                        <label>Name</label>
                        <input
                            className="profile-edit-aside__input"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Name"
                        />
    
                        <label>Pronouns</label>
                        <select
                            className="profile-edit-aside__input"
                            name="pronouns"
                            value={formData.pronouns}
                            onChange={handleChange}
                        >
                            <option value="">Don't specify</option>
                            <option value="• he/him">He / Him</option>
                            <option value="• she/her">She / Her</option>
                            <option value="• they/them">They / Them</option>
                        </select>
    
                        <label>Bio</label>
                        <textarea
                            className="profile-edit-aside__bio-text"
                            name="bio"
                            value={formData.bio}
                            onChange={handleChange}
                            placeholder="Bio"
                        />
    
                        <label>Company</label>
                        <input
                            className="profile-edit-aside__input"
                            name="company"
                            value={formData.company}
                            onChange={handleChange}
                            placeholder="Company"
                        />
    
                        <label>Location</label>
                        <input
                            className="profile-edit-aside__input"
                            name="location"
                            value={formData.location}
                            onChange={handleChange}
                            placeholder="Location"
                        />
    
                        <label className="checkbox-wrapper">
                            <input
                                type="checkbox"
                                name="currentLocationTime"
                                checked={formData.currentLocationTime}
                                onChange={handleChange}
                            />
                            Display current local time
                        </label>
    
                        {formData.currentLocationTime && (
                            <>
                                <label>Time zone</label>
                                <select
                                    className="profile-edit-aside__input"
                                    name="timezone"
                                    value={formData.timezone}
                                    onChange={handleChange}
                                >
                                    {Intl.supportedValuesOf('timeZone').map(tz => (
                                        <option key={tz} value={tz}>{tz}</option>
                                    ))}
                                </select>
                            </>
                        )}
    
                        <label>Website</label>
                        <input
                            className="profile-edit-aside__input"
                            name="webSite"
                            value={formData.webSite}
                            onChange={handleChange}
                            placeholder="Website"
                        />
    
                        <label>Social accounts</label>
                        {[1, 2, 3, 4].map(i => (
                            <input
                                key={i}
                                className="profile-edit-aside__input"
                                name={`linkToSocial${i}`}
                                value={formData[`linkToSocial${i}`] || ''}
                                onChange={handleChange}
                                placeholder={`Social link ${i}`}
                            />
                        ))}
                    </div>
    
                    <div className="edit-buttons profile-edit-aside__content-wrapper">
                        <button type="submit" className="profile-edit-aside__btn-edit">Save</button>
                        <button type="button" onClick={onCancel} className="profile-edit-aside__btn-beta">Cancel</button>
                    </div>
                </div>
            </form>
        </aside>
    );
}
