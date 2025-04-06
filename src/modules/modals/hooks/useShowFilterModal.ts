import { useState } from 'react';
import { useOpenModalFilter } from '../../shared/hooks/useOpenModalFilter';

export const useShowFilterModal = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { handleOpenModal } = useOpenModalFilter();

    const openModal = () => {
        handleOpenModal();
        setIsOpen(true);
    };
    const closeModal = () => {
        setIsOpen(false);
    };

    return {
        isOpen,
        openModal,
        closeModal,
    };
};