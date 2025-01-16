import React from 'react'

//Стили
import './header-title.scss';
import clsx from 'clsx';

type Props = {
    text: string;
    color?: 'black' | 'orange' | 'green';
}

export const HeaderTitle = ({ text, color = 'black' }: Props) => {
    const titleColor = {
        'black': "black",
        'orange': "orange",
        'green': 'green',
    }[color]

    return (
        <p className={clsx('header__title-text', titleColor)}>{text}</p>
    )
}