import { useNavigate } from 'react-router-dom';

export const useTransitionCards = () => {
    const navigate = useNavigate();

    const handleCardClick = (path?:string) => {
        if (path) {
            navigate(path);
        }
    }

    return {
        handleCardClick,
    }
}