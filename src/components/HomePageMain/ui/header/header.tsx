import React from 'react'

//Стили
import './header.scss';

type Props = {}

export const Header = (props: Props) => {
    return (
        <header className='header'>
            <div className='header__logo'>
                <h3 className='header__logo-title'>Logo</h3>
                <p className='header__logo-subtitle'>web-site of the future</p>
            </div>
        </header>
    )
}