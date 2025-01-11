import React from 'react'

//Стили
import './center-layout.scss'

type Props = {
    children: React.ReactNode
}

export const CenterLayout = ({ children }: Props) => {
    return (
        <div className='center-layout'>
            {children}
        </div>
    )
}