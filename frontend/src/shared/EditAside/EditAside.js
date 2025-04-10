import React, { useState } from 'react';
import './editAside.css';

export function EditAside({ initialData, onSave, onCancel }) {

    
    const [formData, setFormData] = useState(initialData);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSave(formData);  // Здесь будет логика сохранения (например, временная консоль)
    };

    return (
        <div className="edit-modal">
            <form onSubmit={handleSubmit} className="edit-form">
                <img src={formData.avatar || '/default-avatar.png'} className="edit-avatar" alt="Profile" />
                <input name="name" value={formData.name} onChange={handleChange} placeholder="Name" />
                <textarea name="bio" value={formData.bio} onChange={handleChange} placeholder="Bio" />
                <select name="pronouns" value={formData.pronouns} onChange={handleChange}>
                    <option value="">Don't specify</option>
                    <option value="he/him">He / Him</option>
                    <option value="she/her">She / Her</option>
                    <option value="they/them">They / Them</option>
                </select>
                <input name="company" value={formData.company} onChange={handleChange} placeholder="Company" />
                <input name="location" value={formData.location} onChange={handleChange} placeholder="Location" />
                <label>
                    <input
                        type="checkbox"
                        name="showTime"
                        checked={formData.showTime}
                        onChange={handleChange}
                    />
                    Display current local time
                </label>
                <input name="website" value={formData.website} onChange={handleChange} placeholder="Website" />

                {[1, 2, 3, 4].map(i => (
                    <input
                        key={i}
                        name={`social${i}`}
                        value={formData[`social${i}`]}
                        onChange={handleChange}
                        placeholder={`Link to social profile ${i}`}
                    />
                ))}

                <div className="edit-buttons">
                    <button type="submit" className="save-btn">Save</button>
                    <button type="button" onClick={onCancel} className="cancel-btn">Cancel</button>
                </div>
            </form>
        </div>
    );
}

