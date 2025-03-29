import { Outlet } from 'react-router-dom';
import { Header } from './Header';
import { LayoutStyled } from '../styled/Layout.styled';
import { BodyGlobal } from '../styled';

export function Layout() {
    return (
        <LayoutStyled>
            <Header />
            <BodyGlobal />
            <Outlet />
        </LayoutStyled>
    );
}
