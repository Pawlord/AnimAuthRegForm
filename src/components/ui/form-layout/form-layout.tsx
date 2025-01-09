import React from 'react';
import clsx from 'clsx';

//Стили
import './form-layout.scss';

interface Props {
    className?: string,
    children: React.ReactNode,
    onSubmit: (event: React.FormEvent<HTMLFormElement>) => void,
}

export function FormLayout({ className, children, onSubmit }: Props) {

    return (
        <form className={clsx('form', className)} onSubmit={onSubmit}>
            {children}
        </form>
    )
}