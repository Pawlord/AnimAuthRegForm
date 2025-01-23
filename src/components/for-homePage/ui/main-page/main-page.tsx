import React from 'react';
import clsx from 'clsx';

//Стили
import './main-page.scss';
import { DropBlock } from './ui/drop-block';
import { Toolbar } from './ui/toolbar';

//Типы
import { FileObj, ImageObj } from '@/types/types';

type Props = {

}

export const MainPage = (props: Props) => {
    //isActive отвечает за отображение Toolbar;
    const [isActive, setIsActive] = React.useState(false);
    const [isSelecting, setIsSelecting] = React.useState(false);
    const [selectedImages, setSelectedImages] = React.useState(new Set<ImageObj | unknown>());

    const [files, setFiles] = React.useState<FileObj[]>([]);
    const [previewBlock, setPreviewBlock] = React.useState<ImageObj[]>([]);

    const fileInputRef = React.useRef<HTMLInputElement>(null);

    const isEmpty = selectedImages.size === 0;

    const onClearAll = React.useCallback(() => {
        setPreviewBlock(prev => {
            const newPreviewBlock = prev.filter(item => !selectedImages.has(item));
            return newPreviewBlock;
        })
        setSelectedImages(new Set());
        if (fileInputRef.current) {
            fileInputRef.current.value = '';
        }
        setFiles([]);
    }, [previewBlock, selectedImages, setPreviewBlock, setSelectedImages])

    React.useEffect(() => {
        //Проверка наличия фотографий в массиве для отображения тулбара TODOS: потом надо отрефакторить
        previewBlock.length === 0 ? setIsActive(false) : setIsActive(true);
    }, [previewBlock])

    return (
        <div className={clsx('main-page')}>
            {isActive &&
                <Toolbar
                    isSelecting={isSelecting}
                    setIsSelecting={setIsSelecting}
                    setSelectedImages={setSelectedImages}
                    isEmpty={isEmpty}
                    onClearAll={onClearAll}
                />
            }
            <DropBlock
                setIsActive={setIsActive}
                isSelecting={isSelecting}
                setSelectedImages={setSelectedImages}
                selectedImages={selectedImages}
                previewBlock={previewBlock}
                setPreviewBlock={setPreviewBlock}
                fileInputRef={fileInputRef}
                files={files}
                setFiles={setFiles}
            />
        </div>
    )
}