import React from 'react'

//Стили
import './drop-block.scss';

// Компоненты
import { CardItem } from '../card-item';
import clsx from 'clsx';

//Типы
import { ImageObj } from '@/types/types';

type Props = {
    setIsActive: (arg: boolean) => void;
}

export const DropBlock = ({ setIsActive }: Props) => {
    const [files, setFiles] = React.useState<File[]>([]);
    const [previewBlock, setPreviewBlock] = React.useState<ImageObj[]>([]);
    const [isDragActive, setIsDragActive] = React.useState<boolean>(false);
    const fileInputRef = React.useRef<HTMLInputElement>(null);

    const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        if (e.target.files) {
            const filesArray = Array.from(e.target.files)
            if (filesArray.length > 0) {
                setFiles(prev => [...prev, ...filesArray])
            }

        }
    }

    const createPreview = async (file: File): Promise<ImageObj> => {
        const reader = new FileReader();

        const imgUrl = await new Promise<string>((resolve) => {
            reader.onload = (e) => {
                resolve(e.target?.result as string);
            };
            reader.readAsDataURL(file);
        });

        const imgSize = formatBytes(file.size);
        const imgName = file.name

        return {
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
        const dropedFiles = Array.from(e.dataTransfer?.files).filter(file => file.type.startsWith('image/'));

        if (dropedFiles && dropedFiles[0]) {
            setFiles(prev => [...prev, ...dropedFiles]);
        }
    }

    React.useEffect(() => {
        //Проверка наличия фотографий в массиве для отображения тулбара TODOS: потом надо отрефакторить
        previewBlock.length === 0 ? setIsActive(false) : setIsActive(true);
    }, [previewBlock])

    React.useEffect(() => {
        const loadPreview = async (): Promise<void> => {
            const previewCopy: ImageObj[] = [];
            const newFiles = files.filter(file => !previewBlock.find(preview => preview.imgName === file.name));

            for (const file of newFiles) {
                const preview = await createPreview(file);
                previewCopy.push(preview);
            }

            setPreviewBlock(prev => [...prev, ...previewCopy])
        }
        loadPreview();
        console.log(files)
    }, [files])

    const onClear = (imgName: string) => {
        setFiles(prev => prev.filter(file => file.name !== imgName));
        setPreviewBlock(prev => prev.filter(item => item.imgName !== imgName));
        if (fileInputRef.current) {
            fileInputRef.current.value = '';
        }
    }

    return (
        <section className='drop-container'>
            {previewBlock.map(item => <CardItem key={item.imgName} onClick={() => onClear(item.imgName)} imgName={item.imgName} imgUrl={item.imgUrl} imgSize={item.imgSize} />)}
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