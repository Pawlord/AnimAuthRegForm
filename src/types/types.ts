//Регистрация | Авторизация
import { UseFormRegisterReturn, UseFormHandleSubmit, FormState, FieldErrors } from 'react-hook-form';

export interface IUser {
    login?: string,
    email: string,
    password: string,
    confirmPassword?: string;
}

export type Message = {
    status: number,
    success: boolean,
    message: string
}

export interface AuthData {
    email: string;
    password: string;
    [key: string]: any;
}

export interface InputProps {
    name: string;
    value?: string,
    ref?: any,
    [key: string]: any;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface RegAuthResult {
    handleSubmit: UseFormHandleSubmit<AuthData>;
    registerInput: (inputProps: InputProps) => UseFormRegisterReturn & InputProps;
    updateUserData: (value: string, inputName: string) => void;
    onSubmit: (data: AuthData) => Promise<void>;
    onError?: (data: FieldErrors<AuthData>) => void;
    isFormValid?: () => boolean;
    isLoading: boolean;
    errors: FormState<AuthData>['errors'];
}

export interface IErrorData { type: string, message: string };

export type ImageObj = {
    imgName: string,
    imgSize: string,
    imgUrl: string,
}