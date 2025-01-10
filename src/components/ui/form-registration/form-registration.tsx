import React from 'react';
import { useRegistration } from './lib/useRegistration';

//Toast уведовления
import 'react-toastify/dist/ReactToastify.css'; // Очень важный импорт CSS

//Компоненты
import { UiButton } from '../../uikit/ui-button';
import { FormTitle } from '../form-title';
import { FormGroup } from '../../uikit/form-group';
import { FormLayout } from '../form-layout/form-layout';


export function FormRegistration() {

    const { updateUserData, registerInput, onSubmit, onError, handleSubmit, errors, isFormValid, isLoading } = useRegistration();

    return (
        <FormLayout className={'form_register'} onSubmit={handleSubmit(onSubmit, onError)}>
            <FormTitle text={'Регистрация'} />

            <FormGroup
                type={'text'}
                labelText={'Логин'}
                inputProps={registerInput({ name: 'login' })}
                onChange={updateUserData}
                errors={errors}

            />
            <FormGroup
                type={'email'}
                labelText={'Email'}
                inputProps={registerInput({ name: 'email' })}
                onChange={updateUserData}
                errors={errors}
            />
            <FormGroup
                type={'password'}
                labelText={'Пароль'}
                inputProps={registerInput({ name: 'password' })}
                onChange={updateUserData}
                errors={errors}
            />
            <FormGroup
                type={'password'}
                labelText={'Повторите пароль'}
                inputProps={registerInput({ name: 'confirmPassword' })}
                onChange={updateUserData}
                errors={errors}
            />

            <UiButton
                color='green'
                text={'Зарегистрироваться'}
                disabled={!isFormValid?.()}
                isLoading={isLoading}
            />
        </FormLayout>
    )
}