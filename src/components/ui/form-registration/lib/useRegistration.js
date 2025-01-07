import React from 'react';
import { useForm } from 'react-hook-form';

//Вспомогательные функции
import { registerUser } from './registerUser';
import { checkUser } from '../../../lib/checkUser';

//Всплывающие подсказки
import { toast } from 'react-toastify';

//Контекст
import { BodyActiveContext } from '../../../context/bodyActiveContext';

//Имитация задержки
import { delay } from '../../../lib/delay';

export function useRegistration() {
    const initialValues = {
        login: '',
        email: '',
        password: '',
        confirmPassword: '',
    }

    const [userData, setUserData] = React.useState(initialValues)
    const [isLoading, setIsLoading] = React.useState(false);

    const { onClickToggleBodyActive } = React.useContext(BodyActiveContext)
    const { register, handleSubmit, clearErrors, formState: { errors }, setValue, getValues, setError, reset, } = useForm();

    const updateUserData = (value, inputName) => {
        clearErrors(inputName)
        setValue(inputName, value, { shouldValidate: true })
        setUserData(prev => ({
            ...prev,
            [inputName]: value,
        }))
    }

    const isConfirmPassword = inputName => inputName === 'confirmPassword';
    const getMinLength = inputName => isConfirmPassword(inputName) ? undefined : inputName === 'password' ? 5 : 3;

    const registerInput = (inputProps) => {
        const validateLength = getMinLength(inputProps.name)

        return {
            ...inputProps,
            ...register(inputProps.name, {
                required: 'Это обязательное поле!',
                minLength: validateLength ? { value: validateLength, message: `Длина поля должна быть не менее ${validateLength} символов` } : undefined,
                validate: isConfirmPassword(inputProps.name)
                    ?
                    {
                        comparePassword: (value, formValues) => {
                            if (value !== formValues.password) {
                                return 'Пароли не совпадают!'
                            }
                        },
                    }
                    : undefined
            }),
            value: userData[inputProps.name] || '',
            onBlur: () => onBlur(inputProps.name)

        }
    }

    const clearForm = () => {
        setUserData(initialValues)
    }

    const onSubmit = async data => {
        if (checkUser(data)) {
            setIsLoading(false)
            toast.error('Проверьте правильность заполнения формы!')
            return;
        }

        const dataToSend = { ...data };
        delete dataToSend.confirmPassword;

        toast.warning('Форма отправляется...', { autoClose: 3000 })
        setIsLoading(true)

        try {
            await delay(3000);
            const response = await registerUser(dataToSend)

            if (!response.success) {
                setIsLoading(false);
                toast.error(response.message || 'Ошибка регистрации!');
                return;
            }

            setIsLoading(false)
            toast.success(response.message || 'Вы успешно зарегистрированы!')
            onClickToggleBodyActive()

            reset()
            clearForm();

        } catch (error) {
            setIsLoading(false);
            console.error("Ошибка при регистрации:", error);
            toast.error('Произошла ошибка при регистрации. Проверьте правильность заполнения формы или повторите позже.');
        }
    }

    const isFormValid = () => {
        return Object.keys(errors).length === 0;
    }

    const onError = data => {
        toast.error('Проверьте правильно заполнения формы.')
    }

    const onBlur = (inputName) => {
        const value = getValues(inputName);
        const inputType = inputName === 'login' ? 'логином' : 'email';
        if (checkUser(value)) {
            setError(inputName, { type: 'manual', message: `Пользователь с таким ${inputType} уже существует!` })
        }
    }

    return {
        updateUserData,
        registerInput,
        onSubmit,
        onError,
        handleSubmit,
        isFormValid,
        errors,
        isLoading,
    }
}