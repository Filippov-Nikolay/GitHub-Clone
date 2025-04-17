import React from 'react';
import { Header}  from '../../shared/Header/Header.js'
import { Nav } from '../../shared/Nav/Nav.js';
import { Aside } from '../../shared/Aside/Aside.js';
import { Overview } from './components/Overview/Overview.js';
import { Footer } from '../../shared/Footer/Footer.js';

export function Index() {
    return (
        // 1290px - пропадает контейнер, на 1184 - появляется.
        // Контейнер должен быть везде

        <div className='profile'>
            <Header/>
            <Nav/>
            <main className='main'>
                <div className='profile-container'>
                    <div className='profile-content'>
                        <Aside/>
                        <Overview/>
                    </div>
                </div>
            </main>
            <Footer/>
        </div>
    )
}

export default Index;