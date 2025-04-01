import { useNavigate } from 'react-router-dom';
import { useCallback } from 'react';

export const useTransitionCards = () => {
    const navigate = useNavigate();

    const handleCardClick = useCallback(
        (path?: string) => {
            if (!path) {
                return;
            }
            navigate(path);
        },
        [navigate],
    );

    return {
        handleCardClick,
    };
};
