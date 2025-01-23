import React from 'react'

//Стили
import './drop-block.scss';

// Компоненты
import { CardItem } from '../card-item';
import clsx from 'clsx';

//UUID
import { v4 as uuidv4 } from 'uuid';

//Типы
import { ImageObj, FileObj } from '@/types/types';

type Props = {
    setIsActive: (arg: boolean) => void;
    isSelecting: boolean;
    setSelectedImages: React.Dispatch<React.SetStateAction<Set<unknown>>>;
    selectedImages: Set<ImageObj | unknown>;
    previewBlock: Array<ImageObj>;
    setPreviewBlock: React.Dispatch<React.SetStateAction<ImageObj[]>>;
    fileInputRef: React.RefObject<HTMLInputElement | null>;
    files: FileObj[];
    setFiles: React.Dispatch<React.SetStateAction<FileObj[]>>;
}

export const DropBlock = ({ setIsActive, isSelecting, setSelectedImages, selectedImages, previewBlock, setPreviewBlock, fileInputRef, files, setFiles }: Props) => {
    const [isDragActive, setIsDragActive] = React.useState<boolean>(false);

    const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        if (e.target.files) {
            const filesArray = Array.from(e.target.files).map(file => {
                const key = uuidv4();
                return { file, key }
            })
            setFiles(filesArray);
            if (fileInputRef.current) {
                fileInputRef.current.value = '';
            }
        }
    }

    const createPreview = async (file: FileObj): Promise<ImageObj> => {
        const reader = new FileReader();

        const imgUrl = await new Promise<string>((resolve) => {
            reader.onload = (e) => {
                resolve(e.target?.result as string);
            };
            reader.readAsDataURL(file.file);
        });

        const imgSize = formatBytes(file.file.size);
        const imgName = file.file.name;
        const imgKey = file.key;

        return {
            imgKey,
            imgName,
            imgUrl,
            imgSize,
        }
    }

    const formatBytes = (bytes: number, decimals = 2) => {
        const k = 1024;
        const dm = decimals <= 0 ? 0 : decimals;
        const sizes = ['Б', 'КБ', 'МБ', 'ГБ', 'ТБ', 'ПБ', 'ЭБ', 'ЗБ', 'ЙБ', 'ЗБ'];
        const i = Math.floor(Math.log(bytes) / Math.log(k));
        return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
    };

    const handleDrag = (e: React.DragEvent) => {
        e.preventDefault();
        setIsDragActive(true);
    }

    const handleDragLeave = (e: React.DragEvent) => {
        e.preventDefault();
        setIsDragActive(false)
    }

    const handleDrop = async (e: React.DragEvent) => {
        e.preventDefault();
        setIsDragActive(false);
        const dropedFiles = Array.from(e.dataTransfer?.files).filter(file => file.type.startsWith('image/')).map(file => {
            const key = `${file.name}-${file.size}-${file.lastModified}`;
            return { file, key }
        });

        if (dropedFiles && dropedFiles[0]) {
            setFiles(prev => [...prev, ...dropedFiles]);
        }
    }

    React.useEffect(() => {

        const loadPreview = async (): Promise<void> => {
            const previewCopy: ImageObj[] = [];
            const newFiles = files.filter(file => !previewBlock.find(preview => preview.imgKey === file.key));

            for (const file of newFiles) {
                const preview = await createPreview(file);
                previewCopy.push(preview);
            }

            setPreviewBlock(prev => [...prev, ...previewCopy])
        }
        loadPreview();
    }, [files])

    const handleSelect = (imgKey: string) => {
        const currentImg = previewBlock.filter(item => item.imgKey === imgKey);
        setSelectedImages(prevState => {
            const newSelected = new Set(prevState);
            currentImg.forEach(img => {
                if (newSelected.has(img)) {
                    newSelected.delete(img);
                } else {
                    newSelected.add(img);
                }

            })
            return newSelected;
        })
    }

    const onClear = (imgName: string) => {
        setFiles(prev => prev.filter(file => file.file.name !== imgName));
        setPreviewBlock(prev => prev.filter(item => item.imgName !== imgName));
        if (fileInputRef.current) {
            fileInputRef.current.value = '';
        }
    }

    return (
        <section className='drop-container'>
            {previewBlock.map(item =>
                <CardItem
                    key={item.imgKey}
                    onHandleSelect={() => handleSelect(item.imgKey)}
                    onClick={() => onClear(item.imgName)}
                    imgName={item.imgName}
                    imgUrl={item.imgUrl}
                    imgSize={item.imgSize}
                    isSelecting={isSelecting}
                    isSelected={selectedImages.has(item)}
                />)}
            <div className='drop-block'>
                <form
                    action=""
                    className={clsx('drop-block__form', isDragActive ? 'drag' : '')}
                    onDragEnter={handleDrag}
                    onDragOver={handleDrag}
                    onDragLeave={handleDragLeave}
                    onDrop={handleDrop}
                >
                    <label className='drop-block__form-label'>
                        <span className='form-label__button'>+</span>
                        <input
                            type="file"
                            className='form-label__input'
                            multiple={true}
                            accept='image/*'
                            onChange={handleChange}
                            ref={fileInputRef}
                        />
                    </label>
                    <label className='drop-block__text'>{isDragActive ? 'Отпустите, для загрузки файла' : 'Нажмите на кнопку или перетащите файл'}</label>
                </form>
            </div>
        </section>

    )
}