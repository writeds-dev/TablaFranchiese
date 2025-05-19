"use client";

import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useFormik } from 'formik';
import * as Yup from "yup";
import { PhoneNumberUtil } from "google-libphonenumber";
import { Box, TextField, FormControl, InputLabel, Select, MenuItem, Button } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import SnackbarAlert from "./alert";


const phoneUtil = PhoneNumberUtil.getInstance();


export default function Form(){

    const router = useRouter();
    
    
      const [showSnackbar, setShowSnackbar] = useState(false);
      const [isSubmitForm, setSubmitForm] = useState(false);
    
      const formik = useFormik({
        initialValues: {
          name: "",
          email: "",
          phone: "",
          location: "",
          restaurantManagementExperience: "",
          fundsAvailable: "",
        },
        validationSchema: Yup.object({
          name: Yup.string().required("Name is required"),
          email: Yup.string().email("Invalid email").required("Email is required"),
          phone: Yup.string()
            .required("Phone number is required")
            .test("is-valid-phone", "Invalid phone number", (value) => {
              if (!value) return false;
              try {
                const parsedNumber = phoneUtil.parseAndKeepRawInput(value, "US");
                return phoneUtil.isValidNumber(parsedNumber);
              } catch (error) {
                console.log(error, "This is error ...");
                return false;
              }
            }),
          location: Yup.string().required("Location is required"),
          restaurantManagementExperience: Yup.string().required("Restaurant field Experience is required"),
          fundsAvailable: Yup.string().required("Funds field is required")
        }),
        onSubmit: async (values, form) => {
          try {
    
            console.log("Form Data:", values);
            setSubmitForm(true);
    
            const data = {
              name: {
                firstName: values.name
              },
              contact: {
                email: values.email,
                phone: {
                  dialCode: 0,
                  iso2: "string",
                  country: "string",
                  number: values.phone
                },
              },
              subFields: {
                address: values.location,
                restaurantManagementExperience: values.restaurantManagementExperience,
                fundsAvailable: values.fundsAvailable,
              }
            }
    
            await axios.post(
              "https://api.tablacuisine.com/api/website/query", { ...data, type: 'FRANCHISE-SIGNUP' }
            );
    
            const goatResponse = await axios.post(
              "https://api.goatcampaign.com/v1/access-token",
              {
                tenantId: "63cd8baecbab01ef459c147c",
                secretKey: "89e25562-49ff-43e6-960e-e41fab71b8ba"
              }
            );
    
            const token = goatResponse.data?.['data']?.['tenantToken'];
    
            const response = await axios.post(
              "https://api.goatcampaign.com/v1/mail/send",
              {
                from: "info@tablacuisine.com",
                to: "info@tablacuisine.com",
                subject: "Tabla Cuisine - franchise Form",
                html: `
                </br></br>
                <p>Name: ${values?.name}</p></br>
                <p>Email ID: ${values?.email}</p></br>
                <p>Phone Number: ${values?.phone}</p></br>
                <p>Event Location: ${values?.location}</p></br>
                <p>Restaurant Magement Experience: ${values?.restaurantManagementExperience}</p></br>
                <p>Funds Available: ${values?.fundsAvailable}</p></br>
              `,
              },
              {
                headers: {
                  Authorization:
                    `Bearer ${token}`,
                  "Content-Type": "application/json",
                }
              }
            );
    
            await axios.post(
              "https://api.goatcampaign.com/v1/mail/send",
              {
                from: "info@tablacuisine.com",
                to: "sales@tablafranchise.com",
                subject: "Tabla Cuisine - franchise Form",
                html: `
                </br></br>
                <p>Name: ${values?.name}</p></br>
                <p>Email ID: ${values?.email}</p></br>
                <p>Phone Number: ${values?.phone}</p></br>
                <p>Event Location: ${values?.location}</p></br>
                <p>Restaurant Magement Experience: ${values?.restaurantManagementExperience}</p></br>
                <p>Funds Available: ${values?.fundsAvailable}</p></br>
              `,
              },
              {
                headers: {
                  Authorization:
                    `Bearer ${token}`,
                  "Content-Type": "application/json",
                }
              }
            );
    
    
            if (response) {
              setShowSnackbar(true);
              form.resetForm();
            }
    
            setSubmitForm(false);
    
    
            router.push("/thankyou");
          } catch (error) {
            console.log(error, "This is error");
            setSubmitForm(false);
          }
        },
      });

      return(
        <div className="lg:max-h-[720px] form-area min text-white py-10 text-center text-5xl lg:mt-35 mb-15 px-5">

        <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Box
          component="form"
          onSubmit={formik.handleSubmit}
          sx={{ display: "flex", flexDirection: "column", gap: 2, maxWidth: 450, mx: "auto" }}
        >
          <h2 className="text-2xl font-bold text-red-900 text-center uppercase tracking-[.08em]">
            Take the first step
          </h2>
          <div className="w-16 h-1 bg-red-900 mx-auto mt-0 mb-3"></div>

          {/* First row - Two column layout */}
          <div className="grid grid-cols-2 gap-5">
            <TextField
              label="Name"
              variant="outlined"
              fullWidth
              {...formik.getFieldProps("name")}
              error={formik.touched.name && Boolean(formik.errors.name)}
              helperText={formik.touched.name && formik.errors.name}
            />
            <TextField
              label="Email"
              variant="outlined"
              fullWidth
              {...formik.getFieldProps("email")}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
            />
            <TextField
              label="Phone Number"
              variant="outlined"
              fullWidth
              {...formik.getFieldProps("phone")}
              error={formik.touched.phone && Boolean(formik.errors.phone)}
              helperText={formik.touched.phone && formik.errors.phone}
            />
            <TextField
              label="Location"
              variant="outlined"
              fullWidth
              {...formik.getFieldProps("location")}
              error={formik.touched.location && Boolean(formik.errors.location)}
              helperText={formik.touched.location && formik.errors.location}
            />
          </div>

          {/* Second row - Full width selects */}
          <div className="grid grid-cols-1 gap-5">

            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label" >Do You have Restaurant Management Experience?</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Do You have Restaurant Management Experience?"

                {...formik.getFieldProps("restaurantManagementExperience")}
                onChange={formik.handleChange}
                error={formik.touched.restaurantManagementExperience && Boolean(formik.errors.restaurantManagementExperience)}

              >
                <MenuItem value="Yes">Yes</MenuItem>
                <MenuItem value="No">No</MenuItem>
              </Select>
            </FormControl>



            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Funds available for investment</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Funds available for investment"

                {...formik.getFieldProps("fundsAvailable")}
                onChange={formik.handleChange}
                error={formik.touched.fundsAvailable && Boolean(formik.errors.fundsAvailable)}

              >
                <MenuItem value="$25,000">Liquidity: $25,000</MenuItem>
                <MenuItem value="$50,000">Liquidity: $50,000</MenuItem>
                <MenuItem value="$100,000+">Liquidity: $100,000+</MenuItem>
              </Select>
            </FormControl>



          </div>

          <Button disabled={isSubmitForm} type="submit" className="button-pink mt-2" variant="contained">
            Submit
          </Button>
        </Box>
      </LocalizationProvider>
      {showSnackbar && <SnackbarAlert message="Query Sent Successfully!" />}
      </div>
      )

}