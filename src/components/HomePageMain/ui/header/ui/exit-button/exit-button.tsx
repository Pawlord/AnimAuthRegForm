import React from 'react'

//Компоненты
import { UiButton } from 'components/uikit/ui-button';

type Props = {
    onClick?: () => void;
}

export const ExitButton = ({ onClick }: Props) => {
    return (
        <UiButton text={'Выйти'} color='red' size='small' onClick={onClick} />
    )
}