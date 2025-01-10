import React from 'react';
import clsx from 'clsx';

//Стили
import './form-group.scss'

//Типы
import { InputProps, AuthData } from '../../types/types';
import { FormState } from 'react-hook-form';

type Props = {
    type: string;
    labelText: string;
    inputClassName?: string;
    labelClassName?: string;
    inputProps: InputProps;
    onChange: (value: string, name: string) => void;
    errors?: FormState<AuthData>['errors'];
}

export function FormGroup({ type, labelText, inputClassName, labelClassName, inputProps, onChange, errors }: Props) {

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange(e.target.value, e.target.name)
    }

    return (
        <div className='form__group'>
            <input
                className={clsx("form__input", inputClassName)}
                type={type}
                placeholder=" "
                autoComplete={type === 'password' ? 'new-password' : 'off'}
                {...inputProps}
                onChange={e => handleChange(e)}
            />
            <label
                className={clsx("form__label", labelClassName)}
                htmlFor={type}
            >
                {labelText}
            </label>
            {(errors && errors[inputProps.name]?.message) && (
                <p className={clsx('error-message')}>{errors[inputProps.name]?.message as string}</p>
            )}

        </div>
    )
}