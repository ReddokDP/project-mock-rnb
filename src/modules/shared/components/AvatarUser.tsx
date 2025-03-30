import { Avatar } from '@admiral-ds/react-ui';
import { ButtonExit, AvatarContainer } from '../styled/AvatarUser.styled';
import { LIGHT_THEME } from '@admiral-ds/react-ui';
import { useLogOut } from '../../auth/hooks/useLogOut';
import { setShowLogout } from '../slice/uiSlice';
import { ButtonLogOut } from '../../auth/styled/AuthorizationForm.styled';
import { IconButtonExit } from '../styled/AvatarUser.styled';
import { useShowLogOutButton } from '../hooks/useShowLogOutButton';

export const AvatarUser = () => {
    const { handleLogout } = useLogOut();
    const { user, showLogout, dispatch} = useShowLogOutButton()

    return (
        <AvatarContainer>
            {user && (
                <>
                    <Avatar
                        userName={user.username}
                        dimension="m"
                        appearance="neutral2"
                        status={LIGHT_THEME.color['Primary/Primary 60 Main']}
                    />
                    <ButtonExit onClick={() => dispatch(setShowLogout(!showLogout))}><IconButtonExit /></ButtonExit>
                    {showLogout && (
                        <ButtonLogOut appearance="primary" dimension="s" type="submit" onClick={handleLogout}>
                            Выйти
                        </ButtonLogOut>
                    )}
                </>
            )}
        </AvatarContainer>
    );
};
