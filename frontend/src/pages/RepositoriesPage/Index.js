import React from 'react';

import '../../shared/Profile/profile.css'
import { Header } from '../../shared/Header/Header'
import { Nav } from '../../shared/Nav/Nav'
import { Aside } from '../../shared/Aside/Aside'
import { Footer } from '../../shared/Footer/Footer'
import RepoSearchInit from './components/RepoSearchInit/repoSearchInit'

export function Index() {
    return(
        <div className='vbb-profile'>
            <Header />
            <Nav />
            <main className='vbb-main'>
                <div className='vbb-profile-container'>
                    <div className='vbb-profile-content'>
                        <Aside />
                        <RepoSearchInit />
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    )
}

export default Index;