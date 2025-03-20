import { Outlet } from 'react-router-dom';
import { Header } from '../Header/Header';
import { LayoutStyled } from './Layout.styled';

export function Layout() {
    return (
        <LayoutStyled>
            <Header />
            <Outlet />
        </LayoutStyled>
    );
}
