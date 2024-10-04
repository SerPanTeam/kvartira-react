import { Pagination } from "@mui/material";

interface PaginationComponentProps {
    realEstateDataLength: number;
    currentPage: number;
    objectsPerPage: number;
    handlePageChange?: (event: React.ChangeEvent<unknown>, value: number) => void;
}

export default function PaginationComponent({ realEstateDataLength, currentPage, objectsPerPage, handlePageChange }: PaginationComponentProps) {
    return (
        <Pagination
            count={Math.ceil(realEstateDataLength / objectsPerPage)} // Количество страниц
            page={currentPage}
            onChange={handlePageChange}
            color="primary" // Цвет пагинации
            size="large" // Размер пагинации
            shape="rounded"
            variant="outlined"
            siblingCount={2}
            boundaryCount={2}
            sx={{ marginBottom: 2 }}
        />
    );
}