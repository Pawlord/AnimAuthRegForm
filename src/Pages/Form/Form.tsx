import React from 'react';

//Toast уведомления
import { ToastContainer } from 'react-toastify';

// Компоненты
import { MainLayout, RegistrationSection, SignInSection, FormSignIn, FormRegistration } from '../../components/ui'

// Стили
import './main.scss';

//Контекст
import { BodyActiveContextProvider } from '../../components/context/bodyActiveContext';

export function Form() {

    React.useEffect(() => {
        const users = JSON.parse(localStorage.getItem('users') ?? '[]')
        console.log(users)
    }, [])

    return (
        <BodyActiveContextProvider>
            <ToastContainer position='top-center' autoClose={2000} pauseOnHover={false} />
            <MainLayout
                signInSection={<SignInSection />}
                registrationSection={<RegistrationSection />}
                formSignIn={<FormSignIn />}
                formRegistration={<FormRegistration />}
            />
        </BodyActiveContextProvider>
    )
}