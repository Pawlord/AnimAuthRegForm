import React from 'react';
import clsx from 'clsx';

//Компоненты
import { Header } from '../../components/HomePageMain/ui';
import { HomePageLayout } from '../../components/layouts/home-page-layout';

//Стили;
import './home-page.scss'

//работа с react-router-dom
import { useLocation } from 'react-router-dom';


export function HomePage() {
    const [isShown, setIsShown] = React.useState(false)

    const location = useLocation();

    React.useEffect(() => {
        let timer: NodeJS.Timeout | undefined;
        if (location.pathname === '/home-page') {
            timer = setTimeout(() => {
                setIsShown(true)
            }, 50)
        } else {
            setIsShown(false)
        }
        return () => clearTimeout(timer);
    }, [location.pathname])

    return (
        <HomePageLayout background='green'>
            <Header />
            <div className={clsx('main-section', isShown ? 'main-section__show' : '')}>
                <h1>HomePage</h1>
            </div>
        </HomePageLayout>
    )
}