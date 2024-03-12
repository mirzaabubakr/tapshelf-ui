import { Close } from "@mui/icons-material";
import {
  Dialog,
  DialogContent,
  Typography,
  TextField,
  DialogActions,
  Button,
  DialogTitle,
  IconButton,
  Grid,
  Box,
  Stack,
  Select,
  MenuItem,
  CardMedia,
} from "@mui/material";
import { useFormik } from "formik";
import { useDispatch } from "../../../Store/hooks";
import { addNewProduct } from "../../../Store/products/ProductSlice";
import {
  formFields,
  validationSchema,
  ProductFormValues,
  initialValues,
} from "../../../Services/Constants/Products";
import CustomSnackbar from "../../snackbar/CustomSnackbar";
import { useState } from "react";

interface Props {
  open: boolean;
  handleClose: () => void;
}

export default function AddProductDialog({ open, handleClose }: Props) {
  const dispatch = useDispatch();
  const [openBar, setOpenBar] = useState(false);
  const [message, setMessage] = useState("");

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,

    onSubmit: (values: ProductFormValues, { resetForm }) => {
      setOpenBar(true);
      setMessage("Product Added Successfully!");
      dispatch(addNewProduct(values));
      handleClose();
      resetForm();
    },
  });

  const handleDiscard = (resetForm: () => void) => {
    resetForm();
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
      <Dialog open={open} fullWidth maxWidth="sm">
        <DialogTitle marginTop={2}>
          <Typography fontSize={20} color={"#1162b7"} fontWeight={"bold"}>
            Add Product
          </Typography>
          <IconButton
            aria-label="close"
            onClick={handleClose}
            sx={{
              top: 8,
              right: 10,
              position: "absolute",
            }}
          >
            <Close />
          </IconButton>
        </DialogTitle>
        <form onSubmit={formik.handleSubmit}>
          <DialogContent>
            <Grid container alignItems="center" spacing={2}>
              <Grid
                container
                justifyContent="center"
                alignItems={"center"}
                style={{ width: "100%", gap: "30px" }}
              >
                {formik.values.image.length > 0 ? (
                  <>
                    {Array.from(formik.values.image).map(
                      (file: any, index: number) => (
                        <Grid item lg={4} md={4} xs={12} key={index}>
                          <CardMedia
                            component="img"
                            sx={{
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center",
                              maxWidth: "120px",
                              height: "120px",
                              border: "none",
                              margin: "auto",
                            }}
                            image={URL.createObjectURL(file)}
                            alt={`Image ${index + 1}`}
                          />
                        </Grid>
                      )
                    )}
                  </>
                ) : (
                  <>
                    <Grid item>
                      <Button
                        id="upload-file"
                        variant="text"
                        color="inherit"
                        component="label"
                        sx={{
                          width: "120px",
                          height: "120px",
                          border: "dashed",
                          textAlign: "center",
                          justifyContent: "center",
                          margin: "10px",
                          borderColor: `${
                            formik.errors.image && formik.touched.image
                              ? "red"
                              : "gray"
                          }`,
                        }}
                        onDrop={(event) => {
                          event.preventDefault();
                          formik.setFieldValue(
                            "image",
                            event.dataTransfer.files
                          );
                        }}
                        onDragOver={(event) => {
                          event.preventDefault();
                        }}
                      >
                        {formik.errors.image && formik.touched.image
                          ? `${formik.errors.image as string}`
                          : ""}
                        <input
                          hidden
                          id="image"
                          accept="image/*"
                          multiple
                          type="file"
                          onChange={(event) => {
                            formik.setFieldValue(
                              "image",
                              event.currentTarget.files
                            );
                          }}
                        />
                      </Button>
                    </Grid>
                    <Grid item>
                      <Grid
                        container
                        direction="column"
                        alignItems="center"
                        justifyContent="center"
                      >
                        <Typography fontSize={"18px"} fontWeight="200">
                          {"Drag Image Here"}
                        </Typography>
                        <Typography fontSize={"18px"} fontWeight="200">
                          {"or"}
                        </Typography>

                        <Button
                          id="upload-file"
                          variant="text"
                          color="inherit"
                          component="label"
                        >
                          <input
                            hidden
                            id="image"
                            accept="image/*"
                            multiple
                            type="file"
                            onChange={(event) => {
                              formik.setFieldValue(
                                "image",
                                event.currentTarget.files
                              );
                            }}
                          />
                          <Typography
                            fontSize={"18px"}
                            color={"#3888f2"}
                            fontWeight="200"
                          >
                            {"Browse image"}
                          </Typography>
                        </Button>
                      </Grid>
                    </Grid>
                  </>
                )}
              </Grid>

              {formFields.map((field) => (
                <Grid item xs={12} key={field.id}>
                  <Grid
                    container
                    alignItems="center"
                    spacing={2}
                    justifyContent="space-between"
                    style={{ paddingTop: "16px" }}
                  >
                    <Grid item>
                      <Typography variant="h6" fontWeight="200">
                        {field.label}
                      </Typography>
                    </Grid>
                    <Grid
                      item
                      xs={12}
                      md={12}
                      lg={8}
                      style={{ paddingTop: "0px" }}
                    >
                      {field.type == "select" ? (
                        <Select
                          id={field.id}
                          value={formik.values.category}
                          onChange={formik.handleChange}
                          fullWidth
                          variant="outlined"
                          name={field.id}
                          error={
                            formik.touched.category &&
                            Boolean(formik.errors.category)
                          }
                        >
                          {field.options &&
                            field.options.map((option) => (
                              <MenuItem key={option.value} value={option.value}>
                                {option.label}
                              </MenuItem>
                            ))}
                        </Select>
                      ) : (
                        <TextField
                          type={field.type}
                          id={field.id}
                          variant="outlined"
                          fullWidth
                          placeholder={`Enter ${field.label}`}
                          value={formik.values[field.id]}
                          onChange={formik.handleChange}
                          error={
                            formik.touched[field.id] &&
                            Boolean(formik.errors[field.id])
                          }
                          helperText={
                            formik.touched[field.id] &&
                            formik.errors[field.id] ? (
                              <div>{formik.errors[field.id] as string}</div>
                            ) : null
                          }
                        />
                      )}
                    </Grid>
                  </Grid>
                </Grid>
              ))}
            </Grid>
          </DialogContent>
          <DialogActions>
            <Box marginBottom={"10px"}>
              <Stack
                direction={{ xs: "row" }}
                gap={2}
                alignItems="center"
                justifyContent={"space-between"}
                padding={"15px"}
              >
                <Button
                  fullWidth
                  variant="outlined"
                  onClick={() => handleDiscard(formik.resetForm)}
                >
                  Discard
                </Button>

                <Button
                  fullWidth
                  variant="contained"
                  type="submit"
                  style={{ minWidth: "150px" }}
                >
                  Add product
                </Button>
              </Stack>
            </Box>
          </DialogActions>
        </form>
      </Dialog>
    </>
  );
}
