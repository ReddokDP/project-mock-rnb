
import {
    Container,
    ContainerInfo,
    InfoMessage,
    PathTitle,
    MiniHeader, MiniHeaderPath, MiniHeaderButton,
    LinksStyled,
} from './Expenses.styled';
import { Button, T } from '@admiral-ds/react-ui';
import { ReactComponent as FilterIcon } from '../../assets/icons/filter/filter.svg';
import { ReactComponent as SettingIcon} from '../../assets/icons/setting/iconSetting.svg'; // Надо определиться куда положить конкретно все иконки, не думаю что лучшая идея для каждой отдельно создавать папку.
import iconInfo from '../../assets/icons/info/info.svg';
import iconArrow from '../../assets/icons/arrow/arrow.svg';
import { Image } from '../Header/Logo.styled';
import { RoutesEnum } from '../../routes/RoutesEnum';

/* Пока что не пойму, можно ли вынести в отдельный компонент MiniHeader или нет.
Смущает то что, на экране uID(Карточка), там у нас путь присутствует, а вот уже кнопок "Фильтр", "Настройка" - нет.
Недопонимание в том, как это отображать, если использовать как компонент. */

export const Expenses = () => {
    return (
        <>

            <MiniHeader>
                <MiniHeaderPath>
                    <Image image={iconArrow} width="20px" height="20px" />
                    <LinksStyled to={RoutesEnum.HOME_PAGE}>Налоги</LinksStyled>
                    <PathTitle font="Body/Body 2 Long" as="h2">
                        Затраты
                    </PathTitle>
                </MiniHeaderPath>
                <MiniHeaderButton>
                    <Button dimension="l" iconStart={<FilterIcon />} appearance="secondary">
                        Фильтр
                    </Button>
                    <Button appearance="secondary" dimension="l" iconStart={<SettingIcon />} displayAsSquare />
                </MiniHeaderButton>
            </MiniHeader>

            <Container>
                <ContainerInfo>
                    <InfoMessage>
                        <Image image={iconInfo} width="20px" height="20px" />
                        <T font="Body/Body 2 Short" as="p" color="Neutral/Neutral 50">
                            Для отображения информации уточните параметры поиска.
                        </T>
                    </InfoMessage>
                    <Button dimension="l" iconStart={<FilterIcon />} appearance="secondary">
                        Фильтр
                    </Button>
                </ContainerInfo>
            </Container>

        </>
    );
};
