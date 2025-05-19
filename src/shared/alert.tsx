"use client";  // Add this line at the top

import React, { useState } from "react";
import { Snackbar, Alert } from "@mui/material";

interface SnackbarAlertProps {
    message: string;
    severity?: "success" | "error" | "warning" | "info";
}

const SnackbarAlert: React.FC<SnackbarAlertProps> = ({
    message,
    severity = "success",
}) => {
    const [open, setOpen] = useState(true);

    const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === "clickaway") return;
        setOpen(false);
    };

    return (
        <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}
            anchorOrigin={{ vertical: "bottom", horizontal: "center" }} // Centered Snackbar
        >
            <Alert onClose={handleClose} severity={severity} sx={{ width: "100%" }}>
                {message}
            </Alert>
        </Snackbar>
    );
};

export default SnackbarAlert;
