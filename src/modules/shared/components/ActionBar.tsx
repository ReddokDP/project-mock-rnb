import { Link } from 'react-router-dom';
import { RoutesEnum } from '../../../routes/RoutesEnum';
import { Button } from '@admiral-ds/react-ui';
import { SystemArrowLeftOutline, SystemFilterOutline, SystemSettingsOutline } from '@admiral-ds/icons';
import { ActionBarContainerButton, ActionBarPath, ContainerBar, PathPage } from '../styled/ActionBar.styled';
import { useModalFilter } from '../../modals/hooks/useModalFilter';

interface ActionBarProps {
    showFilterButton?: boolean;
    showSettingsButton?: boolean;
}

export const ActionBar = ({ showFilterButton = true, showSettingsButton = true }: ActionBarProps) => {
    const { handleOpenModal } = useModalFilter();

    return (
        <ContainerBar>
            <ActionBarPath>
                <Link to={RoutesEnum.HOME_PAGE}>
                    <Button iconStart={SystemArrowLeftOutline()} dimension="s" appearance="ghost">
                        Налоги
                    </Button>
                </Link>
                <PathPage font="Body/Body 2 Long" as="h2">
                    Затраты
                </PathPage>
            </ActionBarPath>
            <ActionBarContainerButton>
                {showFilterButton && (
                    <Button
                        dimension="s"
                        appearance="secondary"
                        iconStart={SystemFilterOutline()}
                        onClick={handleOpenModal}>
                        Фильтр
                    </Button>
                )}
                {showSettingsButton && (
                    <Button appearance="secondary" dimension="s" iconStart={SystemSettingsOutline()} displayAsSquare />
                )}
            </ActionBarContainerButton>
        </ContainerBar>
    );
};