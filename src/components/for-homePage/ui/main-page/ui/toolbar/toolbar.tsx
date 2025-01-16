import React from 'react'

//Стили
import './toolbar.scss';

//Компоненты
import { UiToolbarButton } from '@/components/uikit/ui-toolbar-button';

type Props = {
    isSelecting: boolean;
    setIsSelecting: (arg: boolean) => void;
    isEmpty: boolean;
}

export const Toolbar = ({ isSelecting, setIsSelecting, isEmpty }: Props) => {

    return (
        <section className='toolbar-container'>
            {!isSelecting &&
                <UiToolbarButton
                    text='Выбрать'
                    size='small'
                    color='white'
                    onClick={() => setIsSelecting(true)}
                />}

            {isSelecting &&
                <>
                    <UiToolbarButton
                        text='Готово'
                        size='small'
                        color='white'
                        onClick={() => setIsSelecting(false)}
                    />
                    <UiToolbarButton
                        text='Удалить'
                        size='small'
                        color='red'
                        disabled={isEmpty}
                        onClick={() => console.log('Нажато удалить')}
                    />
                </>
            }
        </section>
    )
}