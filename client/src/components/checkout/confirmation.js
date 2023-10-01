import React from "react";
import { useFormikContext } from "formik";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

const ConfirmationPage = ({ goToPreviousPage }) => {
  const { values } = useFormikContext();

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent form submission
    // Handle form submission logic here
  };

  return (
    <form onSubmit={handleSubmit}>
      <Box maxWidth="md">
        <Typography variant="h5" gutterBottom>
          Shipping Address
        </Typography>
        <Typography variant="body1">
          <strong>First Name:</strong> {values.firstName}
        </Typography>
        <Typography variant="body1">
          <strong>Last Name:</strong> {values.lastName}
        </Typography>
        <Typography variant="body1">
          <strong>Address Line 1:</strong> {values.addressLine1}
        </Typography>
        <Typography variant="body1">
          <strong>Address Line 2:</strong> {values.addressLine2}
        </Typography>
        <Typography variant="body1">
          <strong>City:</strong> {values.city}
        </Typography>
        <Typography variant="body1">
          <strong>State:</strong> {values.state}
        </Typography>
        <Typography variant="body1">
          <strong>County:</strong> {values.county}
        </Typography>
        <Typography variant="body1">
          <strong>PIN Code:</strong> {values.pincode}
        </Typography>

        <Typography variant="h5" gutterBottom sx={{ marginTop: "20px" }}>
          Payment Details
        </Typography>
        <Typography variant="body1">
          <strong>Card Number:</strong> {values.cardNumber}
        </Typography>
        <Typography variant="body1">
          <strong>Expiry Date:</strong> {values.expiryDate}
        </Typography>
        <Typography variant="body1">
          <strong>CVV:</strong> {values.cvv}
        </Typography>

        <Box mt={3}>
          <Button
            variant="contained"
            color="secondary"
            onClick={goToPreviousPage}
          >
            Back
          </Button>
          <Button type="submit" variant="contained" color="primary">
            Confirm
          </Button>
        </Box>
      </Box>
    </form>
  );
};

export default ConfirmationPage;
