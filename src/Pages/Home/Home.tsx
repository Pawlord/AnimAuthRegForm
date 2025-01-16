import React from 'react';

//Компоненты
import { Header } from 'components/for-homePage/ui';
import { HomePageLayout } from '../../components/layouts/home-page-layout';

//работа с react-router-dom
import { Outlet } from 'react-router-dom';


export function Home() {

    return (
        <HomePageLayout background='green'>
            <Header />
            <Outlet />
        </HomePageLayout>
    )
}