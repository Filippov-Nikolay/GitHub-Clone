import React from 'react';
import Topbar from '../RepositoryPage/components/Topbar/Topbar';
import Title from './components/Title/Title';
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