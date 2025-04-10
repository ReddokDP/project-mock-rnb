import { Outlet } from 'react-router-dom';
import { Header } from '../components/Header';
import { LayoutStyled } from './Layout.styled';
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
