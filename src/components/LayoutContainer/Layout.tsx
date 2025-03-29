import { Outlet } from 'react-router-dom';
import { Header } from '../Header/Header';
import { LayoutStyled } from './Layout.styled';
import { BodyGlobal } from '../../styles';

export function Layout() {
    return (
        <LayoutStyled>
            <Header />
            <BodyGlobal />
            <Outlet />
        </LayoutStyled>
    );
}
