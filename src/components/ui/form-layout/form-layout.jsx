import React from 'react';
import clsx from 'clsx';

//Стили
import './form-layout.scss';

export function FormLayout({ className, children, onSubmit }) {

    return (
        <form className={clsx('form', className)} onSubmit={onSubmit}>
            {children}
        </form>
    )
}