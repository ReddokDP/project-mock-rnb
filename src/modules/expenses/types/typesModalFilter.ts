export interface StatusOption {
    id: string;
    value: string;
    title: string;
}

export interface Pagination {
    numberOfItemsPerPage: number;
    currentPageNumber: number;
}

export interface Sorting {
    sortBy: string;
    sortOrder: 'ASC' | 'DESC';
}

export interface RequestPayload {
    clientId: string;
    assetId: string;
    clientContractId: string;
    startDate: string;
    endDate: string;
    status: string;
    pagination: Pagination;
    sorting: Sorting;
}

export interface FormData {
    clientId?: string;
    assetId?: string;
    clientContractId?: string;
    startDate: string;
    endDate: string;
    status?: string;
}

export interface InputValues  {
    clientId: string;
    assetId: string;
    clientContractId: string;
    startDate: string;
    endDate: string;
    status: string;
}