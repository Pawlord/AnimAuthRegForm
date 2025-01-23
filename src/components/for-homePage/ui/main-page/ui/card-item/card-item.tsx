import React from 'react'
import clsx from 'clsx';

// Стили
import './card-item.scss';


type Props = {
    imgName: string;
    imgUrl: string;
    imgSize: string;
    isSelecting: boolean;
    isSelected: boolean;
    onClick: (imgName: React.MouseEvent<HTMLDivElement>) => void;
    onHandleSelect: () => void;
}

export const CardItem = ({ imgName, imgUrl, imgSize, isSelecting, isSelected, onClick, onHandleSelect }: Props) => {

    const handleCardSelect = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (isSelecting) {
            onHandleSelect();
        }
    }

    return (
        <div className={clsx('card-item', isSelecting && 'selectable', isSelected && 'selected')} onClick={handleCardSelect}>
            <figure>
                <div className='card-item__img-container'>
                    <img className='card-item__img' src={imgUrl} alt='Картинка' />
                </div>
                <figcaption className='card-item__desc'>{imgName}</figcaption>
            </figure>
            <div className='card-item__size-container'>
                {imgSize}
            </div>

            {!isSelecting && (
                <div className="card-item__delete-button-container" onClick={onClick}>
                    <span className='delete-button'>x</span>
                </div>)
            }
        </div>
    )
}