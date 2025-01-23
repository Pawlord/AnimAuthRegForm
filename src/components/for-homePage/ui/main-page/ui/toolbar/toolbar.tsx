import React from 'react'

//Стили
import './toolbar.scss';

//Компоненты
import { UiToolbarButton } from '@/components/uikit/ui-toolbar-button';

//Типы
import { ImageObj } from '@/types/types';

type Props = {
    isSelecting: boolean;
    setIsSelecting: (arg: boolean) => void;
    setSelectedImages: React.Dispatch<React.SetStateAction<Set<ImageObj | unknown>>>;
    isEmpty: boolean;
    onClearAll: () => void;
}

export const Toolbar = ({ isSelecting, setIsSelecting, setSelectedImages, isEmpty, onClearAll }: Props) => {

    const handleSelecting = () => {
        if (isSelecting) {
            setIsSelecting(false);
            setSelectedImages(new Set());
        } else {
            setIsSelecting(true)
        }
    }

    return (
        <section className='toolbar-container'>
            {!isSelecting &&
                <UiToolbarButton
                    text='Выбрать'
                    size='small'
                    color='white'
                    onClick={handleSelecting}
                />}

            {isSelecting &&
                <>
                    <UiToolbarButton
                        text='Готово'
                        size='small'
                        color='white'
                        onClick={handleSelecting}
                    />
                    <UiToolbarButton
                        text='Удалить'
                        size='small'
                        color='red'
                        disabled={isEmpty}
                        onClick={onClearAll}
                    />
                </>
            }
        </section>
    )
}