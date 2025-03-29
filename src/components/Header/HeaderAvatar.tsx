import { Avatar, Button } from '@admiral-ds/react-ui';
import { HeaderAvatarStyled } from './HeaderAvatar.styled';
import { LIGHT_THEME } from '@admiral-ds/react-ui';
import { useInitializationAuthorization } from './useInitializationAuthorization';
import { useLogOut } from '../AuthorizationForm/useLogOut';
import { setShowLogout } from '../../redux/slice/uiSlice';
import { ButtonLogOut } from '../AuthorizationForm/AuthorizationForm.styled';
import { SystemSmallArrowDownOutline } from '@admiral-ds/icons';
import { useShowLogOutButton } from './useShowLogOutButton';

export const HeaderAvatar = () => {
    useInitializationAuthorization();
    const { handleLogout } = useLogOut();
    const { user, showLogout, dispatch} = useShowLogOutButton()

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
                    <Button appearance="ghost" dimension="m" iconStart={SystemSmallArrowDownOutline()} displayAsSquare onClick={() => dispatch(setShowLogout(!showLogout))} />
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
