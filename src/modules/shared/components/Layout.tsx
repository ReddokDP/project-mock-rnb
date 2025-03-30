import { Outlet } from 'react-router-dom';
import { Header } from './Header';
import { LayoutStyled } from '../styled/Layout.styled';
import { BodyGlobal } from '../styled';
import { useInitializationAuthorization } from '../hooks/useInitializationAuthorization';

export function Layout() {
    useInitializationAuthorization();

    return (
        <LayoutStyled>
            <Header />
            <BodyGlobal />
            <Outlet />
        </LayoutStyled>
    );
}
