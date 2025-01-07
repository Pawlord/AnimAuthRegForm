import React from 'react';
import clsx from 'clsx';

//Стили
import './main-layout.scss'

//Контекст
import { BodyActiveContext } from '../../context/bodyActiveContext';

export function MainLayout({ signInSection, registrationSection, formSignIn, formRegistration }) {
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