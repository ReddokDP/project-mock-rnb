import { BodyGlobal } from '../../styles';
import { ContainerCards, CardsContainer, PathPage } from './HomePage.styled';
import { T } from '@admiral-ds/react-ui';
import { cardsData } from './cardsData';
import { useTransitionCards } from './useTransitionCards';

export const HomePage = () => {
    const { handleCardClick } = useTransitionCards();

    return (
        <>
            <BodyGlobal />
            <PathPage font="Body/Body 2 Long" as="h2">
                Налоги
            </PathPage>
            <ContainerCards>
                {cardsData.map(({ id, title, path }) => (
                    <CardsContainer key={id} title={title} onClick={() => handleCardClick(path)}>
                        <T font="Body/Body 2 Long" as="h1" color="Primary/Primary 60 Main">
                            {title}
                        </T>
                    </CardsContainer>
                ))}
            </ContainerCards>
        </>
    );
};
