import React, { useState } from 'react';
import { EditAside } from './shared/EditAside/EditAside.js'; // Импортируешь компонент EditAside

function App() {
    // Пример начальных данных (замени на реальные данные, когда будет подключение к БД)
    const initialData = {
        avatar: './shared/assets/img/LogoProfile.png', // Здесь можешь использовать свой путь к изображению
        name: 'John Doe',
        bio: 'Software Developer at Tech Company',
        pronouns: 'he/him',
        company: 'Tech Company',
        location: 'USA',
        showTime: true,
        website: 'http://example.com',
        social1: 'http://twitter.com/johndoe',
        social2: 'http://github.com/johndoe',
        social3: ''
    };

    const [isEditing, setIsEditing] = useState(false);

    // Функция для обработки сохранения данных (пока просто выводим в консоль)
    const handleSave = (updatedData) => {
        console.log('Saved data:', updatedData);
        setIsEditing(false); // Закрываем форму после сохранения
    };

    const handleCancel = () => {
        setIsEditing(false); // Закрываем форму без сохранения
    };

    return (
        <div className="App">
            <button onClick={() => setIsEditing(true)}>Edit Profile</button>
            {isEditing && (
                <EditAside
                    initialData={initialData}  // Передаем начальные данные
                    onSave={handleSave}  // Функция для сохранения данных
                    onCancel={handleCancel}  // Функция для отмены изменений
                />
            )}
        </div>
    );
}

export default App;
