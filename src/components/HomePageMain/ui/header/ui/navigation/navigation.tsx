import React from 'react'

//Стили
import './navigation.scss';

//Компоненты
import { NavigationItem } from '../navigation-item';

type Props = {}

type NavigationItems = {
    text: string;
    to: string;
}

// В БУДУЩЕМ МОЖЕТ ПОТРЕБОВАТЬСЯ USECALLBACK

export const Navigation = (props: Props) => {

    const navigationItems: Array<NavigationItems> = [
        { text: 'Главная', to: '/home-page' },
        { text: 'О нас', to: '/home-page/about' },
        { text: 'Аккаунт', to: '/home-page/account' },
        { text: 'Выйти', to: '/' },
    ]

    const renderItem = (): React.ReactNode[] => {
        return navigationItems.map(item => {
            return <NavigationItem
                key={item.text}
                to={item.to}
                text={item.text}
                className={item.text === 'Выйти' ? 'exit' : ''}
            />
        })
    }

    return (
        <nav className='header__navigation'>
            <ul className='navigation-list'>
                {renderItem()}
            </ul>
        </nav>
    )
}