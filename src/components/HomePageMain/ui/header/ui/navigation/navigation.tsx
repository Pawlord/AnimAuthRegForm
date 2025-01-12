import React from 'react'

//Стили
import './navigation.scss';
import { ExitButton } from '../exit-button';
import { NavigationItem } from '../navigation-item';

type Props = {
    onClick?: () => void;
}

export const Navigation = ({ onClick }: Props) => {
    const navigationItems: Array<string> = ['Главная', 'О нас', 'Аккаунт', 'Выйти'];

    function renderListItem(): React.ReactNode[] {
        return navigationItems.map(item => {
            if (item === 'Выйти') {
                return <NavigationItem key={item} text={<ExitButton onClick={onClick} />} />
            } else {
                return <NavigationItem key={item} text={item} />
            }
        })
    }

    return (
        <nav className='header__navigation'>
            <ul className='navigation-list'>
                {renderListItem()}
            </ul>
        </nav>
    )
}