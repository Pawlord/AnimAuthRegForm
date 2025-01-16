import React from 'react'

//Стили
import './center-layout.scss'
import clsx from 'clsx'

//Контекст
import { BodyActiveContext } from '@/context/bodyActiveContext'

type Props = {
    children: React.ReactNode
}

export const CenterLayout = ({ children }: Props) => {
    const { isActive } = React.useContext(BodyActiveContext);

    return (
        <div className={clsx('center-layout', isActive ? 'active' : '')}>
            {children}
        </div>
    )
}