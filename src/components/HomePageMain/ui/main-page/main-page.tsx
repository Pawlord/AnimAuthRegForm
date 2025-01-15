import clsx from 'clsx';

//Стили
import './main-page.scss';
import { DropBlock } from './ui/drop-block';

type Props = {

}

export const MainPage = (props: Props) => {
    return (
        <div className={clsx('main-page')}>
            <DropBlock />
        </div>
    )
}