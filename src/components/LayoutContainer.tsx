import React from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import { Header } from "./Header/Header"

const LayoutContainer = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
`;

export function Layout() {
    return (
        <LayoutContainer>
            <Header />
            <Outlet />
        </LayoutContainer>
    );
}

