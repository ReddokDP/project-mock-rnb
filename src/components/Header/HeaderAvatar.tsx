import { Avatar } from '@admiral-ds/react-ui';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import avatarShape from '../../assets/icons/avatar/avatarShape.svg';
import { Image } from './Logo.styled';
import { HeaderAvatarStyled } from './HeaderAvatar.styled';
import { LIGHT_THEME } from '@admiral-ds/react-ui';
import { useInitializationAuthorization } from './useInitializationAuthorization';

export const HeaderAvatar = () => {
    useInitializationAuthorization();

    const user = useSelector((state: RootState) => state.auth.user);

    return (
        <HeaderAvatarStyled>
            {user && (
                <Avatar
                    userName={user.username}
                    dimension="l"
                    appearance="neutral2"
                    status={LIGHT_THEME.color['Primary/Primary 60 Main']}
                />
            )}
            <Image image={avatarShape} width="14px" height="8px" marginLeft="8px" />
        </HeaderAvatarStyled>
    );
};
