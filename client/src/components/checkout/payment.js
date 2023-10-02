import React from "react";
import { Formik, Field } from "formik";
import * as Yup from "yup";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ClearIcon from "@mui/icons-material/Clear";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";


const steps = ["Delivery Address", "Payment Details", "Confirmation "];

const PaymentSchema = Yup.object().shape({
  cardNumber: Yup.string()
    .required("Required")
    .matches(/^\d{4}-\d{4}-\d{4}-\d{4}$/, "Invalid card number")
    .test(
      "is-valid-card-number",
      "Invalid card number",
      (value) => value.split("-").join("").length === 16
    ),
  expiryDate: Yup.string()
    .required("Required")
    .matches(/^(0[1-9]|1[0-2])\/\d{4}$/, "Invalid expiry date (MM/YYYY format)")
    .test(
      "is-valid-expiry-date",
      "Invalid expiry date",
      (value) => value.split("/").join("").length === 6
    ),
  cvv: Yup.string()
    .required("Required")
    .matches(/^\d{3}$/, "Invalid CVV (should be 3 digits)"),
});

const Payment = () => {
  const initialValues = {
    cardNumber: "",
    expiryDate: "",
    cvv: "",
  };

  const handleSubmit = (values) => {
    // Handle form submission here
    console.log("Form submitted with values:", values);
  };

  const handleClearForm = (resetForm) => {
    resetForm();
  };

  const cardNumberMask = [
    /\d/,
    /\d/,
    /\d/,
    /\d/,
    "-",
    /\d/,
    /\d/,
    /\d/,
    /\d/,
    "-",
    /\d/,
    /\d/,
    /\d/,
    /\d/,
    "-",
    /\d/,
    /\d/,
    /\d/,
    /\d/,
  ];

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
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        minHeight="calc(100vh - 200px)"
      >
        <Formik
          initialValues={initialValues}
          validationSchema={PaymentSchema}
          onSubmit={handleSubmit}
        >
          {({
            values,
            handleChange,
            handleSubmit,
            handleReset,
            errors,
            touched,
          }) => (
            <form onSubmit={handleSubmit}>
              <Box maxWidth="md">
                <Button
                  type="button"
                  variant="contained"
                  color="secondary"
                  onClick={() => handleClearForm(handleReset)}
                  startIcon={<ClearIcon />}
                  sx={{ float: "right", marginBottom: 2 }}
                >
                  Clear
                </Button>
                <Typography variant="h5" gutterBottom>
                  Credit Card Payment
                </Typography>
                <Grid container spacing={1}>
                  <Grid item xs={12}>
                    <Field
                      name="cardNumber"
                      render={({ field }) => (
                        <TextField
                          fullWidth
                          id="cardNumber"
                          name="cardNumber"
                          label="Card Number"
                          value={field.value}
                          onChange={(e) => {
                            const formattedValue = e.target.value
                              .replace(/\D/g, "")
                              .slice(0, 16)
                              .replace(/(\d{4})(?=\d)/g, "$1-");
                            field.onChange(e.target.name)(formattedValue);
                          }}
                          error={
                            touched.cardNumber && Boolean(errors.cardNumber)
                          }
                          helperText={touched.cardNumber && errors.cardNumber}
                          margin="normal"
                        />
                      )}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      fullWidth
                      id="expiryDate"
                      name="expiryDate"
                      label="Expiry Date (MM/YYYY)"
                      value={values.expiryDate}
                      onChange={(e) => {
                        const formattedValue = e.target.value
                          .replace(/\D/g, "")
                          .slice(0, 6)
                          .replace(/(\d{2})(\d{0,4})/, "$1/$2");
                        handleChange(e.target.name)(formattedValue);
                      }}
                      error={touched.expiryDate && Boolean(errors.expiryDate)}
                      helperText={touched.expiryDate && errors.expiryDate}
                      margin="normal"
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      fullWidth
                      id="cvv"
                      name="cvv"
                      label="CVV"
                      value={values.cvv}
                      onChange={(e) => {
                        const formattedValue = e.target.value
                          .replace(/\D/g, "")
                          .slice(0, 3);
                        handleChange(e.target.name)(formattedValue);
                      }}
                      error={touched.cvv && Boolean(errors.cvv)}
                      helperText={touched.cvv && errors.cvv}
                      margin="normal"
                    />
                  </Grid>
                </Grid>

                <Box
                  mt={3}
                  sx={{ display: "flex", justifyContent: "space-between" }}
                >
                  <Button
                    type="button"
                    variant="contained"
                    color="secondary"
                    sx={{ flex: 1, marginRight: 1 }}
                    startIcon={<ArrowBackIcon />}
                  >
                    Previous
                  </Button>
                  <Button
                    type="submit"
                    variant="contained"
                    sx={{ flex: 1 }}
                    color="primary"
                    endIcon={<ArrowRightAltIcon />}
                  >
                    Next
                  </Button>
                </Box>
              </Box>
            </form>
          )}
        </Formik>
      </Box>
    </>
  );
};

export default Payment;
