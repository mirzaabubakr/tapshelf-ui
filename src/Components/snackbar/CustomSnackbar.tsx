import { Alert, Snackbar } from "@mui/material";

interface SnackbarTypes {
  open: boolean;
  handleClose: () => void;
  severity: any;
  message: string;
}

export default function CustomSnackbar(props: SnackbarTypes) {
  const { open, handleClose, severity, message } = props;
  return (
    <Snackbar
      open={open}
      autoHideDuration={2000}
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
      onClose={handleClose}
    >
      <Alert
        severity={severity == "error" ? "error" : "success"}
        sx={{ width: "100%" }}
        onClose={handleClose}
      >
        {message}
      </Alert>
    </Snackbar>
  );
}
