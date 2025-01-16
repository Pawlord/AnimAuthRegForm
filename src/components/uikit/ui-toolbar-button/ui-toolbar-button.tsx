import React from 'react'
import clsx from 'clsx';

//Стили
import styles from './ui-toolbar-button.module.scss';

//Компоненты
import { UiLoader } from '../ui-loader/ui-loader';

type Props = {
    color: 'red' | 'white';
    size: 'small' | 'medium';
    text: string;
    disabled?: boolean;
    isLoading?: boolean;
    onClick?: () => void;
}

export const UiToolbarButton = ({ color = 'white', size = 'medium', text, disabled, isLoading, onClick }: Props) => {
    const btnStyle = {
        'red': 'red-btn',
        'white': 'white-btn',
    }[color]

    const btnSize = {
        'small': "small-btn",
        'medium': "medium-btn",
    }[size]

    return (
        <button
            className={clsx(styles['toolbar-button'], styles[btnStyle], styles[btnSize])}
            type="button"
            disabled={disabled}
            onClick={onClick}
        >
            {isLoading ? <UiLoader /> : text}
        </button>
    )
}