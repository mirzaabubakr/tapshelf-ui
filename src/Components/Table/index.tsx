import {
  Typography,
  TableHead,
  Chip,
  Table,
  TableBody,
  TableCell,
  TablePagination,
  TableRow,
  TableFooter,
  TableContainer,
  Button,
} from "@mui/material";
import "./index.css";
import { useSelector, useDispatch } from "../../Store/hooks";
import { AppState } from "../../Store/store";
import { Delete } from "@mui/icons-material";
import { IoFilterSharp } from "react-icons/io5";
import { useState } from "react";
import AddProductDialog from "../Dialog/AddProductDialog";
import { deleteProductById } from "../../Store/products/ProductSlice";
import TablePaginationActions from "../TablePaginationAction";
import { tableHeaderArray } from "../../Services/Constants/Products";
import CustomSnackbar from "../snackbar/CustomSnackbar";

export default function PaginationTable() {
  const [page, setPage] = useState(0);
  const [open, setOpen] = useState(false);
  const [openBar, setOpenBar] = useState(false);
  const [message, setMessage] = useState("");
  const rowsPerPage = 10;
  const dispatch = useDispatch();
  const productsData = useSelector((state: AppState) => state.products.data);
  const products = [...productsData].reverse();
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - products.length) : 0;

  const handleChangePage = (event: any, newPage: any) => {
    console.log(event);
    setPage(newPage);
  };

  const handleAddClose = () => {
    setOpen(false);
  };

  const deleteProduct = (productId: string) => {
    setOpenBar(true);
    setMessage("Product Deleted Successfully!");
    dispatch(deleteProductById(productId));
  };

  const handleBarClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    console.log(event);
    if (reason === "clickaway") {
      return;
    }
    setOpenBar(false);
  };

  return (
    <>
      <CustomSnackbar
        open={openBar}
        handleClose={handleBarClose}
        severity={"success"}
        message={message}
      />
      <AddProductDialog open={open} handleClose={handleAddClose} />
      <div className="table-container">
        <h2 style={{ padding: "15px 0px" }}>Products</h2>
        <div className="table-buttons">
          <Button
            className="table-button"
            variant="contained"
            onClick={() => setOpen(true)}
          >
            Add Products
          </Button>
          <Button className="table-button" variant="outlined">
            <IoFilterSharp style={{ paddingRight: "8px" }} /> Filter
          </Button>

          <Button className="table-button" variant="outlined">
            Download All
          </Button>
        </div>
      </div>

      <TableContainer>
        <Table
          aria-label="pagination table"
          sx={{
            whiteSpace: "nowrap",
          }}
        >
          <TableHead>
            <TableRow>
              {tableHeaderArray.map((header, index) => (
                <TableCell key={index}>
                  <Typography fontSize={"18px"} fontWeight="100">
                    {header}
                  </Typography>
                </TableCell>
              ))}
            </TableRow>
          </TableHead>

          <TableBody>
            {(rowsPerPage > 0
              ? products.slice(
                  page * rowsPerPage,
                  page * rowsPerPage + rowsPerPage
                )
              : products
            ).map((row) => (
              <TableRow key={row.orderno}>
                <TableCell>
                  <Typography fontSize={"16px"} fontWeight="500">
                    {row.productName}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography fontSize={"16px"} fontWeight="500">
                    ₹{row.buyingPrice}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography fontSize={"16px"} fontWeight="500">
                    {row.quantity} Packets
                  </Typography>
                </TableCell>

                <TableCell>
                  <Typography fontSize={"16px"} fontWeight="500">
                    {row.thresholdValue} Packets
                  </Typography>
                </TableCell>

                <TableCell>
                  <Typography fontSize={"16px"} fontWeight="500">
                    {row.expDate}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Chip
                    color={
                      row.availablility === "In-stock"
                        ? "success"
                        : row.availablility === "Low stock"
                        ? "warning"
                        : row.availablility === "Out of stock"
                        ? "error"
                        : "secondary"
                    }
                    sx={{
                      borderRadius: "6px",
                      border: "none",
                      fontSize: "16px",
                      fontWeight: "500",
                    }}
                    variant="outlined"
                    size="medium"
                    label={row.availablility}
                  />
                </TableCell>
                <TableCell>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <Typography fontWeight="400" sx={{ cursor: "pointer" }}>
                      <Delete onClick={() => deleteProduct(row.productId)} />
                    </Typography>
                  </div>
                </TableCell>
              </TableRow>
            ))}

            {emptyRows > 0 && (
              <TableRow style={{ height: 53 * emptyRows }}>
                <TableCell colSpan={6} />
              </TableRow>
            )}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TablePagination
                colSpan={7}
                count={products.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                labelRowsPerPage=""
                sx={{
                  "& .MuiSelect-select": {
                    display: "none !important",
                  },
                  "& > div.MuiToolbar-root > div.MuiInputBase-root > svg": {
                    display: "none !important",
                  },
                  "& .MuiTablePagination-displayedRows": {
                    display: "none !important",
                  },
                }}
                ActionsComponent={TablePaginationActions}
              />
            </TableRow>
          </TableFooter>
        </Table>
      </TableContainer>
    </>
  );
}
