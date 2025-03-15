import React from 'react';
import { HeaderS } from './HeaderS';
import { Logo } from './Logo';
import textRNB from '../../assets/logo/text_rnb.svg';
import logoRNB from '../../assets/logo/logo_rnb.svg';

export const Header = () => {
    return (
        <HeaderS>
            <Logo
                image1={textRNB} // Путь к первой картинке
                image2={logoRNB} // Путь ко второй картинке
            >
                <div className="image1" />
                <div className="image2" />
            </Logo>
        </HeaderS>
    );
};
