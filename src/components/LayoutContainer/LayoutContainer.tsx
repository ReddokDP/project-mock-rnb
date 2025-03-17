import { Outlet } from 'react-router-dom';
import { Header } from '../Header/Header';
import { LayoutContainerStyled } from './LayoutContainerStyled';


export function Layout() {
    return (
        <LayoutContainerStyled>
            <Header />
            <Outlet />
        </LayoutContainerStyled>
    );
}
