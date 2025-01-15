import React from 'react'

//Стили
import './header-logo.scss';

//работа с react-router-dom
import { useNavigate } from 'react-router-dom';

type Props = {}

export const HeaderLogo = (props: Props) => {
    const navigate = useNavigate();

    const handleClick = (): void => {
        navigate('/home-page')
    }

    return (
        <h3 className='header__logo' onClick={handleClick}>L</h3>
    )
}