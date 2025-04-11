import { Avatar } from '@admiral-ds/react-ui';
import { ButtonExit, AvatarContainer } from './AvatarUser.styled';
import { LIGHT_THEME } from '@admiral-ds/react-ui';
import { setShowLogout } from '../slice/uiSlice';
import { ButtonLogOut } from '../../auth/components/AuthorizationForm/AuthorizationForm.styled';
import { IconButtonExit } from './AvatarUser.styled';
import { useAuthLogOut } from '../../auth/hooks/useAuthLogOut';

export const AvatarUser = () => {
    const { user, showLogout, handleLogout, dispatch } = useAuthLogOut();

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
                    <ButtonExit onClick={() => dispatch(setShowLogout(!showLogout))}>
                        <IconButtonExit />
                    </ButtonExit>
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
