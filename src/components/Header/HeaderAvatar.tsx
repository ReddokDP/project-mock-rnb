import { Avatar } from '@admiral-ds/react-ui';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import avatarShape from '../../assets/icons/avatar/avatarShape.svg';
import { Image } from './Logo.styled';
import { HeaderAvatarStyled } from './HeaderAvatar.styled';

export const HeaderAvatar = () => {
    const user = useSelector((state: RootState) => state.auth.user);

    return (
        <HeaderAvatarStyled>
            {user && <Avatar userName={user.username} dimension="l" appearance="neutral2" status="#1E90FF" />}
            <Image image={avatarShape} width="14px" height="8px" marginLeft="8px" />
        </HeaderAvatarStyled>
    );
};