import { Outlet } from 'react-router-dom';
import { LayoutStyled } from './Layout.styled';
import { Header } from '../modules/user';
import { BodyGlobal } from '../app/styled';

export function Layout() {
    return (
        <LayoutStyled>
            <Header />
            <BodyGlobal />
            <Outlet />
        </LayoutStyled>
    );
}
