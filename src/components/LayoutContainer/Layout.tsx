import { Outlet } from 'react-router-dom';
import { Header } from '../Header/Header';
import { LayoutStyled } from './LayoutStyled';

export function Layout() {
    return (
        <LayoutStyled>
            <Header />
            <Outlet />
        </LayoutStyled>
    );
}
