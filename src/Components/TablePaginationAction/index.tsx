import { Typography, Button, Box } from "@mui/material";

interface TablePaginationActionsProps {
  count: number;
  page: number;
  rowsPerPage: number;
  onPageChange: (
    event: React.MouseEvent<HTMLButtonElement>,
    newPage: number
  ) => void;
}

export default function TablePaginationActions(
  props: TablePaginationActionsProps
) {
  const { count, page, rowsPerPage, onPageChange } = props;

  const handleBackButtonClick = (event: any) => {
    onPageChange(event, page - 1);
  };

  const handleNextButtonClick = (event: any) => {
    onPageChange(event, page + 1);
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginRight: "200px",
        gap: "500px",
      }}
    >
      <Button
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label="previous page"
        variant="outlined"
      >
        Previous
      </Button>
      <Box>
        <Typography variant="body2">{`${page + 1} of ${Math.ceil(
          count / rowsPerPage
        )}`}</Typography>
      </Box>
      <Button
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
        variant="outlined"
      >
        Next
      </Button>
    </Box>
  );
}
