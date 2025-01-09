import React from 'react';
import { useAuth } from './lib/useAuth';

//Компоненты
import { FormGroup } from '../../uikit/form-group';
import { UiButton } from '../../uikit/ui-button';
import { FormTitle } from '../form-title';
import { FormLayout } from '../form-layout/form-layout';

export function FormSignIn() {
    const { registerInput, handleSubmit, updateUserData, onSubmit, isLoading, errors } = useAuth();

    return (
        <FormLayout className={'form_signin'} onSubmit={handleSubmit(onSubmit)} >
            <FormTitle text={'Войти'} />

            <FormGroup
                type={'email'}
                labelText={'Email'}
                inputClassName={'input-email'}
                inputProps={registerInput({ name: 'email', })}
                onChange={updateUserData}
            />

            <FormGroup
                type={'password'}
                labelText={'Пароль'}
                inputClassName={'input-password'}
                inputProps={registerInput({ name: 'password', })}
                onChange={updateUserData}
                errors={errors}
            />

            <UiButton color='blue' text={'Войти'} isLoading={isLoading} />
        </FormLayout>
    )
}