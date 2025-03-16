import { HeaderS } from './HeaderS';
import { Logo } from './Logo';
import textRNB from '../../assets/icons/logo/text_rnb.svg';
import logoRNB from '../../assets/icons/logo/logo_rnb.svg';

export const Header = () => {
    return (
        <HeaderS>
            <Logo image1={textRNB} image2={logoRNB}>
                <div className="image1" />
                <div className="image2" />
            </Logo>
        </HeaderS>
    );
};
