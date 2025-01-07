import React from 'react';
import { useForm } from "react-hook-form";

//Проверка авторизации
import { checkAuth } from './checkAuth';
import { delay } from '../../../lib/delay';

//toast
import { toast } from 'react-toastify';

//работа с react-router-dom
import { useNavigate } from 'react-router-dom';

export function useAuth() {
    const navigate = useNavigate();

    const initialValues = {
        email: '',
        password: '',
    }

    const [userData, setUserData] = React.useState(initialValues)
    const [isLoading, setIsLoading] = React.useState(false);

    const { register, handleSubmit, clearErrors, formState: { errors }, setValue } = useForm();

    const updateUserData = (value, inputName) => {
        clearErrors()
        setValue(inputName, value);
        setUserData(prev => ({
            ...prev,
            [inputName]: value,
        }))
    }

    const registerInput = (inputProps) => {
        return {
            ...inputProps,
            ...register(inputProps.name, { required: 'Вы неправильно ввели логин или пароль!' }),
            value: userData[inputProps.name] || '',
        }
    }

    const onSubmit = async data => {
        setIsLoading(true)
        try {
            await delay(2000)
            const response = await checkAuth(data);

            if (!response.success) {
                setIsLoading(false)
                toast.error(response.message || 'Произошла ошибка авторизации!');
                return;
            }

            setIsLoading(false);
            toast.success(response.message);
            navigate('/home-page')

        } catch (error) {
            setIsLoading(false)
            console.error('Непредвиденная ошибка авторизации!', error)
        }
    }

    return {
        isLoading,
        errors,
        onSubmit,
        handleSubmit,
        registerInput,
        updateUserData,
    }
}