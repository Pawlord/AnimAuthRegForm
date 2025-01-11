import React from 'react';
import clsx from 'clsx';

//Стили
import './main-layout.scss'

//Контекст
import { BodyActiveContext } from '../../../context/bodyActiveContext';

interface Props {
    signInSection: React.ReactNode,
    registrationSection: React.ReactNode,
    formSignIn: React.ReactNode,
    formRegistration: React.ReactNode
}

export function MainLayout({ signInSection, registrationSection, formSignIn, formRegistration }: Props) {
    const { isActive } = React.useContext(BodyActiveContext)

    return (
        <div className='container'>
            <div className='block'>
                {signInSection}
                {registrationSection}
            </div>

            <div className={clsx('form-box', isActive ? 'active' : '')}>
                {formSignIn}
                {formRegistration}
            </div>
        </div>
    )
}