import React from "react";
import { Link } from "react-router-dom";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";

const steps = ["Delivery Address", "Confirmation "];
const ConfirmationPage = ({ deliveryInfo, setDeliveryInfo }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const backButtonStyle = {
    marginRight: "16px", // Adjust margin as needed
  };

  return (
    <>
      <Box maxWidth="md" sx={{ margin: "0 auto" }}>
        <Stepper activeStep={1} alternativeLabel>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
      </Box>

      <form onSubmit={handleSubmit}>
        <Box maxWidth="md" sx={{ minHeight: "100 vh", float: "left" }}>
          <Typography variant="h5" gutterBottom>
            Shipping Information
          </Typography>
          <Typography variant="body1" gutterBottom>
            {deliveryInfo.firstName} {deliveryInfo.lastName}
          </Typography>

          <Typography variant="body1" gutterBottom>
            {deliveryInfo.addressLine1} {deliveryInfo.addressLine2}
          </Typography>

          <Typography variant="body1" gutterBottom>
            {deliveryInfo.city}, {deliveryInfo.state} {deliveryInfo.pincode}
          </Typography>

          <Typography variant="body1" gutterBottom>
            {deliveryInfo.country}
          </Typography>
          <Typography variant="h5" gutterBottom>
            Delivery Method
          </Typography>
          <Typography variant="body1" gutterBottom>
            {deliveryInfo.shippingMethod}
          </Typography>

          <Box mt={3}>
            <Button
              variant="contained"
              color="secondary"
              component={Link} // Use the Link component
              to="/checkout" // Specify the target route
              onClick={() => {
                // Handle back button click
              }}
              style={backButtonStyle} // Apply styles to the Back button
            >
              Back
            </Button>
            <Button type="submit" variant="contained" color="primary">
              Confirm
            </Button>
          </Box>
        </Box>
      </form>
    </>
  );
};

export default ConfirmationPage;
