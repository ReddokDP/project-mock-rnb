import { useId } from 'react';
import { PaginationOne } from '@admiral-ds/react-ui';
import { useModalFilter } from '../../hooks/useModalFilter';

export const Pagination = () => {

    const { totalItems, currentPage, itemsPerPage, setCurrentPage, setItemsPerPage } = useModalFilter();
    const pageSizes = [10, 20, 50];
    const leftButtonProps = { 'data-testid': useId() };
    const rightButtonProps = { 'data-testid': useId() };

    return (
        <PaginationOne
            onChange={({ page, pageSize }) => {
                setCurrentPage(page);
                setItemsPerPage(pageSize);
            }}
            page={currentPage}
            pageSize={itemsPerPage}
            totalItems={totalItems}
            pageSizes={pageSizes}
            data-dropdown-container-id="pagination-with-dropdown"
            data-dropdown-container-test-id="pagination-test-id-with-dropdown"
            className="pagination-class-name"
            pageSizeDropContainerStyle={{ dropContainerClassName: 'pageSizeDropContainerClass' }}
            pageNumberDropContainerStyle={{ dropContainerClassName: 'pageNumberDropContainerClass' }}
            leftButtonPropsConfig={() => leftButtonProps}
            rightButtonPropsConfig={() => rightButtonProps}
        />
    );
};