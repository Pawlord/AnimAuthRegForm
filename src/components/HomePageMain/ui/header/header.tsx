//работа с react-router-dom
import { useNavigate } from 'react-router-dom';

//Стили
import './header.scss';

//Компоненты
import { Navigation } from './ui/navigation';
import { HeaderLogo } from './ui/header-logo';
import { HeaderTitle } from './ui/header-title';
import { HeaderLayout } from './ui/header-layout';

type Props = {}

export const Header = (props: Props) => {
    const navigate = useNavigate();

    return (
        <HeaderLayout
            headerLogo={<HeaderLogo />}
            headerTitle={<HeaderTitle text='Drag and smile' color='orange' />}
            headerNavigation={<Navigation />}
        />
    )
}