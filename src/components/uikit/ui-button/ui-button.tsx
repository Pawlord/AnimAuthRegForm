import React from 'react';
import clsx from 'clsx';

//Компоненты
import { UiLoader } from '../ui-loader/ui-loader';

//Стили
import './ui-button.scss';

type Props = {
    color?: string;
    text: string;
    disabled?: boolean;
    isLoading?: boolean;
}

export function UiButton({ color = 'blue', text, disabled, isLoading }: Props) {
    const btnStyle = {
        'blue': "blue-btn",
        'green': "green-btn"
    }[color]

    return (
        <button
            className={clsx(`form__button ` + btnStyle)}
            type="submit"
            disabled={disabled}
        >
            {isLoading ? <UiLoader /> : text}
        </button>
    )
}