import React, { useState } from 'react';
import './editAside.css';

export function EditAside({ initialData, onSave, onCancel }) {
    const defaultData = {
        avatar: '../assets/img/LogoProfile.png',
        name: 'John Doe',
        bio: 'Developer, cat lover and open-source enthusiast.',
        pronouns: 'he/him',
        company: 'OpenAI',
        location: 'Internet',
        showTime: true,
        website: 'https://example.com',
        social1: 'https://twitter.com/example',
        social2: 'https://github.com/example',
        social3: '',
        social4: ''
    };

    const [formData, setFormData] = useState(initialData || defaultData);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (onSave) onSave(formData);
        else console.log('Submitted:', formData);
    };

    const handleCancel = () => {
        if (onCancel) onCancel();
        else console.log('Cancelled');
    };

    return (
        <aside className="profile-edit-aside">
            <form onSubmit={handleSubmit} className="profile-edit-aside__main">
                <div className="profile-edit-aside__wrapper">
                    <div className="profile-edit-aside__logo">
                        <img src={formData.avatar} alt="Avatar" className="edit-avatar" />
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
                            <option value="he/him">He / Him</option>
                            <option value="she/her">She / Her</option>
                            <option value="they/them">They / Them</option>
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
                                name="showTime"
                                checked={formData.showTime}
                                onChange={handleChange}
                            />
                            Display current local time
                        </label>

                        <label>Website</label>
                        <input
                            className="profile-edit-aside__input"
                            name="website"
                            value={formData.website}
                            onChange={handleChange}
                            placeholder="Website"
                        />

                        <label>Social accounts</label>
                        {[1, 2, 3, 4].map(i => (
                            <input
                                key={i}
                                className="profile-edit-aside__input"
                                name={`social${i}`}
                                value={formData[`social${i}`]}
                                onChange={handleChange}
                                placeholder={`Social link ${i}`}
                            />
                        ))}
                    </div>

                    <div className="edit-buttons profile-edit-aside__content-wrapper">
                        <button type="submit" className="profile-edit-aside__btn-edit">Save</button>
                        <button type="button" onClick={handleCancel} className="profile-edit-aside__btn-beta">Cancel</button>
                    </div>
                </div>
            </form>
        </aside>
    );
}
