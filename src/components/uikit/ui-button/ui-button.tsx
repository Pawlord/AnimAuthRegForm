import React from 'react';
import clsx from 'clsx';

//Компоненты
import { UiLoader } from '../ui-loader/ui-loader';

//Стили
import './ui-button.scss';

type Props = {
    color?: string;
    size?: string;
    text: string;
    disabled?: boolean;
    isLoading?: boolean;
    onClick?: () => void;
}

export function UiButton({ color = 'blue', size = 'medium', text, disabled, isLoading, onClick }: Props) {
    const btnStyle = {
        'blue': "blue-btn",
        'green': "green-btn",
        'red': 'red-btn',
    }[color]

    const btnSize = {
        'small': "small-btn",
        'medium': "medium-btn",
    }[size]

    return (
        <button
            className={clsx(btnStyle, btnSize)}
            type="submit"
            disabled={disabled}
            onClick={onClick}
        >
            {isLoading ? <UiLoader /> : text}
        </button>
    )
}