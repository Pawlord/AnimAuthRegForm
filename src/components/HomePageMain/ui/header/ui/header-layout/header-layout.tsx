import React from 'react'

//Стили
import './header-layout.scss';

type Props = {
    headerLogo: React.ReactNode;
    headerTitle: React.ReactNode;
    headerNavigation: React.ReactNode;
}

export const HeaderLayout = ({ headerLogo, headerTitle, headerNavigation }: Props) => {
    return (
        <header className='header'>
            <div className='header__logo-container'>
                {headerLogo}
            </div>
            <div className="header__title">
                {headerTitle}
            </div>
            <div className='navigation__container'>
                {headerNavigation}
            </div>
        </header>
    )
}