import React from 'react'

// Стили
import './card-item.scss';

type Props = {
    imgName: string;
    imgUrl: string;
    imgSize: string;
    onClick: (imgName: React.MouseEvent<HTMLDivElement>) => void;
}

export const CardItem = ({ imgName, imgUrl, imgSize, onClick }: Props) => {
    return (
        <div className='card-item'>
            <figure>
                <div className='card-item__img-container'>
                    <img className='card-item__img' src={imgUrl} alt='Картинка' />
                </div>
                <figcaption className='card-item__desc'>{imgName}</figcaption>
            </figure>
            <div className='card-item__size-container'>
                {imgSize}
            </div>
            <div className="card-item__delete-button-container" onClick={onClick}>
                <span className='delete-button'>x</span>
            </div>
        </div>
    )
}