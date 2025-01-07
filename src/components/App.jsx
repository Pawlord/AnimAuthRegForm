import React from 'react';

//Toast уведомления
import { ToastContainer } from 'react-toastify';

// Компоненты
import { MainLayout } from './ui/main-layout';
import { RegistrationSection, SignInSection } from './ui/sections';
import { FormSignIn } from './ui/form-sign-in';
import { FormRegistration } from './ui/form-registration';

// Стили
import './main.scss';

//Контекст
import { BodyActiveContextProvider } from './context/bodyActiveContext';

export function App() {

    React.useEffect(() => {
        const users = JSON.parse(localStorage.getItem('users'))
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