import React from 'react';
import clsx from 'clsx';

//Стили
import './main-page.scss';
import { DropBlock } from './ui/drop-block';
import { Toolbar } from './ui/toolbar';

type Props = {

}

export const MainPage = (props: Props) => {
    const [isActive, setIsActive] = React.useState(false);
    const [isSelecting, setIsSelecting] = React.useState(false);
    const [selectedImages, setSelectedImages] = React.useState(new Set())

    const isEmpty = selectedImages.size === 0;

    return (
        <div className={clsx('main-page')}>
            {isActive && <Toolbar isSelecting={isSelecting} setIsSelecting={setIsSelecting} isEmpty={isEmpty} />}
            <DropBlock setIsActive={setIsActive} />
        </div>
    )
}