import React from 'react';
import { useForm } from "react-hook-form";

//Проверка авторизации
import { checkAuth } from './checkAuth';
import { delay } from '../../../lib/delay';

//toast
import { toast } from 'react-toastify';

//работа с react-router-dom
import { useNavigate } from 'react-router-dom';

//Типы
import { UseFormRegisterReturn, UseFormHandleSubmit, FormState } from 'react-hook-form';

interface AuthData {
    email: string;
    password: string;
    [key: string]: any;
}

interface InputProps {
    name: string;
    value: string,
    ref?: any,
    [key: string]: any;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
}

interface AuthResult {
    handleSubmit: UseFormHandleSubmit<AuthData>;
    registerInput: (inputProps: InputProps) => UseFormRegisterReturn & InputProps;
    updateUserData: (value: string, inputName: InputName) => void;
    onSubmit: (data: AuthData) => Promise<void>;
    isLoading: boolean;
    errors: FormState<AuthData>['errors'];
}

type InputName = 'email' | 'password';

export function useAuth(): AuthResult {
    const navigate = useNavigate();

    const initialValues = {
        email: '',
        password: '',
    }

    const [userData, setUserData] = React.useState<AuthData>(initialValues)
    const [isLoading, setIsLoading] = React.useState(false);

    const { register, handleSubmit, clearErrors, formState: { errors }, setValue } = useForm<AuthData>();

    const updateUserData = (value: string, inputName: InputName) => {
        clearErrors()
        setValue(inputName, value);
        setUserData(prev => ({
            ...prev,
            [inputName]: value,
        }))
    }

    const registerInput = (inputProps: InputProps): UseFormRegisterReturn & InputProps => {
        return {
            ...inputProps,
            ...register(inputProps.name, { required: 'Вы неправильно ввели логин или пароль!' }),
            value: userData[inputProps.name] || '',
        }
    }

    const onSubmit = async (data: AuthData): Promise<void> => {
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