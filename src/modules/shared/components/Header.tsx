import { HeaderStyled } from '../styled/Header.styled';
import { LogoStyled } from '../styled/Logo.styled';
import textRNB from '../../../assets/icons/logo/text_rnb.svg';
import logoRNB from '../../../assets/icons/logo/logo_rnb.svg';
import { Image } from '../styled/Logo.styled';
import { HeaderAvatar } from './HeaderAvatar';

export const Header = () => {
    return (
        <HeaderStyled>
            <LogoStyled>
                <Image image={textRNB} width="20px" height="20px" />
                <Image image={logoRNB} width="50px" height="20px" marginLeft="7px" marginTop="7px" />
            </LogoStyled>
            <HeaderAvatar />
        </HeaderStyled>
    );
};
