import { HeaderStyled } from './Header.styled';
import { LogoStyled } from './Logo.styled';
import textRNB from '../../assets/icons/logo/text_rnb.svg';
import logoRNB from '../../assets/icons/logo/logo_rnb.svg';
import { Image } from './Logo.styled';

export const Header = () => {
    return (
        <HeaderStyled>
            <LogoStyled>
                <Image image={textRNB} width="20px" height="20px" />
                <Image image={logoRNB} width="50px" height="20px" marginLeft="7px" marginTop="7px" />
            </LogoStyled>
        </HeaderStyled>
    );
};
