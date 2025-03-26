import { Avatar } from '@admiral-ds/react-ui';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import avatarShape from '../../assets/icons/avatar/avatarShape.svg';
import { Image } from './Logo.styled';
import { HeaderAvatarStyled } from './HeaderAvatar.styled';
import { LIGHT_THEME } from '@admiral-ds/react-ui';
import { useInitializationAuthorization } from './useInitializationAuthorization';
import { useLogOut } from '../AuthorizationForm/useLogOut';
import { setShowLogout } from '../../redux/slice/uiSlice';
import { ButtonLogOut } from '../AuthorizationForm/AuthorizationForm.styled';

export const HeaderAvatar = () => {
    useInitializationAuthorization();
    const { handleLogout } = useLogOut();
    const dispatch = useDispatch();
    const user = useSelector((state: RootState) => state.auth.user);
    const showLogout = useSelector((state: RootState) => state.ui.showLogout);

    return (
        <HeaderAvatarStyled>
            {user && (
                <>
                    <Avatar
                        userName={user.username}
                        dimension="l"
                        appearance="neutral2"
                        status={LIGHT_THEME.color['Primary/Primary 60 Main']}
                    />
                    <Image
                        image={avatarShape}
                        width="14px"
                        height="8px"
                        marginLeft="8px"
                        onClick={() => dispatch(setShowLogout(!showLogout))}
                    />
                    {showLogout && (
                        <ButtonLogOut appearance="primary" dimension="s" type="submit" onClick={handleLogout}>
                            Выйти
                        </ButtonLogOut>
                    )}
                </>
            )}
        </HeaderAvatarStyled>
    );
};
