import React from 'react';
import Topbar from '../../pages/RepositoryPage/components/Topbar/Topbar';
import Title from '../CreateRepository/components/Title/Title';
import { Header } from '../../shared/Header/Header';

export function Index() {   
    return(
        <div>
        <Header />
        <Title></Title>
        </div>
    );
}


export default Index;