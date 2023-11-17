export interface Header {
    id: string | number,
    name: string,
    [propName: string]: any | undefined
}

type TableProps<T> = {
    columns: Header[];
    rows: T[];
    isLoading?: boolean;
}

export type SimpleTableProps = TableProps & {
    linked?: boolean;
}

export type TableRowsProps = {
    rows: T[];
}