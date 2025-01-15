import React from 'react';

//Компоненты
import { Header } from 'components/HomePageMain/ui';
import { HomePageLayout } from '../../components/layouts/home-page-layout';

//работа с react-router-dom
import { useLocation, Outlet } from 'react-router-dom';


export function Home() {
    const location = useLocation();

    return (
        <HomePageLayout background='green'>
            <Header />
            <Outlet />
        </HomePageLayout>
    )
}