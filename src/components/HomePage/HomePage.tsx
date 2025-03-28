
import { BodyGlobal } from '../../styles';
import { GridContainer, CardContainer, PathTitle } from './HomePage.styled';
import { T } from '@admiral-ds/react-ui';
import { cardsData } from './cardsData';
import { useTransitionCards} from './useTransitionCards';

export const HomePage = () => {
    const {handleCardClick} = useTransitionCards()

    return (
        <>
            <BodyGlobal />
            <PathTitle font="Body/Body 2 Long" as="h2">
                Налоги
            </PathTitle>
            <GridContainer>
                {cardsData.map(({ id, title, path }) => (
                    <CardContainer key={id} title={title} onClick={() => handleCardClick(path)}>
                        <T font="Body/Body 2 Long" as="h1" color="Primary/Primary 60 Main">
                            {title}
                        </T>
                    </CardContainer>
                ))}
            </GridContainer>
        </>
    );
};
