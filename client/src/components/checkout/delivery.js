import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ClearIcon from "@mui/icons-material/Clear";
import { Link } from "react-router-dom";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";

const steps = ["Delivery Address", "Payment Details", "Confirmation "];

const Checkout = () => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      addressLine1: "",
      addressLine2: "",
      city: "",
      state: "",
      county: "",
      pincode: "",
      shippingMethod: "Free",
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required("Required"),
      lastName: Yup.string().required("Required"),
      addressLine1: Yup.string().required("Required"),
      city: Yup.string().required("Required"),
      state: Yup.string().required("Required"),
      county: Yup.string().required("Required"),
      pincode: Yup.string()
        .required("Required")
        .matches(/^[0-9]{6}$/, "Invalid PIN code (should be 6 digits)"),
    }),
    onSubmit: (values) => {
      // Handle form submission here
      console.log("Form submitted with values:", values);
    },
  });

  const handleClearForm = () => {
    // Reset all form fields to their initial values
    formik.resetForm();
  };

  return (
    <>
      <Box maxWidth="md" sx={{ margin: "0 auto" }}>
        <Stepper activeStep={0} alternativeLabel>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
      </Box>
      <form
        onSubmit={formik.handleSubmit}
        style={{ margin: "10px", padding: "30px" }}
      >
        <Box maxWidth="md">
          <Button
            type="button"
            variant="contained"
            color="secondary"
            style={{ marginTop: "20px", float: "right" }}
            onClick={handleClearForm}
            startIcon={<ClearIcon />}
          >
            Clear
          </Button>
          <Typography variant="h5" gutterBottom style={{ float: "left" }}>
            Shipping Address
          </Typography>
          <Grid container spacing={1}>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                id="firstName"
                name="firstName"
                label="First Name"
                value={formik.values.firstName}
                onChange={formik.handleChange}
                error={
                  formik.touched.firstName && Boolean(formik.errors.firstName)
                }
                helperText={formik.touched.firstName && formik.errors.firstName}
                margin="normal"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                id="lastName"
                name="lastName"
                label="Last Name"
                value={formik.values.lastName}
                onChange={formik.handleChange}
                error={
                  formik.touched.lastName && Boolean(formik.errors.lastName)
                }
                helperText={formik.touched.lastName && formik.errors.lastName}
                margin="normal"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                id="addressLine1"
                name="addressLine1"
                label="Address Line 1"
                value={formik.values.addressLine1}
                onChange={formik.handleChange}
                error={
                  formik.touched.addressLine1 &&
                  Boolean(formik.errors.addressLine1)
                }
                helperText={
                  formik.touched.addressLine1 && formik.errors.addressLine1
                }
                margin="normal"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                id="addressLine2"
                name="addressLine2"
                label="Address Line 2"
                value={formik.values.addressLine2}
                onChange={formik.handleChange}
                margin="normal"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                id="city"
                name="city"
                label="City"
                value={formik.values.city}
                onChange={formik.handleChange}
                error={formik.touched.city && Boolean(formik.errors.city)}
                helperText={formik.touched.city && formik.errors.city}
                margin="normal"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                id="state"
                name="state"
                label="State"
                value={formik.values.state}
                onChange={formik.handleChange}
                error={formik.touched.state && Boolean(formik.errors.state)}
                helperText={formik.touched.state && formik.errors.state}
                margin="normal"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                id="county"
                name="county"
                label="County"
                value={formik.values.county}
                onChange={formik.handleChange}
                error={formik.touched.county && Boolean(formik.errors.county)}
                helperText={formik.touched.county && formik.errors.county}
                margin="normal"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                id="pincode"
                name="pincode"
                label="PIN Code"
                value={formik.values.pincode}
                onChange={formik.handleChange}
                error={formik.touched.pincode && Boolean(formik.errors.pincode)}
                helperText={formik.touched.pincode && formik.errors.pincode}
                margin="normal"
              />
            </Grid>
          </Grid>

          <Typography variant="h5" gutterBottom sx={{ marginTop: "20px" }}>
            Shipping Method
          </Typography>

          <RadioGroup
            aria-label="shippingMethod"
            name="shippingMethod"
            value={formik.values.shippingMethod}
            onChange={formik.handleChange}
          >
            <FormControlLabel
              value="Free"
              control={<Radio />}
              label="Free (expect to receive in 5-7 days)"
            />
            <FormControlLabel
              value="Express"
              control={<Radio />}
              label="Express (expect to receive in 3-5 days)"
            />

            <FormControlLabel
              value="NextDay"
              control={<Radio />}
              label="Next Day"
            />
          </RadioGroup>

          <Button
            variant="contained"
            color="primary"
            style={{ marginTop: "20px", float: "right" }}
            endIcon={<ArrowForwardIcon />}
            component={Link} // Use the Link component
            to="/payments" // Specify the target route
          >
            Continue
          </Button>
        </Box>
      </form>
    </>
  );
};

export default Checkout;
