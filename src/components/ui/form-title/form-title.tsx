import React from 'react';
import clsx from 'clsx';

//Стили
import './form-title.scss';

interface Props {
    text: string,
    className?: string,
}

export function FormTitle({ text, className }: Props) {
    return (
        <h1 className={clsx("form__title", className)}>{text}</h1>
    )
}