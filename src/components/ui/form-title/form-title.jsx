import React from 'react';
import clsx from 'clsx';

//Стили
import './form-title.scss';

export function FormTitle({ text, className }) {
    return (
        <h1 className={clsx("form__title", className)}>{text}</h1>
    )
}