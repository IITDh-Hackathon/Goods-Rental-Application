import React from "react";
import { Link } from "react-router-dom";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import axios from "axios";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import ApiContext from "./../../context/api/ApiContext";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const steps = ["Delivery Address", "Confirmation "];
const ConfirmationPage = ({ deliveryInfo, setDeliveryInfo }) => {
  const navigate = useNavigate();
  const context = React.useContext(ApiContext);
  const { totalprice, getCartItems } = context;
  console.log(totalprice);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const backButtonStyle = {
    marginRight: "16px",
  };

  const handleConfirm = async () => {
    const url = process.env.REACT_APP_SERVER_URL + "/api/user/checkout";
    console.log("Form submitted with values:", deliveryInfo);

    return axios
      .post(
        url,
        {},
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      )
      .then(function (response) {
        console.log(response);
        getCartItems().then((res) => {
          toast.success("Order Placed Successfully");
        navigate("/");
        });
        return [response, false];
      })
      .catch(function (error) {
        console.log(error);
        toast.error("Order Placed Failed");
        return [error, true];
      });
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

          <Typography variant="h5" gutterBottom>
            Total Price
          </Typography>
          <Typography variant="body1" gutterBottom>
            ₹ {totalprice}
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
            <Button
              type="submit"
              variant="contained"
              color="primary"
              onClick={handleConfirm}
            >
              Confirm
            </Button>
          </Box>
        </Box>
      </form>
    </>
  );
};

export default ConfirmationPage;
