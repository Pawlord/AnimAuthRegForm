import React from 'react';

//Toast уведомления
import { ToastContainer } from 'react-toastify';

// Компоненты
import { MainLayout, RegistrationSection, SignInSection, FormSignIn, FormRegistration } from '../../components/FormMain/ui'

//Контекст
import { BodyActiveContextProvider } from '../../components/context/bodyActiveContext';
import { CenterLayout } from '../../components/layouts/center-layout';


export function Form() {

    React.useEffect(() => {
        const users = JSON.parse(localStorage.getItem('users') ?? '[]')
        console.log(users)
    }, [])

    return (
        <BodyActiveContextProvider>
            <CenterLayout>
                <ToastContainer position='top-center' autoClose={2000} pauseOnHover={false} />
                <MainLayout
                    signInSection={<SignInSection />}
                    registrationSection={<RegistrationSection />}
                    formSignIn={<FormSignIn />}
                    formRegistration={<FormRegistration />}
                />
            </CenterLayout>
        </BodyActiveContextProvider>
    )
}