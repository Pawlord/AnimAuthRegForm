import React from 'react'

//Стили
import './navigation-item.scss';

type Props = {
    text: string | React.ReactNode;
}

export const NavigationItem = ({ text }: Props) => {
    return (
        <li className='navigation-list__item'>{text}</li>
    )
}