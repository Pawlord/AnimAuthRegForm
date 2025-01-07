import React from 'react';
import clsx from 'clsx';

//Стили
import './form-group.scss'

export function FormGroup({ type, labelText, inputClassName, labelClassName, inputProps, onChange, errors }) {

    const handleChange = e => {
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
            {(errors && errors[inputProps.name]) && (<p className={clsx('error-message')}>{errors[inputProps.name].message}</p>)}

        </div>
    )
}