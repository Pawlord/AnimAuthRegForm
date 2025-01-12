import React from 'react'

//Стили
import './home-page-layout.scss';
import clsx from 'clsx';

type Props = {
    children: React.ReactNode;
    background?: string;
}

export const HomePageLayout = ({ children, background = 'green' }: Props) => {

    const backgroundColor = {
        'red': 'home-page-layout--red',
        'green': 'home-page-layout--green',
        'blue': 'home-page-layout--blue',
        'orange': 'home-page-layout--orange',
    }[background]

    return (
        <div className={clsx('home-page-layout', backgroundColor)}>
            {children}
        </div>
    )
}