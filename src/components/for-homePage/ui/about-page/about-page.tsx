import clsx from 'clsx';

//Стили
import './about-page.scss';

type Props = {
}

export const AboutPage = (props: Props) => {
    return (
        <div className={clsx('about-page')}>
            <h1>About Page</h1>
        </div>
    )
}