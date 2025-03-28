import { GridContainer, CardContainer, PathTitle } from './HomePage.styled';
import { T } from '@admiral-ds/react-ui';
import { cardsData } from './cardsData';

export const HomePage = () => {

    return (
        <>
            <PathTitle font="Body/Body 2 Long" as="h2">Налоги</PathTitle>
            <GridContainer>
                {cardsData.map((card) => (
                    <CardContainer key={card.id} title={card.title}>
                        <T font="Body/Body 2 Long" as="h1" color='Primary/Primary 60 Main'>{card.title}</T>
                    </CardContainer>
                ))}
            </GridContainer>
        </>
    );
};
