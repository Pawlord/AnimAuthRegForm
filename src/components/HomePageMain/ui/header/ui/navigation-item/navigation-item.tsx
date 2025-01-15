import React from 'react'

//Работа с react-router-dom
import { Link, useNavigate } from 'react-router-dom';

//Стили
import './navigation-item.scss';
import clsx from 'clsx';

type Props = {
    text: string;
    to: string,
    className?: string,
}

export const NavigationItem = ({ text, to, className }: Props) => {
    const navigate = useNavigate();

    const handleClick = (): void => {
        navigate(to)
    }

    return (
        <li className='navigation-list__item'>
            <Link className={clsx('navigation-list__item-link', className)} to={to} onClick={handleClick}>{text}</Link>
        </li>
    )
}