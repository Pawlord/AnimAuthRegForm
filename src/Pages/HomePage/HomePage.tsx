import React from 'react';
import clsx from 'clsx';

//Стили;
import './home-page.scss'

//работа с react-router-dom
import { useLocation, useNavigate } from 'react-router-dom';

export function HomePage() {
    const [isShown, setIsShown] = React.useState(false)

    const location = useLocation();
    const navigate = useNavigate()

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

    const onClick = () => {
        navigate('/');
    }

    return (
        <div className={clsx('home-page', isShown ? 'home-page__show' : '')}>
            <h1>HomePage</h1>
            <button onClick={onClick} className='home-page__button'>Выйти</button>
        </div>
    )
}